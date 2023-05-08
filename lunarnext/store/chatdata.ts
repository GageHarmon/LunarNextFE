// import { create } from 'zustand';

// export interface ChatMessage {
//   sender: 'User' | 'AI';
//   content: string;
// }

// interface ChatState {
//   messages: ChatMessage[];
//   addMessage: (message: ChatMessage) => void;
//   sendMessage: (message: ChatMessage, user: any) => Promise<void>;
// }

// export const useChatStore = create<ChatState>((set, get) => ({
//   messages: [],
//   addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
//   sendMessage: async (message, user) => {
//     if (message) {
//       get().addMessage(message);
//       const response = await fetch('/api/chatgpt', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: message.content, user }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         get().addMessage({ sender: 'AI', content: data.response });
//       } else {
//         console.error('Error sending message:', response.statusText);
//       }
//     }
//   },
// }));