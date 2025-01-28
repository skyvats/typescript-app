import { AutoComplete } from "primereact/autocomplete";
import React from "react";
import { SearchAutoComplete } from "./SearchAutoComplete";

export const SearchComponent=()=>{

    return(
        <div className="grid">
            <div className="col-12">
                NPM Trend
            </div>
            <div className="col-12">
                <SearchAutoComplete />
            </div>
        </div>
    )
}
