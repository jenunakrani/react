function Icon(props) {

          return (
                    <>
                              <div className="col-xl-4 col-lg-6 my-3">
                                        <div className="card_icons rounded-4">
                                                  <div >
                                                            <img src={props.img} className="img_icon"></img>
                                                  </div>
                                                  <div className="py-3 px-5">
                                                            <h5 className="text-bold">
                                                                      {props.title}
                                                            </h5>
                                                            <p className="discription">
                                                                      Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                                                            </p>
                                                  </div>

                                        </div>
                              </div>

                    </>
          )
}
export default Icon