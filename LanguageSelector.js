import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLanguage } from './actions';
import { View, Text, TouchableOpacity } from 'react-native';
import { languages } from './languages';
class LanguageSelector extends Component {
	render() {
		const { hello } = this.props.selectedLanguage;
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<View style={{ padding: 20 }}>
					<Text style={{ fontSize: 30, fontWeight: 'bold' }}>
						{hello}
					</Text>
				</View>
				<View style={{ padding: 20 }}>
					<TouchableOpacity
						onPress={() =>
							this.props.selectLanguage(languages.english)
						}
					>
						<Text>English</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							this.props.selectLanguage(languages.japanese)
						}
					>
						<Text>Japanese</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							this.props.selectLanguage(languages.french)
						}
					>
						<Text>French</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							this.props.selectLanguage(languages.australian)
						}
					>
						<Text>Australian</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const mapStateToProps = state => {
	return {
		selectedLanguage: state.language
	};
};
export default connect(
	mapStateToProps,
	{ selectLanguage }
)(LanguageSelector);
