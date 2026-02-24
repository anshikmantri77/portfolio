"use client";

import { useEffect, useState } from "react";

export interface TerminalLine {
  text: string;
  type?: "command" | "success" | "warning" | "info" | "default";
}

interface TerminalBlockProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
  startDelay?: number;
  typingSpeed?: number;
}

const typeColors: Record<string, string> = {
  command: "text-amber-400",
  success: "text-green-400",
  warning: "text-amber-300",
  info: "text-slate-400",
  default: "text-green-400",
};

export function TerminalBlock({
  title = "● ● ● bhavika@aws-security:~",
  lines,
  className,
  startDelay = 800,
  typingSpeed = 40,
}: TerminalBlockProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      if (currentLineIndex >= lines.length) {
        setShowCursor(false);
        return;
      }

      const line = lines[currentLineIndex];
      const fullText = line.text;

      if (currentCharIndex < fullText.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setVisibleLines((prev) => [
          ...prev,
          { ...line, text: fullText },
        ]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, currentCharIndex === 0 && currentLineIndex > 0 ? 200 : typingSpeed);

    return () => clearTimeout(timer);
  }, [ready, currentLineIndex, currentCharIndex, lines, typingSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-700 bg-slate-900 font-mono text-sm shadow-xl ${className || ""}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="h-2 w-2 rounded-full bg-amber-500" />
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="ml-2 text-slate-400">{title}</span>
      </div>
      <div className="p-6 font-mono text-green-400">
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={`${typeColors[line.type || "default"]} whitespace-pre-wrap`}
          >
            {line.text}
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div
            className={`${typeColors[lines[currentLineIndex]?.type || "default"]} inline`}
          >
            {lines[currentLineIndex]?.text.slice(0, currentCharIndex)}
            <span
              className={`ml-0.5 inline-block h-4 w-2 bg-amber-400 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{ animation: "blink 1s step-end infinite" }}
            >
              |
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
