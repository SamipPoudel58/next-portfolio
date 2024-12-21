import React, { useEffect, useRef, useState } from 'react';

const CustomPre = ({ children }: { children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const copy = setTimeout(() => setCopied(false), 1300);

    return () => {
      clearTimeout(copy);
    };
  }, [copied]);

  return (
    <pre
      ref={preRef}
      className={`${
        (children as JSX.Element)?.props?.className
      } relative group my-8`}
    >
      <div
        onClick={() => {
          !copied && setCopied(true);
          navigator.clipboard.writeText(preRef.current?.innerText as string);
        }}
        className="text-slate-50 w-[50px] absolute top-2 right-0 cursor-pointer hidden group-hover:flex opacity-70 hover:opacity-100 flex-col items-center"
      >
        {copied ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="!text-xs">Copied!</p>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
        )}
      </div>
      {children}
    </pre>
  );
};

export default CustomPre;
