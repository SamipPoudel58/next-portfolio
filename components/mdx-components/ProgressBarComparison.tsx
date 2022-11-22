import { useState } from 'react';

const ProgressBarComparison = () => {
  const [progress, setProgress] = useState(40);

  const MAX_VALUE = 100;

  const getBaseLog = (base: number, arg: number) => {
    return Math.log(arg) / Math.log(base);
  };

  return (
    <div className="py-8 md:py-12 text-[18px]">
      <div className="flex items-center gap-x-4">
        <label
          className="uppercase text-med-gray w-[30%] md:w-[15%] max-w-[110px]"
          htmlFor="progress"
        >
          Value ({progress}):
        </label>
        <input
          onChange={(e) => setProgress(Number(e.target.value))}
          value={progress}
          type="range"
          name="progress"
          id="progress"
          min={0}
          max={100}
          className="w-[60%] md:w-1/2 hover:cursor-pointer"
        />
      </div>

      <div className="my-4 flex gap-x-4 items-center">
        <span className="uppercase text-med-gray w-[30%] md:w-[15%] max-w-[110px]">
          Linear:{' '}
        </span>
        <div className="w-[60%] md:w-1/2">
          <div
            style={{ width: progress + '%' }}
            className="linear-progressbar h-5 bg-[#FB923C]"
          ></div>
        </div>
      </div>

      <div className="my-4 flex gap-x-4 items-center">
        <span className="uppercase text-med-gray w-[30%] md:w-[15%] max-w-[110px]">
          Logarithmic:{' '}
        </span>
        <div className="w-[60%] md:w-1/2">
          <div
            style={{
              width: Math.round(getBaseLog(MAX_VALUE, progress) * 100) + '%',
            }}
            className="logarithmic-progressbar h-5 bg-[#DB2777]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComparison;
