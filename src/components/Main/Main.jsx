import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p onClick={home}>FrostAI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Message FrostAI...' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    FrostAI is in a beta version. Responses may contain inaccuracies.
                </p>
            </div>
        </div>
    </div>
  )
}

function home() {
    window.location.href = '#';
  }


export default Main