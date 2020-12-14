import React, {Fragment} from 'react'

import '../css/schoolProfile.css'

const SchoolProfile = (props) => {
    return (
        <Fragment>
            <span className="profile__university post">
                {props.currentUser.subjects &&
                    props.currentUser.subjects.map(subject => (`${subject.name} `))
                }
            </span>
            <div className="profile__status">
                <p data-testid='desc'>{props.currentUser.description}</p>
            </div>
            <div className="profile__services services">
                <span className="suggestion">Вас интересует:</span>
                <div className="services__list">
                    <ul>
                        {
                            props.currentUser.services &&
                                props.currentUser.services.map(service => (
                                    <li key={service.id} className="services__enum">
                                        {service.name}
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default SchoolProfile