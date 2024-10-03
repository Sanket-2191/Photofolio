import React, { useState } from 'react';

const Image = ({ image, setIndex, index, updateAlbum, album }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(image.title);

    const handleEdit = () => {
        if (isEditing) {
            const updatedImages = album.images.map((img, idx) =>
                idx === index ? { ...img, title: newTitle } : img
            );
            updateAlbum({ ...album, images: updatedImages });
        }
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        if (confirm(`Do you really want to delete ${image.title}?`)) {
            const updatedImages = album.images.filter((_, idx) => idx !== index);
            updateAlbum({ ...album, images: updatedImages });
        }
    };

    return (
        <div className="flex justify-around items-center rounded overflow-hidden shadow-lg m-4 bg-red-300 p-2 box-border">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" onClick={() => setIndex(index)}>
                {/* Image */}
                <img className="w-full h-auto" src={image.url} alt={image.title} onError={(e) => e.target.src = "default-image-path"} />

                {/* Image Title */}
                <div className="px-6 py-4">
                    {isEditing ? (
                        <input
                            className="font-bold text-xl mb-2"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <div className="font-bold text-xl mb-2">{image.title}</div>
                    )}
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-start">
                    <button className="bg-blue-700 my-1" onClick={handleEdit}>
                        {isEditing ? "Save" : "Edit"}
                    </button>
                    <button className="bg-red-500" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Image;
