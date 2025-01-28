import { AutoComplete } from "primereact/autocomplete";
import React, { useState } from "react";
import axios from "axios";


export const SearchAutoComplete=()=>{

    const [searchedValue, setSearchedValue] = useState<any>(null);
    const [suggestedItems, setSuggestedItems] =  useState<any>([]);

    const search = (event: any) => {

        console.log("Invoked NPM Search => ", event);
        const query = event.query;

       

        axios.get("https://registry.npmjs.org/-/v1/search?text="+query+"&size=5").then((response) => 
        {
            console.log("Invoked API Search API Data:", response.data);

            const data = response.data;
            if(data != undefined && data!= null){
                const npmSearchResult = data.objects;
                console.log("npmSearchResult => ", npmSearchResult);

                const tempSuggestedItems:any = [];

                npmSearchResult.map((npmData:any)=>{
                    const packageData:any = npmData.package;
                    tempSuggestedItems.push(packageData.name);
                })

                setSuggestedItems(tempSuggestedItems);
            } 
        })
        .catch((error:any) => {
          console.error("Failed to Load NPM Search : ", error);
        });
    }

    const onSearchFieldValueChange=(e:any)=>{

        console.log("InvokedonSearchFieldValueChange =>  ", e.value);

        setSearchedValue(e.value);

    }

    return(
        <div>
            <AutoComplete value={searchedValue} suggestions={suggestedItems} completeMethod={search} onChange={(e) => onSearchFieldValueChange(e)}  />
        </div>
    )
}