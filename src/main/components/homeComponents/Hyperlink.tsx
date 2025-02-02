import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

interface HyperlinkProps{
  label:string
  url:string,
  icon:string
}

const HyperlinkDetails = ({label, url, icon}:HyperlinkProps) => {
  const repositoryLink = url;

  return (
    <div className="p-0 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <p className="text-m mb-1">{label}</p>
      <div className="flex pt-3 pb-3 flex-wrap align-items-center justify-between bg-gray-100 p-1 rounded-lg w-full" style={{borderRadius:"10px"}}>
        <i className={"pi "+icon} style={{ fontSize: '1rem' }}></i>
        <a 
          href={repositoryLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline truncate"
        >
          &nbsp;&nbsp;{repositoryLink}
        </a>
      </div>
    </div>
  );
};

export default HyperlinkDetails;
