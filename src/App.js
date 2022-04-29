import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import  data from "./components/data";

function App() {
  const dados = data.map(item => {
    return (
      <Hero
       {...item}
      />
    )
    
  })
  console.log(dados)
  return (
    <>

    <Navbar />
    
    {dados}
    
    </> 
      
    
  );
}

export default App;
console.log(App)