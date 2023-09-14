import { useState } from 'react';
import Navigation from './components/Navigation';
import MainContent from './components/Main-Content';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return <Page />;
}

function Page() {
  return (
    <div className="page-content">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
