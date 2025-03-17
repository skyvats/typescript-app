import React, {useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import axios from "axios";
import {Button} from "primereact/button";
import IntroducerInput from "./IntroducerInput";

const ImageGeneratorMain=()=>{

    return(
        <div className="flex justify-content-center align-content-center flex-wrap items-center  ">
            {/* Large Screen - 1920px */}

            <IntroducerInput/>
        </div>
    )
}

export default ImageGeneratorMain;