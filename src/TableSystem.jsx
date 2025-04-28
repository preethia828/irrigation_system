import React from 'react'
function TableSystem({data}) {

    console.log(data,"data");
    
    const cal=(startTime,endTime)=>{
      const time = new Date()

    const currentTime = 
    time.getHours().toString().padStart(2, '0') +
    time.getMinutes().toString().padStart(2, '0') +
    time.getSeconds().toString().padStart(2, '0')

      

      if (currentTime < startTime) {
         return "Pending";
       } else if (currentTime >= startTime && currentTime <= endTime) {
         return "Progress";
       } else {
       return  "Done";
       }
      
  }

  return (
    <>
    
     <div className='container border border-1 bg-light' style={{borderRadius:"12px"}}>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h4 className='m-3'>Your Data</h4>
               <p className='text text-secondary ms-3'>Total:{data.length}</p>
            </div>
            <button className='btn mt-4'><i class="fa-solid fa-filter fa-lg"></i></button>
        </div>
            
       <table className='table m-3' style={{ borderSpacing: '0 10px', borderCollapse: 'separate' }}>
        <tr>
            <th>Index</th>
            <th>Plot</th>
            <th>StartTime</th>
            <th>EndTime</th>
            <th>RunBy</th>
            <th>Status</th>
        </tr>
          {
        data.map((itm,idx)=>(
        <tr key={idx} className='p-3'>
              <td>{idx + 1}</td> {/* Auto-generated index */}
              <td>{itm.plot}</td>
              <td>{itm.startTime}</td>
              <td>{itm.endTime}</td>
              <td>{itm.RunBy}</td>
              <td>{cal(itm.startTime,itm.endTime)}</td>
            </tr>
        ))
    }
       </table>
     </div>
    </>
  )
}

export default TableSystem