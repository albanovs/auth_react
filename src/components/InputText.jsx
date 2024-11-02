import React from 'react';

export default function InputText({ label, placeholder, value, onChange, error }) {
    return (
        <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-medium mb-3">{label}</label>
            {error && <p className="text-red-500 text-xs absolute top-1 left-20">{error}</p>}
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-4 rounded-lg bg-gray-100 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${error ? 'border-red-500' : ''}`}
            />
        </div>
    );
}