import React from 'react';

export default function ReloadButton({ fetchImage }) {
  return (
    <button
      onClick={fetchImage}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-all"
    >
      Load New Image
    </button>
  );
}
