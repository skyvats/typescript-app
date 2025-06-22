import React, { useEffect, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { ProgressSpinner } from "primereact/progressspinner";
import axios from "axios";

interface FinalInputViewProps {
    searchInputText: any;
}

const FinalInputView = ({ searchInputText }: FinalInputViewProps) => {
    const [searchText, setSearchText] = useState<any>(searchInputText);
    const [imageData, setImageData] = useState<any>(null);
    const [storedImages, setStoredImages] = useState<string[]>([]);
    const [selectedModel, setSelectedModel] = useState("1:1");
    const [selectedStyle, setSelectedStyle] = useState("realistic");
    const [loading, setLoading] = useState(false);

    const modelOptions = [
        { label: "1:1", value: "1:1", ratio: "1 / 1" },
        { label: "3:4", value: "3:4", ratio: "3 / 4" },
        { label: "4:3", value: "4:3", ratio: "4 / 3" },
        { label: "16:9", value: "16:9", ratio: "16 / 9" },
    ];

    const styleOptions = [
        {
            label: "Realistic",
            value: "realistic",
            sample:
                "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F3LP0GTqIRMNJ7ZvceyEH%252Frealistic.png%3Falt%3Dmedia%26token%3D9c55298c-7771-4860-8ff3-9454d8598cc5&width=300&dpr=4&quality=100&sign=ba70bd26&sv=2",
        },
        {
            label: "Anime",
            value: "anime",
            sample:
                "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F6qyofvcw2NZqpj0oscDw%252Fanime.png%3Falt%3Dmedia%26token%3Da0e554f9-6513-4a71-a9db-e9fd42212afd&width=300&dpr=4&quality=100&sign=63a335c3&sv=2",
        },
        {
            label: "Flux Schnell",
            value: "flux-schnell",
            sample:
                "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FgWHUyMfbEnC6ToBzEWu6%252Fflux.png%3Falt%3Dmedia%26token%3Dc35af315-53a7-46ef-a780-2801ca568352&width=300&dpr=4&quality=100&sign=c0aa8968&sv=2",
        },
        {
            label: "Flux Dev Fast",
            value: "flux-dev-fast",
            sample:
                "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FzLUz8ERX3xdaDmmHKP3L%252FRudyard_A_futuristic_cityscape_at_night_with_neon_lights._786f0887-6ca6-4721-a457-ab7263402e8e.png%3Falt%3Dmedia%26token%3Da9c9b9ea-30d4-4ddf-a530-1a74d8a0c007&width=300&dpr=4&quality=100&sign=1051ea17&sv=2",
        },
        {
            label: "Flux Dev",
            value: "flux-dev",
            sample:
                "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FhecPhL6O8qr0i5KZHufU%252Fflux-dev.png%3Falt%3Dmedia%26token%3D6692c714-6001-4164-8d63-bdbd86b7c450&width=300&dpr=4&quality=100&sign=b72acfe&sv=2",
        },
        {
            label: "Imagine Turbo",
            value: "imagine-turbo",
            sample:
                "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F6E1OWdhQP1IJU8ZlsLtQ%252Fresponse.png%3Falt%3Dmedia%26token%3D8608fa2f-859d-44a8-9828-d6334a88f9c4&width=300&dpr=4&quality=100&sign=be48141&sv=2",
        },
    ];

    useEffect(() => {
        if (searchText) {
            fetchImageForText(searchText);
        }
    }, []);

    useEffect(() => {
        const savedImages = JSON.parse(localStorage.getItem("generatedImages") || "[]");
        setStoredImages(savedImages);
    }, []);

    const fetchImageForText = async (prompt: any) => {
        if (!prompt) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("style", selectedStyle);
        formData.append("aspect_ratio", selectedModel);

        try {
            const response = await axios.post(
                "https://api.vyro.ai/v2/image/generations",
                formData,
                {
                    headers: {
                        Authorization: "Bearer vk-fcsZYzYfcnML36He4Y263aHASiEbhwnDdVY7SFy8vFCcY5",
                    },
                    responseType: "blob",
                }
            );

            const imageUrl = URL.createObjectURL(response.data);
            setImageData(imageUrl);

            const updatedImages = [...storedImages, imageUrl];
            setStoredImages(updatedImages);
            localStorage.setItem("generatedImages", JSON.stringify(updatedImages));
        } catch (error) {
            console.error("Error fetching image:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid m-0 p-3 w-12" style={{ margin: "0 auto" }}>
            {/* Left Panel: Input Controls */}
            <div className="col-12 md:col-4 p-3 surface-100 border-round-lg shadow-2">
                <h3 className="m-0 mb-3 text-lg font-semibold">Create Image</h3>
                <InputTextarea
                    className="w-full mb-2"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    rows={2}
                    placeholder="Describe the image you want to create"
                    style={{ resize: "none", fontSize: "0.9rem" }}
                />
                <Button
                    className="w-full mb-3"
                    label="Generate"
                    icon="pi pi-image"
                    onClick={() => fetchImageForText(searchText)}
                    style={{ background: "#6366F1", border: "none", fontSize: "0.9rem" }}
                />

                {/* Aspect Ratio Selection */}
                <div className="mb-3">
                    <h4 className="m-0 mb-2 text-sm font-semibold">Aspect Ratio</h4>
                    <div className="flex gap-2 flex-wrap">
                        {modelOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`p-2 border-round cursor-pointer flex flex-column align-items-center transition-all
                  ${selectedModel === option.value ? "border-2 border-primary bg-primary-50" : "border-1 border-gray-300"}`}
                                onClick={() => setSelectedModel(option.value)}
                                style={{ width: "60px", transition: "all 0.2s" }}
                            >
                                <span className="text-xs mb-1">{option.label}</span>
                                <div
                                    className="w-full"
                                    style={{
                                        aspectRatio: option.ratio,
                                        height: "30px",
                                        background: selectedModel === option.value ? "#6366F1" : "#E5E7EB",
                                        borderRadius: "4px",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Style Selection */}
                <div>
                    <h4 className="m-0 mb-2 text-sm font-semibold">Styles</h4>
                    <div className="grid">
                        {styleOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`col-4 p-1 cursor-pointer transition-all
                  ${selectedStyle === option.value ? "border-2 border-primary bg-primary-50" : "border-1 border-gray-300"}`}
                                onClick={() => setSelectedStyle(option.value)}
                                style={{ transition: "all 0.2s" }}
                            >
                                <img
                                    src={option.sample}
                                    alt={option.label}
                                    className="w-full border-round"
                                    style={{ aspectRatio: "1 / 1", height: "50px", objectFit: "cover" }}
                                />
                                <span className="text-xs text-center block mt-1">{option.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel: Image Preview */}
            <div className="col-12 md:col-8 p-3 pt-0">
                <div className="surface-100 border-round-lg shadow-2 p-3" style={{ maxHeight: "340px", overflow: "hidden" }}>
                    {loading ? (
                        <div
                            className="w-full flex align-items-center justify-content-center border-round bg-gray-100"
                            style={{ height: "200px" }}
                        >
                            <ProgressSpinner style={{ width: "50px", height: "50px" }} strokeWidth="4" />
                        </div>
                    ) : imageData ? (
                        <Image
                            src={imageData}
                            alt="Generated Image"
                            className="w-full border-round"
                            imageStyle={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
                            imageClassName="w-full"
                        />
                    ) : (
                        <div
                            className="w-full flex align-items-center justify-content-center border-round bg-gray-100"
                            style={{ height: "200px" }}
                        >
                            <span className="text-gray-500">No image generated yet</span>
                        </div>
                    )}
                </div>

                {/* Recent Images */}
                {storedImages.length > 0 && (
                    <div className="mt-3">
                        <h4 className="m-0 mb-2 text-sm font-semibold">Recent Images</h4>
                        <div className="flex flex-wrap gap-2">
                            {storedImages.slice(-4).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="border-round overflow-hidden"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                    <Image
                                        src={img}
                                        alt={`Recent Image ${idx}`}
                                        imageClassName="w-full h-full"
                                        imageStyle={{ objectFit: "cover" }}
                                        preview
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinalInputView;