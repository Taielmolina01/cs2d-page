import './App.css'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage'

function App() {
  return (
    <>
      <Routes>
          <Route index element={<LandingPage />}/>
      </Routes>
    </>
  )
}

export default App;
