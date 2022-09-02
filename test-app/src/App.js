import logo from './logo.svg';
import './App.css';
import './Style.css'

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
        <p>
          Default
        </p>
        <div className='btnClass'>
          <button className='primary'>Primary</button>
          <button className='secondary'>Secondary</button>
          <button className='disable'>Disable</button>
        </div>
      <h1>Status</h1>
      <div className='btnClass'>
          <button className='success'>Success</button>
          <button className='delete'>Delete</button>
        </div>

        <div className='shape'>
          <div className='box-B200'>

          </div>
          <div className='box-D400'>

          </div>
          <div className='box-white'>

          </div>
          <div className='box-B100'>

          </div>
          <div className='box-R100'>

          </div>
          <div className='box-white'>

          </div>
          <div className='box-white'>

          </div>
          <div className='box-white'>

          </div>
        </div>
    </div>
  );
}

export default App;
