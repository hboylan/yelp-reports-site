import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'typeface-roboto'
import './styles/index.css'
import theme from './styles'
import App from './App'
import * as serviceWorker from './serviceWorker'

const basename = window.location.hostname === 'hboylan.github.io' ? '/yelp-reports-site' : '/'

const Root = () => (
	<MuiThemeProvider theme={createMuiTheme(theme)}>
		<BrowserRouter basename={basename}>
			<App />
		</BrowserRouter>
	</MuiThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
