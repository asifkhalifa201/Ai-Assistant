import React from 'react';
import { Bot, User } from 'lucide-react';

const EmptyState = () => (
  <div className="flex-1 flex flex-col items-center justify-center px-4">
    <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-zinc-900 text-center leading-tight">
      What can I help you code?
    </h2>
    <p className="mt-3 text-[14px] md:text-[15px] text-zinc-500 text-center max-w-sm">
      Ask about algorithms, debug code, or prep for interviews.
    </p>
  </div>
);

const Bubble = ({ role, content }) => {
  const isUser = role === 'user';
  return (
    <div className={`flex items-start gap-2.5 md:gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-md bg-[#7c3aed] flex items-center justify-center shrink-0 shadow-sm">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-3.5 py-2.5 md:px-4 md:py-3 text-[14px] md:text-[14.5px] leading-relaxed whitespace-pre-wrap shadow-sm ${
          isUser ? 'bg-[#7c3aed] text-white rounded-br-sm' : 'bg-zinc-100 text-zinc-900 rounded-bl-sm'
        }`}
      >
        {content}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

const MessageList = ({ messages, isTyping }) => {
  if (!messages.length && !isTyping) return <EmptyState />;

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-10 py-4 md:py-8">
      <div className="max-w-3xl mx-auto space-y-4 md:space-y-5">
        {messages.map((m) => <Bubble key={m.id} role={m.role} content={m.content} />)}
        {isTyping && (
          <div className="flex items-start gap-2.5 md:gap-3">
            <div className="w-8 h-8 rounded-md bg-[#7c3aed] flex items-center justify-center shrink-0 shadow-sm">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-zinc-100 rounded-2xl rounded-bl-sm px-3.5 py-2.5 md:px-4 md:py-3 shadow-sm">
              <div className="flex gap-1.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageList;