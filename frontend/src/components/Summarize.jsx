import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Summarize() {
  const [file, setFile] = useState(null);
  const [history, setHistory] = useState([]);
  const [summary, setSummary] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSummarize = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/summarize/', formData);
      const newSummary = response.data.summary;
      setSummary(newSummary);
      setHistory([{ name: file.name, summary: newSummary }, ...history]);
      setFile(null);
    } catch (error) {
      alert('Error summarizing file.');
    } finally {
      setLoading(false);
    }
  };

  const filteredHistory = history.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-purple-50 text-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title="Summarize" />

        <div className="flex flex-1 overflow-hidden">
          {/* Summary Section */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-xl mx-auto space-y-6">
              <input
                type="file"
                accept=".ppt,.pptx,.pdf"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-700
                  file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0
                  file:text-sm file:font-semibold
                  file:bg-purple-700 file:text-white
                  hover:file:bg-purple-800"
              />
              <button
                onClick={handleSummarize}
                disabled={loading || !file}
                className={`px-6 py-2 rounded text-white font-semibold transition ${
                  loading || !file
                    ? 'bg-purple-300 cursor-not-allowed'
                    : 'bg-purple-700 hover:bg-purple-800'
                }`}
              >
                {loading ? 'Summarizing...' : 'Summarize'}
              </button>

              {summary && (
                <div className="p-4 bg-purple-100 rounded border border-purple-300 shadow">
                  <h2 className="text-lg font-semibold mb-2">Summary:</h2>
                  <p className="whitespace-pre-wrap">{summary}</p>
                </div>
              )}
            </div>
          </div>

          {/* History Sidebar */}
          <div className="w-80 bg-white border-l border-purple-200 p-4 overflow-y-auto shadow-inner">
            <h2 className="text-lg font-bold mb-3 text-purple-800">History</h2>
            <input
              type="text"
              placeholder="Search files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border border-purple-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <ul className="space-y-3">
              {filteredHistory.length > 0 ? (
                filteredHistory.map((item, index) => (
                  <li key={index} className="p-3 bg-purple-50 rounded border border-purple-200 shadow-sm">
                    <p className="font-medium text-purple-900">{item.name}</p>
                    <p className="text-sm text-gray-700">{item.summary.slice(0, 60)}...</p>
                  </li>
                ))
              ) : (
                <p className="text-sm text-gray-500">No matching files found.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
