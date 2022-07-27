import Link from "next/link";
import styles from "../../styles/timeline.module.css";

function Timeline({ userName }) {
    return (
        <>
            <h1 className={styles.h1}> This is the timeline of {userName} </h1>
            <Link href="/"> Go Home</Link>
        </>
    );
}
/* Solo funciona en componentes de tipo pagina "getInitialProps" */
Timeline.getInitialProps = () => {
    return fetch("http://localhost:3000/api/hello")
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            const { userName } = response;
            return { userName };
        });
};

export default Timeline;
