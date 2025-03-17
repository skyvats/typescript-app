import React, {useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import axios from "axios";
import FirstInputView from "./FirstInputView";
import FinalInputView from "./FinalInputView";
import { UIUtils } from "../../utils/UIUtils";

const IntroducerInput=()=>{

    const [searchText, setSearchText] = useState(null);
    const [showFirstInputView, setShowFirstInputView] = useState<any>(true);

    return(
        <div className="col-12  md:col-8 sm:col-12">
            <div className={"card flex flex-wrap justify-content-center align-content-center"} >
                {showFirstInputView || UIUtils.nullOrEmpty(searchText) ?
                    <FirstInputView setViewSearchText={setSearchText} setShowFirstInputView={setShowFirstInputView}/>
                :
                    <FinalInputView searchInputText={searchText}/>
                }
            </div>
        </div>
    )
}

export default IntroducerInput;