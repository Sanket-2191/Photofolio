import { useState } from "react";
import Album from "../Album/Album";
import Carousel from "../Carousel/Carousel";
import Image from "../Image/Image";

const ImageList = (props) => {

    const { album } = props;
    const [currImageIndex, setCurrImageIndex] = useState(-1);

    let Images = album.images;

    return (
        <>
            <div

                className="flex  justify-around 
            items-start w-[100%] h-[90%]
            p-1 box-content bg-slate-500">
                {currImageIndex >= 0 ? <Carousel album={album} index={currImageIndex} setIndex={setCurrImageIndex} /> :
                    Images.map((img, i) =>
                        <Image image={img} key={i} setIndex={setCurrImageIndex} index={i} />
                    )
                }
                {/* <Album /> */}


            </div>


        </>
    )
}

export default ImageList;