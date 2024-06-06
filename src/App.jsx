
import { BrowserRouter,Route, Routes } from "react-router-dom"
import User from "./components/User"
import Dashboard from "./components/Dashboard"
import Data from "./components/Data"
import HelloWorld from "./components/HelloWorld"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/helloworld" element={<HelloWorld/>}/>
          <Route path="/" element={<User/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/data" element={<Data/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
