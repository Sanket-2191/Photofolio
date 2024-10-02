import { createRef, useState } from "react";

const Album = ({ album, deleteAlbum, updateAlbum }) => {
    const titleRef = createRef();
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        // Focus the input when entering edit mode
        if (!isEditing) {
            setIsEditing(true);
            setTimeout(() => document.getElementById(album.id).focus(), 0); // Ensure focus happens after render
        } else {
            // Update the album when saving
            const title = titleRef.current.value;
            updateAlbum({ ...album, title });
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (confirm(`Do you really want to delete ${album.title}?`)) {
            deleteAlbum(album);
        }
    };

    return (
        <div className="w-[20%] h-[35%] bg-slate-600 p-2 box-border flex justify-around items-center">
            <div>
                <input
                    id={album.id}
                    type="text"
                    value={album.title}
                    disabled={!isEditing}
                    className="bg-transparent m-2"
                    ref={titleRef}
                // onChange={(e) => updateAlbum({ ...album, title: e.target.value })} // Allows live typing when in edit mode
                />
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
