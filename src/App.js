import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DataTable from './components/DataTable';

function App() {
  return (
    <div>
      <div className='center-text'>
        <Header />
      </div>

      <div className='center-text'>
        <DataTable />
      </div>

      <div className='center-text'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
