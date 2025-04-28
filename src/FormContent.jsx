import React, { useState } from 'react'
import TableSystem from './TableSystem';

function FormContent({onAddData, data}) {

  const[formDetails,setFormDetails] = useState({plot:"",startTime:"",endTime:"",RunBy:""})
  
  const onSubmitForm=()=>{
   onAddData(formDetails);
   setFormDetails({ plot: "", startTime: "", endTime: "", RunBy: "" });
  }
 
  return (
    <>
     <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
       <div className='border w-75' style={{borderRadius:"12px"}}>
        <h4 className='m-3'>Form</h4>
         <input className='form-control mx-3 my-2 p-3' style={{width: "97%"}} type="text" placeholder="plot" onChange={e=>setFormDetails({...formDetails,plot:e.target.value})}/>
         <input className='form-control mx-3 my-2 p-3' style={{width: "97%"}} type="text" placeholder="startTime" onChange={e=>setFormDetails({...formDetails,startTime:e.target.value})}/>
         <input className='form-control mx-3 my-2 p-3' style={{width: "97%"}} type="text" placeholder="endTime" onChange={e=>setFormDetails({...formDetails,endTime:e.target.value})}/>
         <input className='form-control mx-3 my-2 p-3' style={{width: "97%"}} type="text" placeholder="RunBy" onChange={e=>setFormDetails({...formDetails,RunBy:e.target.value})}/>
         <button className='btn btn-info m-3' onClick={onSubmitForm}>Submit</button>
       </div>
     </div>
    <div className='bg-info' style={{minHeight:"60vh"}}>
       <h3 className='text text-center text-light pt-5'>Irrigation System</h3>
       <div className='container ' style={{minHeight:"80vh",marginTop:"30px"}}>
         <TableSystem data={data}/>
       </div>
     </div>
    </>
  )
}

export default FormContent