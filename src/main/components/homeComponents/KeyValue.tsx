import { Card } from 'primereact/card';
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
    <Card className="p-2 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Key-Value Pairs</h2>
      <div className="grid grid-cols-2 gap-4">
        {entries.map(([key, value]: any, index: number) => (
          <React.Fragment key={index}>
            <div className="font-semibold text-gray-700 bg-gray-100 p-2 rounded-lg">
              {key}
            </div>
            <div className="text-gray-900 bg-gray-50 p-2 rounded-lg">
              {String(value)}
            </div>
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default KeyValue;
