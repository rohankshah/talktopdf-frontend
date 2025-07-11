import { Loader, Upload } from 'lucide-react'
import { Input } from '../../components/ui/input'
import { postPdfToEmbed } from '../../api/postRequests'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

	const navigate = useNavigate()

	const [isUploading, setIsUploading] = useState(false)

	async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0]
		if (!file) {
			console.log('error')
			return
		}
		try {
			setIsUploading(true)
			await postPdfToEmbed(file)
			navigate('/chat')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="h-full flex justify-center items-center">
			<div className="flex flex-col gap-12 items-center">
				<div className="text-4xl font-bold">TALK TO YOUR PDF</div>
				{isUploading ? (
					<div className="w-72 border-2 border-dotted border-gray-300 rounded-lg flex items-center justify-center gap-2 py-3 text-gray-600">
						<Loader className="w-5 h-5 animate-spin text-gray-500" />
						<span className="text-sm text-gray-500">Uploading...</span>
					</div>
				) : (
					<label
						htmlFor="pdf-upload"
						className="w-72 cursor-pointer border-2 border-dotted border-gray-300 rounded-lg flex items-center justify-center gap-2 py-3 text-gray-600 hover:border-gray-400 transition"
					>
						<Upload className="w-5 h-5" />
						<span>Upload PDF</span>
						<Input
							id="pdf-upload"
							type="file"
							accept="application/pdf"
							className="hidden"
							disabled={isUploading}
							onChange={handleUpload}
						/>
					</label>
				)}
			</div>
		</div>
	)
}

export default Home
