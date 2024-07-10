import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav'
import Home from './pages/home/Home'



function App() {

  return (
    <div>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/ze_web_dev" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
