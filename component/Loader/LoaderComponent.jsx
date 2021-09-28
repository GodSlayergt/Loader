import React, { useEffect, useState } from 'react';

import loader from './Loader.js';
const Loader = ({url,id}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loader(url,id,() => {
      setLoaded(true);
    });
  });

  return (
    <>
      {loaded ? '': <p> Loading </p>}
    </>
  );
}

export default Loader