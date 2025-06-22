import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { setActiveView } from '../../../store/slices/activeViewSlice';
import { FooterBar } from './FooterBar';
import ImageGeneratorMain from '../imageGenerator/ImageGeneratorMain';
import { MainBodyPanel } from './MainBodyPanel';

const DevToolsHubComponent: React.FC = () => {
    const dispatch = useDispatch();
    const activeView = useSelector((state: RootState) => state.activeView.activeView);

    useEffect(() => {
        const handlePopState = () => {
            dispatch(setActiveView('mainBody'));
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [dispatch]);

    const handleGenerateImageClick = () => {
        dispatch(setActiveView('imageGenerator'));
        window.history.pushState(null, '', 'image-generator');
    };

    return (
        <div className="p-0 flex flex-column justify-content-between" style={{ height: '88vh', overflow: 'auto' }}>
            <div>
                {activeView === 'imageGenerator' ? (
                    <ImageGeneratorMain />
                ) : (
                    <MainBodyPanel onGenerateImageClick={handleGenerateImageClick} />
                )}
            </div>
            <FooterBar />
        </div>
    );
};

export default DevToolsHubComponent;
