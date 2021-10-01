import { useState } from "react";

const LoadScript = (
  url,
  key,
  selector,
  deferloading,
  namespace,
  buildFileName,
  appdata
) => {
  const id = `${key}-${namespace}`;

  if (!process.browser) {
    return null;
  }

  const existingScript = document.getElementById(id);
  if (existingScript) {
    if (namespace in window) {
      window[namespace].default.render(selector,appdata);
    }
    return;
  }
  const script = document.createElement("script");
  script.src = url;
  script.id = id;
  script.defer = deferloading;
  document.body.appendChild(script);
  script.onload = () => {
    if (buildFileName == key) {
      if (namespace in window) {
        window[namespace].default.render(selector,appdata);
      }
    }
  };
};

const useScriptLoader = (
  manifestPath,
  selector,
  deferloading,
  namespace,
  buildFileName,
  appdata
) => {
  const [loaded, setLoaded] = useState(false);
  const microAppUrlResolver = async () => {

    const response = await fetch(manifestPath, { mode: "cors" });
    const data = await response.json();

    for (var key of Object.keys(data)) {
      if (key.match(/\.[0-9a-z]+$/i)[0] == ".js") {

        LoadScript(
          data[key],
          key,
          selector,
          deferloading,
          namespace,
          buildFileName,
          appdata
        );
      }
    }
    setLoaded(true);
  };
  return { loaded, microAppUrlResolver };
};

export default useScriptLoader;
