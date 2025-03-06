import { useState } from "react";
import Login from "./components/login";
import Appointments from "./components/appointments";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Hospital Community</h1>
      {user ? (
        <>
          <p>Welcome, {user.username} ({user.role})</p>
          <Appointments user={user} />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
