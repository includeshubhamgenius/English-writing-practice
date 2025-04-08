import React from 'react';

export default function TextArea({ text, setText }) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const isComplete = wordCount >= 50;

  return (
    <div className="w-full max-w-2xl mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write at least 50 words here..."
        className={`w-full h-60 p-4 rounded-lg text-base focus:outline-none border-2 bg-slate-800 resize-none ${isComplete ? 'text-green-400 border-green-500' : 'text-white border-slate-600'}`}
      />
      <p className="text-sm text-gray-400 mt-2">Words: {wordCount}</p>
    </div>
  );
}