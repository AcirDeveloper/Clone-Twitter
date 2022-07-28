import Avatar from "../../components/Avatar"
import homepage from "../../styles/homepage.module.css"
const Animevit = ({ avatar, username, message, id }) => {
    return (
        <>
            <article className={homepage.article}>
                <div className={homepage.article__div}>
                    <Avatar alt={username} src={avatar} />
                </div>
                <section className={homepage.article__section}>
                    <strong className={homepage.article__stronge}>
                        {username}
                    </strong>
                    <p className={homepage.article__section_p}>{message}</p>
                </section>
            </article>
        </>
    )
}

export default Animevit
