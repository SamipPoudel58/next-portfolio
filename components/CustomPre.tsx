import React, { ReactNode, useEffect, useRef, useState } from 'react';

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
        className="text-sky-200 w-[50px] absolute top-2 right-0 cursor-pointer hidden group-hover:flex opacity-50 hover:opacity-100 flex-col items-center"
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
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        )}
      </div>
      {children}
    </pre>
  );
};

export default CustomPre;
