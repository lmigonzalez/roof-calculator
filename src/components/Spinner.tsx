import React from 'react';

const Spinner = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-full">
        <img
          className="h-20 w-20"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt=""
        />
		<p className='mt-4'>calculating...</p>
      </div>
    </div>
  );
};

export default Spinner;
