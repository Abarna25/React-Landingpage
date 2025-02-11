import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <section id="home" class="hero">
        <h1>Welcome to EduHub</h1>
        <p>Your gateway to quality education and learning resources.</p>
    </section>
    
    <section id="courses">
        <h2>Our Courses</h2>
        <div class="course-list">
            <div class="course">
                <h3>Web Development</h3>
                <p>Learn to build modern websites with HTML, CSS, and JavaScript.</p>
            </div>
            <div class="course">
                <h3>Python Programming</h3>
                <p>Master Python from basics to advanced concepts.</p>
            </div>
            <div class="course">
                <h3>Data Science</h3>
                <p>Understand data analytics, visualization, and machine learning.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home