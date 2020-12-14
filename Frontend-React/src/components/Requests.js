import React, {Fragment} from 'react'

import '../css/in_requests.css'

import expand from '../css/images/requests/expand.svg'
import SIGN_IN_PAGE from '../components/wrapComponents/SignInPage_w';

const Requests = props => {
    const token = localStorage.Authentication;
    if (token) {
        return (
            <div className="requests_container">
                <div className="switch">
                    <div className="rectangle_active">Входящие</div>
                    <div className="rectangle_inactive">Исходящие</div>
                </div>
                <div className="container">
                    <div className="container__lines-requests">
                        <div className="rectangle-inactive"></div>
                        <div className="request__body-inactive">
                            <div className="request__info-inactive">
                                <div className="request__theme-inactive">Еженедельные занятия по физике</div>
                                <div className="request__sender-inactive">от: Лукина Валерия</div>
                            </div>
                            <div className="request__text-inactive">Я интересуюсь направлением “Прикладная информатика”
                                в ИТМО. У меня много вопросов, давай договоримся когда тебе удобно на них ответить. Еще
                                хотелось бы узнать, по каким основным учебникам обучаются 1й семестр.
                            </div>
                        </div>
                        <div className="expand-inactive"><img src={expand} className="expand-icon" alt='expand'/></div>
                    </div>

                    <div className="container__lines-requests">
                        <div className="rectangle-active"></div>
                        <div className="request__body-active">
                            <div className="request__info-active">
                                <div className="request__theme-active">Консультация по направлению</div>
                                <div className="request__sender-active">от: Московская Полина</div>
                            </div>
                            <div className="request__text-active">Привет) хочу поступить в твой вуз и выбираю между
                                твоим направлением и другими двумя er gerg ef er ff er fe ggggg ergg eg er
                                grrrrrrrrrrrrrrr g мя er gerg ef er ff er fe ggggg ergg eg er grrrrrrrrrrrrrrr g er мя
                                er gerg ef er ff er fe ggggg ergg eg er grrrrrrrrrrrrrrr g er мя er gerg ef er ff er fe
                                ggggg ergg eg er grrrrrrrrrrrrrrr g er мя er gerg ef er ffмя er gerg ef er ff er fe
                                ggggg ergg eg er grrrrrrrrrrrrrrr g er мя er gerg ef er ff er fe ggggg ergg eg er
                                grrrrrrrrrrrrrrr g er grrrrrrrrrrrrrrr g er er gr g gggggggggggggg r e gerg
                            </div>
                            <div className="request__options">
                                <div className="option_accept">
                                    <div className="rectangle-accept">Принять</div>
                                </div>
                                <div className="option_reject">
                                    <div className="rectangle-reject">Отказать</div>
                                </div>
                            </div>
                        </div>
                        <div className="expand-active"><img src={expand} className="expand-icon"
                                                            style={{transform: 'rotate(180deg)'}} alt='expand'/></div>
                    </div>
                </div>
            </div>
        );
    }
    return <SIGN_IN_PAGE/>;
}

export default Requests