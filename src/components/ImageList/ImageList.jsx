import { useState } from "react";
import Album from "../Album/Album";
import Carousel from "../Carousel/Carousel";
import Image from "../Image/Image";
import ImageForm from "../ImageForm/ImageForm";

const ImageList = (props) => {

    const { album, setCurrentAlbumIndex, updateAlbum } = props;
    const [currImageIndex, setCurrImageIndex] = useState(-1);

    const [imageFormVisible, setImageFormVisible] = useState(false);

    let Images = album.images;

    return (
        <>
            {currImageIndex >= 0 ? null : <div className="flex  justify-around
            items-center w-[100%] h-fit
            p-1 box-content bg-slate-500">
                <div onClick={() => setCurrentAlbumIndex(-1)}
                    className=" bg-slate-500 text-yellow-200 font-bold cursor-pointer">
                    Go Back
                </div>
                <div>
                    <button className="bg-blue-700 my-1" onClick={() => setImageFormVisible(!imageFormVisible)}>
                        Add Image
                    </button>
                </div>


            </div>}

            {imageFormVisible ? <div className="m-3 p-3 box-border">
                <ImageForm updateAlbum={updateAlbum} album={album} />
            </div> : null}

            <div
                className="flex flex-wrap  justify-start
            items-start w-[100%] h-[90%]
            p-1 box-content bg-slate-500">
                {currImageIndex >= 0 ? <Carousel album={album} index={currImageIndex} setIndex={setCurrImageIndex} /> :
                    Images.map((img, i) =>
                        <Image image={img} key={i} setIndex={setCurrImageIndex} index={i} updateAlbum={updateAlbum} album={album} />
                    )
                }
                {/* <Album /> */}


            </div >


        </>
    )
}

export default ImageList;