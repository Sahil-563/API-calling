import './App.css'
import { useState } from "react"
import ToggleSwitch from '../components/ToggleSwitch'
function App() {
  const [state, newState] = useState();
  fetch(`https://news-api-vaqm.onrender.com/toggle`)
    .then(function (response) {
      return (response.json());
    }).then(function (data) {
      setData(data.state);
      console.log(datas);
    })
    .catch(function (e) {
      console.log("error", e);
    })
  const [title, setTitle] = useState('');
  const [datas, setData] = useState();
  const handleState = () => {
    return newState(!state);
  }
  
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


  return (
    <>
    <div className='container'>
    <div className='center'>
        <form onSubmit={handleSubmit}>
          <label for="Message"><h1 style={{textAlign:'center'}}>Notice:-</h1></label>
          <textarea id="Message" name="Message" style={{color:'Black'}} value={title} onChange={(e) => setTitle(e.target.value)} required rows='6' placeholder='Type your message here' />
          <input className='Submit' type="submit" />
        </form>
      </div>
      
      <div className='info'>
        <button style={{background: 'white',width:'100%',border:'none',height:'100%'}}className='btn'onChange={handleState} ><ToggleSwitch label="."/></button>
        <h3 className='Status'>Showing: {datas?('Notice'):('News')}</h3>
      </div>
    </div>
      




    </>
  )


}


export default App
