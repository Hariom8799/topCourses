import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Card(props) {
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  //reduce the detailed description in a limiting length
  let description = `${props.description.slice(0,150)}...`

  //Liked button handler function 
function likeHandler(){
  //check for the course present or not in array
  if(likedCourses.includes(props.id)){
    //filter the array and set the new in likedCourses
    setLikedCourses((prev)=> prev.filter((cid) => (cid !== props.id)) );
    // toast alert called for warning
    toast.warning("Course Unliked Successfully")
  }
  else{
    // course is not present in array so add in that 
    if(likedCourses === []){
      //Empty array
      setLikedCourses([props.id])
    }
    else{
      // make a shallow copy and reinitilize in the likedCourses array
      setLikedCourses((prev)=> [...prev, props.id]);
    }
    //toast alert called for success
    toast.success("course Liked successfully")
  }
}

  return (
    <div className='w-[300px] relative overflow-hidden rounded-md bg-black bg-opacity-40 text-white'>
       <LazyLoadImage
          alt={props.image.alt}
          src={props.image.url} 
           />
      {/* <img src={props.image.url} alt={props.image.alt}/> */}
      <div className='w-full relative'>
        <button onClick={likeHandler} className='p-1 bg-white rounded-full absolute right-2 -bottom-5'>
          {/* logic for the changing the icon for liked and unliked  */}
          {
            likedCourses.includes(props.id) ? <FcLike  fontSize="1.75rem"/> : <FcLikePlaceholder fontSize={"1.75rem"}/>
          }  
        </button>
      </div>
      <div className='w-full py-3 px-3 space-y-2 min-h-[150px]'>
        <h1 className='font-bold text-xl'>{props.title}</h1>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}
