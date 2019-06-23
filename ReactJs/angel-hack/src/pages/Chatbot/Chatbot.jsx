import React from 'react'
import './Chatbot.scss'
import Navigation from './../../components/Navigation/Navigation';
import Message from './../../components/Message/Message';
import InputChatbot from './../../components/InputChatbot/InputChatbot';

const defaultData = [
    {
        avatar: null,
        isClient: false,
        text: 'Chúng tôi có thể giúp gì cho bạn?'
    },
    {
        avatar: null,
        isClient: true,
        text: 'Tôi đang cần trợ giúp vài thứ?'
    },
]

function Chatbot() {

    const data = defaultData.map((data, index)=>{
        return <Message {...data} key={index}/>
    })

    return (
        <section id="chatbot" className='container-fluid'>
            <section className="row">
                <section className="col-4">
                    <Navigation/>
                </section>
                <section className="col-8" id='message-box'>
                    <section className="message-text-area">
                        {data}
                    </section>

                    <InputChatbot/>
                </section>
            
            </section>
        </section>
    );
}

export default Chatbot;