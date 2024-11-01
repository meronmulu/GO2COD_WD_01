import React, { useState } from 'react'

function Tasks() {
    const [tasks,setTasks] = useState([]);
  return (
    <>
       <div>
         <input type="text" />

        <button>
            add 
         </button> 

       </div>

       {/* <div>
         <ul>
            <li>
                <span>

                </span>
                <div>
                   <button></button> 
                   <button></button>   
                </div>
            </li>
         </ul>
       </div> */}
    </>
  )
}

export default Tasks