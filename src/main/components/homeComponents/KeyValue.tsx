import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import React from 'react';

interface KeyValueProps {
  data: any;
}

const KeyValue = ({ data }: KeyValueProps) => {
  console.log("Key Value Data => ", data);

  const entries = data instanceof Map
    ? Array.from(data.entries())
    : Object.entries(data);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Key-Value Pairs</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b-2">Key</th>
            <th className="text-left p-2 border-b-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value]: any, index: number) => (
            <tr key={index} className="border-b">
              <td className="flex items-center p-2 text-gray-700">
              <i className="pi pi-check"></i>
                <span className="font-semibold">{key}</span>
              </td>
              <td className="p-2 text-gray-900">
                {String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyValue;
