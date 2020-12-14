import React from 'react'

import '../css/signInPage.css'

const SignInPage = (props) => {
    return (
        <div className="signInPage">
            Для просмотра данной странницы необходимо <br/>
            <button className="signInPage__btn" onClick={() => props.openSignIn(true)}>авторизироваться</button>
        </div>
    );
}

export default SignInPage