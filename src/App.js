import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateProfile from "./CreateProfile";
import EditProfile from "./EditProfile";
import Header from "./Header";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create-profile" element={<CreateProfile />} />

          <Route path="/edit-profile" element={<EditProfile />}>
            <Route path=":profileID" element={<EditProfile />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
