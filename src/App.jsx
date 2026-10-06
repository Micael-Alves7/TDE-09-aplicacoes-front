import Post from "./components/Post";

export default function App(){
  return(
    <>
      <h1>Linkedin</h1>
        <Post
        titulo="Meu primeiro post"
        autor="Micael"
        conteudo="Estou aprendendo React!"
      />

      <Post
        titulo="Meu segundo post"
        autor="João"
        conteudo="Hoje estou estudando componentes."
      />

      <Post
        titulo="Meu terceiro post"
        autor="Maria"
        conteudo="React está ficando cada vez mais fácil."
      />
    </>
  )
}