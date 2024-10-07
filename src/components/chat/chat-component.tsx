"use client";

import { useEffect } from "react";
import { socket } from "@/socket";
import { ChatLayout } from "@/components/chat/chat-layout";
import useChatStore from "@/hooks/useChatStore";

export default function ChatComponent({ defaultLayout, navCollapsedSize }) {
  useEffect(() => {
    // Establish a connection to the Socket.IO server
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("error", (error) => {
      console.error("Error occurred:", error);
    });

    socket.on("messageReceived", (newMessage) => {
      useChatStore.setState((state) => ({
          messages: [...state.messages, newMessage], // Update the store with the new message
      }));
  });
    // Clean up the socket connection when the component is unmounted
    return () => {
      socket.off("connect");
      socket.off("error");
      socket.off("messageReceived");
    };
  }, []);

  return (
    <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={navCollapsedSize} />
  );
}
