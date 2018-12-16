import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LanguageSelector from './LanguageSelector';
class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LanguageSelector />
			</Provider>
		);
	}
}
export default App;
