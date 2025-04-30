
 export const cal=(startTime,endTime)=>{
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
