"use client"; // needed because this component uses state and browser interactivity

import { useState } from "react";

export default function CVRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault(); // stop the browser's default full-page form submit
    setStatus("sending");

    try {
      const res = await fetch("/api/request-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-gray-900 text-white rounded-md px-5 py-2 hover:bg-gray-700 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Request CV"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 text-sm">
          Request sent! I&apos;ll email you the CV shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}