import React from 'react';

import customer_love from '../assets/images/customer-love.webp'
import fresh_ingredients from '../assets/images/fresh-ingredients.webp'
import homemade_recipes from '../assets/images/homemade-recipes.webp'
import banner from '../assets/images/banner.webp'


const AboutUs = () => {
    return (
        <div className="about-us-container">

            <div className="hero-section text-center text-white py-5" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
                <h1 className="display-4 fw-bold">Welcome to Tasty Treats</h1>
                <p className="lead">Where Taste Meets Tradition</p>
            </div>


            <div className="our-story py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Our Story</h2>
                    <p className="text-muted text-center">
                        Tasty Treats started in 2020 with a simple mission: to bring fresh, homemade flavors to your plate. Every dish is crafted with love and
                        the finest ingredients, making every bite a celebration of flavor.
                    </p>
                </div>
            </div>


            <div className="values-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Values</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={fresh_ingredients} alt="Fresh Ingredients" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                            <h5>Fresh Ingredients</h5>
                            <p className="text-muted">We use only the freshest, locally sourced ingredients to ensure the best quality.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={homemade_recipes} alt="Homemade Recipes" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                            <h5>Homemade Recipes</h5>
                            <p className="text-muted">Our recipes are rooted in tradition, passed down through generations.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={customer_love} alt="Customer Love" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                            <h5>Customer Love</h5>
                            <p className="text-muted">Our customers are family, and we strive to create experiences they'll always cherish.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="call-to-action text-center py-5 bg-dark text-white">
                <h2 className="mb-3">Visit Us Today!</h2>
                <p className="mb-4">Discover the flavors that make Tasty Treats special.</p>
                <a href="/menu" className="btn btn-primary btn-lg">Explore Our Menu</a>
            </div>
            <hr />
        </div>
    );
};

export default AboutUs;
