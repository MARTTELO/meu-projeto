export default function Saudacao({nome}) {

    function gerarSaudacao(algumNome){
        return `Olá, Seja bem vindo: ${nome}`
    }

    return  <> {nome && <p>{gerarSaudacao(nome)}</p>}  </>
}