// App.js - Simple version
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/theme.css';
import './assets/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import ContactForm from './components/ContactForm';
//import SuperAdminDashboard from './components/SuperAdminDashboard'; // Add this
import Footer from './components/Footer';

function App() {
  // Check if we should show admin dashboard
  //const showAdmin = localStorage.getItem('showAdminDashboard') === 'true';
  
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
      <Careers/>
        <ContactForm />
        
   
      </main>
      <Footer />
    </div>
  );
}

export default App;
