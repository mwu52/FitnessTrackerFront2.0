import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import RegisterUser from "./Register";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <div>
            Hello
        </div>
        <Routes>
            <Route path="/register" element={<RegisterUser/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </>
    )
};

export default App;