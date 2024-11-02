import React from 'react';
import arrow from '../img/arrow-down.png';

export default function InputSelect({ label, options, value, onChange, error }) {
    return (
        <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-medium mb-3">{label}</label>
            {error && <p className="text-red-500 text-xs absolute top-1 left-20">{error}</p>}
            <select
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-4 pr-10 rounded-lg bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-all ${error ? 'border-red-500' : ''}`}
            >
                <option value="">Your First Name</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-5 pt-7 pointer-events-none">
                <img src={arrow} alt="arrow icon" />
            </div>
        </div>
    );
}