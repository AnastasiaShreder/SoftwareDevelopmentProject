import React from 'react'
import avatar from '../css/images/profile/avatar.svg'

import '../css/studentProfileForPupil.css'

const types = new Map([
    ["HIGH_SCHOOL_STUDENT", "Старшеклассник"],
    ["APPLICANT", "Абитуриент"],
    ["STUDENT", "Студент"]
]);

const StudentProfileForPupil = (props) => {
    const user = props.user;
    const uni = user.uni ? user.uni.name : 'Университет';
    const spec = user.specialization ? user.specialization.name : 'Специализация';

    return(
        <div className="profile">
            <div className="profile__avatar">
                <img src={avatar} alt='avatar'/>
            </div>
            <div className="profile__name">
                <span className="profile__fio" data-testid='fio'>{user.second_name} {user.first_name}</span>
                <span className="profile__membership post" data-testid='type'>{types.get(user.user_type)}</span>
                <span className="profile__university post" data-testid='uniSpec'>{uni}, {spec}</span>
            </div>
            <div className="profile__status">
                <p data-testid='desc'>{user.description ? user.description : ''}</p>
            </div>
            <div className="profile__services services">
                <span className="suggestion" data-testid='name'>{user.first_name} предлагает:</span>
                <ul>
                    {
                        user.services &&
                        user.services.map(service =>
                            <li key={service.id} className="services__enum">
                                {service.name} - {service.price}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default StudentProfileForPupil