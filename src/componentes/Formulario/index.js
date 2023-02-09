import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'TOP',
        'JUNGLE',
        'MID',
        'ADC',
        'SUP'
    ]

    const [nome, setNome] = useState('')
    const [elo, setElo] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao, setPosicao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido =>', nome, elo, imagem)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Elo" 
                    placeholder="Digite sua Elo" 
                    valor={elo} 
                    aoAlterado={valor => setElo(valor)}/>
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..." 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Posição" 
                    itens={times}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario