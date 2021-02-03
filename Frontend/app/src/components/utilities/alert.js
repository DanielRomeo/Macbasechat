import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Alert} from "reactstrap";

const OurAlert = (props) => {
	const [visible, setVisible] = useState(true);
	const onDismiss = () => setVisible(false);

	return (
		<Alert color={props.type} isOpen={visible} toggle={onDismiss}>
		  {props.message}
		</Alert>
	);
}

export const OurAlertSimple = (props) => {
		
	const styles = {
		"borderRadius": "0px"
	}

	return (
		<Alert style={styles} color={props.type} >
		  {props.message}
		</Alert>
	);
}

export default OurAlert;