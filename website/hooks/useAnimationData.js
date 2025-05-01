import { useState, useEffect } from "react";

const useAnimationData = (initialData) => {
  const animationUrls = initialData.map((item) => item.animationUrl);

  const [animationData, setAnimationData] = useState(null);
  const [animationFetched, setAnimationFetched] = useState(false);
  const [animationDataUpdated, setAnimationDataUpdated] = useState(false);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const responses = await Promise.all(
          animationUrls.map(async (url) => {
            const response = await fetch(url);
            return response.json();
          })
        );
        setAnimationData((prevData) =>
          initialData.map((item, index) => ({
            ...item,
            animationJsonData: responses[index],
          }))
        );
        setAnimationFetched(true);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    if (!animationFetched) {
      fetchAnimationData();
    }
  }, [animationFetched, animationUrls, initialData]);

  useEffect(() => {
    if (animationData && !animationDataUpdated) {
      console.log("Updated animation data:", animationData);
      setAnimationDataUpdated(true);
    }
  }, [animationData, animationDataUpdated]);

  return animationData;
};

export default useAnimationData;
