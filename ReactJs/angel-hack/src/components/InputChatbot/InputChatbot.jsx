import React from 'react'
import './InputChatbot.scss'

function InputChatbot() {
    return (
        <section id='input-chatbot' className='container-fluid'>
            <form className="row">
                <section className="col-10">
                    <input type="text" className="form-control" id="message-area" aria-describedby="message-area" placeholder="Type your message..."/>
                </section>
                <section className="col-2">
                    <button className='btn btn-primary'>Send</button>
                </section>
            </form>
        </section>
    )
}

export default InputChatbot;