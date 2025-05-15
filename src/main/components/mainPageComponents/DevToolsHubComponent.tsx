import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import DevToolsThumbnail from "../../images/MianBackground.png";
import { ThumbnailPanel } from "./ThumbnailPanel";
import { Divider } from "primereact/divider";
import { DevToolsHubBody } from "./DevToolsHubBody";

const DevToolsHubComponent = () => {
    return (
        <div className="p-2 pt-0 flex flex-column justify-content-between" style={{ height: "88vh" }}>
            {/* Header and Main Content */}
            <div>
                <ThumbnailPanel />
                <DevToolsHubBody />
            </div>

            {/* Footer */}
            <footer className="text-center py-0 mt-auto">
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
