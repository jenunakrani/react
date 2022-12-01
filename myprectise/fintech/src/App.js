import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <>
            <header className="top_heder">
                <div className="flex justify-between container top_heder_content ">
                    <div>
                        <ul className="flex">
                            <li>5000, Dever Streen, Suite 5000, LA, California</li>
                            <li>info@fintech.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3>in Fb tw G+</h3>
                    </div>
                </div>
            </header>
            <header>
                <div className="container">
                    <div className="flex justify-between logo_header">
                        <div className="logo">
                            <img src={require('./img/logo.png')}></img>
                        </div>
                        <div className="flex contact">
                            <ul>
                                <li><b>Contact us</b></li>
                                <li>(626) 436-7654</li>
                            </ul>
                            <ul>
                                <li><b>Working TIme</b></li>
                                <li>Mon - Sat: 9:00 - 18:00</li>
                            </ul>
                            <button>GET A QUOTE</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </header>

            {/* navbar */}
            <div className="container">
                    <nav className="flex top_nav">
                            <div className="navbar">
                                    <ul className="flex justify-between main_menu">
                                            <li>HOME
                                                    <ul className="sub_menu">
                                                            <li>HOME VERSION1</li><hr></hr>
                                                            <li>HOME VERSION2</li>
                                                    </ul>
                                            </li>
                                            <li>SERVICES
                                                     <ul className="sub_menu">
                                                            <li>HOME VERSION1</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li>
                                                    </ul>
                                            </li>
                                            <li>PROJECTS
                                                    <ul className="sub_menu">
                                                            <li>HOME VERSION1</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li>
                                                    </ul>
                                            </li>
                                            <li>PAGE
                                                    <ul className="sub_menu">
                                                            <li>HOME VERSION1</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li>
                                                    </ul>
                                            </li>
                                            <li>BLOG
                                                    <ul className="sub_menu">
                                                            <li>HOME VERSION1</li><hr></hr>
                                                            <li>HOME VERSION2</li><hr></hr>
                                                            <li>HOME VERSION2</li>
                                                    </ul>
                                            </li>
                                            <li>CONTACT
                                                    <ul className="sub_menu">
                                                            <li>HOME VERSION1</li><hr></hr>
                                                            <li>HOME VERSION2</li>
                                                    </ul>
                                            </li>
                                    </ul>
                            </div>
                            <button>serch</button>
                    </nav>
            </div>
            {/* slider */}
            <div>
                    <div className="slider ">
                        <img src={require('./img/slide-4.jpg')}></img>
                    </div>
                    <div className="slider_content">
                            <h2>welcome to FINTECH</h2>
                            <hr width="120px"></hr><br></br>
                            <h1>Creating the right business environment <br/>for your business</h1><br/>
                            <p>We help entrepreneurs with the help they need.</p> <br/>
                            <button> READ MORE</button>
                    </div>
            </div>

            {/* Grid Service Section */}
            <header>
                    <div className="container spacer flex justify-between">
                            <div>
                                    <div className="shape">       
                                    </div>
                                    <div  className="div_1">
                                            <h2>BUSINESS PLANNING</h2><br/>
                                            <i>We provide all kind of business service</i><br/><hr width="260px"></hr><br/>
                                            <p>We are extrememly good at doing busi-ness plan. Our team is experienced and skilled. So you don’t need to worry.</p>
                                    </div>
                            </div>
                            <div>
                                    <div className="shape">       
                                    </div>
                                    <div  className="div_1">
                                            <h2>MARKETING PLANNING</h2><br/>
                                            <i>We provide all kind of business service</i><br/><hr width="260px"></hr><br/>
                                            <p>We are extrememly good at doing busi-ness plan. Our team is experienced and skilled. So you don’t need to worry.</p>
                                    </div>
                            </div>
                            <div>
                                    <div className="shape">       
                                    </div>
                                    <div  className="div_1">
                                            <h2>TAXATION SERVICES</h2><br/>
                                            <i>We provide all kind of business service</i><br/><hr width="260px"></hr><br/>
                                            <p>We are extrememly good at doing busi-ness plan. Our team is experienced and skilled. So you don’t need to worry.</p>
                                    </div>
                            </div>
                            <div>
                                    <div className="shape">       
                                    </div>
                                    <div  className="div_1">
                                            <h2>MARKET RESEARCH</h2><br/>
                                            <i>We provide all kind of business service</i><br/><hr width="260px"></hr><br/>
                                            <p>We are extrememly good at doing busi-ness plan. Our team is experienced and skilled. So you don’t need to worry.</p>
                                    </div>
                            </div>
                            
                    </div>
            </header>
            {/* we are creative */}
            <section className="creative">
                    <div className="container spacer">
                            <div>
                                    <div className="heading">
                                            <h1>We are very Creative</h1>
                                            <p>We have amazing and skilled team who can transform your ideas <br></br> into reality</p>
                                    </div>
                                    <div className="flex main_team">
                                            <div className="team_img">
                                                <img src={require('./img/object.png')}></img>
                                                <h3> Great mind discuss ideas,<br></br>small minds discuss people</h3>
                                            </div>
                                            <div className="all_team flex"> 
                                                    <div className="team flex">
                                                        <div>
                                                                <img src={require('./img/1.png')}></img>
                                                        </div>
                                                        <div className="team_1">
                                                                <h2>Skilled Team</h2>
                                                                <p>Our Skilled team member will make sure that you get what you need. Before any project, we make sure its 100% perfectly done.</p>
                                                        </div>     
                                                    </div>
                                                    <div className="team flex">
                                                        <div>
                                                                <img src={require('./img/3.png')}></img>
                                                        </div>
                                                        <div className="team_1">
                                                                <h2>Boost Your Business</h2>
                                                                <p>Our Skilled team member will make sure that you get what you need. Before any project, we make sure its 100% perfectly done.</p>
                                                        </div>     
                                                    </div>
                                                    <div className="team flex">
                                                        <div>
                                                                <img src={require('./img/2.png')}></img>
                                                        </div>
                                                        <div className="team_1">
                                                                <h2>Data Analysis</h2>
                                                                <p>Our Skilled team member will make sure that you get what you need. Before any project, we make sure its 100% perfectly done.</p>
                                                        </div>     
                                                    </div>
                                                    <div className="team flex">
                                                        <div>
                                                                <img src={require('./img/4.png')}></img>
                                                        </div>
                                                        <div className="team_1">
                                                                <h2>24/7 Support</h2>
                                                                <p>Our Skilled team member will make sure that you get what you need. Before any project, we make sure its 100% perfectly done.</p>
                                                        </div>     
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </section>
            {/* Featured Work */}
            <section>
                        <div className="spacer  container">
                                <div className="heading">
                                        <h1>Featured Work</h1>
                                        <ul className="flex justify-between discription">
                                                <li>All</li>
                                                <li>strategy</li>
                                                <li>Tax</li>
                                                <li>Research</li>
                                                <li>Payroll</li>
                                        </ul>
                                </div>
                                <div>
                                        <table   Cellspacing="20px">
                                                <tr>
                                                        <th rowspan="2"><img  src={require('./img/1.jpg')}></img></th>
                                                        <th><img src={require('./img/2.jpg')}></img></th>
                                                        <th ><img src={require('./img/3.jpg')}></img></th>
                                                </tr>
                                                <tr>
                                                       <th rowspan="2"><img  src={require('./img/6.jpg')}></img></th>
                                                        <th >
                                                                <img src={require('./img/4.jpg')}></img>
                                                                <img src={require('./img/5.jpg')}></img>
                                                        </th>
                                                </tr>
                                        </table>
                                </div>
                        </div>
            </section>
            {/* second slider */}

            <section className="sec_slider">
                        <div  className="container spacer">
                                <div>
                                        <div className="slider_discri">
                                                <h3>I have been using Fintech for more than three years, and I love thier service. Their team is very helpful andskilled, and usually come up with all the support we needed in our entire project. I highly urge to anyone who wants to take their service! They are Brilliant at what they do. Go with them without any doubt. We strongly recommend the service of Fintech.</h3>
                                                <h4>DON BRADMAN, CEO, APPLE</h4>
                                        </div>
                                        <div className="flex slider_imges">
                                                <div>
                                                        <img src={require('./img/1 (1).jpg')}></img>
                                                </div>
                                                <div>
                                                        <img src={require('./img/2 (1).jpg')}></img>
                                                </div>
                                                <div>
                                                        <img src={require('./img/3 (1).jpg')}></img>
                                                </div>
                                                <div>
                                                        <img src={require('./img/4 (1).jpg')}></img>
                                                </div>
                                        </div>
                                </div>
                        </div>
            </section>
            {/* counter */}
            <section className="container spacer">
                <div className="flex">
                        <div className="f1">
                                <h1>3500</h1>
                                <p>Project Completed</p>
                        </div>
                        <div className="f2">
                                <h1>1000</h1>
                                <p>Satisfied Clients</p>
                        </div>
                        <div className="f3">
                                <h1>575</h1>
                                <p>Projects</p>
                        </div>
                        <div className="f4">
                                <h1>14</h1>
                                <p>Years in the Industry</p>
                        </div>
                </div>
            </section>

            {/* footer */}
            <footer>
                        <div className="spacer container"> 
                                <div className="flex">
                                        <div>
                                                <img src={require('./img/logo-2.png')}></img>
                                                <ul>
                                                        <li>About Us</li>
                                                        <li>Services</li>
                                                        <li>Our Team</li>
                                                        <li>FAQ</li>
                                                        <li>Contact Us</li>
                                                </ul>
                                        </div>
                                        <div className="fot_sec">
                                                <h1>RECENT POST</h1>
                                                <p>TOP 5 steps to creating your Business goal in 2017.</p>
                                                <h5>FEBRUARY 23, 2017</h5><br/><hr width="300px"></hr>

                                                <p>TOP 5 steps to creating your Business goal in 2017.</p>
                                                <h5>FEBRUARY 23, 2017</h5><br/><hr width="300px"></hr>
                                        </div>
                                        <div className="SUBSCRIBE">
                                                <h1>SUBSCRIBE</h1>
                                                <input type="text" placeholder="your email address"></input><button>Sign Up</button>

                                                <h2>WE ARE SOCIAL</h2>
                                                <ul className="flex">
                                                        <li>F</li>
                                                        <li>tw</li>
                                                        <li>insta</li>
                                                        <li>in</li>
                                                        <li>G+</li>
                                                        <li>snap</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
            </footer>
        </>
    );
}

export default App;
