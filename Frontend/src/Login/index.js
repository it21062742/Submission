import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login(){
		return(
			<div className={styles.body}>
			<div className={styles.container}>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/logo.png" alt="login" />
				</div>
				<div className={styles.right}>

					<p className={styles.heading}>Blue Lagoon Resort</p>
					<Box sx={{
							'& > :not(style)': { m: 1, width: '450px' },
						}}>
						<TextField id="standard-basic" label="Email : " variant="standard" width="850px"/><br></br>
						<TextField id="standard-basic" label="Password" type="password" variant="standard" /><br></br>
					</Box>
					<button className={styles.btn}>Log In</button>
 
				</div>
				</div>
			</div>
			</div>

		);
}
export default Login;
