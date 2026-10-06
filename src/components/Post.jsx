import { useState } from "react"

export default function Post({ titulo, autor, conteudo }) {
    const [curtidas, setCurtidas] = useState(0)

    return (
        <div>
            <h2>{titulo}</h2>
            <p>Autor: {autor}</p>
            <p>{conteudo}</p>

            <button onClick={() => setCurtidas(curtidas + 1)}>
                Curtir
            </button>

            <p>Curtidas: {curtidas}</p>
        </div>
    )
}