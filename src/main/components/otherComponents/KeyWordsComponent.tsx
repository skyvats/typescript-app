import React from "react";

interface KeyWordsComponentProps {
    keyWordList:[]
}

export const KeyWordsComponent=({keyWordList}:KeyWordsComponentProps)=>{

    const getKeyWordDiv=()=>{

        const tempKeywordList:any = [];

        keyWordList.map((keyWord:any)=>{
            tempKeywordList.push(
                <div className="key-words">
                    #{keyWord}
                </div>
            ) 
        })
        return tempKeywordList;
    }

    return(
        <div className="flex mt-3">

            {getKeyWordDiv()}
        </div>
    )
}