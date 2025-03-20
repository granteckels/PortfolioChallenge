import Base from './components/Base'
import AboutMe from './components/AboutMe'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
