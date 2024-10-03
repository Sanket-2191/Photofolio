
const Carousel = (props) => {
    const { album, index, setIndex } = props;
    return (
        <>
            <div className=" w-[100%] h-[100%] bg-slate-600 flex flex-col justify-center items-center">

                {/* go back to all images page */}
                <div onClick={() => setIndex(-1)}
                    className="text-center p-2 box-border text-yellow-200 font-bold cursor-pointer w-fit h-fit">
                    Go back
                </div>
                <div className=" w-[100%] h-[80%] bg-slate-600 flex justify-between items-center p-2 box-border">
                    {/* previous image */}
                    <div onClick={() => setIndex(index > 0 ? index - 1 : album.images.length - 1)}
                        className="w-[10%] h-fit font-bold cursor-pointer text-center p-2 box-border">
                        prev
                    </div>
                    {/* image div  */}
                    <div className=" w-[80%] h-[80%] flex flex-col justify-between items-center">
                        <div className="w-[70%] h-[80%] flex  justify-center items-center">
                            <img src={album.images[index].url} alt={album.images[index].title} className="w-[100%] h-[100%] bg-orange-200" />
                        </div>
                        <div className="w-[100%] h-fit p-2 box-content text-center font-bold">
                            {album.images[index].title}
                        </div>

                    </div>
                    {/* next Image  */}
                    <div onClick={() => setIndex(index < album.images.length - 1 ? index + 1 : 0)}
                        className="w-[10%] h-fit font-bold cursor-pointer text-center p-2 box-border">
                        next
                    </div>
                </div>

            </div>

        </>
    )
}

export default Carousel;