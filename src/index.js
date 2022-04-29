import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Portfolio /> }>
                <Route 
                    index
                    element={ <Home /> }
                />
                <Route
                    path='about'
                    element={ <About /> }
                />
                <Route
                    path='projects'
                    element={ <Projects /> }
                />
                <Route
                    path='contact'
                    element={ <Contact /> }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
