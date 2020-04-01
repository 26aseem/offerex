import React from 'react';
import Navbar from "./Navbar";

const Base= ({
    title = "My Title",
    description = "My descrition",
    className = "bg-dark text-white pt-4",
    children
}) => {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}> {children} </div>        
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-2">
                    <h4>If you got any questions, feel free to reach out!</h4>
                    <button className="btn btn-info btn-lg">Contact Us</button>
                </div>
                <div className="container text-center mt-2">
                    <span className="text-muted ">An Amazing <span className="text-white">Marketplace</span> for all your needs</span>
                </div>
            </footer> 
        </div>
    )
}

export default Base;
