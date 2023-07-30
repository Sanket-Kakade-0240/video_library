import React, { createContext, useContext, useState,useEffect } from 'react'
import { videos } from "../data";

const DataContext = createContext()

const DataProvider = ({children}) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState(JSON.parse(localStorage.getItem('watchLaterVideos')) || []);

  useEffect(() => {
    localStorage.setItem('watchLaterVideos', JSON.stringify(watchLaterVideos));
  }, [watchLaterVideos]);

  const removeVideoFromWatchLater = (id) => {
    setWatchLaterVideos((prevWatchLaterVideos) =>
      prevWatchLaterVideos.filter((video) => video._id !== id)
    );
  };
  const toggleWatchLater = (id) => {
    if (watchLaterVideos.some((video) => video._id === id)) {
      setWatchLaterVideos((prevWatchLaterVideos) =>
        prevWatchLaterVideos.filter((video) => video._id !== id)
      );
    } else {
      const videoToAdd = videos.find((video) => video._id === id);
      setWatchLaterVideos((prevWatchLaterVideos) => [...prevWatchLaterVideos, videoToAdd]);
    }
  };
  return (
    <DataContext.Provider value={{watchLaterVideos,setWatchLaterVideos,removeVideoFromWatchLater,toggleWatchLater}}> 
        {children}

    </DataContext.Provider>
  )
}
export const useData = () => useContext(DataContext);

export default DataProvider