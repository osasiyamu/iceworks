import './assets/styles/main.css';
import './assets/styles/home.css';
import Navbar from './assets/pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='catalog'>

        <div className="catalogStyling">
          <div className="card sideCatalog">
            <div className="card-body">
              <p className="card-text">Placeholder for Catalog 1.</p>
            </div>
          </div>
          <div className="card middleCatalog">
            <div className="card-body">
              <p className="card-text">Placeholder for Catalog 2.</p>
            </div>
          </div>
          <div className="card sideCatalog">
            <div className="card-body">
              <p className="card-text">Placeholder for Catalog 3.</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
