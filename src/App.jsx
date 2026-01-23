import React, { useState } from 'react'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Sidebar } from './components/sidebar/Sidebar'
import './App.css';

/*
list of tasks:
1.
title: "Rise early in the morning"
completed: true
2.
title: "Drink tea"
completed: true
3.
title: "Take a bath"
completed: true
4.
title: "Join the puja rituals"
completed: true
5.
title: "Complethe the breakfast"
completed: true
6.
title: "Complete the lunch"
completed: false
7.
title: "Go for an outing with best-friend"
completed: false
8.
title: "Complete the dinner"
completed: false
*/

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
  return (
    <div className='app'>
      <div className='right'>
        <Header />
        <Main tasks={tasks}/>
      </div>
      <div className='left'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App