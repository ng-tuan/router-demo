import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
