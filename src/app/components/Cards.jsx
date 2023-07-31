import React, { useState } from 'react'
import Card from './Card'

export default function Cards(props) {
  let courses = props.courses
  let category = props.category
  //array for liked courses
  const  [likedCourses,setLikedCourses] = useState([])

  //array for the couses
    let allCourses = [];

    // initializing the course details in a single array 
    const getCourses = ()=>{
      if(category === "All"){
        console.log(courses)
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;    
      }
      else{
        return courses[category]
      }
      
    }

  return (
    <div className='flex gap-5 flex-wrap justify-center w-[1080px] max-w-10/12 mx-auto mb-5'>
      {
        //making the cards for the required couses
        getCourses().map((course)=>{
            return(
                <Card key={course.id} {...course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            );
        })
      }
    </div>
  )
}
