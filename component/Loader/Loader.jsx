import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import useScriptLoader from "../../customhook/useScriptLoader.js";

const Loader = ({
  url,
  selector,
  loading,
  deferloading,
  namespace,
  buildFileName,
}) => {
  const { loaded, microAppUrlResolver } = useScriptLoader(
    url,
    selector,
    deferloading,
    namespace,
    buildFileName
  );

  useEffect(() => {
    microAppUrlResolver().then((res) => console.log("loaded"));
  });

  return <div id={selector}>{loaded ? "" : loading}</div>;
};
Loader.propTypes = {
  url: PropTypes.string.isRequired,
  buildFileName: PropTypes.string,
  selector: PropTypes.string.isRequired,
  loading: PropTypes.node,
  deferloading: PropTypes.bool,
  namespace: PropTypes.string.isRequired,
};
Loader.defaultProps = {
  deferloading: true,
  loading: <p> Loading </p>,
  buildFileName: "main.js",
};

export default Loader;
