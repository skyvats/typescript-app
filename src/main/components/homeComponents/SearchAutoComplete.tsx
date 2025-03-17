import { AutoComplete } from "primereact/autocomplete";
import React, { useState } from "react";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { KeyWordsComponent } from "../otherComponents/KeyWordsComponent";
import { UIUtils } from "../../utils/UIUtils";

interface SearchAutoCompleteProps{
    setSelectedPackage:any,
    setSelectedDuration:any
}

export const SearchAutoComplete=({setSelectedPackage, setSelectedDuration}:SearchAutoCompleteProps)=>{

    const [searchResult, setSearchResult] = useState<any>([]);
    const [searchedValue, setSearchedValue] = useState<any>(null);
    const [suggestedItems, setSuggestedItems] =  useState<any>([]);
    const [autoCompleteWidth] = useState<any>("30rem");
    const [duration, setDuration] = useState<any>({ name: '1 Year', code: '1 Year' });
    setSelectedDuration(duration);
    const [selectedObject, setSelectedObject] = useState<any>({}); 
    const durationList = [
        { name: 'Weekly', code: 'Weekly' },
        { name: '1 Year', code: '1 Year' },
        { name: '3 Year', code: '3 Year' }, 
        { name: '5 Year', code: '5 Year' },
        { name: 'All Time', code: 'All Time' }
    ];

    const search = (event: any) => {

        console.log("Invoked NPM Search => ", event);
        const query = event.query;

       

        axios.get("https://registry.npmjs.org/-/v1/search?text="+query+"&size=5").then((response) => 
        {
            console.log("Invoked API Search API Data:", response.data);

            const data = response.data;
            if(data != undefined && data!= null){
                setSearchResult(data.objects);
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

        var selectedValueObject = {};

        searchResult.map((object:any)=>{
            if(object.package.name === e.value){
                selectedValueObject = object;
            }
        })

        console.log("selectedValueObject => ", selectedValueObject);
        setSelectedObject(selectedValueObject);
        setSelectedPackage(selectedValueObject);


    }

    // Custom item template
    const itemTemplate = (item:any) => {

        console.log("itemTemplate => ", {item, searchResult});
        var description:any = "-"

        searchResult.map((object:any)=>{
            if(object.package.name === item){
                description = object.package.description;
            }
        })

        return (
        <div style={{ padding: '8px' }}>
            <div style={{ fontWeight: 'bold' }}>{item}</div>
            <div style={{ fontSize: '12px', color: 'gray' }} title={description}>{description}</div>
        </div>
        )
    };

    const onDurationChange=(e:any)=>{

        setDuration(e.value);
        setSelectedDuration(e.value);

    }

    return(
        <div className="w-12 flex flex-wrap justify-content-center" >
            <div className="">
            <AutoComplete panelStyle={{width:autoCompleteWidth}} placeholder="Search Packages.." inputStyle={{width:autoCompleteWidth}} value={searchedValue} suggestions={suggestedItems} 
            completeMethod={search} onChange={(e) => onSearchFieldValueChange(e)} itemTemplate={(e:any) => itemTemplate(e)}/>
            <Dropdown value={duration} onChange={(e) => onDurationChange(e)} options={durationList} optionLabel="name" 
             className="w-full md:w-8rem" />
             {
                UIUtils.nullOrEmpty(selectedObject) ? null :
                <div className="w-12 flex flex-wrap justify-content-center">
                    <KeyWordsComponent keyWordList={selectedObject.package.keywords} />
                </div>   
             }
             
            </div>
        </div>
    )
}