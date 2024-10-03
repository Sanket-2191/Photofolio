import { createRef, useState } from "react";

const Album = ({ album, updateAlbum, deleteAlbum, setCurrentAlbumIndex, index }) => {
    const titleRef = createRef();
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (e) => {
        e.stopPropagation(); // Prevent triggering album navigation when clicking the button
        if (!isEditing) {
            setIsEditing(true);
            setTimeout(() => document.getElementById(album.id).focus(), 0); // Focus input after render
        } else {
            const title = titleRef.current.value;
            updateAlbum({ ...album, title }); // Save updated album title
            setIsEditing(false);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation(); // Prevent triggering album navigation when clicking the button
        if (confirm(`Do you really want to delete ${album.title}?`)) {
            deleteAlbum(album.id); // Delete the album
        }
    };

    return (
        <div
            className="w-[20%] h-[35%] bg-slate-600 p-2 box-border flex justify-around items-center"
            onClick={() => !isEditing && setCurrentAlbumIndex(index)} // Only trigger navigation when not editing
            style={{ cursor: "pointer" }}
        >
            <div>
                {/* Conditionally render input or h4 based on isEditing state */}
                {isEditing ? (
                    <input
                        id={album.id}
                        type="text"
                        value={album.title}
                        className="bg-transparent m-2 hover:text-gray-300"
                        ref={titleRef}
                        onChange={(e) => updateAlbum({ ...album, title: e.target.value })} // Allow live typing
                        onClick={(e) => e.stopPropagation()} // Stop click event from bubbling up
                        style={{ cursor: isEditing ? "text" : "pointer" }} // Show text cursor only in edit mode
                    />
                ) : (
                    <h4 className="m-2 hover:text-gray-300">{album.title}</h4>
                )}
            </div>

            <div className="flex flex-col justify-center items-start">
                <button className="bg-blue-700 my-1" onClick={handleEdit}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button className="bg-red-500" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Album;
