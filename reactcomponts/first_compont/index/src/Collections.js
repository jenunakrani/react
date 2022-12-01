import { BsFillCaretRightFill } from "react-icons/bs";
function Collections()
{
return(
          <>
                    <div className="container1 spacer ">
                              <div>
                                        <h1>Collections</h1>
                                        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
                              </div>
                              <div className="flex">
                              <div className="colle_row">
                                        <div className='colle'>
                                                  <img src={require('./img/open.jpg')}></img>
                                        </div>
                                        <div className="colle_content">
                                                  <h4>New in Town</h4>
                                                  14 Places <BsFillCaretRightFill/>
                                        </div>
                              </div>
                              <div className="colle_row">
                                        <div className='colle'>
                                                  <img src={require('./img/night.jpg')}></img>
                                        </div>
                                        <div className="colle_content">
                                                  <h4>New in Town</h4>
                                                  14 Places <BsFillCaretRightFill/>
                                        </div>
                              </div>
                              <div className="colle_row">
                                        <div className='colle'>
                                                  <img src={require('./img/brunch.jpg')}></img>
                                        </div>
                                        <div className="colle_content">
                                                  <h4>New in Town</h4>
                                                  14 Places <BsFillCaretRightFill/>
                                        </div>
                              </div>
                              <div className="colle_row">
                                        <div className='colle'>
                                                  <img src={require('./img/romentic.jpg')}></img>
                                        </div>
                                        <div className="colle_content">
                                                  <h4>New in Town</h4>
                                                  14 Places <BsFillCaretRightFill/>
                                        </div>
                              </div>
                              </div>
                    </div>
          </>
)

}
export default Collections