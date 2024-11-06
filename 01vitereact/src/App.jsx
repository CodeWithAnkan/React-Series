import Chai from "./chai"

function App() {
  const username = "chai aur code"
  
  return ( //bina div ke ek hi element return hosakta hai
    <>
    <Chai/>
    <p>test para</p>
    <h1>Chai aur react | {username}</h1>
    </>
    
  )
}

export default App
