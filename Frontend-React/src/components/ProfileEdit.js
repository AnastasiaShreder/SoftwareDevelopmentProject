import React from 'react'
import PROFILE_EDIT_STUDENT from './wrapComponents/ProfileEditStudent_w';
import PROFILE_EDIT_SCHOOL from './wrapComponents/ProfileEditSchool_w';

const ProfileEdit = (props) => {
    switch (props.currentUser.user_type) {
        case 'HIGH_SCHOOL_STUDENT':
        case 'APPLICANT': return <PROFILE_EDIT_SCHOOL/>;
        case 'STUDENT': return <PROFILE_EDIT_STUDENT/>;
    }
}

export default ProfileEdit