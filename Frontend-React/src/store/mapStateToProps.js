// передаёт необходимые свойства из store в компонент
function mapStateToProps(component) {
    switch (component) {
        case "SIGN_IN": {
            return function (state) { // возвращает функцию mapStateToProps
                // которая возвращает объект со свойством из store необходимом для данного компонента
                return {
                    signInIsOpen: state.signInIsOpen,
                    signUpIsOpen: state.signUpIsOpen,
                    currentUser: state.currentUser
                }
            }
        }

        case "SIGN_UP": {
            return function (state) {
                return {
                    signUpIsOpen: state.signUpIsOpen,
                    signInIsOpen: state.signInIsOpen
                }
            }
        }

        case "SIGN_IN_PAGE": {
            return function (state) {
                return {
                    signInIsOpen: state.signInIsOpen
                }
            }
        }

        case "PROFILE": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "PROFILE_HEADER": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "PROFILE_EDIT": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "PROFILE_EDIT_STUDENT": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "PROFILE_EDIT_SCHOOL": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "STUDENT_PROFILE": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "SCHOOL_PROFILE": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "APP": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "REQUESTS": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        case "MESSAGES": {
            return function (state) {
                return {
                    currentUser: state.currentUser
                }
            }
        }

        default: return undefined;
    }
}

export default mapStateToProps;