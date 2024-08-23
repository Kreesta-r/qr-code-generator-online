import QRCodeGenerator from './QRCodeGenerator.jsx';
import './App.css'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';


const App = () => {
  return (
    <div className='App'>
      <Header/>
      
      <div className='app-content'>
       <QRCodeGenerator />
      </div>
      <Footer/>
    </div>
  );
};

export default App;