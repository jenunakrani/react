import logo from './logo.svg';
import './App.css';
import Home from './Home';

const name = "cdmi";
const  email ="cdmi@gmail.com"
const s= ["jenu", "nakrani"]
const  c=['a', ' b']


var arr = [1,2,3,4,5,6,7];

function App() {
  return (
    <>
    <Home name={name} email={email} s={s} c={c}/>

 
      <p>{name}</p>
      <p>{email}</p>

      <ul>{
          arr.map((a,k)=>{
              return(
                <li>{k}=={a}</li>
              )
          }

          )}
      </ul>
    </>
  );
}

export default App;
