import React from 'react'

import '../css/mainPage.css'
import arrows from '../css/images/arrows.svg'
import duck_right from  '../css/images/duck_right.svg'

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page__main">
                <div className="header-text__block header-text">
                    <p className="header-text__text">Привет!</p>
                    <p className="header-text__text">
                        Рады видеть тебя на нашей платформе! Давай мы расскажем тебе пару слов о
                        <span className="highlighting"> Students4Students</span>
                    </p>
                </div>
                <div className="who-are-you">
                    <div className="who-are-yoy__if-you">
                        Если ты:
                    </div>
                    <div className="arrows">
                        <img src={arrows} alt='arrows'/>
                    </div>
                    <div className="who-are-you__school-pupil">
                        <div className="who-are-you__title">Старшеклассник</div>
                        <div className="who-are-you__list">
                            <ul>
                                <li className="enum">Получай актуальную информацию</li>
                                <li className="enum">Советуйся со студентами на тему выбора университета и направления</li>
                                <li className="enum">Готовься к ЕГЭ вместе с людьми, которые тебя понимают</li>
                                <li className="enum">Ищи подходящих студентов или одобряй заявки от желающих помочь</li>
                                <li className="enum">Заводи полезные знакомства</li>
                            </ul>
                        </div>
                    </div>
                    <div className="who-are-you__school-leaver">
                        <div className="who-are-you__title">Абитуриент</div>
                        <div className="who-are-you__list">
                            <ul>
                                <li className="enum">Узнавай, какие знания будут необходимы тебе на первом курсе</li>
                                <li className="enum">Консультируйся со студентами по поступлению</li>
                                <li className="enum">Знакомься со старшими студентами для дальнейшего общения</li>
                            </ul>
                        </div>
                    </div>
                    <div className="who-are-you__student">
                        <div className="who-are-you__title">Студент</div>
                        <div className="who-are-you__list">
                            <ul>
                                <li className="enum">Помогай страшекласснкам, абитуриентам и другим студентам</li>
                                <li className="enum">Устанавливай прайс и расписание занятий</li>
                                <li className="enum">Ищи заинтересованных учеников или одобряй заявки желающих</li>
                                <li className="enum">Получай помощь от других студентов</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-page__row row">
                <div className="row__flex-container">
                    <div className="row__duck_1 duck">
                        <img src={duck_right} alt='duck'/>
                    </div>
                    <div className="row__requests requests">
                        <div className="row__title_1 title">
                            <p><span className="row__title-1-text-upper">Удобная</span> система <span
                                className="row__title-text-lower">заявок</span></p>
                        </div>
                        <div className="row__text-upper">
                            <p>При нахождении подходящего студента или ученика просто отправь ему заявку</p>
                        </div>
                        <div className="row__text-lower">
                            <p>Когда заявка будет одобрена, диалог начнется автоматически</p>
                        </div>
                    </div>
                    <div className="row__schedule shedule">
                        <div className="shedule__text">
                            <div className="row__title_2 title">
                                <p><span className="row__schedule-upper">Личное</span> расписание</p>
                            </div>
                            <div className="row__text-upper">
                                <p>Следите за своим расписанием занятий и дедлайнами через персональный календарь</p>
                            </div>
                        </div>
                    </div>
                    <div className="row__search search">
                        <div className="search__text">
                            <div className="row__title_3 title">
                                <p><span className="row__search-upper">Подробный</span> <span
                                    className="row__search-lower">поиск</span></p>
                            </div>
                            <div className="row__text-upper">
                                <p>Находите студентов в определенном вузе и на конкретном направлении</p>
                            </div>
                            <div className="row__text-lower">
                                <p>Находите учеников по интересующим его предметам</p>
                            </div>
                        </div>
                    </div>
                    <div className="row__duck_2 duck">
                        <img src={duck_right} alt='duck'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage