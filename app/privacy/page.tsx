import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 20, 2026">
      <p>
        {siteConfig.name} (&quot;the extension&quot;, &quot;we&quot;) is a
        Chrome extension that adds usage tracking, a token counter, chat
        export, conversation forking, a prompt library, and Continuity to
        claude.ai. This page explains what data the extension touches and how
        it&apos;s handled.
      </p>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t operate a server that receives your Claude conversations.</li>
        <li>We don&apos;t sell or share your data with third parties.</li>
        <li>We don&apos;t track you across other websites.</li>
      </ul>

      <h2>What&apos;s stored, and where</h2>
      <p>
        Your prompt library entries, feature toggles, and export preferences
        are saved using your browser&apos;s local extension storage
        (<code>chrome.storage</code>). This data stays on your device and
        syncs only through your own Chrome profile if Chrome sync is enabled
        on your account — {siteConfig.name} itself never receives a copy.
      </p>

      <h2>Reading the claude.ai page</h2>
      <p>
        To show usage percentages, token counts, and to power export,
        forking, and Continuity, the extension reads content on the
        claude.ai tab you have open. This happens locally in your browser and
        is not transmitted to us.
      </p>

      <h2>Clipboard access</h2>
      <p>
        Exporting a conversation or using Continuity&apos;s &quot;Copy &amp;
        open&quot; action copies text to your clipboard so you can paste it
        into another tool. This only happens when you trigger the action —
        the extension does not read or monitor your clipboard otherwise.
      </p>

      <h2>Continuity and third-party AI tools</h2>
      <p>
        When you choose to continue in ChatGPT, Gemini, or another tool,
        Continuity opens that tool&apos;s website in a new tab and copies your
        captured context to your clipboard for you to paste in. Once you
        paste that content, it is subject to that provider&apos;s own privacy
        policy and terms — we recommend reviewing them if you&apos;re
        pasting sensitive information.
      </p>

      <h2>Permissions</h2>
      <p>
        The extension requests only the browser permissions it needs to
        function on claude.ai — such as reading the active tab, local
        storage, and clipboard write access for the actions described above.
        We don&apos;t request permissions to access unrelated sites or your
        browsing history.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, we&apos;ll update the date at the top of this
        page. Continued use of the extension after a change means you accept
        the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>
          {siteConfig.supportEmail}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
