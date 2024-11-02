import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../img/background.jpg';
import profile from '../img/profile.png';
import InputText from '../components/InputText';
import InputSelect from '../components/InputSelect';
import Button from '../components/Button';
import { genderOptions, languageOptions, CountryOptions, TimeZoneOptions } from '../database'

export default function ProfilePage() {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        gender: '',
        languages: '',
        country: '',
        TimeZone: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setUser({ ...user, [field]: value });

        if (errors[field]) {
            const newErrors = { ...errors };
            delete newErrors[field];
            setErrors(newErrors);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!user.fullName) newErrors.fullName = '* Full Name is required.';
        if (!user.email) {
            newErrors.email = '* Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            newErrors.email = '* Invalid email format.';
        }
        if (!user.languages) newErrors.languages = '* Language is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            toast.success('Form submitted successfully!');
            setUser({
                fullName: '',
                email: '',
                gender: '',
                languages: '',
                country: '',
                TimeZone: '',
            })
        } else {
            toast.error('Please fill in the required fields.');
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <ToastContainer />
            <div className='bg-white rounded-[10px] w-full lg:m-16 m-3 min-h-[400px]'>
                <img src={background} alt="" className='w-full rounded-t-[10px] h-[100px] object-cover' />
                <div className='p-5'>
                    <div className='flex justify-between lg:flex-row flex-col lg:items-center gap-10'>
                        <div className='flex items-center gap-5'>
                            <img src={profile} alt="" className='w-[100px] h-[100px] object-cover rounded-full' />
                            <div>
                                <h1 className='text-xl font-semibold'>Alexa Rawles</h1>
                                <p className='text-[#8d8d8d] text-sm'>alexarawles@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <Button text="Save" className="bg-[#4182F9] hover:bg-[#4469af]" onClick={handleSubmit} />
                        </div>
                    </div>
                    <div className='mt-6 grid lg:grid-cols-2 gap-x-7 gap-y-2'>
                        <InputText
                            label="Full Name"
                            placeholder="Your First Name"
                            value={user.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            error={errors.fullName}
                        />

                        <InputSelect
                            label="Gender"
                            options={genderOptions}
                            value={user.gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                        />

                        <InputSelect
                            label="Language"
                            options={languageOptions}
                            value={user.languages}
                            onChange={(e) => handleInputChange('languages', e.target.value)}
                            error={errors.languages}
                        />

                        <InputText
                            label="Email"
                            placeholder="Your Email"
                            value={user.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            error={errors.email}
                        />

                        <InputSelect
                            label="Country"
                            options={CountryOptions}
                            value={user.country}
                            onChange={(e) => handleInputChange('country', e.target.value)}
                        />

                        <InputSelect
                            label="Time Zone"
                            options={TimeZoneOptions}
                            value={user.TimeZone}
                            onChange={(e) => handleInputChange('TimeZone', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}