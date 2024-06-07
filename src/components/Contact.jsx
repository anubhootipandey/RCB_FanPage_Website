import React from "react";
import RcbImage from '../assets/gallery/rcb.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex max-w-4xl w-full">
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div>
            <img
              src= {RcbImage}
              alt="Contact Us"
              className="w-full h-auto"
            />
            <h2 className="text-3xl font-bold mt-4">Contact us if you have any queries!</h2>
            <p className="mt-2">
              We'd love to hear from you. Please fill out the form to get in touch with us.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                rows="4"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-rcbRed rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
