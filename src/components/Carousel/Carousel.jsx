
const Carousel = (props) => {
    const { album, index, setIndex } = props;
    return (
        <>
            <div onClick={() => setIndex(-1)}> Go back</div>
            <div onClick={() => setIndex(index > 0 ? index - 1 : album.image.length - 1)}>prev</div>
            <div
                className=" w-[20%] h-[35%]
             bg-slate-600 flex flex-col justify-between items-center">
                <div className="w-[100%] h-[75%]">
                    <img src={album.image[index].url} alt={album.image[index].title} className="w-full h-full" />
                </div>
                <div className="w-[100%] h-[25%] p-2 box-content">
                    <h3>{album.image[index].title}</h3>
                </div>

            </div>
            <div onClick={() => setIndex(index < album.image.length - 1 ? index + 1 : 0)}>next</div>
        </>
    )
}

export default Carousel;