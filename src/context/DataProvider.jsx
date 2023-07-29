import React, { createContext, useContext, useState,useEffect } from 'react'
const DataContext = createContext()

const DataProvider = ({children}) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  useEffect(() => {
    localStorage.setItem('watchLaterVideos', JSON.stringify(watchLaterVideos));
  }, [watchLaterVideos]);

  const removeVideoFromWatchLater = (id) => {
    setWatchLaterVideos((prevWatchLaterVideos) =>
      prevWatchLaterVideos.filter((video) => video._id !== id)
    );
  };
  return (
    <DataContext.Provider value={{watchLaterVideos,setWatchLaterVideos,removeVideoFromWatchLater}}> 
        {children}

    </DataContext.Provider>
  )
}
export const useData = () => useContext(DataContext);

export default DataProvider