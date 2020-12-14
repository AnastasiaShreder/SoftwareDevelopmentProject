import React, {useState} from 'react'
import Modal from 'react-modal'

import '../css/signUp.css'
import '../css/modal.css'
import '../css/overlay.css'
import '../css/btn.css'
import '../css/error.css'

Modal.setAppElement(document.getElementById('root'))

function SignUp(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState("");
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [avatar, setAvatar] = useState('');

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const submit = event => {
        event.preventDefault();
        fetch('http://localhost:8080/sign_up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                second_name: lastName,
                third_name: middleName,
                email,
                login,
                pswd: password,
                user_type: role,
                avatar_file: avatar
            })
        })
            .then(response => {
                if (response.ok) {
                    props.openSignUp(false);
                    props.openSignIn(true);
                } else {
                    console.log(response)
                }
            })
    }

    const checkLoginAccessibility = (event) => {
        let input = event.currentTarget;
        let login = event.currentTarget.value;
        let error = document.getElementsByClassName('error')[0];
        fetch('http://localhost:8080/logins')
            .then(response => response.json())
            .then(arr => {
                console.log(arr.includes(login))
                if(arr.includes(login)) {
                    input.style.borderColor = 'red';
                    setButtonDisabled(true);
                    error.style.display = 'block';
                } else {
                    input.style.borderColor = 'rgba(28, 118, 143, 0.5)';
                    setButtonDisabled(false);
                    error.style.display = 'none';
                }
            })
    }

    const checkPassword = () => {
        const check = document.querySelectorAll('input[type="password"]')[1];
        let error = document.getElementsByClassName('error')[1];
        if (password !== passwordCheck) {
            check.style.borderColor = 'red';
            setButtonDisabled(true);
            error.style.display = 'block';
        } else {
            check.style.borderColor = 'rgba(28, 118, 143, 0.5)';
            setButtonDisabled(false);
            error.style.display = 'none';
        }
        console.log(password)
    }

    const setNewRole = () => {
        const roles = document.getElementsByClassName('signUp__roleInput');
        let role;
        for (let i = 0; i < roles.length; ++i) {
            if (roles[i].checked) {
                role = roles[i].value;
            }
        }
        setRole(role);
    }


    return(
        <Modal
            isOpen={props.signUpIsOpen}
            onRequestClose={() => props.openSignUp(false)}

            className='modal'
            overlayClassName='overlay'
        >
            <div className='signUp'>
                <form className='signUp__form' onSubmit={submit}>
                    <label className='avatar'>
                        <input
                            className='avatar__upload'
                            type='file'
                            accept='image/*'
                            onChange={event => setAvatar(event.target.value)}
                        />
                    </label>

                    <div className='signUp__info'>
                        <div className='signUp__col'>
                            <p className='signUp__field'>
                                <label className='signUp__label'>имя</label>
                                <input
                                    className='signUp__input'
                                    onChange={event => setFirstName(event.target.value)}
                                    autoFocus
                                    required
                                />
                            </p>
                            <p className='signUp__field'>
                                <label className="signUp__label">фамилия</label>
                                <input
                                    className='signUp__input'
                                    onChange={event => setLastName(event.target.value)}
                                    required
                                />
                            </p>
                            <p className='signUp__field'>
                                <label className='signUp__label'>отчество</label>
                                <input className='signUp__input'
                                       onChange={event => setMiddleName(event.target.value)}
                                />
                            </p>
                            <p className='signUp__field'>
                                <label className='signUp__label'>почта</label>
                                <input
                                    className='signUp__input'
                                    type='email'
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                            </p>

                            <div className='signUp__roles'>
                                <div className='signUp__radio'>
                                    <input
                                        id='schoolStudent'
                                        className='signUp__roleInput'
                                        type='radio'
                                        name='role'
                                        value='HIGH_SCHOOL_STUDENT'
                                        onChange={() => setNewRole()}
                                    />
                                    <label htmlFor='schoolStudent' className='signUp__roleLabel'>Старшеклассник</label>
                                </div>
                                <div className='signUp__radio'>
                                    <input
                                        id='schoolLeaver'
                                        className='signUp__roleInput'
                                        type='radio'
                                        name='role'
                                        value='APPLICANT'
                                        onChange={() => setNewRole()}
                                    />
                                    <label htmlFor='schoolLeaver' className='signUp__roleLabel'>Абитуриент</label>
                                </div>
                                <div className='signUp__radio'>
                                    <input
                                        id='student'
                                        className='signUp__roleInput'
                                        type='radio'
                                        name='role'
                                        value='STUDENT'
                                        onChange={() => setNewRole()}
                                    />
                                    <label htmlFor='student' className='signUp__roleLabel'>Студент</label>
                                </div>
                            </div>
                        </div>

                        <div className="signUp__col">
                            <p className="signUp__field">
                                <label className="signUp__label">логин</label>
                                <input
                                    className="signUp__input"
                                    onBlur={checkLoginAccessibility}
                                    onChange={event => setLogin(event.target.value)}
                                    required
                                />
                            </p>
                            <p className="signUp__field">
                                <label className="signUp__label">пароль</label>
                                <input
                                    type="password"
                                    className="signUp__input"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />
                            </p>
                            <p className="signUp__field">
                                <label className="signUp__label">ещё раз;)</label>
                                <input
                                    type="password"
                                    className="signUp__input"
                                    onBlur={checkPassword}
                                    onChange={event => setPasswordCheck(event.target.value)}
                                    required
                                />
                            </p>
                            <div className="error">
                                Пользователь с таким логином уже существует!
                            </div>
                            <div className="error">
                                Пароли не совпадают!
                            </div>
                        </div>
                    </div>
                    <button className="btn" type="submit" onSubmit={submit} disabled={buttonDisabled}>присоединиться</button>
                </form>
            </div>
        </Modal>
    );
}

export default SignUp;