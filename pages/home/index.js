import homepage from "../../styles/homepage.module.css"
import styles from "../../styles/Home.module.css"
import { useEffect, useState } from "react"
import Animevit from "../../components/Devit"

const HomePage = () => {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch("/api/statuses/home_timeline")
            .then((res) => res.json())
            .then((data) => setTimeline(data))
    }, [])

    return (
        <>
            <div className={styles.centrar}>
                <main className={styles.main}>
                    <header className={homepage.header}>
                        <h2 className={homepage.h2}>Inicio</h2>
                    </header>
                    <section className={homepage.section}>
                        {timeline.map((animevit) => {
                            return (
                                <Animevit
                                    key={animevit.id}
                                    username={animevit.username}
                                    avatar={animevit.avatar}
                                    message={animevit.message}
                                    id={animevit.id}
                                />
                            )
                        })}
                    </section>
                    <nav className={homepage.nav}></nav>
                </main>
            </div>
        </>
    )
}

export default HomePage
