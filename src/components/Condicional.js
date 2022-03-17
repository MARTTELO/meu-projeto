import { useState } from 'react'

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function EnvairEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(e){
        e.preventDefault();
        setUserEmail("");
    }
    return(
        <div>
            <h2>Cadastre seu E-mail</h2>
            <form>
                <input type="email" id="email" name="email"placeholder="Insira se E-mail"onChange={(e)=> setEmail(e.target.value)} />
            </form>
            <button type="submit" onClick={(EnvairEmail)}>Envair Email</button>
            {userEmail && (
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional