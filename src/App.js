import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import MainPage from 'pages/MainPage'
import ProfilePage from 'pages/ProfilePage'
import NotFound from 'pages/NotFound'
// Containers
import Header from 'containers/Header'
import Modal from 'containers/modal'
import PageLoading from 'containers/common/PageLoading'
// lib
import * as loadingTime from 'lib/loadingTime'

const App = () => {
	return (<>
		<PageLoading limitTime={loadingTime.page}>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/main" component={MainPage} exact />
				<Route path="/profile" component={ProfilePage} exact />
				<Route path="*" component={NotFound} status={404} />
			</Switch>
			<Modal />
		</PageLoading>
	</>);
}

export default App
