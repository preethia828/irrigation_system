import React from 'react'
import TableSystem from './TableSystem'

function View({data}) {
  return (
    <>
     <div className='bg-info' style={{minHeight:"60vh"}}>
       <h3 className='text text-center text-light pt-5'>Irrigation System</h3>
       <div className='container ' style={{minHeight:"80vh",marginTop:"30px"}}>
         <TableSystem data={data}/>
       </div>
     </div>
    </>
  )
}

export default View