import React, {useEffect, useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {SelectButton} from "primereact/selectbutton";
import axios from "axios";
import {Image} from "primereact/image";

interface FinalInputViewProps{
    searchInputText:any,
}

const FinalInputView=({searchInputText}:FinalInputViewProps)=>{

    const [searchText, setSearchText] = useState<any>(searchInputText);

    const [imageData, setImageData] = useState<any>(null);

    const [storedImages, setStoredImages] = useState<string[]>([]);

    const onSearchInputChange=(e:any)=>{

        setSearchText(e.target.value);

    }

    const modelOptions = [
        { label: '1:1', value: '1:1', ratio: '1 / 1' },
        { label: '3:4', value: '3:4', ratio: '3 / 4' },
        { label: '4:3', value: '4:3', ratio: '4 / 3' },
        { label: '16:9', value: '16:9', ratio: '16 / 9' }
    ];

    const styleOptions = [
        { label: 'Realistic', value: 'realistic', sample: 'https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F3LP0GTqIRMNJ7ZvceyEH%252Frealistic.png%3Falt%3Dmedia%26token%3D9c55298c-7771-4860-8ff3-9454d8598cc5&width=300&dpr=4&quality=100&sign=ba70bd26&sv=2' },
        { label: 'Anime', value: 'anime', sample: 'https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F6qyofvcw2NZqpj0oscDw%252Fanime.png%3Falt%3Dmedia%26token%3Da0e554f9-6513-4a71-a9db-e9fd42212afd&width=300&dpr=4&quality=100&sign=63a335c3&sv=2' },
        { label: 'Flux Schnell', value: 'flux-schnell', sample: 'https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FgWHUyMfbEnC6ToBzEWu6%252Fflux.png%3Falt%3Dmedia%26token%3Dc35af315-53a7-46ef-a780-2801ca568352&width=300&dpr=4&quality=100&sign=c0aa8968&sv=2' },
        { label: 'Flux Dev Fast', value: 'flux-dev-fast', sample: 'https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FzLUz8ERX3xdaDmmHKP3L%252FRudyard_A_futuristic_cityscape_at_night_with_neon_lights._786f0887-6ca6-4721-a457-ab7263402e8e.png%3Falt%3Dmedia%26token%3Da9c9b9ea-30d4-4ddf-a530-1a74d8a0c007&width=300&dpr=4&quality=100&sign=1051ea17&sv=2' },
        { label: 'Flux Dev', value: 'flux-dev', sample: 'https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FhecPhL6O8qr0i5KZHufU%252Fflux-dev.png%3Falt%3Dmedia%26token%3D6692c714-6001-4164-8d63-bdbd86b7c450&width=300&dpr=4&quality=100&sign=b72acfe&sv=2' },
        { label: 'Imagine Turbo', value: 'imagine-turbo', sample: 'https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F6E1OWdhQP1IJU8ZlsLtQ%252Fresponse.png%3Falt%3Dmedia%26token%3D8608fa2f-859d-44a8-9828-d6334a88f9c4&width=300&dpr=4&quality=100&sign=be48141&sv=2' },
    ];

    const [selectedModel, setSelectedModel] = useState(modelOptions[0].value);
    const [selectedStyle, setSelectedStyle] = useState(styleOptions[0].value);

    useEffect(()=>{

        fetchImageForText(searchText);

    },[])

    useEffect(() => {
        const savedImages = JSON.parse(localStorage.getItem("generatedImages") || "[]");
        setStoredImages(savedImages);
    }, []);

    const fetchImageForText = async (prompt: any) => {
        console.log("Invoked fetchImageForText");

        const formData: any = new FormData();
        formData.append('prompt', prompt);
        formData.append('style', selectedStyle);
        formData.append('aspect_ratio', selectedModel);


        try {
            const response = await axios.post(
                'https://api.vyro.ai/v2/image/generations',
                formData,
                {
                    headers: {
                        'Authorization': 'Bearer vk-fcsZYzYfcnML36He4Y263aHASiEbhwnDdVY7SFy8vFCcY5'
                    },
                    responseType: "blob",
                }
            );

            const imageUrl = URL.createObjectURL(response.data);
            setImageData(imageUrl);

            // Store the new image in local storage
            const updatedImages = [...storedImages, imageUrl];
            setStoredImages(updatedImages);
            localStorage.setItem("generatedImages", JSON.stringify(updatedImages));
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    return(
        <div className={"w-12 grid"}>
            <div className={"col-3"}>
                <div>
                    Create an image from the text
                </div>
                <div>
                    <InputTextarea className={"w-12"} value={searchText} onChange={(e) =>onSearchInputChange(e)}
                                   rows={1} cols={30} autoResize placeholder={"Describe an image you want to create."}/>
                </div>
                <div>
                    <Button className={"w-12"} label="Generate" onClick={() => {fetchImageForText(searchText)}}/>
                </div>
                <div>
                    <div className={"text-lg font-bold mt-3"}>Aspect Ratio</div>
                    <div className="flex gap-3 mt-1">
                        {modelOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`p-2 pt-0 pb-1 border-round cursor-pointer flex flex-column align-items-center
                                ${selectedModel === option.value ? 'border-3 border-primary' : 'border-1'}
                    `}
                                onClick={() => setSelectedModel(option.value)}
                            >
                                <div className="mt-2">{option.label}</div>
                                <div
                                    className="bg-primary w-full"
                                    style={{
                                        aspectRatio: option.ratio,
                                        width: '60px',  // Set fixed width for consistency
                                        backgroundColor: '#42A5F5' // Blue shade for better visibility
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Style Section */}
                <div>
                    <div className="text-lg font-bold mt-3">Styles</div>
                    <div className="flex grid mt-1">
                        {styleOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`col-4 p-2 border-round cursor-pointer flex flex-column align-items-center
                                        ${selectedStyle === option.value ? 'border-3 border-primary' : 'border-1'}
                            `}
                                onClick={() => setSelectedStyle(option.value)}
                            >
                                <img title={option.label}
                                    src={option.sample}
                                    alt={option.label}
                                    className="w-full"
                                    style={{
                                        aspectRatio: '1 / 1',
                                        width: '60px',
                                        borderRadius: '8px'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"col-9"}>
                <div className="card w-12">
                    {/*<Image imageClassName="w-full border-round" preview src={imageData} width="40" height="40"/>*/}
                    <img
                        src={imageData}
                        alt="Generated Image"
                        className="w-full border-round"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            {/* Display Stored Images */}
            {storedImages.length > 0 && (
                <div className="mt-3">
                    <div className="text-lg font-bold">Recent Images Created</div>
                    <div className="flex flex-wrap gap-2">
                        {storedImages.map((img, idx) => (
                            <Image key={idx} src={img} alt={`Image ${idx}`} width="100" />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FinalInputView;