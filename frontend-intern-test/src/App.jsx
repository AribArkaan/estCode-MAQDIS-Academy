import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './styles/main.css';
import './styles/themes.css';
import './styles/responsive.css';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Hero />
        <MainSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;