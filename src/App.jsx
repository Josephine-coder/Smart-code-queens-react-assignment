import { useState } from 'react';
import Header from "./components/Header"
import pdt from "./data"
import Card from "./components/Card"

// "title": 
  // "description":
function createCard(item) {
  return (
    <Card 
  title={item.title}
  description={item.description}
  />
  )
  
}

function App() {
  


  return (
    <>
      <Header />
      <div className="app">
      {pdt.map(createCard)}
        
      </div>
      
    </>
  )
}

export default App
