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
      <p className="font-bold text-center text-lg mb-3">{question}</p>

      <div className="space-y-3 max-w-[500px] mx-auto">
        {answers.map((answer: string, idx) => (
          <button
            onClick={() => setSelectedAnswer(idx)}
            className={`border-[1px] py-2 border-[color:var(--c-table-border)] rounded-full w-full ${
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
