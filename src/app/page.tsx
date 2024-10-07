import { cookies } from "next/headers";
import ChatComponent from "@/components/chat/chat-component";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="w-full">
      <ChatComponent defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}