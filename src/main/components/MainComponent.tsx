import React, { useEffect, useState } from "react";
import { SearchComponent } from "./homeComponents/SearchComponent";
import { Card } from "primereact/card";
import ImageGeneratorMain from "./imageGenerator/ImageGeneratorMain";

export const MainComponent=()=>{

    const [requiredCardWidth] = useState<string>(
        `${Math.floor(window.screen.availWidth * 0.8)}px`
      );
      const [requiredCardHeight] = useState<string>(
        `${Math.floor(window.screen.availHeight * 0.82)}px`
      );

    return(
        <div className="main-background flex flex-wrap justify-content-center align-content-center h-12" style={{height:"58rem"}}>
            <Card style={{width:requiredCardWidth, height: requiredCardHeight}}>
                <SearchComponent/>
                <ImageGeneratorMain/>
            </Card>
        </div>
    )
}