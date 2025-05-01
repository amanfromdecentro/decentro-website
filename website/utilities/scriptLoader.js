// utils/scriptLoader.js
export const loadScript = (src, callback) => {
  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) return;

  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.async = true;

  if (callback) {
    script.onload = callback;
  }

  document.body.appendChild(script);
};

export const loadScriptWithPriority = (scriptContent, priority) => {
  const delays = {
    high: 1000,
    medium: 2000,
    low: 3000,
  };

  const delay = delays[priority];

  if (typeof window !== "undefined") {
    window.requestIdleCallback
      ? window.requestIdleCallback(() => {
          setTimeout(() => {
            new Function(scriptContent)();
          }, delay);
        })
      : setTimeout(() => {
          new Function(scriptContent)();
        }, delay);
  }
};
