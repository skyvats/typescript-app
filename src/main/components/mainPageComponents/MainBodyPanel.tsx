import React from 'react';
import { ThumbnailPanel } from './ThumbnailPanel';
import { DevToolsHubBody } from './DevToolsHubBody';

interface Props {
    onGenerateImageClick: () => void;
}

export const MainBodyPanel: React.FC<Props> = ({ onGenerateImageClick }) => {
    return (
        <>
            <ThumbnailPanel />
            <DevToolsHubBody />
        </>
    );
};
