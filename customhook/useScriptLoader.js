import { useState } from "react";
const useScriptLoader = (url, id, selector, deferloading) => {
  const [loaded, setLoaded] = useState(false);

  const appendScript = (parent) => {
    const existingScript = document.getElementById(id);
    if (existingScript) {
      setLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = url;
    script.id = id;
    script.defer = deferloading;
    parent.appendChild(script);
    script.onload = () => setLoaded(true);
  };
  const loader = () => {
    if (!process.browser) {
      setLoaded(true);
      return null;
    }

    const parent = document.getElementById(selector);
    if (parent) {
      appendScript(parent);
    } else {
      appendScript(document.body);
    }
  };

  return { loaded, loader };
};

export default useScriptLoader;
