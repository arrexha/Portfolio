import { useEffect, useState } from "react";

const FULL_TEXT = "<Welcome/>";

// Sits on top of the site and fades out after about a second.
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let index = 0;
    let holdTimer;
    let exitTimer;

    const interval = setInterval(() => {
      index++;
      setText(FULL_TEXT.slice(0, index));

      if (index >= FULL_TEXT.length) {
        clearInterval(interval);
        holdTimer = setTimeout(() => setLeaving(true), 250);
        exitTimer = setTimeout(onComplete, 550);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity duration-300 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
