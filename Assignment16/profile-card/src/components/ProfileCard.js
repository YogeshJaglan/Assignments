import React from 'react';
import './ProfileCard.css';

// Add Font Awesome CSS in the head of your document
const addFontAwesome = () => {
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }
};

// Call the function to add Font Awesome
if (typeof window !== 'undefined') {
  addFontAwesome();
}

const ProfileCard = ({ user }) => {
  if (!user) return null;

  // Destructure user data with fallbacks
  const {
    id,
    name,
    username,
    email,
    phone,
    website,
    company,
    address,
    image
  } = user;

  // Generate random stats for demonstration
  const yearsExp = Math.floor(Math.random() * 10) + 1;
  const projectCount = Math.floor(Math.random() * 50) + 10;
  const satisfaction = Math.floor(Math.random() * 30) + 70; // 70-100%
  
  // Fallback for name
  const displayName = name || username || 'User';
  // Fallback for company
  const companyName = (company && company.name) || 'Freelancer';

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img 
          src={image || `https://i.pravatar.cc/150?img=${id || 1}`} 
          alt={displayName}
          className="profile-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/150';
          }}
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{displayName}</h2>
        <p className="profile-title">{companyName}</p>
        <p className="profile-email">{email}</p>
        <p className="profile-address">
          {address?.city || 'Remote'}
        </p>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">{yearsExp}+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat">
            <span className="stat-value">{projectCount}+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">{satisfaction}%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
        <div className="profile-contact">
          <p><i className="fas fa-envelope"></i> {email || 'N/A'}</p>
          <p><i className="fas fa-phone"></i> {phone || 'N/A'}</p>
          <p><i className="fas fa-globe"></i> {website ? 
            <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
              {website}
            </a> 
            : 'N/A'}
          </p>
        </div>
        <div className="profile-social">
          <a href={`https://github.com/${username || 'user'}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href={`https://linkedin.com/in/${username || 'user'}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={`https://twitter.com/${username || 'user'}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <button className="contact-btn">
          <i className="fas fa-paper-plane"></i> Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
