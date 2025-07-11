import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts'
import Home from '../pages/Home'
import Chat from '../pages/Chat'

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/chat', element: <Chat /> },
		],
	},
])
