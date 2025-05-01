import React, { useEffect, useState } from "react";
import requests from "../../requests";
import Link from "next/link";

const GridTemplate = (props) => {
  const { data, isLoading, hasMore, onViewMore } = props;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const handleGlobalSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  useEffect(() => {
    if (searchKeyword.length > 0) {
      const tempSearchCards = data.filter(
        (item) =>
          item.attributes.title
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          item.attributes.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
      );
      setFilteredCards(tempSearchCards);
    } else {
      setFilteredCards([]);
    }
  }, [searchKeyword, data]);

  const renderCard = (item) => (
    <div className="skip-loop-step" key={item.id}>
      <Link
        className="blog-link"
        href={
          item.attributes.decentro_faq_master_link.data.attributes.masterLink
        }
      >
        <div className="item">
          <img
            src={
              requests.STRAPI_STAGING_IP_BASE_URL +
              item.attributes.bannerImage.data.attributes.url
            }
            alt={item.attributes.title}
          />
          <p className="title">{item.attributes.title}</p>
          <p className="description">{item.attributes.description}</p>
          <p className="read-more-text">Read More</p>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="skip-loop">
      <h1 className="page-header">
        Decentro <span>FAQs</span>
      </h1>
      <div className="search-container">
        <img src="/images/search.svg" alt="Search" />
        <input
          className="master-search-input"
          type="search"
          placeholder="Search for a keyword"
          value={searchKeyword}
          onChange={handleGlobalSearch}
        />
      </div>
      <div className="skip-loop-contents">
        <div className="visible-content initial">
          <div className="skip-loop-row">
            {(searchKeyword.length > 0 ? filteredCards : data).map(renderCard)}
          </div>
        </div>
        {searchKeyword.length === 0 && hasMore && (
          <div className="view-more-cards-wrapper">
            <button
              className="view-more-cards-btn"
              onClick={onViewMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridTemplate;
