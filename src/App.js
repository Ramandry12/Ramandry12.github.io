// parent component
import Albums from './components/Albums/main.albums';
import MainLayouts from "./Layouts/main.layouts";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <MainLayouts>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<h1>Posting</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </MainLayouts>
    </>
  
  )  
}

export default App
