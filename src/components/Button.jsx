import React from 'react';

export default function Button({ text = "Save", onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`rounded-[5px] px-6 py-2 text-white 
                        transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95
                        ${className}`}
        >
            {text}
        </button>
    );
}