import Loader from "../component/Loader/LoaderComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Loader</h1>
      <Loader url='/temp.js' id='text'/>
    </div>
  );
}
