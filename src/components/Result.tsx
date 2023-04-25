import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

interface ResultProps{
	value: number,
	closeResult: () => void
}

const Result: React.FC <ResultProps> = ({value, closeResult}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="relative flex justify-center items-center bg-white rounded-2xl w-[700px] max-w-full min-h-[500px]">
        <button onClick={() => closeResult()} className="absolute top-2 right-4 bg-red-500 rounded-full p-2 transition-all hover:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="text-center">
            <p className="text-4xl mb-6">The estimated cost is:</p>
            <p className="text-[#AA77FF] text-5xl font-bold">${value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
