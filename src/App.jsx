import React, { useState } from 'react'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Sidebar } from './components/sidebar/Sidebar'
import './App.css';

const App = () => {
  
  const [tasks, setTasks] = useState([

    {
      title: "Rise early in the morning",
      completed: true
    },

    {
      title: "Drink tea",
      completed: true
    },

    {
      title: "Take a bath",
      completed: true
    },

    {
      title: "Join the puja rituals",
      completed: true
    },

    {
      title: "Complethe the breakfast",
      completed: true
    },

    {
      title: "Complete the lunch",
      completed: false
    },

    {
      title: "Go for an outing with best-friend",
      completed: false
    },

    {
      title: "Complete the dinner",
      completed: false
    }
  ]);

  

  const onToggleTask = (index) => {
    const newTasks = tasks.map((item, ind)=> {
      if (ind === index){
        return {...item, completed: !item.completed}
      }
      else{
        return {...item}
      }
    });

    // console.log(newTasks);
    setTasks(newTasks);
  }

  return (
    <div className='app'>
      <div className='right'>
        <Header />
        <Main tasks={tasks} toggleTask={onToggleTask}/>
      </div>
      <div className='left'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App