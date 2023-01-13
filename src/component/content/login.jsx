import React, { Component } from 'react';
import Base from './base';
import $ from 'jquery';

class Login extends Component {
    state = { 
        error_message: "",
        username: "",
        password: "",
     } ;

     handClick = e => {
        e.preventDefault();
        
        if(this.state.username === ""){
            this.setState({error_message: "用户名不能为空"});
        }else if(this.state.password === ""){
            this.setState({error_message: "密码不能为空"});
        }else{
            $.ajax({
                url: "/login",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                dataType: "json",
                success: resp => {
                    if(resp.result === "sucess"){
                        window.location.href="/";
                    }else{
                        this.setState({error_message: resp.result});
                    }
                }
            });
        }
     }

    render() { 
        return (
            <Base>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">用户名</label>
                                    <input onChange={e => {this.setState({username: e.target.value})}} type="" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">密码</label>
                                    <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="password" />
                                </div>
                                <div style={{height: "2rem", color: "red"}}>
                                    {this.state.error_message}
                                </div>
                                <button onClick={this.handClick} style={{width: "100%"}} type="submit" className="btn btn-primary">登录</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Base>
        );
    }
}
 
export default Login;