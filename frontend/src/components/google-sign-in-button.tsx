"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { googleLogin } from "@/lib/api";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: {
              credential: string;
            }) => void;
          }) => void;

          renderButton: (
            element: HTMLElement,
            options: {
              type?: "standard" | "icon";
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              text?: "signin_with" | "signup_with" | "continue_with" | "signin";
              shape?: "rectangular" | "pill" | "circle" | "square";
              width?: number;
            },
          ) => void;
        };
      };
    };
  }
}

type GoogleSignInButtonProps = {
  mode?: "login" | "register";
};

export function GoogleSignInButton({
  mode = "login",
}: GoogleSignInButtonProps) {
  const router = useRouter();
  const buttonRef = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");

  const clientId =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!isReady) return;
    if (!clientId) return;
    if (!window.google) return;
    if (!buttonRef.current) return;

    buttonRef.current.innerHTML = "";

    window.google.accounts.id.initialize({
      client_id: clientId,

      callback: async (response) => {
        setError("");

        try {
          await googleLogin(response.credential);
          router.replace("/dashboard");
        } catch (reason) {
          setError(
            reason instanceof Error
              ? reason.message
              : "Unable to continue with Google.",
          );
        }
      },
    });

    window.google.accounts.id.renderButton(
      buttonRef.current,
      {
        type: "standard",
        theme: "outline",
        size: "large",
        text:
          mode === "register"
            ? "signup_with"
            : "signin_with",
        shape: "rectangular",
        width: 350,
      },
    );
  }, [clientId, isReady, mode, router]);

  if (!clientId) {
    return (
      <p className="text-sm text-red-700">
        Google sign-in is not configured.
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => setIsReady(true)}
      />

      <div
        ref={buttonRef}
        className="flex justify-center"
      />

      {error && (
        <p
          role="alert"
          className="text-sm text-red-700"
        >
          {error}
        </p>
      )}
    </>
  );
}