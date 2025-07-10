import type { RoleType } from "./types";

export const sampleMessages = [
    {
        content: 'Hey, this is a message',
        role: 'user' as RoleType,
    },
    {
        content: 'Hi! How can I assist you with your PDF today?',
        role: 'assistant' as RoleType,
    },
    {
        content: 'I want to extract text from this document.',
        role: 'user' as RoleType,
    },
    {
        content: 'Sure, please upload the PDF file and I’ll get started.',
        role: 'assistant' as RoleType,
    },
    {
        content: 'Just uploaded it!',
        role: 'user' as RoleType,
    },
    {
        content: 'Got it. Extracting text now...',
        role: 'assistant' as RoleType,
    },
    {
        content: 'I want to extract text from this document.',
        role: 'user' as RoleType,
    },
    {
        content: 'Sure, please upload the PDF file and I’ll get started.',
        role: 'assistant' as RoleType,
    },
    {
        content: 'Just uploaded it!',
        role: 'user' as RoleType,
    },
    {
        content: 'Got it. Extracting text now...',
        role: 'assistant' as RoleType,
    },
]