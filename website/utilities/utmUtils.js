// utils/utmUtils.js

export const getUTMParamsFromURL = (url) => {
  const urlParams = new URLSearchParams(new URL(url).search);
  const utms = {
    utm_source: urlParams.getAll("utm_source"),
    utm_medium: urlParams.getAll("utm_medium"),
    utm_campaign: urlParams.getAll("utm_campaign"),
    utm_term: urlParams.getAll("utm_term"),
    utm_content: urlParams.getAll("utm_content"),
  };

  // Convert arrays to the latest value or keep all values based on requirements
  return {
    utm_source: utms.utm_source.length
      ? utms.utm_source[utms.utm_source.length - 1]
      : null,
    utm_medium: utms.utm_medium.length
      ? utms.utm_medium[utms.utm_medium.length - 1]
      : null,
    utm_campaign: utms.utm_campaign.length
      ? utms.utm_campaign[utms.utm_campaign.length - 1]
      : null,
    utm_term: utms.utm_term.length
      ? utms.utm_term[utms.utm_term.length - 1]
      : null,
    utm_content: utms.utm_content.length
      ? utms.utm_content[utms.utm_content.length - 1]
      : null,
  };
};

export const getStoredUTMParams = () => {
  const storedParams = JSON.parse(
    localStorage.getItem("utmParamsHistory") || "[]"
  );
  console.log("Retrieved UTM Params History:", storedParams); // Debugging
  return storedParams;
};

export const appendUTMParams = (utmParams) => {
  const history = getStoredUTMParams();
  history.push(utmParams);
  console.log("Appending UTM Params:", utmParams); // Debugging
  localStorage.setItem("utmParamsHistory", JSON.stringify(history));
};
