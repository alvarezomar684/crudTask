import { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { CreateToDo } from './components/CreateToDo';
import { ToDoItem } from './components/ToDoItem';
import { read } from './services/read';
import { create } from './services/create';
import { deleteToDo } from './services/delete';



function App() {

  const [toDo, setToDo] = useState([])
  const { register, handleSubmit, reset} = useForm()  

  const onSubmit = values => {     
    const miFunc = async () => {
      const res = await create(values)      
      setToDo((prevState) => [ res.data, ...prevState ])
      reset()
    }
    miFunc ()
  }

  const onDeleteToDo = id => {
    const miFunc = async () => {         
      await deleteToDo(id)
      setToDo(prevState => prevState.filter((value) => value.id !== id))   
    }
    miFunc ()
  }

  useEffect(()=>{
    const miFunc = async () => {
      const data = await read()      
      setToDo(data.todos)      
    }
    miFunc ()
    
  },[])  

  const list = toDo.map(e => (
  <ToDoItem 
    key={e.id} 
    task={e.task} 
    student={e.student} 
    id={e.id}    
    handleDelete={onDeleteToDo}    
    register={register}    
  />))
  
  return (
    <div className="App">
      <header className="App-header">
        <CreateToDo 
          handleSubmit={handleSubmit} 
          register={register} 
          handleCreateToDo={onSubmit}            
        />
        <div>
          {list}
        </div>        
      </header>
    </div>
  );
}

export default App;
