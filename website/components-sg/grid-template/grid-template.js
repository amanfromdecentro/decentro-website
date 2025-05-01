import React, { useEffect, useState } from "react";
import requests from "../../requests";
import Link from "next/link";

const GridTemplate = (props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [masterCards, setMasterCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);

  const handleGlobalSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  useEffect(() => {
    if (searchKeyword.length > 0) {
      setMasterCards([]);
      let tempSearchCards = [];
      for (let i = 0; i < props.data.length; i++) {
        if (
          props.data[i].attributes.title
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          props.data[i].attributes.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
        ) {
          tempSearchCards.push(props.data[i]);
        }
      }
      setMasterCards(tempSearchCards);
    } else {
      setMasterCards([]);
    }
  }, [searchKeyword]);

  const viewMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  };

  const viewLessCards = () => {
    setVisibleCards(3);
  };

  return (
    <div className="skip-loop">
      <h1 className="page-header">
        Decentro <span>FAQs</span>
      </h1>
      <div className="search-container">
        <img src="/images/search.svg" alt="search" />
        <input
          className="master-search-input"
          type="search"
          placeholder="Search for a keyword"
          value={searchKeyword}
          onChange={handleGlobalSearch}
        />
      </div>
      {
        <div className="skip-loop-contents">
          {}
          <div className="visible-content initial">
            <div className="skip-loop-row">
              {masterCards.length > 0
                ? masterCards.map((item, index) => {
                    return (
                      <div className="skip-loop-step" key={item.id}>
                        <Link
                          className="blog-link"
                          href={
                            item.attributes.decentro_faq_master_link.data
                              .attributes.masterLink
                          }
                          target="_blank"
                        >
                          <div className="item">
                            <img
                              src={
                                requests.STRAPI_STAGING_IP_BASE_URL +
                                item.attributes.bannerImage.data.attributes.url
                              }
                            />
                            <p className="title">{item.attributes.title}</p>
                            <p className="description">
                              {item.attributes.description}
                            </p>
                            <p className="read-more-text">Read More</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                : props.data.slice(0, visibleCards).map((item, index) => {
                    return (
                      <div className="skip-loop-step" key={item.id}>
                        <Link
                          className="blog-link"
                          href={
                            item.attributes.decentro_faq_master_link.data
                              .attributes.masterLink
                          }
                          target="_blank"
                        >
                          <div className="item">
                            <img
                              src={
                                requests.STRAPI_STAGING_IP_BASE_URL +
                                item.attributes.bannerImage.data.attributes.url
                              }
                            />
                            <p className="title">{item.attributes.title}</p>
                            <p className="description">
                              {item.attributes.description}
                            </p>
                            <p className="read-more-text">Read More</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
            </div>
          </div>
          {searchKeyword.length <= 0 && (
            <div className="view-more-cards-wrapper">
              {visibleCards <= props.data.length ? (
                <button
                  className="view-more-cards-btn"
                  onClick={() => viewMoreCards()}
                >
                  View More
                </button>
              ) : (
                <button
                  className="view-more-cards-btn"
                  onClick={() => viewLessCards()}
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default GridTemplate;
