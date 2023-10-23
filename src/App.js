import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [data,setData]=useState([]);

  // const [responseMessage,setRessponseMessage]=useState('');

  // const urlData =" https://dummyjson.com/posts";

  // const dummyjson= async ()=>{
  //   try {
  //     const response = await fetch(urlData);
  //     const data = await response.json();
  //     const newData = data.slice(0,25);
  //     console.log(newData);
  //   } catch (error) {
  //     console.log(error);
  //   }}

  //   dummyjson()

  // useEffect(()=>{
  //   fetchUrl();
  // },[])


  useEffect(()=>{

    const url ="https://jsonplaceholder.typicode.com/comments";
   const fetchUrl = async ()=>{
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error) {
        console.log(error);
      }}
  
      fetchUrl()
  },[])

   const handleButton = async()=>{
    const urlPost = "https://jsonplaceholder.typicode.com/comments";
     
    const requestOptions ={
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
       id:151,
       title:'happy life',
       userId:152
      })
    }
    
    try {
      const res= await fetch(urlPost, requestOptions);
      const resData= await res.json();
      console.log(resData);
    } catch (error) {
      console.log(error)
    }

   }


  return (
   <>

    <table>
      <thead>
       <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Body</td>
       </tr>
      </thead>
      <tbody>
        {
          data.slice(0,50).map(item=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

    {/* post data to server */}
    <div>
    <p></p>
    <button onClick={handleButton}>Submit</button>
    </div>
    

    </>
  );
}


export default App;
