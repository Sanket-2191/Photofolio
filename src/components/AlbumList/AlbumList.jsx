import Album from "../Album/Album";

const AlbumList = ({ Albums, updateAlbum, deleteAlbum }) => {

    // let Albums = ["album", "album", "album", "album"];

    return (
        <>
            <div
                className="flex  justify-around 
            items-start w-[100%] h-[90%] 
            p-1 box-content bg-slate-500">
                {
                    Albums.map((a, i) =>
                        <Album key={i} album={a} updateAlbum={updateAlbum} deleteAlbum={deleteAlbum} />
                    )
                }
                {/* <Album /> */}


            </div>


        </>
    )
}

export default AlbumList;