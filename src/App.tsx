import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wireframe } from './screens/Wireframe/Wireframe';
import { EmployerLogin } from './screens/EmployerLogin/EmployerLogin';
import { RecruiterLogin } from './screens/RecruiterLogin/RecruiterLogin';
import { About } from './screens/About/About';
import { Services } from './screens/Services/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wireframe />} />
        <Route path="/employer-login" element={<EmployerLogin />} />
        <Route path="/recruiter-login" element={<RecruiterLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;