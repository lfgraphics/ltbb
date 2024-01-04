import React from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

export default function SubscribeForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    const onSubmit = async (data) => {
        const formData = {
            email: data.email,
            subject: 'Appointment Booking',
            message: `${data.email} wants to book an appointment!`,
        };
        try {
            await emailjs.send(
                "service_z905fmr",
                "template_3tl0e17",
                formData,
                "jcoqlfowIkys2Yh1s"
            );
            reset();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex items-start space-x-2"
        >
            <div>
                <input
                    className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    {...register('email', {
                        required: 'Email is required',
                        validate: {
                            maxLength: (v) =>
                                v.length <= 50 || 'The email should have at most 50 characters',
                            matchPattern: (v) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                'Email address must be a valid address',
                        },
                    })}
                />
                {errors.email?.message && (
                    <p className=" text-sm mt-2 text-red-500">
                        {errors.email.message}
                    </p>
                )}
                {isSubmitSuccessful && Object.keys(errors).length === 0 && (
                    <p className=" text-sm mt-2 text-green-500">
                        Your email has been sent successfully
                    </p>
                )}
            </div>
            <div>
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </button>
            </div>
        </form>
    );
}
