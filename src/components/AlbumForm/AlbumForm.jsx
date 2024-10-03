import { createRef } from "react";


const AlbumForm = ({ addAlbum }) => {
    const newAlbumName = createRef();

    const createNewAlbum = (e) => {
        e.preventDefault();
        console.log("Name of new album: ", newAlbumName.current.value);
        addAlbum({
            title: newAlbumName.current.value,
            images: []
        })
        clearNewAlbumInput(e);

    }
    const clearNewAlbumInput = (e) => {
        e.preventDefault();
        newAlbumName.current.value = ""
    }

    return (
        <>
            <form
                className="flex  justify-center w-[100%] m-auto ">
                <div className="flex flex-col items-start m-4" >
                    <div className="m-1">
                        <label htmlFor="albumName">Album Name</label>
                    </div>
                    <div className="p-1 ">
                        <input id="albumName" type="text"
                            ref={newAlbumName}
                            className="w-[100%] p-2 bg-transparent border border-blue-400
                             focus-visible:border-blue-700 focus:outline-none focus:rounded-lg"
                            placeholder="New Album Name" />
                    </div>
                </div>
                <div className="w-[30%] flex justify-between items-center m-4" >

                    <button className="bg-blue-700" onClick={createNewAlbum}>
                        create
                    </button>
                    <button className="bg-red-500" onClick={clearNewAlbumInput}>
                        clear
                    </button>
                </div>
            </form>
        </>
    )
}

export default AlbumForm;