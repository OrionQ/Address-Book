import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import CreateProfile from "./routes/CreateProfile";
import EditProfile from "./routes/EditProfile";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Adding routes to the App */}
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
