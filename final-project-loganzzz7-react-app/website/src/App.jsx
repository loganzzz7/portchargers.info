import * as React from 'react';
import './App.css'
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'
import SubscribeAndContact from './SubscribeAndContact.jsx'
import Chatbot from './Chatbot.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <Content />
        {/* chatbot for fab and actual chat interface */}
        <div className='chatbox'>
          <Chatbot />
        </div>
      </main>
      <footer>
        <SubscribeAndContact />
      </footer>
    </>
  )
}

export default App;
