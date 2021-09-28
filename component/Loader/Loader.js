const loader = (url,id,callback) => {
    if(!process.browser) {
         callback()
         return null;
    }
    const existingScript = document.getElementById(id);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src =  url;
      script.id = id;
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
    
  };
  export default loader;