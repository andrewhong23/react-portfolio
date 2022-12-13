import { useState } from 'react'; 


import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Portfolio from './pages/Porfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('about'); 

  const renderCurrentPage = () => {
    switch(currentPage) {
      case'about':
        return <About />;
      case'portfolio':
        return <Portfolio />;
      case'contact':
        return <Contact />;
      default: 
        return <About />; 
      
    }
  }
  return (
    <div className='main'>
      <Header 
        setCurrentPage={setCurrentPage}
      />
      {renderCurrentPage()}
       
      <Footer />
    </div>
  );
}

export default App;
