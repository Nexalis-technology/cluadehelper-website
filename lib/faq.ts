export const faqs = [
  {
    question: "Is cluadehelper free?",
    answer:
      "Yes. cluadehelper is a free Chrome extension with no account, subscription, or paywall.",
  },
  {
    question: "Is cluadehelper a Claude usage meter?",
    answer:
      "Yes. cluadehelper's usage tracker works as a live Claude usage meter, showing your session and weekly percentage used, with reset countdowns, right above the claude.ai message box.",
  },
  {
    question: "Which sites does cluadehelper work on?",
    answer:
      "cluadehelper is built specifically for claude.ai's web chat interface. It adds its usage tracker, token counter, and toolbar directly into the Claude chat page.",
  },
  {
    question: "Which AI tools can Continuity open?",
    answer:
      "Continuity currently supports opening ChatGPT and Gemini with your captured context ready to paste in, with more destinations planned.",
  },
  {
    question: "Does cluadehelper send my conversations to a server?",
    answer:
      "No. Your prompt library and settings are stored locally in your browser. Export and Continuity actions copy text to your clipboard on your device — cluadehelper does not run its own backend that stores your chats.",
  },
  {
    question: "Will it slow down claude.ai or change my conversations?",
    answer:
      "No. cluadehelper only reads the page to display usage stats and adds its own UI elements — it doesn't modify your messages or Claude's responses.",
  },
  {
    question: "How do I add my own prompts to the prompt library?",
    answer:
      'Open the extension icon → Settings → Prompt library, then give a prompt a short name and the full text to insert. Type "/" followed by that name in the claude.ai message box to insert it.',
  },
  {
    question: "How do I export or fork a conversation?",
    answer:
      "Open a Claude conversation, click the cluadehelper icon in your toolbar, then choose Markdown, JSON, or Plaintext under Export conversation, or pick a message under Fork conversation to branch from that point.",
  },
] as const;
