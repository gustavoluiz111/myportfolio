import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestPage from './pages/TestPage';
import ErrorBoundary from './components/ErrorBoundary';
// import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestPage />} />
          {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}
export default App;
