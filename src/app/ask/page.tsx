'use client';

import { useChat } from 'ai/react';
import { useState, useEffect } from 'react';
import NavBar from '../component/navbar';
import MoleculeViewer from '../component/MoleculeViewer';

export default function Home() {
  const [waitingForAI, setWaitingForAI] = useState<boolean>(false);
  const [drugName, setDrugName] = useState<string>('');
  const [moleculeData, setMoleculeData] = useState<string | null>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    if (drugName) {
      // Fetch molecule data (.mol or .pdb) based on the drug name
      fetchMoleculeData(drugName);
    }
  }, [drugName]);

  const fetchMoleculeData = async (name: string) => {
    // Implement API call to fetch molecule data
    // For now, we'll use a placeholder
    setMoleculeData(`Molecule data for ${name}`);
  };

  // ... existing code ...

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            placeholder="Enter drug name"
            className="w-full p-2 border rounded"
          />
        </div>

        {moleculeData && (
          <div className="mb-8">
            <MoleculeViewer data={moleculeData} />
          </div>
        )}

        <div className="flex flex-col h-[50vh]">
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map(m => (
              // ... existing message rendering code ...
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about the molecule..."
              className="flex-grow p-2 border rounded-l"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}