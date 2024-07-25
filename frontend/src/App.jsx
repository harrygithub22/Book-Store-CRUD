import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import UpdateBook from './pages/UpdateBook'
import RemoveBook from './pages/RemoveBook'
import ShowBook from './pages/ShowBook'



const App = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/books/add' element ={<AddBook/>}/>
      <Route path='/books/:id' element ={<ShowBook/>}/>
      <Route path='/books/update/:id' element ={<UpdateBook/>}/>
      <Route path='/books/delete/:id' element ={<RemoveBook/>}/>
    </Routes>

  )
}

export default App