import { useEffect, useRef, useState } from "react";

type ClipProps = {
  borderRadius: {
    'top-left': number;
    'top-right': number;
    'bottom-left': number;
    'bottom-right': number;
  };
};

function ClipBoard({ borderRadius }: ClipProps) {
  const text = useRef<HTMLDivElement | null>(null); // Properly initialize the ref
  const [clipped, setClipped] = useState(false);

  function handleCopy() {
    if (text.current) {
      navigator.clipboard.writeText(text.current.textContent || ""); // Handle null case
      setClipped(true);
    }
  }

  useEffect(() => {
    if (clipped) {
      const timeout = setTimeout(() => {
        setClipped(false);
      }, 2000);

      // Cleanup function to clear the timeout when the component unmounts or `clipped` changes
      return () => clearTimeout(timeout);
    }
  }, [clipped]);

  return (
    <div className="bg-stone-100 w-full h-full p-2 flex flex-col ">
      <div ref={text}>
        <p>border-radius-top-left: {borderRadius['top-left']}px</p>
        <p>border-radius-top-right: {borderRadius['top-right']}px</p>
        <p>border-radius-bottom-left: {borderRadius['bottom-left']}px</p>
        <p>border-radius-bottom-right: {borderRadius['bottom-right']}px</p>
      </div>
      <button
        onClick={handleCopy}
        className={`${clipped ? 'bg-stone-500' : 'bg-stone-950'}
         p-2 text-sm text-stone-100 self-end relative bottom-0`}
      >
        {clipped ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default ClipBoard;
