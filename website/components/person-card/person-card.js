import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/person-card/person-card.module.scss"; // Import CSS module

const PersonCard = ({ person }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    // Update card height when hovered
    if (isHovered) {
      setCardHeight(cardRef.current.scrollHeight);
    } else {
      setCardHeight(380); // Reset card height when not hovered
    }
  }, [isHovered]);

  const openPage = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`${styles.personCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: cardHeight }}
      ref={cardRef}
      onClick={() => {
        openPage(person.linkedinLink);
      }}
    >
      <img src={person.image} alt="Person Image" />
      <div className={styles.personInfo}>
        <h3 className={styles.personName}>{person.name}</h3>
        <p className={styles.personPosition}>{person.position}</p>
        {isHovered && person?.description && (
          <p className={styles.personDescription}>{person?.description}</p>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
