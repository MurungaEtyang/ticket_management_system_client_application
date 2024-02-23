
import React, { Component, ChangeEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface Message {
    sender: string;
    content: string;
}

interface ChatModalState {
    messages: Message[];
    newMessage: string;
}

class ChatModal extends Component<{}, ChatModalState> {
    constructor(props: {}) {
        super(props);

        const storedMessages = sessionStorage.getItem('chatMessage');
        const initialMessages = storedMessages ? JSON.parse(storedMessages) : [];

        this.state = {
            messages: initialMessages,
            newMessage: '',
        };
    }

    generateRandomReply() {
        const replies = [
            'Thanks for reaching out!',
            "I'm glad the issue is resolved.",
            'How can I assist you further?',
            'Hello! How can I help you today?',
        ];
        const randomIndex = Math.floor(Math.random() * replies.length);
        return replies[randomIndex];
    }

    sendMessage = () => {
        const { newMessage, messages } = this.state;

        if (newMessage.trim() === '') {
            return;
        }

        const newMessages = [
            ...messages,
            { sender: localStorage.getItem('ticket_sender') || '', content: newMessage },
        ];

        setTimeout(() => {
            const reply = this.generateRandomReply();
            this.setState(
                {
                    messages: [
                        ...newMessages,
                        { sender: 'murungaevans84@gmail.com', content: reply },
                    ],
                    newMessage: '',
                },
                () => {
                    sessionStorage.setItem(
                        'chatMessages',
                        JSON.stringify(this.state.messages)
                    );
                }
            );
        }, 1000);
    };

    handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ newMessage: e.target.value });
    };

    render() {
        const { messages, newMessage } = this.state;

        return (
            <>
                <div className={`chat-section`}>
                    <div className={`chat`}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={
                                    message.sender === 'kamar254baraka@gmail.com'
                                        ? 'sender-message'
                                        : 'receive-message'
                                }
                            >
                                <p>{message.sender}</p>
                                <p>{message.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`send-message`}>
        <textarea
            placeholder={`message`}
            value={newMessage}
            onChange={this.handleInputChange}
        />
                    <button onClick={this.sendMessage}>
                        <FaPaperPlane />
                    </button>
                </div>
            </>
        );
    }
}

export default ChatModal;
