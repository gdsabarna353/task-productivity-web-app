import React from 'react'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Sidebar } from './components/sidebar/Sidebar'
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='right'>
        <Header />
        <Main />
      </div>
      <div className='left'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App