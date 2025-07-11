
# Talk to PDF - FrontEnd

This is a minimal, end-to-end Retrieval-Augmented Generation (RAG) implementation that allows users to upload PDFs and chat with them.

This project serves as a barebones RAG architecture without relying on high-level AI SDKs or vector DB wrappers — ideal for understanding how RAG works under the hood.

### Features
- Parses uploaded PDFs and splits the content into overlapping chunks
- Generates vector embeddings for each chunk
- Stores embeddings in a PostgreSQL database
- When queried, retrieves the most relevant chunks via embedding similarity search
- Sends these chunks along with the user query to the LLM for a contextual response
- Streams the response back to the Frontend


## Installation

Clone repo

```bash
  git clone https://github.com/rohankshah/talktopdf-frontend.git
  cd talktopdf-frontend
```

Install packages

```bash
  npm run install
```

Run server

```bash
  npm run dev
```
