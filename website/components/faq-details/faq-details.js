import React, { useEffect, memo, Suspense } from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";

import requests from "../../requests";

const FaqDetails = (props) => {
  const updateImageUrls = () => {
    const solutions = document.querySelectorAll(".solution");
    for (let i = 0; i < solutions.length; i++) {
      if (solutions[i].querySelectorAll("img").length > 0) {
        var images = solutions[i].querySelectorAll("img");
        for (let j = 0; j < images.length; j++) {
          let imageRelativePathSplit = images[j].src.split("/");
          let updateImagePathList = [
            imageRelativePathSplit[3],
            imageRelativePathSplit[4],
          ];
          images[j].src =
            requests.STRAPI_STAGING_IP_BASE_URL +
            "/" +
            updateImagePathList.join("/");
        }
      }
    }
  };

  useEffect(() => {
    updateImageUrls();
    const onPageLoad = () => {
      updateImageUrls();
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [props]);

  return (
    <div className="content">
      <h1 className="page-title">{props.header}</h1>
      <hr />
      <div className="details-section">
        {props.data.map((item, index) => {
          return (
            <div
              className="query-section"
              key={item.id}
              id={item.queryLinkIdentifier}
            >
              <div className="query-card">
                <h2 className="question">{item.question}</h2>
                {/* <p className="solution">{item.solution}</p> */}
                <ReactMarkdown className="solution">
                  {item.solution}
                </ReactMarkdown>

                {item.tableData ? (
                  <div className="faq-solution-table-wrapper">
                    <table className="faq-solution-table">
                      <thead>
                        <tr>
                          <th>{item.tableData.headingCol1}</th>
                          <th>{item.tableData.headingCol2}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.tableData.column1
                          .split(",")
                          .map((innerData, innerIndex) => {
                            return (
                              <tr key={innerIndex}>
                                <td>
                                  <ReactMarkdown>{innerData}</ReactMarkdown>
                                </td>
                                <td>
                                  {" "}
                                  <ReactMarkdown>
                                    {item.tableData.column2.split(",")[
                                      innerIndex
                                    ]
                                      ? item.tableData.column2.split(",")[
                                          innerIndex
                                        ]
                                      : null}
                                  </ReactMarkdown>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqDetails;
