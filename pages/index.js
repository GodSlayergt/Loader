import Loader from "../component/Loader/Loader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 id="test">Loader</h1>
      <Loader url='/temp.js' id='text'selector='test' loading={<h3>loading ...</h3>}/>
    </div>
  );
}
