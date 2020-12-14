import React from 'react'
import {Redirect} from 'react-router-dom'

import SchoolProfileForStudent from '../components/SchoolProfileForStudent';
import StudentProfileForPupil from '../components/StudentProfileForPupil';

const SearchProfile = (props) => {
    const user = props.location.propsSearch;
    console.log('----USER',user);
    if (!props.location.propsSearch) return <Redirect to="/search" />;

    switch (user.user_type) {
        case 'HIGH_SCHOOL_STUDENT':
        case 'APPLICANT': {
            return <SchoolProfileForStudent user={user}/>;
        }
        case 'STUDENT': {
            return <StudentProfileForPupil user={user}/>;
        }
    }
}

export default SearchProfile