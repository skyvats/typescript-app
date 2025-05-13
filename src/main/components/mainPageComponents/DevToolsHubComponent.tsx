import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import DevToolsThumbnail from "../../images/DevToolsThumbnail.png"

const DevToolsHubComponent = () => {

    return (
        <div className="p-4 pt-0">
            <div className="text-center my-4">
                <div className={"grid"}>
                    <div className={"col-6 flex justify-content-end"}>
                        <Image src={DevToolsThumbnail} height={"390"}/>
                    </div>
                    <div className={"col-6 flex justify-content-start"}>
                        <div>
                            <p className="text-3xl font-bold" style={{textAlignLast:"start"}}>
                                Accelerate your workflow with powerful developer tools — right in your browser!
                            </p>
                            <div className="flex justify-center gap-2">
                                <Button label="Try NPM Component Search" className="p-button-primary" icon="pi pi-send" />
                                <Button label="Generate AI images" className="p-button-secondary" icon="pi pi-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 my-6">
                <Card title="NPM Component Finder" className="w-80">
                    <p>Search and explore NPM packages with ease.</p>
                    <ul>
                        <li>Real-time NPM search</li>
                        <li>Dependency info</li>
                        <li>Component previews</li>
                    </ul>
                </Card>
                <Card title="AI Image Generator" className="w-80">
                    <p>Generate stunning images from text prompts.</p>
                    <ul>
                        <li>Prompt input box</li>
                        <li>Image preview</li>
                        <li>Download/export option</li>
                    </ul>
                </Card>
            </div>
            <footer className="text-center py-4">
                <div className="flex justify-center gap-6">
                    <a href="#">GitHub</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
                <p className="mt-2">v1.0.0</p>
            </footer>
        </div>
    );
};

export default DevToolsHubComponent;
