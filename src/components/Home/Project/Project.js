import React from 'react';
import bookStationary from '../../../images/book-stationary.png';
import courierService from '../../../images/courier-service.png';
import pandaEcommerce from '../../../images/panda-commerce.png';
import penguinFashion from '../../../images/penguin-fashion.png';
const Project = () => {
    return (
        <div className="project-area" id="project">
            <div className="container">
                <div className="text-center text-light mb-5">
                    <h2>MY Recent <span className="text-danger">Works</span></h2>
                    <h5>Here are a few projects I've worked on recently.</h5>
                    <div className="commonBorder"></div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src={bookStationary} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-light">Book Stationary</h5>
                                <p class="card-text text-muted">My website is usually FullStack, because I have worked on both Front end and BackEnd on this website, HTML5, CSS3, Modern Javascript has been used in FrontEnd, and Node.js, MongoDb, Firebase Authentication, Google map have been used in BackEnd. You can order any type of book you want through this website, if you want to order, you must first visit the website, login with some of your information and then order, order later, if you like our website with your feedback. Come on, Thank you...</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" class="btn btn-danger"><a className="text-decoration-none" href="https://github.com/Moniur121/book-store-slientSite" target="_blank" rel="noopener noreferrer">View Project</a>
                                </button>
                                <button type="button" class="btn btn-warning"><a className="text-decoration-none" href="https://book-store-b1dc2.web.app/" target="_blank" rel="noopener noreferrer">Live Project</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={courierService} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-light">SA Courier Service</h5>
                                <p class="card-text text-muted">My website is usually FullStack, because I have used both Front end and BackEnd on this website, HTML5, CSS3, Modern Javascript, and BackEnd have been used in Front End. .js. Through this website you can bring us to your destination by courier through this website from any place you want, if you want to courier through our website, you must first visit the website, login with some of your information and then order, next order If you like our website, please come back with your feedback, Thank you</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" class="btn btn-danger"><a className="text-decoration-none" href="https://github.com/Moniur121/courier-service-clientSite" target="_blank" rel="noopener noreferrer">View Project</a>
                                </button>
                                <button type="button" class="btn btn-warning"><a className="text-decoration-none" href="https://delivery-services-170b1.web.app/ " target="_blank" rel="noopener noreferrer">Live Project</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={pandaEcommerce} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-light">Panda Ecommerce</h5>
                                <p class="card-text text-muted">Panda Ecommerce Site is a static. Because it did not work on any server site, it used html, css3, bootstrap. However, this design is very Responsive.</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" class="btn btn-danger"><a className="text-decoration-none" href="https://github.com/Moniur121/Panda-Ecommerce-site" target="_blank" rel="noopener noreferrer">View Project</a>
                                </button>
                                <button type="button" class="btn btn-warning"><a className="text-decoration-none" href="https://moniur121.github.io/Panda-Ecommerce-site/" target="_blank" rel="noopener noreferrer">Live Project</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={penguinFashion} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-light">PenguinFashion</h5>
                                <p class="card-text text-muted">PenguinFashion Site is a static. Because it did not work on any server site, it used html, css3, bootstrap. However, this design is very Responsive.</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" class="btn btn-danger"><a className="text-decoration-none" href="https://github.com/Moniur121/Penguin-Fashion-web" target="_blank" rel="noopener noreferrer">View Project</a>
                                </button>
                                <button type="button" class="btn btn-warning"><a className="text-decoration-none" href="https://moniur121.github.io/Penguin-Fashion-web/" target="_blank" rel="noopener noreferrer">Live Project</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;