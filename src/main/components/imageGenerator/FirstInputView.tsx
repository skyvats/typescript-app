import React, {useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import axios from "axios";

interface FirstInputViewProps{

    setViewSearchText:any,
    setShowFirstInputView:any

}

const FirstInputView=({setViewSearchText, setShowFirstInputView}:FirstInputViewProps)=>{

    const [searchTest, setSearchText] = useState<any>(null);

    const getPrompt = async () => {
        const response = await axios.get('https://random-word-api.herokuapp.com/word?number=5');
        const prompt = `Imagine a world filled with ${response.data.join(', ')}`;
        setViewSearchText(prompt);
        setSearchText(prompt);
    };

    const onSearchInputChange=(e:any)=>{

        setSearchText(e.target.value);
        setViewSearchText(e.target.value);

    }

    const onCreateImageClickEvent=async () => {

        console.log("Invoked onCreateImageClickEvent");
        setShowFirstInputView(false);

        const formData:any = new FormData();
        formData.append('prompt', "Fairy on horse");
        formData.append('style', 'realistic');
        formData.append('aspect_ratio', '1:1');

        var response = null;

        /*const response = await axios.post(
            'https://api.vyro.ai/v2/image/generations',
            formData,
            {
                headers: {
                    'Authorization': 'Bearer vk-fcsZYzYfcnML36He4Y263aHASiEbhwnDdVY7SFy8vFCcY5',
                },
            }
        );

        console.log("onCreateImageClickEvent => ", response);*/

    }

    return(
        <div className={"card"}>
            <div>
                Create Image
            </div>
            <div>
                <InputTextarea value={searchTest} onChange={(e) => onSearchInputChange(e)}
                               rows={1} cols={30} autoResize placeholder={"Describe an image you want to create."}/>
            </div>
            <div className={"grid"}>
                <div className={"col-4"}>
                    <Button label="Inspire" onClick={() => {getPrompt()}}/>
                </div>
                <div className={"col-8"}>
                    <Button className={"w-12"} label="Create Image" onClick={() => {onCreateImageClickEvent()}}/>
                </div>
            </div>
        </div>
    )
}

export default FirstInputView;