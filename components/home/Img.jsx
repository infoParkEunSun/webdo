import React from 'react'

const Img = ({url}) => {

  return (
      <div className={'absolute mx-auto ml-[-30vw] mt-[10vh] justify-items-start bg-transparent md:mt-[5vh] md:ml-[10vw] -z-[0]'}>
          <img  className=' w-[80vw] md:w-[30vw]' src={url} />
      </div>

  )
}

export default Img