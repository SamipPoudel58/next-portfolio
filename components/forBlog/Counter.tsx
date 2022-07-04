import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(69);

  return (
    <div className="flex justify-center space-x-4 items-center p-6 rounded-md bg-[rgba(59,130,246,0.1)] my-8">
      <button
        className="bg-sky-500 text-white rounded-md px-4 py-1"
        onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
      >
        Decrease
      </button>
      <p className="text-center block min-w-[100px] text-slate-500">
        Count:{' '}
        <span className="font-bold text-[color:var(--c-black-dark)] inline-block min-w-[30px]">
          {' '}
          {count}
        </span>
      </p>

      <button
        className="bg-sky-500 text-white rounded-md px-4 py-1"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
