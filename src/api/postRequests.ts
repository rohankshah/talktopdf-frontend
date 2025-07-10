import type { MessageType } from '../lib/types'
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

export async function postNewMessage(messages: MessageType[]): Promise<any> {
	const url = getFullUrl(paths.chat)

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(messages),
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`Failed to send new chat: ${response.status} - ${errorText}`)
	}

	return await response.json();
}
