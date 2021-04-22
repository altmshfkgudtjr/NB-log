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
// hook
import useWebAccessibility from 'lib/hooks/useWebAccessibility'
// lib
import * as loadingTime from 'lib/loadingTime'

const App = () => {
	const [isMouseDown] = useWebAccessibility();

	return (<div className={isMouseDown ? 'mousedown' : ''}>
		<Switch>
			<Route path="/print" component={PrintPage} exact />
			<Route path="*" component={AppContent} />
		</Switch>
	</div>);
}

const AppContent = () => {
	return (
		<PageLoading limitTime={loadingTime.page}>
			<Header />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/main" component={MainPage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route exact path="/project" component={ProjectPage} />
				<Route exact path="/project/:projectTitle" component={ProjectPage} />
				<Route exact path="/making" component={MakingPage} />
				<Route exact path="/terminal" component={TerminalPage} />
				<Route component={NotFound} status={404} />
			</Switch>

			<Modal />
		</PageLoading>
	);
}

export default App
