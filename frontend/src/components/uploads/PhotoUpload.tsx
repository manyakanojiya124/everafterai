"use client";

import { useRef, useState } from "react";

export default function PhotoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(selectedFiles: FileList | null) {
    if (!selectedFiles) return;

    const images = Array.from(selectedFiles).filter((file) =>
      file.type.startsWith("image/")
    );

    setFiles((prev) => [...prev, ...images]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            📸 Photos
          </h2>

          <p className="mt-1 text-sm text-stone-500">
            Upload meaningful memories, family photos and important moments.
          </p>

        </div>

        <button
          onClick={() => inputRef.current?.click()}
          className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-stone-800 transition"
        >
          + Select Images
        </button>

      </div>

      <input
        ref={inputRef}
        hidden
        multiple
        accept="image/*"
        type="file"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {files.length === 0 ? (

        <div
          className="mt-6 flex h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50"
        >

          <div className="text-5xl">
            🖼️
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            No Photos Selected
          </h3>

          <p className="mt-2 text-center text-sm text-stone-500">
            Click the button above to choose photos.
            <br />
            Drag & Drop support will be added next.
          </p>

        </div>

      ) : (

        <>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {files.map((file, index) => (

              <div
                key={`${file.name}-${index}`}
                className="group relative overflow-hidden rounded-xl border"
              >

                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="aspect-square w-full object-cover"
                />

                <button
                  onClick={() => removeFile(index)}
                  className="absolute right-2 top-2 hidden rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white group-hover:block"
                >
                  ✕
                </button>

                <div className="border-t bg-white p-2">

                  <p className="truncate text-xs font-medium">
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-stone-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-8 flex items-center justify-between rounded-xl bg-stone-50 p-4">

            <div>

              <h3 className="font-semibold">
                {files.length} image{files.length > 1 ? "s" : ""} selected
              </h3>

              <p className="text-sm text-stone-500">
                Ready to upload
              </p>

            </div>

            <button
              className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-stone-800 transition"
            >
              Upload Photos
            </button>

          </div>

        </>

      )}

    </div>
  );
}