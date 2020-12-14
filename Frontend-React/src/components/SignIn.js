import React, {useState} from 'react'
import Modal from 'react-modal'

import '../css/overlay.css'
import '../css/modal.css'
import '../css/signIn.css'
import '../css/btn.css'

Modal.setAppElement(document.getElementById('root'))

function SignIn(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const submit = event => {
        event.preventDefault();
        fetch('http://localhost:8080/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                password
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject();
                }
            })
            .then((j) => JSON.stringify(j))
            .then((data) => JSON.parse(data))
            .then((obj) => {
                console.log(obj);
                localStorage.setItem("Authentication", obj["jwtToken"]);
                props.setCurrentUser(obj["user"])
            })
            .then(() => props.openSignIn(false))
            .catch(() => alert("Некорректный логин или пароль"))
    }

    const handleClick = () => {
        props.openSignIn(false);
        props.openSignUp(true);
    }

    return (
            <Modal
                isOpen={props.signInIsOpen}
                onRequestClose={() => props.openSignIn(false)}

                className='modal'
                overlayClassName='overlay'
            >
                <div className='signIn'>
                    <h2 className='signIn__title'>Авторизация</h2>
                    <form className='signIn__form' onSubmit={submit}>
                        <div className='signIn__info'>
                            <input
                                className='signIn__input'
                                placeholder='логин'
                                onChange={event => setLogin(event.target.value)}
                                required
                            />
                            <input
                                className='signIn__input'
                                placeholder='пароль'
                                type='password'
                                onChange={event => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button className='btn' type='submit'>Войти</button>
                    </form>
                    <div className='signIn__text'>
                        Впервые? Тогда <br/>
                        <a href="#" onClick={handleClick} className='signIn__signUp'>Зарегестрируйтесь</a>
                    </div>
                </div>

            </Modal>
    );
}

export default SignIn;