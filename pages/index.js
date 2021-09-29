import Loader from "../component/Loader/Loader";
import ManifestLoader from "../component/Loader/ManifestLoader";
import styles from "../styles/Home.module.css";

export default function Home() {
const temp  = {
"my-app-header": "header.json",
'my-app-footer' : "footer.json"
}
  return (
    <div className={styles.container}>
      <h1 id="test">Loader</h1>
      {/* <Loader url='/temp.js' id='text' loading={<h3>loading ...</h3>}/> */}
      <ManifestLoader manifestPath={temp}/>
    </div>
  );
}
