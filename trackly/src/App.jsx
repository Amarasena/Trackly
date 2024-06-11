import './App.css';

import { BrowserRouter,Routes, Route } from "react-router-dom";


import Login from './pages/login/Login'
import Home from './pages/home/Home'
import NoPage from './pages/noPage/NoPage'




function App() {
  return (
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Login />}>
  //       <Route index element={<Login />} />
  //       <Route path="home" element={<Home />} />
  //       <Route path="*" element={<NoPage />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  <Home/>
  );
}

export default App;
