import { createRef } from "react";


const ImageForm = ({ updateAlbum, album }) => {
    const newImageTitle = createRef();
    const newImageUrl = createRef();

    const addNewImage = (e) => {
        e.preventDefault();
        const newImages = album.images;
        newImages.push({ title: newImageTitle.current.value, imageUrl: newImageUrl.current.value })
        console.log("Name of new album: ", newImageTitle.current.value);
        updateAlbum({ ...album, images: [...newImages] })
        clearNewAlbumInput(e);

    }
    const clearNewAlbumInput = (e) => {
        e.preventDefault();
        newImageTitle.current.value = "";
        newImageUrl.current.value = "";
    }

    return (
        <>
            <form
                className="flex  justify-center w-[100%] m-auto ">
                <div className="flex flex-col items-start m-4" >
                    <div className="m-1">
                        <label htmlFor="imageTitle">Image Title</label>
                    </div>
                    <div className="p-1 ">
                        <input id="imageTitle" type="text"
                            ref={newImageTitle}
                            className="w-[100%] p-2 bg-transparent border border-blue-400
                             focus-visible:border-blue-700 focus:outline-none focus:rounded-lg"
                            placeholder="New Image Title" />
                    </div>
                    <div className="m-1">
                        <label htmlFor="imageUrl">Image Url</label>
                    </div>
                    <div className="p-1 ">
                        <input id="imageUrl" type="text"
                            ref={newImageUrl}
                            className="w-[100%] p-2 bg-transparent border border-blue-400
                             focus-visible:border-blue-700 focus:outline-none focus:rounded-lg"
                            placeholder="New Image Url" />
                    </div>
                </div>
                <div className="w-[30%] flex justify-between items-center m-4" >

                    <button className="bg-blue-700" onClick={addNewImage}>
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