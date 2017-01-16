import React, {Component} from 'react';
import {View, Text} from 'react-native'

class Dialogo extends Component {
	constructor(props) {
		super(props)
		this.state = {nombre: this.props.nombre, apellido: this.props.apellido}
	}
	render() {

		return(
			<View>
				<Text>Hola {this.state.nombre} {this.state.apellido}</Text>
			</View>
			)
	}
}

module.exports = Dialogo;