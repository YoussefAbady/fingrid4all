import { useLocation } from 'react-router-dom';
import React, { useState , useEffect} from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';
import ServicePopup from './ServicePopup';

import './Home.css';

const Home = () => {
  const location = useLocation();
  const user = location.state?.user;
  const [selectedService, setSelectedService] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationFollow, setShowConfirmationFollow] = useState(false);

  const pressReleases = [
    { date: 'December 12, 2024', title: 'Daatahub development group meeting (16) [Coming]', link: '/press-release-2' },
    { date: 'September 3, 2024', title: 'Daatahub development group meeting (15)', link: '/press-release-1' },
    { date: 'June 13, 2024', title: 'Daatahub development group meeting (14)', link: '/press-release-3' },
    { date: 'May 6, 2024', title: 'Daatahub development group meeting (13)', link: '/press-release-3' },
    { date: 'March 26, 2024', title: 'Daatahub development group meeting (12)', link: '/press-release-3' },
    { date: 'February  15, 2024', title: 'Daatahub development group meeting (11)', link: '/press-release-3' },
    { date: 'December 13, 2024', title: 'Daatahub development group meeting (10)', link: '/press-release-3' },
  ];

  const systemsServices = [
    { id: 'DH-100', icon: '/assets/services/DH-100.png', title: 'Maintanace' },
    { id: 'DH-200', icon: '/assets/services/DH-200.png', title: 'Metering' },
    { id: 'DH-300', icon: '/assets/services/DH-300.png', title: 'Agreements' },
    { id: 'DH-400', icon: '/assets/services/DH-400.png', title: 'Connection Control' },
    { id: 'DH-500', icon: '/assets/services/DH-500.png', title: 'Imbalance Settlement' },
    { id: 'DH-600', icon: '/assets/services/DH-600.png', title: 'Balance Deviation' },
    { id: 'DH-700', icon: '/assets/services/DH-700.png', title: 'Product & Invoicing' },
    { id: 'DH-800', icon: '/assets/services/DH-800.png', title: 'Authorisation' },
    { id: 'DH-900', icon: '/assets/services/DH-900.png', title: 'Party Information' },
  ];

 
  const handleViewMoreClick = (service) => {
    setSelectedService(service);
  };
  
  const handleClosePopup = () => {
    setSelectedService(null);
  };

  const handleSubscribeClick = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000); // Hide the message after 3 seconds
  };

  const handleFollowClick = (serviceId) => {
    setShowConfirmationFollow((prevMessages) => ({
      ...prevMessages,
      [serviceId]: true,
    }));
    setTimeout(() => {
      setShowConfirmationFollow((prevMessages) => ({
        ...prevMessages,
        [serviceId]: false,
      }));
    }, 3000); // Hide the message after 3 seconds
  };

  
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <img src="/assets/logo.png" alt="Website Logo" className="website-logo" />
        </div>
        <div className="header-right">
          <div className="user-info">
            <img src="/assets/user-avatar.png" alt="User Avatar" className="user-avatar" />
            <span className="user-name">{user.username}</span>
          </div>
        </div>
      </header>
      <section className="about-section">
        <div className="visual">
          <img src="https://images.ctfassets.net/i1ig4xbxov1p/y5YsRSDnJcZCgShgnyzbU/39681a660b6463ffa240a994c73debe7/kuvitus75462.JPG?fm=jpg&fl=progressive" alt="About FINGRID4ALL" />
        </div>
        <div className="content">
          <h2>FINGRID4ALL</h2>
          <p>FINGRID4ALL is a Fingrid new initiave to on-board all our parteners in our development process keeping them engaed, informed and proactive</p>
          <p>Parteners@FINGRID4ALL Benefits:</p>
          <ul>
            <li>Instant updates about all fingrid systems and services</li>
            <li>Select which services and systems you'd like to be notified about</li>
            <li>Regular updates and new features to keep you ahead of the curve</li>
          </ul>
        </div>
      </section>
      <main className="home-main">
        <section className="newsletter-section">
          <h2>Press Releases & Publications </h2>
          <p>Stay updated with our latest press releases and updates</p>
          <div className="press-releases">
            {pressReleases.map((release, index) => (
              <div key={index} className="press-release">
                <span className="release-date">{release.date}</span>
                <span className="release-title">{release.title}
                <a href="https://palvelut.datahub.fi/api/documents/file/0-473974-2-633373" className="release-link" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/open-in-new-tab-icon.jpg" alt="Open Documentation" />
                </a>

                </span>
                <div className="press-release-icons">
                {/* <a href={release.link} className="release-link">
                  <img src="/assets/open-in-new-tab-icon.jpg" alt="Release Link" target="_blank" className="link-icon" />
                </a> */}
                  <FaThumbsUp className="icon like-icon" />
                  <FaThumbsDown className="icon dislike-icon" />
                  <FaComment className="icon comment-icon" />
                </div>
              </div>
            ))}
          </div>
          <button className="subscribe-button" onClick={handleSubscribeClick}>Subscribe</button>
          {showConfirmation && <span className="subscribe-confirmation-message">Subscribed Successfully!</span>}

        </section>
        <section className="systems-services-section">
          <h2>Processes Areas</h2>
          <div className="cards-container">
            {systemsServices.map((service) => (
              <div key={service.id} className="card">
                <div className="card-header">{service.id}</div>
                <img src={service.icon} alt={`${service.title} Icon`} className="card-icon" />
                <h3 className="card-title">{service.title}</h3>
                <div className="card-buttons">
                  <button className="card-button"  onClick={() => handleViewMoreClick(service)}>View More</button>
                  <button className="card-button" onClick={() => handleFollowClick(service.id)} >Follow</button>
                </div>
                {showConfirmationFollow[service.id]  && <span className="subscribe-confirmation-message">Followed Successfully!</span>}
              </div>
            ))}
          </div>
        </section>
        {selectedService && <ServicePopup service={selectedService} onClose={handleClosePopup} />}
        </main>
      <footer className="home-footer">
        <div className="footer-content">
          <p>&copy; 2024 FINGRID4ALL. All rights reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a> | <a href="/contact-us">Contact Us</a> | <a href="/about-us">About Us</a>
          </p>
          <p>
            Follow us on:
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;