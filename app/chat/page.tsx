"use client";
import React, { Suspense } from "react";
import ChatUI from "./components/ChatUI";

export default function ChatPage() {
  <Suspense fallback={<div className="text-white">Loading chat...</div>}>
    <ChatUI />
  </Suspense>;
}
