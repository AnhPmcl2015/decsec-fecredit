import React from 'react';
import './Page2.scss'
import Navigation from '../../components/Navigation/Navigation';
import SubmitForm from '../../components/SubmitForm/SubmitForm';

function Page2() {


    return (
        <section id="page-2" className='container-fluid'>
            <section className="row">
                <section className="col-4">
                    <Navigation/>
                </section>
                <section className="col-8">
                    <SubmitForm/>
                </section>
                
            </section>
        </section>
    );
}

export default Page2;
