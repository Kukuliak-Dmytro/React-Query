import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noopener'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noopener'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <nav>
        <Link to='/vite-react-router-template/' >Home</Link>
        {" | "}
        <Link to='/vite-react-router-template/contact' >Contact</Link>
        {" |" }
        <Link to='/vite-react-router-template/contact' >Posts</Link>

      </nav>
     <Outlet></Outlet>
  
    </>
  )
}

export default App
