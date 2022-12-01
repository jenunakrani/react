import logo from './logo.svg';
import './App.css';
import './mycss.css';
import  demo from './img/s_1.jpg';
const obj ={
  color:"blue"
}

function App() {
  return (
      <div>
          <h1 class="demo">hello </h1>
          <h1 style={{color: "green" , margin: 20 }}>hello </h1>
          <h1 style={obj}>object</h1>
          <img src={require('./img/s_1.jpg')}  style={{height: 200, width:500}}></img>
          <img src={demo}></img>
      </div>
  );
}

export default App;
