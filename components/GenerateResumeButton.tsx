"use client";

import { useState, useRef } from "react";

type State = "idle" | "loading" | "error";

export default function GenerateResumeButton() {
  const [state, setState] = useState<State>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const anchorRef = useRef<HTMLAnchorElement>(null);

  async function handleClick() {
    setState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/generate-resume", { method: "POST" });

      if (!response.ok) {
        throw new Error(`Failed to generate resume (${response.status})`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const anchor = anchorRef.current!;
      anchor.href = url;
      anchor.click();

      // Clean up after click
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setState("idle");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <div className="mt-1 flex flex-col gap-3">
      {/* Hidden anchor used to trigger the download */}
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a ref={anchorRef} download="Theresa-Garritano-Resume.pdf" className="sr-only" aria-hidden="true" />

      <button
        onClick={handleClick}
        disabled={state === "loading"}
        aria-busy={state === "loading"}
        className="group inline-flex items-center gap-2 py-3 px-4 -mx-4 w-fit text-xs uppercase tracking-[0.2em] text-[#f0ede8] hover:text-[#00f2fe] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <LoadingDots />
        ) : (
          <>
            Generate Resume with AI
            <span aria-hidden="true" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300 text-[#00f2fe] opacity-0 group-hover:opacity-100">→</span>
          </>
        )}
      </button>

      {state === "error" && (
        <p role="alert" className="text-xs" style={{ color: "#ff007f" }}>
          {errorMessage} —{" "}
          <button
            onClick={handleClick}
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Try again
          </button>
        </p>
      )}
    </div>
  );
}

function LoadingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      Generating
      <span className="inline-flex gap-[3px]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-[3px] h-[3px] rounded-full bg-current animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </span>
    </span>
  );
}
