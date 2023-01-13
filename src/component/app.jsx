import React, { Component } from 'react';
import Navbar from './navBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';

class App extends Component {
    state = { 
        is_login: true,
        username: "Goodenough",
     } 

    render() { 
        return (
            <React.Fragment>
                <Navbar is_login={this.state.is_login} username={this.state.username} />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/calculator' element={this.state.is_login ? <Calculator /> : <Navigate replace to="/login" />}/>
                        <Route path='/login' element={this.state.is_login ? <Navigate replace to="/" /> : <Home />}/>
                        <Route path='/register' element={this.state.is_login ? <Navigate replace to="/" /> : <Register />}/>
                        <Route path='/404' element={<NotFound />}/>
                        <Route path="*" element={ <Navigate replace to="/404" /> } />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;