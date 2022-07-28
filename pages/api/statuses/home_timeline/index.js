const timeline = [
    {
        id: "0",
        avatar: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_alexandra-daddariojpg__P3X7cI6fNj0rnbFeCQDgQCC6j5F2C5JVULf6iu1o.jpeg",
        username: "Alexandra Daddario",
        message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
        id: "1",
        avatar: "https://www.okchicas.com/wp-content/uploads/2016/01/Qu%C3%A9-dice-tu-rostro-de-ti-2.jpg",
        username: "@AngelinaJolie",
        message: "Wow, devter está funcionando y vivo 🦉",
        name: "Angelina Jolie",
    },
    {
        id: "2",
        username: "Elizabeth Olsen",
        name: "Elizabeth Olsen",
        avatar: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_elizabeth-olsenjpg__Tbit94E3Kyi8fdnm7GoDmUiOo8GaYEFiSxuAgYRW.jpeg",
        message: `Abro paraguas Paraguas Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    },
    {
        id: "3",
        username: "Elizabeth Olsen",
        name: "Elizabeth Olsen",
        avatar: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_elizabeth-olsenjpg__Tbit94E3Kyi8fdnm7GoDmUiOo8GaYEFiSxuAgYRW.jpeg",
        message: `Abro paraguas Paraguas Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    },
    {
        id: "4",
        avatar: "https://www.okchicas.com/wp-content/uploads/2016/01/Qu%C3%A9-dice-tu-rostro-de-ti-2.jpg",
        username: "@AngelinaJolie",
        message: "Wow, devter está funcionando y vivo 🦉",
        name: "Angelina Jolie",
    },
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(timeline))
}
