
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Layout>
      <HeroSection/>
      <Features/>
      </Layout>
    </div>
  );
}

export default App;
