import React from 'react'

export default function FiltertTab(props) {

  function categoryHandler(title){
    props.setCategory(title)
    document.getElementsByClassName(`filter-btn-${title}`).className = 'border'
  }

  return (
    <div className='w-[1080px] max-w-10/12 flex gap-5 justify-center py-3 mx-auto'>
        {
          //collect all the data from the file and make required buttons for the data 
            props.data.map((data)=>{
                return <button onClick={()=> categoryHandler(data.title)} key={data.id} id={`filter-btn-${data.title}`} className=' bg-black bg-opacity-50 text-white px-3 py-2 my-2 rounded-md font-bold hover:bg-opacity-80'>{data.title}</button>
            })
        }
    </div>
  )
}
