import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const MentorBox = (props) => {
  return props.data.map((item, index) => {
    return (
      <div
        key={index}
        className="member-mentor"
        onMouseEnter={(event) => {
          event.currentTarget.children[0].style.opacity = 0;
          event.currentTarget.children[1].style.opacity = 1;
        }}
        onMouseLeave={(event) => {
          event.currentTarget.children[0].style.opacity = 1;
          event.currentTarget.children[1].style.opacity = 0;
        }}
      >
        <div className="member-mentor-text">
          <img
            src={item.imageSrc}
            alt={item.altText ? item.altText : "image"}
          />
          <div class="name">
            <div>{item.firstName}</div>
            <div>{item.lastName}</div>
          </div>
          <span>{item.designation}</span>
        </div>
        <div className="member-mentor-info">
          <div className="member-mentor-head">
            <img
              src={item.imageSrc}
              alt={item.altText ? item.altText : "image"}
            />
            <div className="member-mentor-intro">
              <label>
                {item.firstName}&nbsp;{item.lastName}
              </label>
              <span>{item.designation}</span>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
        <Link href={item.linkedInLink} target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    );
  });
};

export default MentorBox;
