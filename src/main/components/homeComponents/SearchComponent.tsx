import { AutoComplete } from "primereact/autocomplete";
import React from "react";
import { SearchAutoComplete } from "./SearchAutoComplete";
import KeyValue from "./KeyValue";

export const SearchComponent=()=>{

    return(
        <div className="grid">
            <div className="col-12">
                NPM Trend
            </div>
            <div className="col-12">
                <SearchAutoComplete />
            </div>

            <div className="w-12 grid">
                <div className="col-8">
                    dece
                </div>
                <div className="col-4">
                    <KeyValue data={{name:"jbcxewhjbce", "cxececece":"cececeeeeeee", "cdece":"cece", "ewce cxe": "cececece"}} />
                </div>
             </div>
        </div>
    )
}
