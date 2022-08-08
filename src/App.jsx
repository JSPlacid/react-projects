// import {useState} from React;
import ChangeBtn from './components/ChangeBtn';


function App() {

  

  return (
    <div className="App">
      <header className="wrap">
        <h1 className="header">Color flipper</h1>
        <nav className="nav">
          <li><a href="#index.simple">simple color</a></li>
          <li><a href="#index.hex">hex color</a></li>
        </nav>
        
      </header>

      <section className="body">
        <div className="disp">

          
          <div className="btn">
          <ChangeBtn/>
          </div>
        </div>
      </section>
                
    </div>
  )
}

export default App







// const url = 'https://api.github.com/users';
