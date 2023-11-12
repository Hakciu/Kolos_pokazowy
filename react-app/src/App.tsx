import React from 'react'
import './App.css'
import PersonList from './PersonList'
import AddPersonForm from './AddPersonForm'
import DeletePersonForm from './DeletePersonForm'
import UpdatePersonForm from './UpdatePersonForm'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<PersonList />} />
          <Route path='/add' element={<AddPersonForm />} />
          <Route path='/update' element={<UpdatePersonForm />} />
          <Route path='/delete' element={<DeletePersonForm />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
