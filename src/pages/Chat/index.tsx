import { Send } from 'lucide-react'
import { useState } from 'react'
import type { MessageType } from '../../lib/types'
import { postNewMessage } from '../../api/postRequests'

const Chat = () => {
	const [currentMessage, setCurrentMessage] = useState<string>('')

	const [messages, setMessages] = useState<MessageType[]>([])

	async function handleSubmitMessage() {
		const newMessage: MessageType = {
			role: 'user',
			content: currentMessage,
		}
		setMessages(prev => [...prev, newMessage])
		setCurrentMessage("")
		try {
			const response = await postNewMessage([...messages, newMessage])
			const assistantMessageObj = response?.message
			setMessages(prev => [...prev, assistantMessageObj])
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="flex flex-col max-h-full h-full w-full px-4 overflow-x-clip">
			{/* Message Area */}
			<div className="h-full w-full space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-6 py-8">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`flex w-full ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
					>
						<div
							className={`max-w-xs md:max-w-md whitespace-pre-wrap px-4 py-2 rounded-lg shadow-sm ${
								message.role === 'user' ? 'bg-gray-100 text-gray-800' : 'bg-white border text-black'
							}`}
						>
							<div className="text-sm font-semibold mb-1 text-gray-500">{message.role}</div>
							<p>{message.content}</p>
						</div>
					</div>
				))}
			</div>

			{/* Input Area */}
			<div className="w-full py-4">
				<div className="flex items-center border rounded-lg px-4 py-2 shadow-sm w-11/12 md:w-1/2 mx-auto">
					<input
						type="text"
						placeholder="Type your message..."
						value={currentMessage}
						onChange={e => setCurrentMessage(e.target.value)}
						className="flex-1 outline-none border-none bg-transparent text-gray-800 placeholder-gray-400"
					/>
					<div onClick={handleSubmitMessage} className="ml-3 text-gray-800 hover:text-black cursor-pointer">
						<Send className="w-5 h-5" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat
