import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#0e1621";
      showAlert("Dark mode has been enabled!", "success");
      // document.title = 'TextWiz - Dark Mode';
      // document.body.style.color="#fff";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled!", "success");
      // document.title = 'TextWiz - Light Mode';
      // document.body.style.color="black";
    }
  }

  return (
    <>
      <Navbar title="TextWiz" aboutText="About" mode={mode} toggle={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter text to analyze..." mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
     
    </>
  );
}

export default App;
