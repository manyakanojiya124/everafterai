"""
Wraps Coqui XTTS v2 for zero-shot voice cloning. Free, runs fully local —
no API key, no per-call cost. Auto-detects CUDA and falls back to CPU
transparently, so the exact same code runs on a GPU laptop and a
GPU-less machine; only speed differs.

Model loads lazily and stays cached in-process (same pattern as
embedding_service.py) so it's only paid for once per server run, not
once per request.

NOTE ON WEIGHTS: XTTS v2 downloads from Hugging Face on first use
(~2GB) and is released under the Coqui Public Model License (CPML) —
free for personal/non-commercial use, NOT free for a paid product. If
this ever becomes a commercial app, swap the model here for something
CPML-free (e.g. Kokoro) — everything else in this file stays the same,
since callers only depend on synthesize_speech()'s signature.
"""
import time
from functools import lru_cache
from pathlib import Path

from app.core.config import settings


class VoiceSynthesisError(Exception):
    pass


@lru_cache(maxsize=1)
def _get_device() -> str:
    if settings.XTTS_DEVICE != "auto":
        return settings.XTTS_DEVICE
    try:
        import torch
        return "cuda" if torch.cuda.is_available() else "cpu"
    except ImportError:
        return "cpu"


@lru_cache(maxsize=1)
def _get_model():
    from TTS.api import TTS
    device = _get_device()
    model = TTS(settings.XTTS_MODEL_NAME)
    model.to(device)
    return model


def is_available() -> bool:
    """Cheap check the API layer can use to give a clear error instead of
    a stack trace if voice generation isn't set up / enabled."""
    if not settings.VOICE_ENABLED:
        return False
    try:
        import TTS  # noqa: F401
        return True
    except ImportError:
        return False


def synthesize_speech(*, text: str, reference_audio_path: str, output_path: str, language: str = "en") -> dict:
    """
    Generates speech in the cloned voice and writes it to output_path.
    Returns metadata (device used, generation time) the caller stores
    alongside the MessageVoice row.
    """
    if not settings.VOICE_ENABLED:
        raise VoiceSynthesisError("Voice generation is disabled (VOICE_ENABLED=false).")
    if not Path(reference_audio_path).exists():
        raise VoiceSynthesisError(f"Reference audio not found: {reference_audio_path}")

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)

    device = _get_device()
    start = time.perf_counter()
    try:
        model = _get_model()
        model.tts_to_file(
            text=text,
            speaker_wav=reference_audio_path,
            language=language,
            file_path=output_path,
        )
    except Exception as exc:  # model/runtime errors -> one clear exception type for callers
        raise VoiceSynthesisError(f"Voice generation failed: {exc}") from exc

    elapsed_ms = int((time.perf_counter() - start) * 1000)
    return {"device": device, "generation_ms": elapsed_ms, "file_path": output_path}
