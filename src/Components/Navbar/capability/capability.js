import React from 'react'
import './capability.css';
import Capa from '../../../images/hero/capa.png'
import icon4 from '../../../images/hero/icon4.png'
import icon5 from '../../../images/hero/icon5.png'
import icon6 from '../../../images/hero/icon6.png'
import Find from '../../../images/hero/finding.png'

const capability = () => {
    return (
        <div>
            <div className="container capa">
                <h2 className="con">OUR CAPABILITIES</h2>
                <div className="homedetail capability">
                          <img src={Capa} className="image4" alt="aboutImage"/>
                          <div className="detail deta capad">
                          <h2 className="creative">Creative Website design is our passion</h2>
                          <p className="creative">Nim Agency produces high-end solutions at affordable and market-competitive rates in website development, web design and SEO services.</p>
                          <div className="homeBut">
                                Reed More
                          </div>
                          </div>
                      </div>
            </div>
            <div >
            <div className="service">
                    <h2 className="ass" id="services">How does if Work</h2>
                    <p className="ass">OUR KEY OFFERINGS</p>
                </div>
                <div className="container homeService">
                    <div className="card ">
                        <img src={icon4} className="icon" alt="icon"/>
                        <h3>Research</h3>
                        <p>Ability to support development with feature feasibility research, tool/approach/protocol research applying, if required, legal reverseIt was originally </p>
                    </div>
                    <div className="card-middle">
                    <img src={icon5} className="icon" alt="icon"/>
                        <h3>Development</h3>
                        <p>It is necessary to define the activities of the project to be completed on time. We describe an approach for compressing the critical path and details of a process for </p>
                    </div>
                    <div className="card">
                    <img src={icon6} className="icon" alt="icon"/>
                        <h3>Quality Assurance</h3>
                        <p>Ability to support development with feature feasibility research, tool/approach/protocol research applying, if required, legal reverseIt was originally </p>
                    </div>
                </div>
            </div>
            <div className="home3">
                  <div className="container">
                      <div className="homedetail">
                          <div className="detail deta">
                          <h2>Not finding what you are looking for?</h2>
                          <p>If you have an idea for a project that involves Mobile Applications, Content Creation, Visual Idendity, Photography or Video production, you can tell us more and we can see how we can work together. We are always looking for ways of expanding our knolodge and work with the most amazing Freelance Creators.</p>
                          <div className="homeBut">
                                Reed More
                          </div>
                          </div>
                          <img src={Find} className="image4" alt="aboutImage"/>
                      </div>
                  </div>
            </div>
            <div className="footer">
                <div className="container foot">
                    <div className="about-us">
                    <h4 >About Us</h4>
                        <p className="footerT">Nim Agency produces high-end solutions at affordable and market-competitive rates in website development, web design and SEO services.</p>
                    </div>
                    <div className="services">
                    <h4 >Services</h4>
                        <p className="footerT">Search Engine Optimisation
                            Web Development
                            Search Engine Marketing
                            Website Design</p>
                    </div>
                    <div className="other">
                    <h4>Other</h4>
                        <ul>
                            <li>Terms of</li>
                            <li>Service</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="contact-us">
                    <h4>Contact</h4>
                        <ul>
                            <li>Phone:1234</li>
                            <li>Email:info@nimagency.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default capability
