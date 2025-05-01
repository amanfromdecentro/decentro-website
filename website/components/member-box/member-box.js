import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const MemberBox = (props) => {
  return props.data.map((item, index) => {
    return (
      <div
        key={index}
        className="member"
        onMouseEnter={(event) => {
          event.currentTarget.children[0].style.opacity = 0;
          event.currentTarget.children[1].style.opacity = 1;
        }}
        onMouseLeave={(event) => {
          event.currentTarget.children[0].style.opacity = 1;
          event.currentTarget.children[1].style.opacity = 0;
        }}
      >
        <div className="member-text">
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
        <div className="member-info">
          <div className="member-head">
            <img
              src={item.imageSrc}
              alt={item.altText ? item.altText : "image"}
            />
            <div className="member-intro">
              <label>
                {item.firstName}&nbsp;{item.lastName}
              </label>
              <span>{item.designation}</span>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
        <Link href={item.linkedInLink} target="_blank">
          <FaLinkedinIn />
        </Link>
      </div>
    );
  });
};

export default MemberBox;
