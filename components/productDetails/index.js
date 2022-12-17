import React from 'react'

function Index({name,description}) {
  return (
      <div>
          <h1 className='font-light text-sm my-6'>{name}</h1>
          <p className='font-light text-sm'>{description}</p>  
      </div>
  )
}

export default Index