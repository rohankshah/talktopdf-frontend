import { getFullUrl, paths } from './contants'

export async function postPdfToEmbed(file: File): Promise<any> {
	const url = getFullUrl(paths.embedPdf)

	const formData = new FormData()
	formData.append('uploaded_file', file)

	const response = await fetch(url, {
		method: 'POST',
		body: formData,
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`Failed to post PDF embed: ${response.status} - ${errorText}`)
	}

	return await response.json()
}
