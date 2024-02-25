
/// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import StudentRegistration from './Components/StudentRegistration';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin'
import Home from './Pages/Home';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login/admin" exact component={AdminLogin} />
          <Route path="/login/student" exact component={StudentLogin} />
          <Route path="/register" exact component={StudentRegistration} />
          {user ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route path="/" exact component={LoginPage} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
