import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

function ThemedApp() {
  const { themeClass } = useContext(ThemeContext);

  return (
    <div className={themeClass}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;