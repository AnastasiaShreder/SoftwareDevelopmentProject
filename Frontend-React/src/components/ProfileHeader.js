import React, {Fragment} from 'react'

import '../css/profileHeader.css'

import avatar from '../css/images/profile/avatar.svg'
import edit from '../css/images/profile/edit.svg'
import {Link} from 'react-router-dom'

const types = new Map([
    ["HIGH_SCHOOL_STUDENT", "Старшеклассник"],
    ["APPLICANT", "Абитуриент"],
    ["STUDENT", "Студент"]
]);

const ProfileHeader = (props) => {
    return (
        <Fragment>
            <div className="profile__avatar">
                <img src={avatar} alt='avatar'/>
            </div>
            <div className="profile__name">
                <div>
                    <span className="profile__fio" data-testid="fio">{props.currentUser.first_name} {props.currentUser.second_name}</span>
                    <Link to='/profileEdit'>
                        <img src={edit} hspace="15" alt='edit'/>
                    </Link>
                </div>
                <span className="profile__membership post" data-testid="type">{types.get(props.currentUser.user_type)}</span>
            </div>
        </Fragment>
    );
}

export default ProfileHeader