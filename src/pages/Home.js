import React from 'react'
import './home.css'
import Capability from '../Components/Navbar/capability/capability'
import hero from '../images/hero/hero 1.png'
import icon1 from '../images/hero/responsive 1.png'
import icon2 from '../images/hero/responsive 2.png'
import icon3 from '../images/hero/responsive 3.png'
import aboutImage from '../images/hero/aboutImagepng.png'
// import Form from '../Components/Form/Form'

const Home = () => {
    return (
        <div >
            <div className="container hero">
                <div className="detail">
                    <h2>Inovative & Criative Web Application Development</h2>
                    <p>We develop, and manage highly engaging products that generate leads, sell products, and tell stories.</p>
                    <div className="heroButton">
                        <p className="get">Get free project estimate!</p>
                    </div>
                </div>
                <img src={hero} className="image" alt="heroImage"/>
            </div>
            <div>
                <div className="service">
                    <h2 className="ass">Our Services</h2>
                    <p className="ass">We Rank your business on the top level with our creative web designing and SEO service.</p>
                </div>
                <div className="container homeService">
                    <div className="card ">
                        <img src={icon1} className="icon" alt="icon"/>
                        <h3>Web Design</h3>
                        <p>We not only keep up with the ‘design trends’ but focus on users, which makes our services the most fruitful in the entire market.</p>
                    </div>
                    <div className="card-middle">
                    <img src={icon2} className="icon" alt="icon"/>
                        <h3>Web Development</h3>
                        <p>We are always there to assist you in every phase of development. Our team leverages best ever web, mobile  solutions for your business.</p>
                    </div>
                    <div className="card">
                    <img src={icon3} className="icon" alt="icon"/>
                        <h3>SEO</h3>
                        <p>We believe in mutual agreement with our clients for a long term relation. The deal for the service or product development </p>
                    </div>
                </div>
            </div>
            <div className="home3">
                  <div className="container">
                      <h2 className="con" id="about">About Us</h2>
                      <div className="homedetail">
                          <div className="detail deta">
                          <h2>Creative Website design is our passion</h2>
                          <p>Nim Agency produces high-end solutions at affordable and market-competitive rates in website development, web design and SEO services.</p>
                          <div className="homeBut">
                                Reed More
                          </div>
                          </div>
                          <img src={aboutImage} className="image3" alt="aboutImage"/>
                      </div>
                  </div>
            </div>
            <Capability/>
            {/* <Form/> */}

        </div>
        
    )
}

export default Home
