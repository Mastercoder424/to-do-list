import React, { useState } from 'react'
import './App.css';
import Todo from './component/Todo';
import TodoList from './component/TodoList';


function App() {
  const[listText,setListText]=useState([]);
  let addList = (inputText)=>{
    setListText([...listText,inputText]);
  }
  return (
    <div className="main-container">
       <div className="centre-container">
        <Todo addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listText.map((listItem,i)=>{
          return (
            <TodoList key={i} items={listItem}/>
          )

        })}
       </div>
    </div>
  );
  }

export default App;
