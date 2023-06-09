import React from 'react';
import "./workshopcard.css";

const WorkshopCard = ({ workshop }) => {
  const imagePath = `/images/${workshop.image}`; // Assuming images are stored in the public/images folder

  return (
    <div className="workshop-card">
      <img src={imagePath} alt={workshop.title} className="workshop-image" />
      <div className="workshop-details">
        <h3 className="workshop-title">{workshop.title}</h3>
        <p className="workshop-date">{workshop.date}</p>
        <p className="workshop-description">{workshop.description}</p>
        
      </div>
    </div>
  );
};

export default WorkshopCard;
