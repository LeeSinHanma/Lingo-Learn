import React from 'react'
import './Landing.css'

export default function Landing({ onGetStarted }) {
  return (
    <div className="landing">
      <div className="landing__hero">
        <div className="landing__content">
          <div className="landing__eyebrow">Learn languages faster</div>
          <h1 className="landing__title">LingoLearn — practice, review, remember</h1>
          <p className="landing__subtitle">Short daily lessons, smart review scheduling, and interactive exercises to help you learn faster.</p>

          <div className="landing__cta-row">
            <button className="btn btn--primary" onClick={onGetStarted}>Get started</button>
            <button className="btn btn--ghost" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>Learn more</button>
          </div>
        </div>
      </div>

      <div className="landing__visual">
        <img src="/vite.svg" alt="visual" style={{opacity:0.06, width:380}} />
      </div>
    </div>
  )
}
