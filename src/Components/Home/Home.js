import React from 'react'
import './Home.css'
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    return (
        <div className="home">
            <div className="home__first">
                <h2>Hi</h2>
                <h4 className="home__morsalin"> I am Morsalin</h4>
                <h6>I am a Full Stack Web Developer & Programmer also A Freelancer .. specializiing in mostly JS, but also write Python, PHP and some other stuff.</h6>
            <IconButton>
                <button className="home__button">Hire ME</button>
            </IconButton>
            </div>
            <div className="home__middle">
                <img src="https://res.cloudinary.com/codecaamp/image/upload/v1612162101/character_20_rjx5es.svg" alt="" />
            </div>
        </div>
    )
}

export default Home
