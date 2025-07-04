import React, { useState } from 'react';

const QnA = () => {
  const [pptText, setPptText] = useState('');
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    setQuestions([
      'What is the main concept from slide 1?',
      'Explain the key idea in slide 2.',
    ]); // Placeholder logic
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Q&A Based on PPTs</h2>
      <textarea placeholder="Paste text extracted from PPT" value={pptText} onChange={(e) => setPptText(e.target.value)} className="w-full border p-2 rounded mb-4" />
      <button onClick={generateQuestions} className="bg-purple-600 text-white px-4 py-2 rounded">Generate Questions</button>
      <ul className="list-disc list-inside mt-4 space-y-2">
        {questions.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QnA;
