import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/screens/Home/Home'
import Layout from './components/layout/Layout'

let count = 0;

ReactDOM.render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>,
	document.getElementById('root')
)
