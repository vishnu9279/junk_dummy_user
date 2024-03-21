import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "../src/images/junkbazar 1.png"
const Home = () =>{
    return (
        <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>   
                  Welcome to                  
                    <strong className="brand-name"> Junkbazar</strong>
                  </h1>
                  <h2 className="my-2">
                  Online platform for scrap solution, present in all major cities
                  </h2>
                  <div className="mt-2">
                    <NavLink to="" className="btn-get-started">
                      Sell Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">                
                    <img src={web} className="img-fluid animated " alt="home img" />                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default Home;