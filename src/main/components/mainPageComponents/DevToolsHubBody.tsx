import { Card } from "primereact/card";
import React from "react";
import {Divider} from "primereact/divider";

export const DevToolsHubBody=()=>{

    return(
        <div className="flex justify-content-center gap-4 my-2">
            <div className="grid w-full justify-content-center gap-4">

                {/* NPM Component Finder Card */}
                <div className="col-12 md:col-5">
                    <Card
                        className="p-2 shadow-3 border-round surface-card hover:shadow-5 transition-all"
                        header={
                            <div className="flex align-items-center gap-2 p-2" style={{ background: "#f1f5f9", borderRadius: "0.5rem 0.5rem 0 0" }}>
                                <i className="pi pi-search text-2xl text-primary"></i>
                                <span className="text-xl font-semibold">NPM Component Finder</span>
                            </div>
                        }
                        unstyled={true}
                    >
                        <p className="text-lg font-semibold mb-2">
                            Search and explore NPM packages with ease.
                        </p>
                        <Divider />
                        <ul className="list-none pl-2">
                            <li className="flex align-items-center gap-2 mb-2">
                                <i className="pi pi-check-circle text-green-500"></i>
                                Real-time NPM search
                            </li>
                            <li className="flex align-items-center gap-2 mb-2">
                                <i className="pi pi-info-circle text-blue-500"></i>
                                Dependency info
                            </li>
                            <li className="flex align-items-center gap-2">
                                <i className="pi pi-eye text-purple-500"></i>
                                Component previews
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* AI Image Generator Card */}
                <div className="col-12 md:col-5">
                    <Card
                        className="p-2 shadow-3 border-round surface-card hover:shadow-5 transition-all"
                        header={
                            <div className="flex align-items-center gap-2 p-2" style={{ background: "#f1f5f9", borderRadius: "0.5rem 0.5rem 0 0" }}>
                                <i className="pi pi-image text-2xl text-secondary"></i>
                                <span className="text-xl font-semibold">AI Image Generator</span>
                            </div>
                        }
                        unstyled={true}
                    >
                        <p className="text-lg font-semibold mb-2">
                            Generate stunning images from text prompts.
                        </p>
                        <Divider />
                        <ul className="list-none pl-2">
                            <li className="flex align-items-center gap-2 mb-2">
                                <i className="pi pi-pencil text-yellow-500"></i>
                                Prompt input box
                            </li>
                            <li className="flex align-items-center gap-2 mb-2">
                                <i className="pi pi-eye text-purple-500"></i>
                                Image preview
                            </li>
                            <li className="flex align-items-center gap-2">
                                <i className="pi pi-download text-green-500"></i>
                                Download/export option
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    )
}