import React from 'react'
import './Message.scss'

function Message(props) {
    return(
        <section className="message">

            {
            !props.isClient ?
                <section className='message-text-left'>
                    <section>
                        Xin chào bạn, chúng tôi có thể giúp gì cho bạn? hãy cứ nói ra nha 
                        <figure>
                            <img alt='avatar' src={props.avatar || 'http://localhost:3000/images/default_avatar.png'}/>
                        </figure>
                    </section>
                </section>  : 

                <section className='message-text-right'>
                    <section>
                        Chúng tôi đang cần trợ giúp
                        <figure>
                            <img alt='avatar' src={props.avatar || 'http://localhost:3000/images/default_avatar.png'}/>
                        </figure>
                    </section>
                </section>
            }
            


        </section>
    )
}

export default Message;