import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

const EduFairyHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Raj Singh",
      role: "Computer Science Student",
      text: "EduFairy transformed my study routine! The AI summarization saves me hours of note-taking.",
    },
    {
      name: "Shrey Malik",
      role: "Medical Student",
      text: "The mock test feature helped me identify weak areas and improve my exam performance significantly.",
    },
    {
      name: "Ria Kapoor",
      role: "Engineering Student",
      text: "Finally, a study platform that understands my needs. The Q&A system is incredibly helpful!",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const globalStyles = `

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      overflow-x: hidden;
      width: 100%;
      max-width: 100vw;
    }

    .homepage-container {
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
    }

    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.5rem 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: %;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .nav-link:hover {
      color: #fbbf24;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 5rem 2rem 3rem;
      text-align: center;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
      width: 100%;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;
    }

    .primary-btn {
      background: white;
      color: #667eea;
      padding: 0.75rem 1.75rem;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .primary-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .secondary-btn {
      background: transparent;
      color: white;
      padding: 0.75rem 1.75rem;
      border: 2px solid white;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .secondary-btn:hover {
      background: white;
      color: #667eea;
    }

    .features {
      padding: 4rem 2rem;
      background: #f8fafc;
      width: 100%;
    }

    .container {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }

    .section-title {
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1rem;
      color: #2d3748;
    }

    .section-subtitle {
      font-size: 1.1rem;
      text-align: center;
      margin-bottom: 3rem;
      color: #718096;
      max-width: 600px;
      margin: 0 auto 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 1.5rem;
      margin-top: 2.5rem;
      width: 100%;
    }

    .feature-card {
      background: white;
      padding: 1.75rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.12);
    }

    .feature-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.25rem;
      font-size: 1.3rem;
      color: white;
    }

    .feature-title {
      font-size: 1.35rem;
      font-weight: 600;
      margin-bottom: 0.875rem;
      color: #2d3748;
    }

    .feature-description {
      color: #718096;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .how-it-works {
      padding: 4rem 2rem;
      background: white;
      width: 100%;
    }

    .steps-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2.5rem;
      margin-top: 2.5rem;
      width: 100%;
    }

    .step {
      text-align: center;
      position: relative;
    }

    .step-number {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 auto 1.25rem;
    }

    .step-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.875rem;
      color: #2d3748;
    }

    .step-description {
      color: #718096;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .testimonials {
      padding: 4rem 2rem;
      background: #f8fafc;
      width: 100%;
    }

    .testimonial-card {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
      position: relative;
    }

    .testimonial-text {
      font-size: 1.1rem;
      font-style: italic;
      margin-bottom: 1.75rem;
      color: #4a5568;
      line-height: 1.6;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .testimonial-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .testimonial-info {
      text-align: left;
    }

    .testimonial-name {
      font-weight: 600;
      color: #2d3748;
      font-size: 0.95rem;
    }

    .testimonial-role {
      color: #718096;
      font-size: 0.85rem;
    }

    .cta {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      width: 100%;
    }

    .cta-title {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta-description {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .footer {
      background: #2d3748;
      color: white;
      padding: 2.5rem 2rem 1rem;
      text-align: center;
      width: 100%;
    }

    .footer-content {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .footer-link {
      color: #cbd5e0;
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.9rem;
    }

    .footer-link:hover {
      color: #667eea;
    }

    .copyright {
      border-top: 1px solid #4a5568;
      padding-top: 1rem;
      color: #a0aec0;
      font-size: 0.9rem;
    }

    .stats-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem 2rem;
      width: 100%;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1.5rem;
      text-align: center;
      width: 100%;
    }

    .stat-item {
      padding: 0.75rem;
    }

    .stat-number {
      font-size: 2.25rem;
      font-weight: 700;
      color: #fbbf24;
      display: block;
    }

    .stat-label {
      font-size: 1rem;
      opacity: 0.9;
      margin-top: 0.25rem;
    }

    @media (max-width: 768px) {
      .header {
        padding: 0.4rem 0;
      }

      .nav {
        padding: 0 1rem;
      }

      .logo {
        font-size: 1.2rem;
      }

      .hero {
        padding: 4.5rem 1rem 2rem;
        min-height: 85vh;
      }

      .hero-title {
        font-size: 2.25rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .nav-links {
        display: ${isMenuOpen ? "flex" : "none"};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1rem;
        gap: 1rem;
      }

      .mobile-menu-btn {
        display: block;
      }

      .section-title {
        font-size: 1.875rem;
      }

      .cta-title {
        font-size: 1.875rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }

      .steps-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .container {
        padding: 0;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .cta-title {
        font-size: 1.75rem;
      }
    }
  `

  return (
    <>
      <style>{globalStyles}</style>
      <div className="homepage-container">
        {/* Header */}
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <span>🧚</span>
              EduFairy
            </div>
            <ul className="nav-links">
              <li>
                <a href="#features" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="nav-link">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="nav-link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="login"
                  className="nav-link secondary-btn"
                  style={{ padding: "0.35rem 1.25rem", fontSize: "0.85rem" }}
                >
                  Login
                  <Link to="/login"></Link>
                </a>
              </li>
            </ul>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Master Your Studies with AI-Powered Intelligence</h1>
            <p className="hero-subtitle">
              EduFairy combines smart planning, AI-powered notes, interactive Q&A, and automated testing to
              revolutionize your learning experience. Study smarter, not harder.
            </p>
            <div style={{ marginTop: "1.5rem", opacity: 0.8, fontSize: "0.95rem" }}>
              <p>✨ Join 10,000+ students already studying smarter</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <div className="stat-label">Active Students</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <div className="stat-label">Tests Generated</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <div className="stat-label">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Powerful Features for Smarter Learning</h2>
            <p className="section-subtitle">Everything you need to organize, understand, and excel in your studies</p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3 className="feature-title">Smart Study Planner</h3>
                <p className="feature-description">
                  Organize your syllabi, create personalized schedules, and track your progress with our intelligent
                  planning system that adapts to your learning pace.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3 className="feature-title">AI-Powered Notes</h3>
                <p className="feature-description">
                  Transform lengthy materials into concise, intelligent summaries. Our AI understands context and
                  highlights key concepts for efficient revision.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3 className="feature-title">Interactive Q&A System</h3>
                <p className="feature-description">
                  Get instant answers to your questions based on your study materials. Our AI tutor is available 24/7 to
                  clarify doubts and explain concepts.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Automated Mock Tests</h3>
                <p className="feature-description">
                  Generate personalized practice tests, get instant feedback, and track your performance to identify
                  areas that need more attention.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3 className="feature-title">Progress Analytics</h3>
                <p className="feature-description">
                  Visualize your learning journey with detailed analytics, performance insights, and personalized
                  recommendations for improvement.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3 className="feature-title">Cross-Platform Sync</h3>
                <p className="feature-description">
                  Access your study materials anywhere, anytime. Seamless synchronization across all your devices keeps
                  you connected to your learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <h2 className="section-title">How EduFairy Works</h2>
            <p className="section-subtitle">Get started in minutes and transform your study routine</p>

            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3 className="step-title">Upload Your Materials</h3>
                <p className="step-description">
                  Simply upload your textbooks, lecture notes, or any study materials. Our AI will process and organize
                  everything for you.
                </p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h3 className="step-title">Create Your Study Plan</h3>
                <p className="step-description">
                  Set your goals, deadlines, and preferences. EduFairy will create a personalized study schedule that
                  fits your lifestyle.
                </p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h3 className="step-title">Study & Practice</h3>
                <p className="step-description">
                  Use AI-generated summaries, ask questions, take mock tests, and track your progress as you work
                  towards your academic goals.
                </p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h3 className="step-title">Excel in Exams</h3>
                <p className="step-description">
                  With comprehensive preparation and continuous assessment, you'll be confident and ready to ace your
                  exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2 className="section-title">What Students Say</h2>
            <p className="section-subtitle">Join thousands of students who have transformed their study experience</p>

            <div className="testimonial-card">
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonials[currentTestimonial].name}</div>
                  <div className="testimonial-role">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "none",
                    background: index === currentTestimonial ? "#667eea" : "#cbd5e0",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <h2 className="cta-title">Ready to Transform Your Studies?</h2>
            <p className="cta-description">
              Join thousands of students who are already studying smarter with EduFairy
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="footer-content">
            <div style={{ marginBottom: "1.5rem" }}>
              <div className="logo" style={{ justifyContent: "center", fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                <span>🧚</span>
                EduFairy
              </div>
              <p style={{ color: "#cbd5e0", maxWidth: "400px", margin: "0 auto", fontSize: "0.9rem" }}>
                Empowering students worldwide with AI-powered study tools for academic success.
              </p>
            </div>

            <div className="footer-links">
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#features" className="footer-link">
                Features
              </a>
              <a href="#pricing" className="footer-link">
                Pricing
              </a>
              <a href="#support" className="footer-link">
                Support
              </a>
              <a href="#privacy" className="footer-link">
                Privacy
              </a>
              <a href="#terms" className="footer-link">
                Terms
              </a>
            </div>

            <div className="copyright">
              <p>&copy; 2024 EduFairy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default EduFairyHomepage;
