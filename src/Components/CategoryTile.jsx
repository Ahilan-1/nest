import React from 'react'
import { BiImage } from 'react-icons/bi'
import { redirect } from 'react-router-dom'
import { useNavigate,Link } from 'react-router-dom'

function CategorieTile({ name, image, path,boards }) {
  let navigate = useNavigate()
 
  return (
    <div className='hover:scale-100 hover:rounded-md hover:shadow-sm'>
    <div  className='bg-white cursor-pointer  hover:shadow-black p-4  flex items-center justify-between border-t-2 border-gray-300  '>
      <img className='h-14 w-14' src={image} alt='Category' /> {/* Category image */}
      <div className='flex flex-col items-center'>
        <h2 className=' font-bold font-mono text-blue-500'>{name}</h2> {/* Category name */}
        <div className='p-2'>
          <p className='text-sm text-gray-500'>This is a placeholder text for the category description.</p> {/* Dummy text */}
        </div>
      </div>
      <div className='flex flex-col items-center '>
        <h3 className='text-md text-center font-sans font-semibold border-b border-gray-300 pb-[.1rem]'>Boards</h3> {/* Boards heading */}
        <p className='text-md font-bold text-slate-600 text-center'>{boards.length}</p> {/* Dummy number */}
      </div>
    </div>
    <div className='flex justify-around p-2 flex-wrap'>
          {
              boards.map((board,index)=>{
                {/* Sending Data To Next Page */}
                let dataToSend = { categoryName:name, image, path , boardName:board.boardName}
                  return(
                    <div key={index}>
                      <p onClick={() =>  navigate(`/category/${path}`, { state: dataToSend })} className='text-xs text-blue-800 font-sans underline-offset-1 cursor-pointer underline'>{board.boardName}</p>
                    </div>
                  )
              })
          }
    </div>
    </div>

  )
}

export default CategorieTile
