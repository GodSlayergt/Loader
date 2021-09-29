import React, { useEffect} from 'react';
import useScriptLoader from '../../customhook/useScriptLoader.js';
import PropTypes from 'prop-types'

const Loader = ({url,id,selector,loading,deferloading}) => {
  const {loaded, loader} = useScriptLoader(url,id,selector,deferloading);
  useEffect(() => {
    loader()
  });

  return (
    <>
      {loaded ? '':loading?loading: <p> Loading </p>}
    </>
  );
}
Loader.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selector: PropTypes.string,
  loading: PropTypes.node,
  deferloading:PropTypes.bool
}
Loader.defaultProps = {
  deferloading: true,
  selector:null,
  loading:<p> Loading </p>
}

export default Loader