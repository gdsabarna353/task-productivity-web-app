import React, { useState } from 'react'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Sidebar } from './components/sidebar/Sidebar'
import './App.css';

const App = () => {
  
  const [tasks, setTasks] = useState([

    {
      id: 1,
      title: "Rise early in the morning",
      completed: true
    },

    {
      id: 2,
      title: "Drink tea",
      completed: true
    },

    {
      id: 3,
      title: "Take a bath",
      completed: true
    },

    {
      id: 4,
      title: "Join the puja rituals",
      completed: true
    },

    {
      id: 5,
      title: "Complethe the breakfast",
      completed: true
    },

    {
      id: 6,
      title: "Complete the lunch",
      completed: false
    },

    {
      id: 7,
      title: "Go for an outing with best-friend",
      completed: false
    },

    {
      id: 8,
      title: "Complete the dinner",
      completed: false
    }

  ]);

  const onToggle = (selectedId) => {
    const newTasks = tasks.map((item)=> {
      if (selectedId === item.id){
        return {...item, completed: !item.completed}
      }
      else{
        return {...item}
      }
    });
    setTasks(newTasks);
  }

  const onAdd = (title) => {
      setTasks([...tasks, {
        id: Date.now(),
        title: title.trim(),
        completed: false
      }]);
  }

  const onDelete = (selectedId) => {
    setTasks(tasks.filter((item) => selectedId !== item.id))
  }

  return (
    <div className='app'>
      <div className='right'>
        <Header />
        <Main tasks={tasks} onToggle={onToggle} onAdd={onAdd} onDelete={onDelete}/>
      </div>
      <div className='left'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App