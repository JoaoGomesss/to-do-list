import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTask />
                  <Tasks />
                </>
              }
            />
            <Route path="/:taskTitle" Component={TaskDetails} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
