import { Send } from 'lucide-react'

const messages = [
	{
		id: 1,
		content: 'Hey, this is a message',
		role: 'User',
	},
	{
		id: 2,
		content: 'Hi! How can I assist you with your PDF today?',
		role: 'Agent',
	},
	{
		id: 3,
		content: 'I want to extract text from this document.',
		role: 'User',
	},
	{
		id: 4,
		content: 'Sure, please upload the PDF file and I’ll get started.',
		role: 'Agent',
	},
	{
		id: 5,
		content: 'Just uploaded it!',
		role: 'User',
	},
	{
		id: 6,
		content: 'Got it. Extracting text now...',
		role: 'Agent',
	},
	{
		id: 7,
		content: 'I want to extract text from this document.',
		role: 'User',
	},
	{
		id: 8,
		content: 'Sure, please upload the PDF file and I’ll get started.',
		role: 'Agent',
	},
	{
		id: 9,
		content: 'Just uploaded it!',
		role: 'User',
	},
	{
		id: 10,
		content: 'Got it. Extracting text now...',
		role: 'Agent',
	},
]

const Chat = () => {
	return (
		<div className="flex flex-col max-h-full h-full w-full px-4 overflow-x-clip">
			{/* Message Area */}
			<div className="flex-1 w-full space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-6 py-8">
				{messages.map(m => (
					<div key={m.id} className={`flex w-full ${m.role === 'User' ? 'justify-end' : 'justify-start'}`}>
						<div
							className={`max-w-xs md:max-w-md whitespace-pre-wrap px-4 py-2 rounded-lg shadow-sm ${
								m.role === 'User' ? 'bg-gray-100 text-gray-800' : 'bg-white border text-black'
							}`}
						>
							<div className="text-sm font-semibold mb-1 text-gray-500">{m.role}</div>
							<p>{m.content}</p>
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
						className="flex-1 outline-none border-none bg-transparent text-gray-800 placeholder-gray-400"
					/>
					<div className="ml-3 text-gray-800 hover:text-black cursor-pointer">
						<Send className="w-5 h-5" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat
