
import Item from './Item'

function List(){
    return(
        <>
        <h1> Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={2022} />
            <Item marca="Volkswagen" ano_lancamento={1985}/>
            <Item marca="Fiat" ano_lancamento={2000}/>
        </ul>
        </>
    )
}

export default List