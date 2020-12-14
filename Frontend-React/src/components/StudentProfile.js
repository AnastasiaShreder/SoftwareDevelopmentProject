import React, {Fragment} from 'react'

import '../css/studentProfile.css'

const StudentProfile = (props) => {
    const university = props.currentUser.uni ? props.currentUser.uni.name : 'Университет';
    const specialization = props.currentUser.specialization ? props.currentUser.specialization.name : 'Специализация';
    const description = props.currentUser.description ? props.currentUser.description : '';

    return (
        <Fragment>
            <span className="profile__university post" data-testid="uniSpec">{university}, {specialization}</span>
            <div className="profile__status">
                <p data-testid="desc">{description}</p>
            </div>
            <div className="services">
                <hr className="services__line-upper"/>
                <div className="profile__services">
                    <table className="services__list">
                        <tbody>
                        {props.currentUser.services && props.currentUser.services.map((service) =>
                            <tr key={service.name+service.price+Math.random()}>
                                <td className='services__row'>{service.name}</td>
                                <td className='services__price'>{service.price}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <hr className="services__line-lower"/>
            </div>
        </Fragment>
    );
}

export default StudentProfile