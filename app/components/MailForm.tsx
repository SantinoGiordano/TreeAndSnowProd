"use client";

import { useForm } from "react-hook-form";
import { FormData } from "@/utils/types";
import mailFormSchema from "@/utils/validation/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function ContactForm({
  sendMail,
}: {
  sendMail: (
    FormData: FormData
  ) => Promise<{ success: boolean; error: string | null }>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(mailFormSchema),
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (formData: FormData) => {
    const result = await sendMail(formData);
    if (result.success) {
      reset();
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      console.error(result.error);
    }
  };
  return (
    <>
      <div className="p-8 text-center animate-fade-in w-full">
        <h1 className="font-bold text-4xl mb-4">Contact Us</h1>
        <p className="text-lg mb-6 text-gray-300">
          We&apos;d love to hear from you!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md mx-auto px-4 sm:px-0"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-700 rounded shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-700 rounded shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <input
            type="subject"
            placeholder="Your Subject"
            className="w-full p-3 mb-4 bg-gray-700 rounded shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("subject")}
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-700 rounded shadow-md placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
              />
            </svg>
          </button>
        </form>
        {isSuccess && (
          <div className="toast toast-end">
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
