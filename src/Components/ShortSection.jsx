import React from 'react'

const ShortSection = () => {
  return (
    <>
           {/* upper side text */}
   <div className="md:flex justify-evenly items-center sm:block sm:text-center sm:p-4 pt-10  h-[50vh] bg-white text-black">
   <div>
     <h2 className="text-2xl uppercase text-[#45505C]">Here are the steps</h2> <br></br>
     <h1 className="md:text-5xl sm:text-3xl">
       How do we <span className="text-[#2F9E94]">Work ?</span>
    
     </h1>
   </div>

   <div className="flex justify-center items-center">
     <p>
       We provide digital marketing services to help clients increase
       <br></br>
       their visibility and reach their target audience more effectively.
       <br></br>
       We have assisted various clients Some of the results that have
       been<br></br>
       achieved include :
     </p>
   </div>
 </div>
    </>
  )
}

export default ShortSection
