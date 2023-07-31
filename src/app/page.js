'use client';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar'
import FiltertTab from './components/FiltertTab'
import Cards from './components/Cards'
import {filterData,apiUrl} from './data'
import Loading from './components/Loading';


export default function Home() {
  //variable for data of courses from the api
  const [courses,setCourses] = useState(null)
  //variable for the loading component
  const [loading, setLoading] = useState(true)
  //array for category initialized with all
  const [category,setCategory] = useState(filterData[0].title)

  //function for the fetching the data
    const fetchData = async () => {
      setLoading(true)
      try{
        let res = await fetch(apiUrl);
        let outData = await res.json();
        //set the data to the variable
        setCourses(outData.data);
      }
      catch(error){
        toast.error("Something Went Wrong");
      }
      setLoading(false)
    };
    
    //invoking the fetch data function 
    useEffect(()=>{
     fetchData();
    },[])

  
  return (
    <div className='w-full h-full min-h-[100vh] relative bg-[#4a4e69] pb-5'>
      <NavBar/>
      <FiltertTab data={filterData} category={category} setCategory={setCategory} />
      {
        loading ? <Loading/> : <Cards courses={courses} category={category} />
      } 
      <ToastContainer />
    </div>
  )
}
