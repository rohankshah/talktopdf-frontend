import { Upload } from 'lucide-react'
import { Input } from '../../components/ui/input'
import { postPdfToEmbed } from '../../api/postRequests'

const Home = () => {
	async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0]
		if (!file) {
			console.log('error')
			return
		}
		try {
			await postPdfToEmbed(file)
			console.log('success')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="h-full flex justify-center items-center">
			<div className="flex flex-col gap-12 items-center">
				<div className="text-4xl font-bold">TALK TO YOUR PDF</div>
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
						onChange={handleUpload}
					/>
				</label>
			</div>
		</div>
	)
}

export default Home
