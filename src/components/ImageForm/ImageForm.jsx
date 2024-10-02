import { createRef } from "react";


const ImageForm = () => {
    const newImage = createRef();

    const createNewAlbum = (e) => {
        e.preventDefault();
        console.log("Name of new album: ", newImage.current.value);
        clearNewAlbumInput();

    }
    const clearNewAlbumInput = () => {
        newImage.current.value = ""
    }

    return (
        <>
            <form onSubmit={createNewAlbum}
                className="flex  justify-center w-[100%] m-auto ">
                <div className="flex flex-col items-start m-4" >
                    <div className="m-1">
                        <label htmlFor="imageTitle">Image Title</label>
                    </div>
                    <div className="p-1 ">
                        <input id="imageTitle" type="text"
                            ref={newImage}
                            className="w-[100%] p-2 bg-transparent border border-blue-400
                             focus-visible:border-blue-700 focus:outline-none focus:rounded-lg"
                            placeholder="New Image Title" />
                    </div>
                </div>
                <div className="w-[30%] flex justify-between items-center m-4" >

                    <button className="bg-blue-700" type="submit">
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

export default ImageForm;