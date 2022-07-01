import { useState } from 'react';

const Questionnaire = ({
  question,
  answers,
  correctAnswer,
}: {
  question: string;
  answers: string[];
  correctAnswer: number;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  return (
    <div className="my-8">
      <p className="font-bold text-center">{question}</p>

      <div className="space-y-4 max-w-[500px] mx-auto">
        {answers.map((answer: string, idx) => (
          <button
            onClick={() => setSelectedAnswer(idx)}
            className={`border-[1px] py-2 border-slate-300 rounded-full w-full ${
              idx === selectedAnswer
                ? idx === correctAnswer
                  ? 'bg-emerald-500 text-white'
                  : 'bg-rose-600 text-white'
                : ''
            } `}
            key={idx}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
