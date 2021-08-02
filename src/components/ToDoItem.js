import React from 'react'


export const ToDoItem = ({task,student,id,handleDelete}) => {   
    
    return (
        <div style={{borderBottom: '2px solid #EAEAEA', display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
            <div style={{display:"flex", flexDirection:"column",marginLeft:"15px"}}>
                <h4 style={{textAlign:"left"}}>Task: {task}</h4>
                <h4 style={{textAlign:"left"}}>Who: {student}</h4>
            </div>            
            <button onClick={()=> {handleDelete(id)}}>DELETE</button>                       
        </div>
    )
}
