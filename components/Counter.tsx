import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(69);

  return (
    <div className="flex space-x-4 items-center p-6 rounded-md bg-slate-200 my-8">
      <button
        className="bg-sky-500 text-white rounded-md px-4 py-1"
        onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
      >
        Decrease
      </button>
      <p className="!mb-0 text-center block min-w-[100px] text-slate-500">
        Count:{' '}
        <span className="font-bold text-black inline-block min-w-[30px]">
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
