import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Logo and About Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold">Tasty Treats</h5>
                        <p>
                            Serving delicious homemade meals since 2020. We believe in fresh ingredients, traditional recipes, and lots of love in every bite.
                        </p>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/menu" className="text-white text-decoration-none">Menu</a>
                            </li>
                            <li>
                                <a href="/about" className="text-white text-decoration-none">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white text-decoration-none">Contact</a>
                            </li>
                            <li>
                                <a href="/locations" className="text-white text-decoration-none">Our Locations</a>
                            </li>
                        </ul>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold">Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="text-center mt-4">
                    <p className="mb-0">&copy; 2024 Tasty Treats. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
