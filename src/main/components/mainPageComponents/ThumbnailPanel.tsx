import React from "react";
import {Image} from "primereact/image";
import DevToolsThumbnail from "../../images/MianBackground.png";
import {Button} from "primereact/button";

export const ThumbnailPanel=()=>{

    return(
        <div className="text-center my-4">
            <div className="grid">
                {/* Image Column */}
                <div className="col-12 sm:col-12 md:col-4 flex justify-content-center md:justify-content-end align-items-center">
                    <Image src={DevToolsThumbnail} height="250vh" />
                </div>

                {/* Text and Button Column */}
                <div className="col-12 sm:col-12 md:col-8">
                    <div>
                        <p className="text-3xl font-bold" style={{ textAlignLast: "center" }}>
                            Accelerate your workflow with powerful developer tools — right in your browser!
                        </p>
                        <div className="flex gap-2 w-12 flex justify-content-center md:justify-content-center align-items-center">
                            <Button label="Try NPM Component Search" className="p-button-primary" icon="pi pi-send" />
                            <Button label="Generate AI images" className="p-button-secondary" icon="pi pi-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}