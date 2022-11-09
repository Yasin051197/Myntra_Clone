import React from "react"
import HeroSlider, {Slide} from "hero-slider"

const image1="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
 const    image2="https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg"
   const  image3="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg"
   const  image4="https://images7.alphacoders.com/411/411820.jpg"

export default function  SliderData(){
    return (
        <HeroSlider
        slidingAnimation="left_to_right"
        >
            <Slide 
            background={
                {
                    backgroundImageSrc:image1,
                }
            }
            />
             <Slide 
            background={
                {
                    backgroundImageSrc:image2,
                }
            }
            />
             <Slide 
            background={
                {
                    backgroundImageSrc:image3,
                }
            }
            />
             <Slide 
            background={
                {
                    backgroundImageSrc:image4,
                }
            }
            />
        </HeroSlider>
    )
  
}

