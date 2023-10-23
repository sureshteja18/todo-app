import React, { useState } from 'react';
import './App.css'
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import CardText from 'react-bootstrap/esm/CardText';

function Todo() {

    const[todoInput,setTodoInput]=useState('');

    const[todos,setTodos]=useState([
        {
        id:'1',
        task:'learn React'
        },
        {
        id:'2',
        task:'learn Web Devlopment'
        }
   ])
 

   let nextId = 3;

   const handleOnclick=()=>{
     if(todoInput===""){
        alert('enter something in text')
     }
     else{
        let newTodos =[
            ...todos,
            {
                id:nextId++,
                task:todoInput
            }
        ]
        setTodos(newTodos);
        setTodoInput('');
     }
   }

   const handleOnchange=(e)=>{ 
      let change= e.target.value;
      setTodoInput(change);
   }

   const handleDelete=(id)=>{
      const deleteTodos = todos.filter((item)=> item.id !== id)
      setTodos(deleteTodos)
   }


  return (
    <>
    <div className="card-center">
    <Card className='shadow' style={{width:'500px', backgroundColor:'rgb(231 223 239)'}}>
        <CardBody>
            <CardTitle style={{textAlign:'center'}}>Todo App using React</CardTitle>
            <CardText>
          <div className="input-group mt-3">
           <span className="input-group-text" id="basic-addon1">@</span>
           <input type="text" className="form-control" placeholder="Enter Todo" value={todoInput} onChange={handleOnchange} aria- 
            label="Enter Todo" aria-describedby="basic-addon1"/>
           <button className='btn' onClick={handleOnclick}>Add</button>
          </div>
          

          <div className="ul-border">
          <ul className='input-list mt-4'>
            {
                todos.map((item)=>{
                    return(
                       <li className="input-list-item  mb-3 full-width">
                          <p className='mt-2 mb-2'>{item.task}</p>
                          <button className='button shadow-sm'onClick={()=>{handleDelete(item.id)}}>❌</button>
                       </li>
                    )
                })
            }
          </ul>
          </div>
            </CardText>
        </CardBody>
    </Card>
    </div>
    </>
  )
}

export default Todo