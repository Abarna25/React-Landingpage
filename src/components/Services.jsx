import React from 'react'
import '../styles/Services.css'

function Services() {
  return (
    <section class="services">
    <div class="container">
        <h2>Our Services</h2>
        <p>At Edhub, we offer a range of educational services designed to enhance learning experiences for students of all levels.</p>

        <div class="service-cards">
            <div class="service-card">
                <h3>Online Courses</h3>
                <p>Learn at your own pace with our expertly designed online courses across various subjects.</p>
            </div>

            <div class="service-card">
                <h3>Live Tutoring</h3>
                <p>Get one-on-one guidance from professional educators to boost your understanding and skills.</p>
            </div>

            <div class="service-card">
                <h3>Certifications</h3>
                <p>Earn recognized certifications to advance your career and academic growth.</p>
            </div>

            <div class="service-card">
                <h3>Workshops & Webinars</h3>
                <p>Participate in interactive sessions led by industry experts and educators.</p>
            </div>

            <div class="service-card">
                <h3>Career Guidance</h3>
                <p>Receive expert advice on career paths, resume building, and interview preparation.</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Services