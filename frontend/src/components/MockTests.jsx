import React, { useState } from 'react';

const MockTests = () => {
  const [chapters, setChapters] = useState('');
  const [pattern, setPattern] = useState('');
  const [mockPaper, setMockPaper] = useState('');

  const generateMockTest = () => {
    setMockPaper(`Mock test based on chapters: ${chapters} and pattern: ${pattern}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Mock Test Generator</h2>
      <textarea placeholder="Enter chapters with weightage" value={chapters} onChange={(e) => setChapters(e.target.value)} className="w-full border p-2 rounded mb-4" />
      <textarea placeholder="Enter paper pattern" value={pattern} onChange={(e) => setPattern(e.target.value)} className="w-full border p-2 rounded mb-4" />
      <button onClick={generateMockTest} className="bg-purple-600 text-white px-4 py-2 rounded">Generate Mock Paper</button>
      {mockPaper && <div className="mt-6 p-4 bg-gray-100 rounded shadow"><h3 className="font-bold mb-2">Mock Paper</h3><p>{mockPaper}</p></div>}
    </div>
  );
};

export default MockTests;