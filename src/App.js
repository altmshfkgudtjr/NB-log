import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import NotFound from 'pages/NotFound'
// Containers
import Header from 'containers/Header'
import Modal from 'containers/modal'

const App = () => {
	return (<>
		<Header />
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="*" component={NotFound} status={404} />
		</Switch>
		<Modal />
	</>);
}

export default App
