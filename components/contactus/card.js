import React from 'react'

const card = ({name,img}) => {
  return (
    <React.Fragment>
         <div>
    <div className="w-full cursor-pointer max-w-4xl p-6 overflow-hidden bg-white rounded-xl shadow-lg">
  <img
    className="object-cover rounded-lg w-full h-56"
    src={img}
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 "
      tabIndex={0}
      role="link"
    >
       {name}
    </a>
    <span className="text-sm text-gray-700 ">
    
    </span>
  </div>
</div>

    </div>
    </React.Fragment>
  )
}

export default card