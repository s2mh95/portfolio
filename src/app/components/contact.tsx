"use client";
import Image from "next/image";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from '@mui/joy/CircularProgress';

type Data = {
    name: string,
    email: string,
    message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<Data>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_s2mh", "template_s2mh", formData, "OaIrOLFsAe1hBbtMX");
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col lg:flex-row justify-center w-full lg:w-2/3 mx-auto py-20 text-white">
      <ToastContainer position="bottom-left" />
      <div className="flex flex-col justify-end w-full lg:w-1/2 p-10 lg:bg-[url('../../public/bg.png')] bg-no-repeat bg-center">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Got a project in<strong className="text-[#00ADB5]"> mind?</strong>
        </h1>
        <div className="hidden lg:flex lg:justify-end">
          <Image src="/pic3.png" alt="" width={300} height={200} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col lg:w-1/2 p-10 font-bold relative">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col lg:w-1/2 my-3">
            <label htmlFor="name">Your Name</label>
            <input
              className="h-10 my-3 px-2 text-black rounded-2xl bg-gray-300"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col lg:w-1/2 my-3">
            <label htmlFor="email">Your Email</label>
            <input
              className="h-10 my-3 px-2 text-black rounded-2xl bg-gray-300"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
        </div>
        <label className="m-3" htmlFor="message">
          Your Message
        </label>
        <textarea
          className="m-3 p-2 h-72 text-black rounded-2xl bg-gray-300"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="flex flex-row bg-[#00ADB5] mr-auto m-3 p-3 items-center rounded-full duration-500 ease-in-out hover:bg-gray-500"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress color="neutral" size="sm" value={9} />
          ) : (
            <>
              Send Message
              <Image className="mt-2" src="/send.png" alt="" width={30} height={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}