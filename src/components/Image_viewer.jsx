import React, { createContext, useContext, useState } from "react";

const ImageViewerContext = createContext();

export function ImageViewerProvider({ children }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <ImageViewerContext.Provider value={{ openModal, closeModal }}>
            {children}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-7xl max-h-[90vh]">
                        <img
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-1 right-1 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </ImageViewerContext.Provider>
    );
}

export function useImageViewer() {
    const context = useContext(ImageViewerContext);
    if (!context) {
        throw new Error('useImageViewer must be used within an ImageViewerProvider');
    }
    return context;
}