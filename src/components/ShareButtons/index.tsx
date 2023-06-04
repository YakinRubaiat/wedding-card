import React from 'react';
import './ShareButtons.scss';

const ShareButtons = () => {
    const url = window.location.href;
    const text = "Check out this awesome wedding invitation!";

    return (
        <div className="share-buttons">
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className="button facebook">Share on Facebook</a>
            <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer" className="button twitter">Share on Twitter</a>
        </div>
    );
};

export default ShareButtons;
