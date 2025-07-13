import React from 'react'
import "./style.css"
import chacha from "../assets/AiChacha.jpeg"
import Divy from "../assets/Divy.png"
import Vedant from  "../assets/Vedant.jpeg"
import Ansh from "../assets/Ansh.jpeg"
import AICHACHA from "../assets/AIChacha.jpeg"
import Chacha from "../assets/Chacha.mp4"
const About = () => {
  return (
    <>

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-left">
            <div class="image-placeholder">
              <video controls autoPlay className='aiimg' style={{borderRadius:"20px"}}>
                <source src={Chacha} type='video/mp4'/>
              </video>
            </div>
          </div>
          <div class="hero-right">
            <h1 class="hero-title">Meet AI<span class="ai-text"> ChaCha</span></h1>
            <p class="hero-subtitle">Your one-stop AI shortcut — built to save time, unlock creativity, and help you find the perfect AI tool for any task without endless searching.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="section-content">
          <div class="section-text">
            <h2 class="section-title head-title">What is ChaCha.<span class="ai-text">Ai</span></h2>
            <p class="section-description">ChaCha.Ai doesn't build AI tools — it brings the best ones together in one clean, filterable dashboard. Think of it as your AI tool discovery engine!</p>
            
            <div class="feature-list">
              <div class="feature-item">
                <span class="feature-icon">🎵</span>
                <span>Audio & Video Tools</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎨</span>
                <span>Design & Image Generation</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💻</span>
                <span>Code & Development</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📧</span>
                <span>Email & Communication</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📚</span>
                <span>Education & Research</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🤖</span>
                <span>Chatbots & AI Assistants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="chacha-section">
      <div class="container">
        <div class="section-content">
          <div class="section-text">
            <h2 class="section-title">Meet AI Chacha's Founder and Developers👋</h2>
            <p class="section-description desc-head">Your friendly, desi-style virtual guide who makes finding AI tools as easy as chai and samosa!</p>
            
            <div class="chacha-features">
              <div class="chacha-feature">
                <div class="chacha-feature-icon"></div>
                <div class="chacha-feature-content">
                 <img src={Divy} alt="" height="100px"/>
                  <div id="col">
                    <h2> Divy Arora</h2>
                  <h4>Founder & Developer</h4>
                  <h5>AiChacha</h5>
                  </div>
                </div>
              </div>
              
              <div class="chacha-feature">
                <div class="chacha-feature-icon"></div>
                <div class="chacha-feature-content">
                  {/* <h3>Perfect Matches</h3> */}
                 <img src={Vedant} alt="" height="100px"  style={{borderRadius:"103px"}}/>
                  <div id="col">
                  <h2>Vedant Rawal</h2>
                  <h3>Developer</h3>
                  <h5>AiChacha</h5>
                  </div>
                </div>
              </div>
              
              <div class="chacha-feature">
                <div class="chacha-feature-icon"></div>
                <div class="chacha-feature-content">
                  {/* <h3>Quick Compare</h3> */}
                   {/* <h3>Perfect Matches</h3> */}
                 <img src={Ansh} alt="" height="100px" style={{borderRadius:"103px"}}/>
                  <div id="col">
                  <h2>Ansh Tiwari</h2>
                  <h3>Developer</h3>
                  <h5>AiChacha</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="chacha-visual">
            <div class="chacha-chat-bubble">
              <p>"Arre yaar, looking for AI tools? Let me help you find the perfect one! 🚀"</p>
            </div>
            <div class="chacha-character">
              <div class="chacha-avatar">
                <img src={AICHACHA} alt="" height="80px" style={{borderRadius:"50px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About