import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Col, Row, Label, Form, Input, FormGroup } from "reactstrap";
import OurAlert, { OurAlertSimple } from "../components/utilities/alert";

import '../css/signup.scss';


const Signup = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<Container>
				<h3>Signup</h3>
				<Row>
					<form className="form" onSubmit={handleSubmit(onSubmit)}>
						<Row id="RowOfForm">
							<Col md="6" id="FormColoumn">
								<FormGroup>
									<Label for="inputEmail" class="sr-only">
										Firstname
									</Label>
									<input
										type="text"
										className="form-control"
										name="firstname"
										ref={register({
											required: "Firstname is required.",
											minLength: {
												value: 2,
												message:
													"Firstname cannot be shorter than 2 charectors",
											},
											maxLength:{
												value: 40,
												message: "Firstname cannot be longer than 40 charectors"
											}
										})}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="inputEmail" class="sr-only">
										Lastname
									</Label>
									<input
										type="text"
										className="form-control"
										name="lastname"
										ref={register({
											required: "Lastname is required.",
											minLength: {
												value: 8,
												message:
													"Lastname cannot be shorter than 2 charectors",
											},
											maxLength:{
												value: 40,
												message: "Lastname cannot be longer than 40 charectors"
											}
										})}
									/>
								</FormGroup>

								<FormGroup>
									<Label for="inputEmail" class="sr-only">
										Email
									</Label>
									
									<input
										type="text"
										className="form-control"
										name="email"
										ref={register({
								          required: "Email is required",
								          pattern: {
								            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								            message: "Invalid email address"
								          }
								        })}
									/>
								</FormGroup>

								<FormGroup>
									<Label for="inputEmail" class="sr-only">
										Username
									</Label>
									<input
										type="text"
										className="form-control"
										name="username"
										ref={register({
											required: "Username is required.",
											minLength: {
												value: 8,
												message:
													"Username cannot be shorter than 8 charectors",
											},
										})}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="inputEmail" class="sr-only">
										Password
									</Label>

									<input
										type="password"
										className="form-control"
										name="password"
										ref={register({
											required: "Password is required",
											minLength: {
												value: 8,
												message: "Password must be atleast 8 charectors long"
											},
										})}
									/>
								</FormGroup>

								<FormGroup>
									<Label for="inputEmail" class="sr-only">
									Verify your password
									</Label>
									
									<input type="password" className="form-control" name="password2" ref={register({
									  validate: (value) => {
									    return value === watch('password'); // value is from password2 and watch will return value from password1
									  }
									})} />
								</FormGroup>

								<input id="submitButton" className="btn" type="submit" />
							</Col>

							<Col md="6" id="ErrorColoumn">
								<div>{errors.firstname && (
									<OurAlertSimple
										type="danger"
										message={errors.firstname.message}
									></OurAlertSimple>
								)}
								</div>
								<div>{errors.username && (
									<OurAlertSimple
										type="danger"
										message={errors.username.message}
									></OurAlertSimple>
								)}
								</div>
								<div>
									{errors.email && (
									<OurAlertSimple
										type="danger"
										message={errors.email.message}
									></OurAlertSimple>
								)}
								</div>
								<div>
									{errors.password && (
									<OurAlertSimple
										type="danger"
										message={errors.password.message}
									></OurAlertSimple>
								)}
								</div>
								<div>
									{errors.password2 && (
									<OurAlertSimple
										type="warning"
										message="Passwords do not match"
									></OurAlertSimple>
								)}
								</div>
							</Col>
						</Row>
					</form>
				</Row>
			</Container>
		</div>
	);
};

export default Signup;
