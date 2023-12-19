import React from "react";
// import UserTable from "./pages/userTable";
import Navbar from "./component/navbar";
import Adduser from "./component/Adduser";
import CodeforInterview from "./component/CodeforInterview";
import Allusers from "./component/Allusers";
import Edituser from "./component/Edituser";
// import LoginForm from "./component/LoginForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        
        <Routes>
         <Route path="/SignIn" element={<Allusers />} />
         <Route path="/SignOut" element={<CodeforInterview />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/" element={<CodeforInterview />} />
          <Route path="/all" element={<Allusers />} />
          <Route path="/edit/:id" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
