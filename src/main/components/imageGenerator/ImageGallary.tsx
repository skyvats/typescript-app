import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

export default function ImageGallery() {
    const [imageData, setImageData] = useState<string | null>(null);
    const [savedImages, setSavedImages] = useState<string[]>([]);

    // Simulated API Response with Binary Data (For Demo Purpose)
    const generateImage = async () => {
        const sampleBinaryData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'; // Example Base64
        setImageData(sampleBinaryData);
        saveImageToLocal(sampleBinaryData);
    };

    // Save image in Local Storage
    const saveImageToLocal = (image: string) => {
        const storedImages = JSON.parse(localStorage.getItem('savedImages') || '[]');
        storedImages.push(image);
        localStorage.setItem('savedImages', JSON.stringify(storedImages));
        setSavedImages(storedImages);
    };

    // Load images from Local Storage on page load
    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('savedImages') || '[]');
        setSavedImages(storedImages);
    }, []);

    return (
        <div className="p-4">
            <Button label="Generate Image" onClick={generateImage} className="mb-3" />

            {/* Display Generated Image */}
            {imageData && (
                <div className="mb-3">
                    <Image
                        src={imageData}
                        alt="Generated"
                        className="w-full border-round"
                        width="150"
                        height="150"
                    />
                </div>
            )}

            {/* Display Saved Images */}
            <div className="grid">
                {savedImages.map((img, index) => (
                    <div key={index} className="col-3 p-2">
                        <Image
                            src={img}
                            alt={`Saved Image ${index + 1}`}
                            className="w-full border-round"
                            width="100"
                            height="100"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
