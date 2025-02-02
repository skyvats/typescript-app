import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

interface InstallComponentProps{
    installCommand:string
}

const InstallComponent = ({installCommand}:InstallComponentProps) => {
  const textToCopy = installCommand;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="p-0 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <p className="text-m mb-1">Install</p>
      <div className="flex flex-wrap align-items-center justify-between bg-gray-100 p-1 rounded-lg w-full" style={{borderRadius:"10px"}}>
        <span className="text-gray-800 truncate">&nbsp;&nbsp;{"> "}{textToCopy}</span>
        <Button 
          icon={copied ? "pi pi-check" : "pi pi-copy"} 
          className={`ml-2 p-button-rounded p-button-text ${copied ? 'text-green-500' : 'text-gray-600'}`} 
          onClick={handleCopy} 
          tooltip={copied ? "Copied!" : "Copy to clipboard"}
        />
      </div>
    </div>
  );
};

export default InstallComponent;
