import React from 'react';
import { FaGithub, FaConnectdevelop, FaBuffer } from "react-icons/fa";
const Services = () => {
    return (
        <div className="services" id="service">
            <div className="container">
                <div className="service-header">
                    <div className="common">
                        <h3 className="heading">SERVICES</h3>
                        <h4 className="main-header">
                            MY AWESOME SERVICE
                        </h4>
                        <p className="main-content text-muted">
                            Some of my main services are listed below. I provide different kind of services.
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 ">
                        <div class="col   ">
                            <div class="card p-4 ">
                                <FaGithub className="commonIcons"></FaGithub>
                                <div class="card-body">
                                    <h3 class="card-title">Web Development</h3>
                                    <p class="card-text text-muted">Clean and fresh issue free code to make your website dynamic perfectly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card p-4">
                                <FaConnectdevelop className="commonIcons"></FaConnectdevelop>
                                <div class="card-body">
                                    <h3 class="card-title">Web Design</h3>
                                    <p class="card-text text-muted">Qualified web designs and attractive effects which catches visitor's Eye.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card p-4">
                                <FaBuffer className="commonIcons"></FaBuffer>
                                <div class="card-body">
                                    <h3 class="card-title">Full Stack Developer</h3>
                                    <p class="card-text text-muted">Everything from design to work is done beautifully, ressponsive Design & Web Application & Android Application Ready in a FullStack Developemnet.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;