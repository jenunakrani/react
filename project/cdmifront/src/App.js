import logo from './logo.svg';
import './App.css';
import './mycss.css';

function App() {
      return (
            <>
                  {/* start header */}
                  <header>
                        <div class="top_header  ">
                              <div class="flex container justify-between ">
                                    <div class="flex justify-between left_detail">
                                          <div class="d1">
                                                {/* <img src={require('./img/email.jpg')} class="email"></img>*/}
                                                <span>info@cdmi.in </span>
                                          </div>
                                          <div class="d2">
                                                {/* <img src={require('./img/certi.jpg')} class="email"></img> */}
                                                <span>Verify Certificate</span>
                                          </div>
                                    </div>
                                    <div>
                                          <a href="#">HAVE ANY QUESTION ? +91 90333 16003 </a>
                                    </div>
                                    <div>
                                          <a href="#" class="d1">Fb Twt Insta Wa In </a>
                                          {/* <img src={require('./img/certi.jpg')} class="email"></img>
                            <img src={require('./img/certi.jpg')} class="email"></img>
                            <img src={require('./img/certi.jpg')} class="email"></img>
                            <img src={require('./img/certi.jpg')} class="email"></img>
                            <img src={require('./img/certi.jpg')} class="email"></img> */}
                                    </div>
                              </div>
                        </div>

                        {/* main heder */}
                        <div class=" main_header container ">
                              <nav class="flex navbar ">
                                    <div class="logo">
                                                 <a href="#"><img src={require('./img/logo.jpg')} alt="img"></img></a>
                                    </div>
                                    <div class="nav">    
                                          <ul class="flex main_menu">
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">Courses</a></li>
                                                <li><a href="#">College Courses</a></li>
                                                <li><a href="#">Activities</a>
                                                      <ul class="sub_menu">
                                                            <li><a href="#">Gallary</a></li>
                                                            <li><a href="#">Events</a></li>
                                                      </ul>
                                                </li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Know Us</a>
                                                      <ul class="sub_menu">
                                                            <li><a href="#">About us</a></li>
                                                            <li><a href="#">Succes Story </a></li>
                                                            <li><a href="#">Plcement partner</a></li>
                                                      </ul>
                                                </li>
                                                <li><a href="#">Get in Touch Us</a></li>
                                                <li><a href="#">Student Zone</a></li>
                                          </ul>
                                    </div>
                              </nav>
                        </div>
                  </header>
                  {/* END HEADER */}
                  {/*SLIDER  START */}
                  <div class="slider">
                        <img src={require('./img/s_5.jpg')}></img>
                  </div>
                  {/* SLIDER END */}
                  {/*  START SECTION COURSES */}
                  <section class="container spacer">
                        <div>
                              <div class="heading">
                                    <span>CREATIVE COURSE</span>
                                    <h2>OFFERED COURSES</h2>
                              </div>
                              <div>
                                    <div class="flex main_sec">
                                          <div class="fbox">
                                                <div>
                                                      <video loop autoPlay muted height="100%" width="100%">
                                                            <source src="https://www.cdmi.in/course_category/multimedia-training-institute.mp4" type="video/mp4"></source>
                                                      </video>
                                                </div>
                                                <h1>Development Courses</h1>
                                                <br></br><hr></hr>
                                                <button>konw More..!</button>
                                          </div>
                                          <div class="fbox">
                                                <div>
                                                      <video loop autoPlay muted height="100%" width="100%">
                                                            <source src="https://www.cdmi.in/course_category/it-training-institute.mp4" type="video/mp4"></source>
                                                      </video>
                                                </div>
                                                <h1>Programming IT</h1>
                                                <br></br><hr></hr>
                                                <button>konw More..!</button>
                                          </div>
                                          <div class="fbox">
                                                <div>
                                                      <video loop autoPlay muted height="100%" width="100%">
                                                            <source src="https://www.cdmi.in/course_category/graphics-animation-course.mp4"></source>
                                                      </video>
                                                </div>
                                                <h1>Design Courses</h1>
                                                <br></br><hr></hr>
                                                <button>konw More..!</button>
                                          </div>
                                    </div>

                                    <div class="flex main_sec">
                                          <div class="fbox">
                                                <div>
                                                      <video loop autoPlay muted height="100%" width="100%">
                                                            <source src="https://www.cdmi.in/course_category/letest-technology-course.mp4" type="video/mp4"></source>
                                                      </video>
                                                </div>
                                                <h1>Trendy Courses</h1>
                                                <br></br><hr></hr>
                                                <button>konw More..!</button>
                                          </div>
                                          <div class="fbox">
                                                <div>
                                                      <video loop autoPlay muted height="100%" width="100%">
                                                            <source src="https://www.cdmi.in/course_category/civil-engineering-course.mp4" type="video/mp4"></source>
                                                      </video>
                                                </div>
                                                <h1>Business Development</h1>
                                                <br></br><hr></hr>
                                                <button>konw More..!</button>
                                          </div>
                                          <div class="fbox">
                                                <div>
                                                      <video loop autoPlay muted height="100%" width="100%">
                                                            <source src="https://www.cdmi.in/course_category/Business_Development.mp4"></source>
                                                      </video>
                                                </div>
                                                <h1>Civil-Mech. Engineering</h1>
                                                <br></br><hr></hr>
                                                <button>konw More..!</button>
                                          </div>
                                    </div>
                                    <div class="corsbtn">
                                          <button>View All Courses </button>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/*  END SECTION COURSES */}
                  {/* ABOUT SECTION  START*/}

                  <div class="spacer">
                        <div>
                              <div class="about_img">
                                    <img src={require('./img/about-us.jpg')} ></img>
                              </div>
                              <div class="about_content">
                                    <h4>ABOUT US</h4>
                                    <b>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</b>
                                    <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                                    <button>Enoroll Now..! </button>

                              </div>
                        </div>
                  </div>

                  {/* START COUNTER */}
                  <div class="counter spacer-top">
                        <img src={require('./img/keybord.jpg')}></img>
                        <div class="flex  justify-between container num">
                              <div>
                                    <h1>8000+</h1>
                                    <p>HAPPY STUDENTS</p>
                              </div>
                              <div>
                                    <h1>10+</h1>
                                    <p>CERTIFICATION APPROVAL</p>
                              </div>
                              <div>
                                    <h1>60+</h1>
                                    <p>CERTIFIED TEACHERS</p>
                              </div>
                              <div>
                                    <h1>4000+</h1>
                                    <p>STUDENTS PLACED</p>
                              </div>
                        </div>
                  </div>
                  {/* HAPPY STUDENTS */}
                  <section class="spacer-top container">
                        <div class="flex">
                              <div>
                                    <div class="hdg">
                                          <p>HAPPY STUDENTS</p>
                                          <b>ALUMNI SPEAK</b>
                                    </div>
                                    <div class="std flex">
                                          <span>Hello, I  am Darshan Creative Design & Multimedia Institute has a very good environment, where I studied Game Development. I Got More Knowledge  About that tariners Well The Faculties were very knowledgeable and they behaved like family members. They guided me in every way for my better career. I thank Creative Design & Multimedia Institute which is my learning paradise.... Big Thank You</span>
                                          <div class="std_img">
                                                <img src={require('./img/darshan-mungra-android.jpg')}></img>
                                          </div>
                                          <div class="std_name">
                                                <h3>Darshan Mungra</h3>
                                                <i>Android developer<span> @ Unitech IT Solution</span></i>
                                          </div>
                                    </div>
                              </div>
                              <div class="std_main_img">
                                    <img src={require('./img/shape.jpg')} class="shape"></img>
                                    <img src={require('./img/std.jpg')} class="shape_img"></img>
                              </div>
                        </div>
                  </section>
                  {/* why choose creative */}
                  <section class=" corse ">
                        <div class="container">
                              <div class="heading_sec">
                                    <span>READ OUR DIFFERENCE</span>
                                    <h2>WHY CHOOSE CREATIVE</h2>
                              </div>
                              <div>
                                    <div class="flex main_sec">
                                          <div class="fbox2">
                                                <h1>Industry Experts As Trainers</h1>
                                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                                          </div>
                                          <div class="fbox2">
                                                <h1>Latest Curriculum</h1>
                                                <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                                          </div>
                                          <div class="fbox2">
                                                <h1>Latest Technology</h1>
                                                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                                          </div>
                                    </div>

                                    <div class="flex main_sec">
                                          <div class="fbox2">
                                                <h1>Interview Assistance</h1>
                                                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                                          </div>
                                          <div class="fbox2">
                                                <h1>Free Upgradation</h1>
                                                <p>We will be provided free upgradation for any newer version of the course you have.</p>
                                          </div>
                                          <div class="fbox2">
                                                <h1>Lifetime Support</h1>
                                                <p>We will provide you lifetime support on all the courses you learned from us.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* STUDENT PLACEMENT */}
                  <section class="container ">
                        <div>
                              <div>
                                    <div class="heading_sec spacer-top">
                                          <span>STUDENT PLACEMENT</span>
                                          <h2>OUR RECRUITMENT PARTNERS</h2>
                                    </div>
                                    <div class="flex cmpany">
                                          <div class="cmp_img"><img src={require('./img/c_1.jpg')}></img></div>
                                          <div class="cmp_img"><img src={require('./img/c_2.jpg')}></img></div>
                                          <div class="cmp_img"><img src={require('./img/c_3.jpg')}></img></div>
                                          <div class="cmp_img"><img src={require('./img/c_4.jpg')}></img></div>
                                          <div class="cmp_img"><img src={require('./img/c_5.jpg')}></img></div>
                                          <div class="cmp_img"><img src={require('./img/c_6.jpg')}></img></div>
                                    </div>
                              </div>
                              <div class="main_crs">
                                    <h1>Our Demanded Course -</h1>
                                    <div class="all_crs " >
                                          <div class="f1c">
                                                <a href="#">Game Design Training Course In Surat</a>
                                                <a href="#">Best Codeigniter Training Institute </a>
                                                <a href="#"> PHP Project Company In Surat </a>
                                                <a href="#"> Google Sketchup Training Institute In Katargam</a>
                                                <br></br><br></br>
                                          </div>
                                          <div class="f2c">
                                                <a href="#">Creo Parametrics Mechanical Training Course </a>
                                                <a href="#">Android training institute in varachha</a>
                                                <a href="#">coreldraw training institute in varachha</a>
                                                <br></br><br></br>
                                          </div>
                                          <div class="f3c">
                                                <a href="#">mechanical engineering training institute in katargam</a>
                                                <a href="#">Illustrator training course</a>
                                          </div>
                                          <p>Show More</p>
                                    </div>

                              </div>
                        </div>
                  </section>

                  {/* footer */}
                  <section class="spacer-top">
                        <div class="main_footer ">
                              <div class="container spacer-top flex">
                                    <div class="frist_div">
                                          <img src={require('./img/logo.jpg')}></img>
                                          <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                          <h3>FOLLOW US ON</h3>
                                    </div>
                                    <div class="second_div">
                                          <h4>FEATURE LINKS</h4><br></br>
                                          <p>About Us</p>
                                          <p>Blogs</p>
                                          <p>Join Us</p>
                                          <p>Company Login</p>
                                          <p>Certificate Verification</p>
                                    </div>
                                    <div class="second_div">
                                          <h4>TRENDY COURSES</h4><br></br>
                                          <p>Python course training</p>
                                          <p>Node JS course training</p>
                                          <p>Angular JS course<br></br> training</p>
                                          <p>React JS course training</p>
                                          <p>Unity 3D course training</p>
                                          <p>Ethical Hacking course training</p>
                                          <p>React Native course<br></br> training</p>
                                          <p>Desktop App Development<br></br> course training</p>
                                          <p>Master In Blockchain <br></br>course training</p>
                                    </div>
                                    <div class="second_div_last">
                                          <h4>OUR BRANCHES</h4><br></br>
                                          <div>
                                                <b>HEAD OFFICE - YOGICHOWK</b>
                                                <p>401-404, 4<sup>nd</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat</p>
                                                <h5>mo :<span> +91 90 3333 5009</span></h5>
                                          </div>
                                          <div>
                                                <b>BRANCH 1 - KATARGAM</b>
                                                <p>327-334, 3<sup>nd</sup> Floor, Laxmi Enclave, Opp. Gajera School, Katargam, Surat</p>
                                                <h5>mo :<span> +91 90 3333 5009</span></h5>
                                          </div>
                                          <div>
                                                <b>BRANCH 2 - MOTA VARACHHA</b>
                                                <p>B 201-203, 2<sup>nd</sup> Floor, Aditya Complex, VIP Circle, Utran Mota Varachha,Surat</p>
                                                <h5>mo :<span> +91 90 3333 5009</span></h5>
                                          </div>
                                          <button>Get Virtual Tour</button>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* copyright */}
                  <section>
                        <div class="copyright">
                              <p class="container">© 2022 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                        </div>
                  </section>
            </>
      );
}

export default App;
