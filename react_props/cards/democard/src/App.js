import logo from './logo.svg';
import './App.css';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Icon from './Icon';

const arr = [
  { "course": "Web Devlopment", "img": require('./img/web.jpg') },
  { "course": " Web Desing", "img": require('./img/design.jpg') },
  { "course": "Business Devlopment", "img": require('./img/business.jpg') },
  { "course": "Flutter", "img": require('./img/flutter.jpg') },
  { "course": "Programming It", "img": require('./img/it.jpg') },
  { "course": "Node Js", "img": require('./img/node.jpg') },

]
const add_data=[
  {"title":"Industry Experts As Trainers","img" : require('./img/icon-7.png'), "decri" : "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."},
  {"title":"Industry Experts As Trainers","img" : require('./img/icon-7.png'), "decri" : "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."},
  {"title":"Industry Experts As Trainers","img" : require('./img/icon-7.png'), "decri" : "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."},
  {"title":"Industry Experts As Trainers","img" : require('./img/icon-7.png'), "decri" : "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."},
]


function App() {
  return (
    <>
     
      <div  className='container'>
        <div className='row'>
         
            {
              arr.map((i) => {
                return (
                  <About name={i.name}
                    course={i.course}
                    img={i.img} />     
                )
              })
            }
            {
               add_data.map((k) => {
                return (
                  <Icon title={k.title} 
                    img={k.img} decri={k.decri} />     
                )
              })
            }
        </div>
      </div>



    </>
  );
}

export default App;
