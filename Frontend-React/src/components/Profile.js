import React from 'react'

import '../css/profile.css'

import STUDENT_PROFILE from '../components/wrapComponents/StudentProfile_w';
import SIGN_IN_PAGE from '../components/wrapComponents/SignInPage_w';
import SCHOOL_PROFILE from '../components/wrapComponents/SchoolProfile_w';
import PROFILE_HEADER from '../components/wrapComponents/ProfileHeader_w';
import {Link} from 'react-router-dom';

const Profile = (props) => {
    const token = localStorage.Authentication;
    if (token) {
        switch (props.currentUser.user_type) {
            case 'HIGH_SCHOOL_STUDENT':
            case 'APPLICANT': {
                if (props.currentUser.subjects.length !== 0 || props.currentUser.description) {
                    return (
                        <div className='profile'>
                            <PROFILE_HEADER/>
                            <SCHOOL_PROFILE/>
                        </div>
                    );
                }
                return (
                    <div className='profile'>
                        <PROFILE_HEADER/>
                        <div className="profile__status">
                            <p className="profile__upper-status">Тут как-то пусто :(</p>
                            <p className="profile__lower-status">
                                Давай <Link to='/profileEdit'>добавим информацию</Link> о тебе
                            </p>
                        </div>
                    </div>
                );
            }

            case 'STUDENT': {
                if (props.currentUser.uni || props.currentUser.description) {
                    return (
                        <div className='profile'>
                            <PROFILE_HEADER/>
                            <STUDENT_PROFILE/>
                        </div>
                    );
                }
                return (
                    <div className='profile'>
                        <PROFILE_HEADER/>
                        <div className="profile__status">
                            <p className="profile__upper-status">Тут как-то пусто :(</p>
                            <p className="profile__lower-status">
                                Давай <a className="link">добавим информацию</a> о тебе
                            </p>
                        </div>
                    </div>
                );
            }

        }
    }
    return <SIGN_IN_PAGE/>;
}

export default Profile