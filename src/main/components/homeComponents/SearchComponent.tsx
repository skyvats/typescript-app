import { AutoComplete } from "primereact/autocomplete";
import React, { useEffect, useState } from "react";
import { SearchAutoComplete } from "./SearchAutoComplete";
import KeyValue from "./KeyValue";
import LineChart from "../otherComponents/LineChart";
import { Card } from "primereact/card";
import InstallComponent from "./InstallComponent";
import HyperlinkDetails from "./Hyperlink";
import { UIUtils } from "../../utils/UIUtils";
import NPMTrendLogo from "../../images/NPMTrend.png"
import { Image } from "primereact/image";

export const SearchComponent=()=>{

    const [selectedObject, setSelectedObject] = useState<any>({});
    const [selectedDuration, setSelectedDuration] = useState<any>("");
    const [links, setLinks] = useState<any>({});

    useEffect(()=>{

        if(!UIUtils.nullOrEmpty(selectedObject)){
            console.log("Selected Componenet in SearchComponent =>", selectedObject);
            setLinks(selectedObject.package.links);
        }
    },[selectedObject])

    return(
        <div className="grid">
            <div className="col-12 flex flex-wrap justify-content-center">
                <Image src={NPMTrendLogo} width={"300"} />
            </div>
            <div className="col-12">
                <SearchAutoComplete setSelectedPackage={setSelectedObject} setSelectedDuration={setSelectedDuration} />
            </div>

            {
                UIUtils.nullOrEmpty(selectedObject) ? null :
                <div className="w-12 grid">
                <div className="col-9">
                    <Card>
                    <LineChart packageName={selectedObject.package.name} duration={selectedDuration}/>
                    </Card>
                </div>
                <div className="col-3">
                    <InstallComponent installCommand={"npm install "+selectedObject.package.name}/>
                    <HyperlinkDetails label={"npm"} url={links.npm} icon={"pi-link"}  />
                    <HyperlinkDetails label={"Repository"} url={links.repository} icon={"pi-github"}  />
                    <HyperlinkDetails label={"Home Page"} url={links.homepage} icon={"pi-link"}  />
                    {/* <Card>
                    <KeyValue data={{name:"jbcxewhjbce", "cxececece":"cececeeeeeee", "cdece":"cece", "ewce cxe": "cececece"}} />
                    </Card> */}
                </div>
             </div>
            }
            
        </div>
    )
}
