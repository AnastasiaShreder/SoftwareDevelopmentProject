import React, {Fragment, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import Navigation from "@/components/Navigation";
import Search from '@/components/Search';

import SIGN_IN_PAGE from '@/components/wrapComponents/SignInPage_w';
import SIGN_IN from '@/components/wrapComponents/SignIn_w';
import SIGN_UP from '@/components/wrapComponents/SignUp_w';
import PROFILE from '@/components/wrapComponents/Profile_w';
import PROFILE_EDIT from '@/components/wrapComponents/ProfileEdit_w';

import './css/styles.css'
import SearchProfile from '@/components/SearchProfile';

function App(props) {
    useEffect(() => {
        const token = localStorage.Authentication;
        if (token) {
            fetch('http://localhost:8080/current_user', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        //не действительный токен
                        localStorage.removeItem('Authentication');
                    } else {
                        if ((Object.keys(props.currentUser).length === 0 && props.currentUser.constructor === Object)) {
                            props.setCurrentUser(data);
                        }
                    }
                })
        }
    })

    return(
        <Fragment>
            <Header/>
            <Navigation/>

            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/signin' component={SIGN_IN_PAGE}/>
                <Route exact path='/profile' component={PROFILE}/>
                <Route exact path='/profileEdit' component={PROFILE_EDIT}/>
                <Route exact path='/search' component={Search}/>
                <Route exact path='/searchProfile' component={SearchProfile}/>
            </Switch>

            <Footer/>

            <SIGN_IN/>
            <SIGN_UP/>
        </Fragment>
    );
}

export default App