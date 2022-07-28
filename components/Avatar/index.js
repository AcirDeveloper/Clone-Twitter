import avatar from "styles/avatar.module.css"

const Avatar = ({ alt, src, text, withText }) => {
    return (
        <div className={avatar.container}>
            <img className={avatar.avatar} src={src} alt={alt} title={alt} />
            {withText && <strong> {text || alt} </strong>}
        </div>
    )
}

export default Avatar
