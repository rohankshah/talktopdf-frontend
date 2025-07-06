import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts'
import Home from '../pages/Home'

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ path: '/', element: <Home /> }],
	},
])
