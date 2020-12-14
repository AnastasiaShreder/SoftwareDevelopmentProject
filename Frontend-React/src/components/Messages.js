import React from 'react'

import '../css/messages.css'
import ellipse from '../css/images/messages/ellipse.svg'
import frame from '../css/images/messages/frame.svg'
import SIGN_IN_PAGE from '@/components/wrapComponents/SignInPage_w';

const Messages = () => {
    const token = localStorage.Authentication;
    if (token) {
        return (
            <div className="msg__container">
                <div className="msg__details">
                    <div className="msg__user-name-container">
                        <div className="msg__test-name">Имя позьзователя</div>
                    </div>
                    <div className="msg__last-test-container">
                        <div className="msg__text-author">Автор последнего сообщения:</div>
                        <div className="msg__test-content">
                            ААААААААААААААааааааааааааааааааааааааАААААААААААААРКРАИКАРиррррркиаРРРРРРРРРРРРРРР
                            РРРРРРРР и fe s dsffffffffffffff
                        </div>
                    </div>
                </div>
                <div className="msg__unread-indicator">
                    <img src={ellipse} className="ellipse" alt='ellipse'/>
                    <div className="msg__unread-number">1</div>
                </div>

                <div className="msg__frame-icon-left">
                    <img src={frame} alt='frame'/>
                </div>
                <div className="msg__frame-icon-right">
                    <img src={frame} style={{transform: 'scaleX(-1)'}} alt='frame'/>
                </div>
            </div>
        );
    }
    return <SIGN_IN_PAGE/>;
}

export default Messages