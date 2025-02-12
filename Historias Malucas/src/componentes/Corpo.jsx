import { useState } from 'react'
import './Corpo.css'

const Corpo = () => { 

    const [resultado, setResultado] = useState('')
    const array_imagens = ['😎','👽','👻','💩','👀','🦴','🧠','👮‍♂️','🧑‍🎓','🦸‍♂️','🤰','👰‍♂️']

    function trocar(){
      
        const random = Math.floor(Math.random() * array_imagens.Length)
        setResultado(array_imagens[random])
        alert(resultado)
    }

  return (
    <div className='container-corpo'>
     <div className='container_regras'>
        <div className='regras'>
          <h2>Regra: O usuario escolhe a imagem clicando no botão, logo depois inventa uma historia sobre a imagem.</h2>
        </div>
     </div>
     <div className='container-corpo_imagem '>
      <div className='div_imagem'>
        <img className='imagem' src={resultado || "interrogation-mark.png"} alt="" />
      </div>
     </div>
     <div className='div_button'>
      <button className='button_trocar' onClick={trocar}>Trocar imagem</button>
     </div>
    </div>
  )
}

export default Corpo
