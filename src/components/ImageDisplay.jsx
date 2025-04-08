import React from 'react';

export default function ImageDisplay({ imageUrl }) {
  return (
    <div className="w-full max-w-2xl mb-6">
      {imageUrl && <img src={imageUrl} alt="Writing prompt" className="rounded-2xl shadow-md w-full" />}
    </div>
  );
}