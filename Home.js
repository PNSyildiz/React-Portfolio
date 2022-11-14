import React from 'react';
import Profile from './Profile/Profile';
import About from '../AboutMe/About'
import './Home.css'


export default function Home() {
  return (
    <div className="home-container">
        <Profile/>
        
        <About/>
    </div>
  )
}
