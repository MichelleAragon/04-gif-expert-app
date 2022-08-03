import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  
    const { images, isLoading } = useFetchGifs(category); 
  console.log(images);
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h4>Loading...</h4> )
      }


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
