"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CVRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
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

  // Success state — replaces the form entirely
  if (status === "sent") {
  return (
    <div className="animate-fade-in-scale flex flex-col items-center text-center gap-3 max-w-md border border-sage/30 bg-sage/10 rounded-lg px-6 py-10">
      <FaCheckCircle className="text-sage" size={44} />
      <p className="text-lg font-semibold text-foreground">
        Request sent successfully!
      </p>
      <p className="text-warmgray text-sm">
        I&apos;ll email you the CV shortly.
      </p>
      <button
        onClick={() => setStatus("idle")}
        className="mt-4 px-4 py-2 border border-sage text-sage rounded-md hover:bg-sage hover:text-white transition-colors text-sm"
      >
        ← Back to form
      </button>
    </div>
  );
}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Your Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-warmgray/30 rounded-md px-3 py-2 bg-background text-foreground focus:border-clay focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Your Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-warmgray/30 rounded-md px-3 py-2 bg-background text-foreground focus:border-clay focus:outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-clay text-white rounded-md px-5 py-2 hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {status === "sending" ? "Sending..." : "Request CV"}
      </button>

      {status === "error" && (
        <p className="text-clay text-sm">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}