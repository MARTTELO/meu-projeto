function OutraLista({ itens }) {

   

    return (
        <>
            <h3>Lista de Coisas boas</h3>
            {/* verifica se a lista está vazia ou não. Se tiver dados carrega, senão exibe mensagem */}
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                <p>Não há itens na lista</p>
            )}
        </>
    )
}

export default OutraLista