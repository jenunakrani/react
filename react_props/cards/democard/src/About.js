import { Button } from "bootstrap";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
function About(props) {

          return (
                    <>
                              <div className="col-xl-4 col-lg-6">
                                        <div className="div my-5 hid" >
                                                  <img src={props.img} className="img_cors"></img>
                                                  <h2 className="h2 my-3">
                                                            {props.course}
                                                  </h2><hr />
                                                  <div className="pb-3">
                                                            <BsStarFill className="icons text-warning" /><BsStarFill className="icon text-warning" /><BsStarFill className="icon text-warning" /><BsStarFill className="icon text-warning" /><BsStarHalf className="icon text-warning" />
                                                            <div className="btn btn-dark ms-5">Know More..!</div>
                                                            {/* <Button ></Button> */}
                                                  </div>
                                        </div>
                                      
                                        
                              </div>

                    </>
          )

}
export default About 