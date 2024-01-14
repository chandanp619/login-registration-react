import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginFormComponent from './components/LoginFormComponent';
import RegistrationComponent from './components/RegistrationComponent';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <RegistrationComponent />
          </div>
          <div className='col'>
            <LoginFormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
