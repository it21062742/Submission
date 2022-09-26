import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import * as React from 'react';
import { Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form, Button, Row, Container } from 'react-bootstrap';


const LoginForm = ({ validated, signInHandler, inputChangeHandler, user: { u_email, u_password }, loginError, errorMessage }) => {
		return(
			<div className={styles.body}>
			<div className={styles.container}>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/logo.png" alt="login" />
				</div>
				<div className={styles.right}>
				<Form noValidate validated={validated} onSubmit={signInHandler}>
					<p className={styles.heading}>Blue Lagoon Resort</p>
					<Box sx={{
							'& > :not(style)': { m: 1, width: '450px' },
						}}>
						<TextField id="standard-basic" type="email"  label="Email :" onChange={inputChangeHandler} variant="standard" width="850px"/><br></br>
						<TextField id="standard-basic" label="Password" name="u_password" value={u_password} onChange={inputChangeHandler} type="password" variant="standard" /><br></br>
					</Box>
					{loginError ? <div className="error m-10"><span>{errorMessage}</span></div> : null}
					<button className={styles.btn}>Log In</button>
				</Form>
				</div>
				</div>
			</div>
			</div>

		);
}
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            userDetail: {
                u_id: '',
                u_name: '',
                u_email: '',
                u_password: '',
                u_type: ''
            },
            loginError: false,
            errorMessage: ''
        }
    }
    inputChangeHandler(e) {
        let { name, value } = e.currentTarget;
        let { userDetail: userData } = this.state;
        userData[name] = value;
        this.setState({ userDetail: userData })
    }
    signInHandler(e) {

        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
            this.setState({ validated: true });
            return false;
        }



        let { u_password: password, u_email: email } = this.state.userDetail;
        let body = {
            password,
            email
        };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(body)
        };
        fetch('http://localhost:8080/login', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.success) {
                    console.log(" data ", data);
                    localStorage.setItem("loggedinUser", JSON.stringify(data.users));
                    this.setState({ loginError: false, errorMessage: '' });
                    window.location.pathname = "/dashboard";
                } else {
                    this.setState({ loginError: true, errorMessage: data.message });
                }

            })
            .catch(error => console.log('error', error));;


    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Container>
                    <Row style={{ margin: 50 }}>
                        <Col></Col>
                        <Col xs="6" md="6"><LoginForm validated={this.state.validated} user={this.state.userDetail} loginError={this.state.loginError} errorMessage={this.state.errorMessage} inputChangeHandler={this.inputChangeHandler.bind(this)} signInHandler={this.signInHandler.bind(this)}></LoginForm></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Index;
