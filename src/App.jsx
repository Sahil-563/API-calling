import './App.css'
import { useState,useEffect } from "react"
import ToggleSwitch from '../components/ToggleSwitch'
function App() {
  const [title, setTitle] = useState('');
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { Notice: title }
    fetch("https://news-api-vaqm.onrender.com/post/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    })
    alert('Your response has been sent')

  }



  const [isChecked, setIsChecked] = useState(false);
  useEffect(()=>{
    async function updateState() {
      try {
        const response = await fetch('https://news-api-vaqm.onrender.com/toggle');
        const data = await response.json();
        const state = data.state;
        setData(state)
        setIsChecked(state)
        }catch (error) {
        console.error('Error fetching API data:', error);
      }
    }
    const intervalId = setInterval(() => {
      updateState()
    }, 2000);
  },[])
  async function APIchange() {
    setIsChecked(!isChecked);
    try {
      const apiUrl = `https://news-api-vaqm.onrender.com/toggle?state=${!isChecked}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if(response.ok){
        setData(data.state)
      }
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  }


  return (
    <>
      <div className='container'>
        <div className='center'>
        
          <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center',marginTop:'5px',marginBottom:'35px'}}>IOT Display Control</h1>
            <textarea id="Message" name="Message" style={{ color: 'Black' }} value={title} onChange={(e) => setTitle(e.target.value)} required rows='6' placeholder='Type your message here' />
            <input className='Submit' type="submit" />
          </form>
        </div>

        <div className='info'>
          <ToggleSwitch isChecked={isChecked} onChange={APIchange} />
          <h3 className='Status'>Showing: {data ? ('Notice') : ('News')}</h3>
        </div>
      </div>





    </>
  )


}


export default App
