import React from 'react'
import avatar from '../css/images/profile/avatar.svg'

const types = new Map([
    ["HIGH_SCHOOL_STUDENT", "Старшеклассник"],
    ["APPLICANT", "Абитуриент"],
    ["STUDENT", "Студент"]
]);

const SchoolProfileForStudent = (props) => {
    const user = props.user;
    return(
        <div className="profile">
            <div className="profile__avatar">
                <img src={avatar} alt='avatar'/>
            </div>
            <div className="profile__name">
                <span className="profile__fio" data-testid='fio'>{user.second_name} {user.first_name}</span>
                <span className="profile__membership post" data-testid='type'>{types.get(user.user_type)}</span>
                <span className="profile__university post">
                    {
                        user.subjects &&
                            user.subjects.map(subject => `${subject.name} `)
                    }
                </span>
            </div>
            <div className="profile__status">
                <p data-testid='desc'>{user.description ? user.description : ''}</p>
            </div>
            <div className="profile__services services">
                <span className="suggestion" data-testid='name'>{user.first_name} интересуется:</span>
                    <ul>
                        {
                            user.services &&
                                user.services.map(service =>
                                    <li key={service.id} className="services__enum">
                                        {service.name}
                                    </li>
                                )
                        }
                    </ul>
            </div>

        </div>
    );
}

export default SchoolProfileForStudent