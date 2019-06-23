import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Chatbot from './pages/Chatbot/Chatbot';

function App() {
    return (
        <main> 
            <Header/>
            <section id="main">
                <Router>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Redirect to='/page-2' />
                        )}/>
                        <Route path='/page-1' component={Page1}/>
                        <Route path='/page-2' component={Page2}/>
                        <Route path='/chatbot' component={Chatbot}/>
                    </Switch>
                </Router>
            </section>
        </main>
    );
}

export default App;
