function Button(props){//recebe propriedade do pai
    return <button onClick={props.event}>{props.text}</button>
}

export default Button