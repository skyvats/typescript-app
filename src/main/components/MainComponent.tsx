import React, { useState } from "react";
import { Card } from "primereact/card";
import DevToolsHubComponent from "./mainPageComponents/DevToolsHubComponent";
import {MainMenuBar} from "./mainPageComponents/MainMenuBar";
import {FooterBar} from "./mainPageComponents/FooterBar";

export const MainComponent=()=>{

    //Adding an comment to check if able to commit.

    const [requiredCardWidth] = useState<string>(
        `${Math.floor(window.screen.availWidth * 0.8)}px`
      );
      const [requiredCardHeight] = useState<string>(
        `${Math.floor(window.screen.availHeight * 0.82)}px`
      );

    return(
        <div className="main-background flex flex-wrap justify-content-center align-content-center h-screen" >
            <Card header={<MainMenuBar/>} className="w-11 p-0 m-0" style={{ height:"95vh", background:"white", borderRadius:"6px" }} unstyled={true}>
                <DevToolsHubComponent/>
            </Card>
        </div>
    )
}