import {
  Message,
  UserData,
  userData,
  Users,
} from "@/app/data";
import { create } from "zustand";

export interface Example {
  name: string;
  url: string;
}

interface State {
  selectedExample: Example;
  examples: Example[];
  input: string;
  messages: Message[];
}

interface Actions {
  selectedUser: UserData;
  setSelectedExample: (example: Example) => void;
  setExamples: (examples: Example[]) => void;
  setInput: (input: string) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  setMessages: (fn: (messages: Message[]) => Message[]) => void;
}

const useChatStore = create<State & Actions>()((set) => ({
  selectedUser: Users[4],

  selectedExample: { name: "Messenger example", url: "/" },

  examples: [
    { name: "Messenger example", url: "/" },
  ],

  input: "",

  setSelectedExample: (selectedExample) => set({ selectedExample }),

  setExamples: (examples) => set({ examples }),

  setInput: (input) => set({ input }),
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => set({ input: e.target.value }),


  messages: userData[0].messages,
  setMessages: (fn) => set(({ messages }) => ({ messages: fn(messages) })),

}));

export default useChatStore;
