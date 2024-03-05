import React from 'react';

interface MessageProps {
    text: string;
}

const Message = React.memo(({ text }: MessageProps) => {
    console.log('Message rendering...');
    return (
        <div>
            <p>{text}</p>
        </div>
    );
});

export default Message;


