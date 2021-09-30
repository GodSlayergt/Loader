import Loader from "../component/Loader/Loader";
import styles from "../styles/Home.module.css";

export default function Home() {
  
  return (
    <div className={styles.container}  >
     
      <Loader url='http://localhost:5000/manifest.json'  loading={<h3>loading ...</h3>} namespace='headerApp' selector='headercontainer'/>
      <h1 id="test">Loader</h1>
      <Loader url='http://localhost:5001/manifest.json'  loading={<h3>loading ...</h3>} namespace='footerApp' selector='footercontainer'/>
  
    </div>
  );
}
