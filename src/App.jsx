
import('tailwindcss').Config
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from "react";

import './App.css'
import AlbumForm from './components/AlbumForm/AlbumForm'
import AlbumList from './components/AlbumList/AlbumList'
import Navbar from './components/Navbar/Navbar'
import { db } from './firebaseInit'
import ImageList from "./components/ImageList/ImageList";
// import { useReducer, useState } from "react";


function App() {

  // const [state, dispatch] = useReducer(reducer, { albums: [], albumFormVisible: false, currentAlbum: -1 })

  const [albums, setAlbums] = useState([]);
  const [albumFormVisible, setAlbumFormVisible] = useState(false);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(-1);


  const getAlbums = () => {
    const query = onSnapshot(collection(db, "albums"), (snapshot) => {
      const Albums = snapshot.docs.map((doc) => (
        { id: doc.id, ...doc.data() }
      )
      );
      setAlbums([...Albums]);
      console.log("Albums in getAlbums:", Albums);


    });

    toast.success("Albums retrived successfully.");
  }

  useEffect(() => {
    getAlbums();
  }, [])


  const addAlbum = async (album) => {
    console.log("In addAlbum: ", album);

    const albumRef = collection(db, "albums");
    const docRef = await addDoc(albumRef, album);

    toast.success("Album added successfully.")
  }
  const deleteAlbum = async (id) => {
    const albumRef = doc(db, "albums", id);
    await deleteDoc(albumRef);

    toast.success("Album deleted successfully.")


  }
  const updateAlbum = async (album) => {
    const albumRef = doc(db, "albums", album.id);
    await updateDoc(albumRef, { ...album })

    toast.success("Album updated successfully.")
  }


  return (
    <>

      {/* <ToastContainer> */}
      <Navbar setAlbumFormVisible={setAlbumFormVisible} albumFormVisible={albumFormVisible} currentAlbumIndex={currentAlbumIndex}
      />
      {albumFormVisible ? <AlbumForm addAlbum={addAlbum} /> : null}
      {currentAlbumIndex >= 0 ? <ImageList album={albums[currentAlbumIndex]}
        setCurrentAlbumIndex={setCurrentAlbumIndex} updateAlbum={updateAlbum} /> :
        <AlbumList Albums={albums} setCurrentAlbumIndex={setCurrentAlbumIndex}
          deleteAlbum={deleteAlbum} updateAlbum={updateAlbum} />}
      {/* </ToastContainer> */}




    </>
  )
}

export default App
