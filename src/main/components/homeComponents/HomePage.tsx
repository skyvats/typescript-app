import React from "react";
import { SearchComponent } from "./SearchComponent";
import ImageGeneratorMain from "../imageGenerator/ImageGeneratorMain";

export const HomePage=()=>{

    return(
        <div style={{width:"100%", height:"100%", backgroundColor:"grey"}}>
            <SearchComponent/>
        </div>
    )
}