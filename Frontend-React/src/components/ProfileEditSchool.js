import React, {useState, useEffect} from 'react'

import '../css/profileEditSchool.css'

import avatar from '../css/images/profile/avatar.svg'
import add from '../css/images/profile/add.svg'
import deleteBtn from '../css/images/profile/delete.svg'
import {Multiselect} from 'multiselect-react-dropdown';
import axios from 'axios';

const ProfileEditSchool = (props) => {
    const [first_name, setFirstName] = useState(`${props.currentUser.first_name}`);
    const [second_name, setSecondName] = useState(`${props.currentUser.second_name}`);
    const [third_name, setThirdName] = useState(`${props.currentUser.third_name}`);
    const [user_type, setUserType] = useState(`${props.currentUser.user_type}`);
    const [description, setDescription] = useState(`${props.currentUser.description}`);

    const [subjects, setSubjects] = useState(null);

    const fetchData = async () => {
        const allSubs = await axios.get('http://localhost:8080/subjects');
        if (subjects === null) {
            setSubjects(allSubs.data)
        }
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            fetchData()
                .then(resp => console.log('--USE EFFECT',resp))
        }
        return () => { isMounted = false };
    })

    const subStyle = {
        chips: {
            background: '#FBF3F2',
            color: '#032539',
            border: '1px solid rgba(28, 118, 143, 0.5)',
            borderRadius: '0',
        },
        option: {
            background: '#FBF3F2',
            color: '#032539'
        },
        searchBox: {
            border: '1px solid rgba(28, 118, 143, 0.5)',
            borderRadius: '40px'
        }
    }

    const token = localStorage.Authentication;

    const addSubject = (selectedList, selectedItem) => {
        fetch(`http://localhost:8080/users/${props.currentUser.id}/add_subject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(selectedItem)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                } else {
                    console.log('ERR', response)
                }
            })
    }

    const deleteSubject = (selectedList, removedItem) => {
        fetch(`http://localhost:8080/users/${props.currentUser.id}/delete_subject`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(removedItem)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                } else {
                    console.log('ERR', response)
                }
            })
    }

    const setNewUserType = () => {
        const types = document.getElementsByClassName('userType');
        let type;
        for (let i = 0; i < types.length; ++i) {
            if (types[i].checked) {
                type = types[i].value;
            }
        }
        setUserType(type);
    }

    const updateCurrentUser = () => {
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
                    //недействительный токен
                    localStorage.removeItem('Authentication');
                } else {
                    props.setCurrentUser(data);
                }
            })
    }

    const addService = (event) => {
        let name = event.currentTarget.parentElement.nextElementSibling.innerHTML;
        let price = "";
        fetch(`http://localhost:8080/users/${props.currentUser.id}/add_service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                price
            })
        })
            .then(response => {
                if (response.ok) {
                    updateCurrentUser();
                } else {
                    console.log('ERR', response);
                }
            })
    }

    const deleteService = (event) => {
        let serviceName = event.currentTarget.parentElement.nextElementSibling.innerHTML;

        fetch(`http://localhost:8080/users/${props.currentUser.id}/delete_service/${serviceName}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    updateCurrentUser();
                } else {
                    console.log('ERR', response)
                }
            })
    }

    const submit = event => {
        event.preventDefault();
        fetch(`http://localhost:8080/users/${props.currentUser.id}/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                user_type,
                first_name,
                second_name,
                third_name,
                description
            })
        })
            .then(response => {
                if (response.ok) {
                    updateCurrentUser();
                } else {
                    console.log('ERR', response)
                }
            })
    }

    const deleteProfile = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/users/delete/${props.currentUser.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                } else {
                    console.log('ERR', response)
                }
            })
    }

    return (
        <div className="profile-edit">
            <div className="profile-edit__main-info">
                <div className="profile-edit__avatar">
                    <img src={avatar} alt='avatar'/>

                        <div className="profile-edit__avatar__add">
                            <img src={add} alt='add'/>
                        </div>
                </div>

                <div className="person-info">
                    <div className="person-info__column-1">
                        <div className="person-info__first-name input-field">
                            ИМЯ
                            <input
                                className="input-info input-info-1"
                                type="text"
                                size="30"
                                onChange={event => setFirstName(event.target.value)}
                            />
                        </div>
                        <div className="person-info__last-name input-field">
                            ФАМИЛИЯ
                            <input
                                className="input-info input-info-2"
                                type="text"
                                size="30"
                                onChange={event => setSecondName(event.target.value)}
                            />
                        </div>
                        <div className="person-info__middle-name input-field">
                            ОТЧЕСТВО
                            <input
                                className="input-info input-info-3"
                                type="text"
                                size="30"
                                onChange={event => setThirdName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="person-info__column-2">
                        <div className="person-info__post">
                            <p className="profile-edit__radio">
                                <input
                                    id="radio-1"
                                    type="radio"
                                    name="radio"
                                    value="HIGH_SCHOOL_STUDENT"
                                    className='userType'
                                    onChange={() => setNewUserType()}
                                />
                                <label htmlFor="radio-1">СТАРШЕКЛАССНИК</label>
                            </p>
                            <p className="profile-edit__radio">
                                <input
                                    id="radio-2"
                                    type="radio"
                                    name="radio"
                                    value="APPLICANT"
                                    className='userType'
                                    defaultChecked
                                    onChange={() => setNewUserType()}
                                />
                                <label htmlFor="radio-2">АБИТУРИЕНТ</label>
                            </p>
                            <p className="profile-edit__radio">
                                <input
                                    id="radio-3"
                                    type="radio"
                                    name="radio"
                                    value="STUDENT"
                                    className='userType'

                                    onChange={() => setNewUserType()}
                                />
                                <label htmlFor="radio-3">СТУДЕНТ</label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hello-message">
                <p>ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ</p>
                <input
                    className="message-field"
                    type="text"
                    onChange={event => setDescription(event.target.value)}
                />
            </div>
            <div className="interests-list">
                <p>ИНТЕРЕСЫ</p>
                <table className="interests-table">
                    <tbody>
                        {props.currentUser.services &&
                            props.currentUser.services.map(service => (
                                <tr key={service.name+Math.random()}>
                                    <td><img src={deleteBtn} alt='delete' onClick={deleteService}/></td>
                                    <td className="interests-table__row">{service.name}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>
                                <img
                                    src={add}
                                    alt='add'
                                    onClick={event => addService(event)}
                                />
                            </td>
                            <td className="interests-table__row" contentEditable='true'> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="subjects">
                <p>ИНТЕРЕСУЮЩИЕ ПРЕДМЕТЫ</p>
                {subjects && <Multiselect
                    options={subjects}
                    selectedValues={props.currentUser.subjects}
                    onSelect={addSubject}
                    onRemove={deleteSubject}
                    displayValue="name"
                    style={subStyle}
                    closeIcon="cancel"
                    hidePlaceholder={true}
                    placeholder="Начни вводить название предмета"
                    emptyRecordMsg="Нет доступных предметов;("
                />}
            </div>
            <div>
                <button className="delete__button" type="submit" onClick={deleteProfile}>
                    <span className="delete">Удалить профиль</span>
                </button>
                <button className="save__button" type="submit" onClick={submit}>
                    <span className="post">Сохранить изменения</span>
                </button>
            </div>
        </div>
    );
}

export default ProfileEditSchool