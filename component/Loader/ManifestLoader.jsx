import React, { useEffect, useState } from "react";
import microAppURLResolver from "../../util/loadmanifest";

const ManifestLoader = ({ manifestPath }) => {
  const [load, setLoad] = useState([]);
  useEffect(() => {
    microAppURLResolver(manifestPath).then((res) => setLoad(res));
  });

  return <>{load}</>;
};

export default ManifestLoader;
