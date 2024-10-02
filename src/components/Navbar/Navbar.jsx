const Navbar = ({ setAlbumFormVisible, albumFormVisible, currentAlbumIndex }) => {
    return (
        <>
            <div className=" relative top-0 left-0 w-[100%] h-fit z-50 bg-zinc-600 ">
                <div className="flex  items-center justify-between p-0 w-[95%] h-fit bg-transparent">
                    <div className="relative flex items-center justify-start p-4 w-fit h-fit bg-transparent">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 bg-transparent" alt="Flowbite Logo" />
                        <span className=" bg-transparent self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PhotoFolio</span>
                    </div>
                    {currentAlbumIndex === -1 ? <div className="relative p-4 w-fit h-fit">
                        <button type="button" onClick={() => setAlbumFormVisible(!albumFormVisible)}
                        >
                            <span className=" text-yellow-50">Add album</span>
                        </button>
                    </div> : null}

                </div>
            </div>
        </>
    )
}

export default Navbar;
