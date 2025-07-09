import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="mx-auto px-6 md:px-12">
				<div className="flex justify-between h-16 items-center">
					<div className="text-gray-800 text-lg font-semibold">Talk To PDF</div>
					<div className="flex space-x-6">
						<div
							onClick={() => navigate('/')}
							className="text-gray-700 hover:text-black font-medium cursor-pointer"
						>
							Upload
						</div>
						<div
							onClick={() => navigate('/chat')}
							className="text-gray-700 hover:text-black font-medium cursor-pointer"
						>
							Chat
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
