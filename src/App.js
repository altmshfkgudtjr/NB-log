import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import MainPage from 'pages/MainPage'
import ProfilePage from 'pages/ProfilePage'
import ProjectPage from 'pages/ProjectPage'
import MakingPage from 'pages/MakingPage'
import TerminalPage from 'pages/TerminalPage'
import PrintPage from 'pages/PrintPage'
import NotFound from 'pages/NotFound'
// Containers
import Header from 'containers/Header'
import Modal from 'containers/modal'
import PageLoading from 'containers/common/PageLoading'
// lib
import * as loadingTime from 'lib/loadingTime'

const App = () => {
	return (<>
		<Switch>
			<Route path="/print" component={PrintPage} exact />
			<Route path="*" component={AppContent} />
		</Switch>
	</>);
}

const AppContent = () => {
	return (
		<PageLoading limitTime={loadingTime.page}>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/main" component={MainPage} exact />
				<Route path="/profile" component={ProfilePage} exact />
				<Route path="/project" component={ProjectPage} exact />
				<Route path="/making" component={MakingPage} exact />
				<Route path="/terminal" component={TerminalPage} exact />
				<Route path="*" component={NotFound} status={404} />
			</Switch>
			<Modal />
		</PageLoading>
	);
}

export default App
