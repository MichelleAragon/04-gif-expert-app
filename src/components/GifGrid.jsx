import { useState, useEffect } from "react";
import { getGif } from "./../helpers/getGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {
            images.map( ( image )  => (
                <GifGridItem 
                    key={image.id}
                    { ...image }

                // title={image.title}                
                />
                
                
            ))
        }
      </div>
    </>
  );
};
