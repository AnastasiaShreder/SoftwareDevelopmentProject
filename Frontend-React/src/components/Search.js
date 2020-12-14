import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'

import '../css/search.css'

import ellipse from '../css/images/ellipse.svg'
import {Link} from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none'
}

const Search = () => {
    const [users, setUsers] = useState(null);
    const [unis, setUnis] = useState(null);
    const [specs, setSpecs] = useState(null);
    const [subs, setSubs] = useState(null);
    const [user_type, setUserType] = useState('STUDENT');

    const subList = [];
    const unisList = [];
    const specsList = [];

    const fetchData = async () => {
        const response = await axios.get(
            'http://localhost:8080/users'
        );
        if (users === null) {
            setUsers(response.data);
        }
    };

    const fetchDataUnis = async () => {
        const allUnis = await axios.get('http://localhost:8080/universities');
        if (unis === null) {
            setUnis(allUnis.data)
        }
    }

    const fetchDataSpecs = async () => {
        const allSpecs = await axios.get('http://localhost:8080/specializations');
        if (specs === null) {
            setSpecs(allSpecs.data)
        }
    }

    const fetchDataSubs = async () => {
        const allSubs = await axios.get('http://localhost:8080/subjects');
        if (subs === null) {
            setSubs(allSubs.data)
        }
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {

            fetchDataUnis()
                .then(response => console.log('--USE EFFECT UNIS',response))
            fetchDataSpecs()
                .then(response => console.log('--USE EFFECT SPECS',response))
            fetchDataSubs()
                .then(response => console.log('--USE EFFECT SUBS',response))
            fetchData()
                .then(resp => console.log('--USE EFFECT',resp))
        }
        return () => { isMounted = false };
    })

    const changeUserType = async (event) => {
        setUserType(event.currentTarget.value);
        const response = await axios.post(
            'http://localhost:8080/search', {
                unis,
                specs,
                subs,
                user_type
            }
        );

        setUsers(response.data);
    }

    const changeSubs = async (event) => {
        if (event.currentTarget.checked) {
            subList.push({
                id: 0,
                name: event.currentTarget.value
            })
        } else {
            let sub = {
                id: 0,
                name: event.currentTarget.value
            };
            let subIndex = subList.indexOf(sub);
            subList.splice(subIndex, 1);
        }
        const response = await axios.post(
            'http://localhost:8080/search', {
                unis,
                specs,
                subs: subList,
                user_type
            }
        );

        setUsers(response.data);
    }

    const changeUnis = async (event) => {
        if (event.currentTarget.checked) {
            unisList.push({
                id: 0,
                name: event.currentTarget.value
            })
        } else {
            let uni = {
                id: 0,
                name: event.currentTarget.value
            };
            let uniIndex = unisList.indexOf(uni);
            unisList.splice(uniIndex, 1);
        }
        const response = await axios.post(
            'http://localhost:8080/search', {
                unis: unisList,
                specs,
                subs,
                user_type
            }
        );

        setUsers(response.data);
    }

    const changeSpecs = async (event) => {
        if (event.currentTarget.checked) {
            specsList.push({
                id: 0,
                name: event.currentTarget.value
            })
        } else {
            let spec = {
                id: 0,
                name: event.currentTarget.value
            };
            let specIndex = specsList.indexOf(spec);
            specsList.splice(specIndex, 1);
        }
        const response = await axios.post(
            'http://localhost:8080/search', {
                unis,
                specs: specsList,
                subs,
                user_type
            }
        );

        setUsers(response.data);
    }

    return (
        <div className="search__container">
            <div className="search__parameters">
                <div className="search__user-type">
                    <div className="search__title">Кого ищем:</div>
                    <form>
                        <div className="option">
                            <input
                                id="student"
                                className="option-radio"
                                type="radio"
                                name="hopping"
                                value="STUDENT"
                                onClick={changeUserType}
                            />
                            <label htmlFor="student" className="option-label">Студента</label>
                        </div>
                        <div className="option">
                            <input
                                id="pupil"
                                className="option-radio"
                                type="radio"
                                name="hopping"
                                value="APPLICANT"
                                onClick={changeUserType}
                            />
                            <label htmlFor="pupil" className="option-label">Ученика</label>
                        </div>
                    </form>
                </div>
                <div className="search__subjects">
                    <div className="search__title">Предметы:</div>
                    <form className="form">
                        {subs && subs.map(sub =>
                            <div className='option' key={sub.id}>
                                <input
                                    id={sub.id+sub.name}
                                    className="checkbox"
                                    type="checkbox"
                                    name="hopping"
                                    value={sub.name}
                                    onClick={changeSubs}
                                />
                                <label htmlFor={sub.id+sub.name} className='search__label'>{sub.name}</label>
                            </div>
                        )}
                    </form>
                </div>
                <div className="search__university">
                    <div className="search__title">ВУЗы:</div>
                    <form className="form">
                        {unis && unis.map(uni =>
                            <div className='option' key={uni.id}>
                                <input
                                    id={uni.id+uni.name}
                                    className="checkbox"
                                    type="checkbox"
                                    name="hopping"
                                    value={uni.name}
                                    onClick={changeUnis}
                                />
                                <label htmlFor={uni.id+uni.name} className='search__label'>{uni.name}</label>
                            </div>
                        )}
                    </form>
                </div>
                <div className="search__specialization">
                    <div className="search__title">Направления:</div>
                    <form className="form">
                        {specs && specs.map(spec =>
                            <div className='option' key={spec.id}>
                                <input
                                    id={spec.id+spec.name}
                                    className="checkbox"
                                    type="checkbox"
                                    name="hopping"
                                    value={spec.name}
                                    onClick={changeSpecs}
                                />
                                <label htmlFor={spec.id+spec.name} className='search__label'>{spec.name}</label>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <div className="vertical-separator"> </div>
            <div className="search__results">
                {users &&
                users.map(user => {
                    return (
                            <Link to={{
                                pathname: '/searchProfile',
                                propsSearch: user
                            }} key={user.id} style={linkStyle}>
                                <div className="search__profile__container" id={user.id}>
                                    <div className="search__profile-text-info">
                                        <div className="profile-name-uni-spec">
                                            <div className="profile__name">{user.second_name} {user.first_name}</div>
                                            <div className="profile__uni">{user.uni ? user.uni.name : ''}</div>
                                            <div className="profile__spec">{user.specialization ? user.specialization.name : ''}</div>
                                        </div>
                                        <div className="profile-description">
                                            {user.description ? user.description : ''}
                                        </div>
                                    </div>
                                    <div className="search__profile-avatar"><img src={ellipse} className="avatar-ellipse" alt='avatar'/></div>
                                </div>
                            </Link>
                    );
                })}

            </div>
        </div>
    );
}

export default Search