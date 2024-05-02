import * as React from 'react';
import './App.css'
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'
import SubscribeAndContact from './SubscribeAndContact.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <Content />
      </main>
      <footer>
        <SubscribeAndContact />
      </footer>
    </>
  )
}

export default App;
