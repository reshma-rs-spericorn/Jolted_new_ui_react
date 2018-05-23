import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import Footer from '../Footer/Footer';

class Login extends Component {
	render() {
		return (
			<div className="page page--out">
				<LoginHeader />
				<main className="main">
					<section className="section flat-top">
						<div className="container" data-tagged="Signin">
							<h2 className="section__title">Sign in to Jolted.</h2>
							<p className="text-lg">
								Enter your details below.
		        	</p>
							<LoginForm />
						</div>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Login;
