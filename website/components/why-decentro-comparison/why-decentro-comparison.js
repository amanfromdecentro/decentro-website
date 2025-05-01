import React from "react";
import styles from "../../styles/components-styles/why-decentro-comparison/why-decentro-comparison.module.scss";
import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa";
import constants from "../../common";

const WhyDecentroComparison = (props) => {
  const router = useRouter();
  const getKey = (item) => {
    return Object.keys(item)[0];
  };

  const getLegacyPlatformStatement = (item) => {
    return Object.values(item)[0][0];
  };

  const getDecentroStatement = (item) => {
    return Object.values(item)[0][1];
  };

  return (
    <div className={styles["why-decentro"]}>
      <h2>
        Why <span>Decentro?</span>
      </h2>
      <div className={styles["why-decentro-table"]}>
        <div className={styles["head-row"]}>
          <div></div>
          {router.pathname == "/verticals/ledgers/" ? (
            <div>
              <label>In-House</label>
            </div>
          ) : router.pathname == "/why-decentro" ?
            (
              <div>
                <label>Traditional PGs</label>
              </div>
            ) : (
              <div>
                <label>Legacy Platforms</label>
              </div>
            )}
          <div>
            <label>Decentro</label>
          </div>
        </div>
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                styles["content-row"] +
                (index == 0
                  ? " " + styles["top-content-row"]
                  : getKey(item) == constants.constants.ADVANTAGES
                    ? " " + styles["green-highlight"]
                    : "")
              }
            >
              {getKey(item) != constants.constants.ADVANTAGES ? (
                <React.Fragment>
                  <div>{getKey(item)}</div>
                  <div>{getLegacyPlatformStatement(item)}</div>
                  <div>
                    <span>
                      <FaCheck />
                    </span>
                    <p>{getDecentroStatement(item)}</p>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div>{getKey(item)}</div>
                  <div>{getLegacyPlatformStatement(item)} </div>
                  <div>
                    {getDecentroStatement(item).map((adv, ind) => {
                      return (
                        <p key={ind}>
                          <img
                            src="/images/icons/badge.svg"
                            alt="ribbon-icon"
                          />
                          {adv}
                        </p>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyDecentroComparison;
