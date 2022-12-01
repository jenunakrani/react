import './Section.css';
function Section()
{
          return(
                    <>
                              <div className='container1 section_top flex'>
                                        <div className="row">
                                                  <div className='img_div'>
                                                            <img src={require('./img/first_ing.jpg')}></img>       
                                                  </div>
                                                  <div className='content'>
                                                            <h3>Order Online</h3>
                                                           Stay home and order to your doorstep
                                                  </div>
                                        </div>
                                        <div className="row">
                                                  <div className='img_div'>
                                                            <img src={require('./img/sec_img.img')}></img>       
                                                  </div>
                                                  <div className='content'>
                                                            <h3>Dining</h3>
                                                            View the city's favourite dining venues
                                                  </div>
                                        </div>
                                        <div className="row">
                                                  <div className='img_div'>
                                                            <img src={require('./img/third_img.jpg')}></img>       
                                                  </div>
                                                  <div className='content'>
                                                            <h3>Nightlife and Clubs</h3>
                                                            Explore the city’s top nightlife outlets
                                                  </div>
                                        </div>                         
                              </div>
                    </>
          )

}
export default Section