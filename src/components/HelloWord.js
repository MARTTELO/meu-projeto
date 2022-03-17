import Frase from './Frase'

function HelloWord() {
    return(
        <div className="card">
            <div className="card-header">
            <h1>Hello Word</h1>
            </div>
            <div className="card-body">
            <p>Primeiro componente</p>
            <Frase />
            </div>
        </div>
    )
}

export default HelloWord