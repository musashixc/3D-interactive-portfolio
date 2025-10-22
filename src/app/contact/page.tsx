"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const fullName = (form.querySelector("#fullName") as HTMLInputElement).value;
    const email = (form.querySelector("#email") as HTMLInputElement).value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert(`❌ Failed: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your full name
            </label>
            <input
              type="text"
              id="fullName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm
                         border border-gray-300 focus:ring-primary-500 focus:border-primary-500
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit
                       hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300
                       dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
