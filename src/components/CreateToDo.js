import React from 'react'


export const CreateToDo = ({handleSubmit, register, handleCreateToDo}) => {
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleCreateToDo)}> 
                    <div>                   
                        <label type="text"  name="task"> Task </label>
                        <input type="text" {...register("task", {require: true} )} placeholder="Write your task" />                        
                    </div>                    
                    <div>
                        <label type="text"  name="student"> Who? </label>
                        <input type="text" {...register("student", {require: true})} placeholder="To assign"/>
                    </div>
                <button>ADD</button>
            </form>
        </div>
    )
}
