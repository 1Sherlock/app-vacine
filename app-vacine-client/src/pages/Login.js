import React from 'react';
import {Link} from "react-router-dom";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {login} from "../redux/actions/authAction";
import {connect} from "react-redux";

const Login = (props) => {

    return (
        <div id="login">
            <div className="border-bottom">
                <nav className="navbar navbar-expand-lg navbar-light bg-white container">
                    <Link to="/" className="navbar-brand text-primary font-weight-bold">
                        Covid-19
                    </Link>
                </nav>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 offset-4 pt-md-5 pt-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <AvForm onValidSubmit={(e, v) => props.login(v, props.history)}>
                                        <h2 className="text-center mb-3">Вход</h2>

                                        <AvField type="text" className="shadow-none" placeholder="Логин"
                                                 name="phoneNumber" required errorMessage="Это поле обязательно к заполнению"/>
                                        <AvField type="password" className="shadow-none" placeholder="Пароль"
                                                 name="password" required errorMessage="Это поле обязательно к заполнению"/>
                                        <AvField type="checkbox" name="save" label="Запомнить" id="forSave" value="1"/>
                                        <button type="submit" className="btn btn-primary" disabled={props.isLoading}>{props.isLoading ? <span className="spinner-border spinner-border-sm"/> : ""} Kirish</button>
                                    </AvForm>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.isLoading
    }
}
export default connect(mapStateToProps, {login})(Login);