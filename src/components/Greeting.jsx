import React from 'react';

export default function Greeting() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-2 text-center">Write About This Picture in English</h1>
      <p className="text-sm text-gray-400 text-center max-w-xl mb-6">
      A random picture loads each time you refresh or click the button below. Use the textbox to describe what you see — or what it makes you feel. Once you've written 50 words, the text turns green. You can keep going or load a new image to start again!
      </p>
   </>
  );
}