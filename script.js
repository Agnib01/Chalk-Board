/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  line-height: 1.6;
}

header {
  padding: 20px 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffdd57;
}

.hero {
  padding: 100px 20px;
  background: rgba(0, 0, 0, 0.3);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  animation: fadeIn 2s ease-in-out;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 20px;
  animation: fadeIn 3s ease-in-out;
}

.cta-button {
  padding: 10px 20px;
  background: #ffdd57;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #ffcc00;
}

section {
  padding: 60px 20px;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.course-list, .testimonial-list, .gallery-grid, .faq-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.course-item, .testimonial-item, .faq-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  transition: transform 0.3s ease;
}

.course-item:hover, .testimonial-item:hover, .faq-item:hover {
  transform: scale(1.05);
}

.gallery-grid img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.05);
}

form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input, form select, form textarea, form button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}

form textarea {
  height: 100px;
  resize: vertical;
}

form button {
  background: #ffdd57;
  color: #333;
  cursor: pointer;
  transition: background 0.3s ease;
}

form button:hover {
  background: #ffcc00;
}

footer {
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}

.social-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ffdd57;
}

/* About Section */
#about {
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.1);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.about-content h3 {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ffdd57;
}

.about-content ul {
  list-style-type: disc;
  padding-left: 20px;
}

.about-content ul li {
  margin-bottom: 10px;
}

/* Contact Section */
#contact {
  padding: 60px 20px;
  background: rgba(0, 0, 0, 0.3);
}

.contact-info {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-details {
  margin-top: 20px;
}

.contact-details p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.contact-details a {
  color: #ffdd57;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: #ffcc00;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1.2rem;
  }

  .course-list, .testimonial-list, .gallery-grid, .faq-list {
    flex-direction: column;
    align-items: center;
  }

  .course-item, .testimonial-item, .faq-item {
    width: 100%;
  }
}
