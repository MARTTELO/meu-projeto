import Button from "./eventos/Button"

function Evento(){ //enviando evento de pai para filho(Button)

    function meuEvento(){
       console.log(`Ativando Primeiro Evento`) 
    }
    function segundoEvento(){
        console.log('Criando segundo evento')
    }
    return(
        <div>
            <p>Clique para disparar o Evento do click</p>
                <Button event={meuEvento} text="Primeiro Evento"/>
                <Button event={segundoEvento} text="segundo Evento"/>
        </div>
    )
}

export default Evento