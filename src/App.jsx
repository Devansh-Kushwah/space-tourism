import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import Destination from './components/destination';
import Crew  from './components/crew';
import Technology from './components/technology';
import ErrorPage from './components/error-page';
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navbar/>}
          errorElement={<ErrorPage />}
        >
            <Route index element={<Home/>}/>
            <Route path="destination" element={<Destination />} />             
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
