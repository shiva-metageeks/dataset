"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const escapeHtml = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const highlightJson = (json: string) => {
  if (typeof json !== "string") {
    json = JSON.stringify(json, null, 2);
  }

  // Escape HTML to prevent any rendering issues
  json = escapeHtml(json);

  return json
    .replace(/\"(.*?)\":/g, '<span class="json-key">"$1"</span>:')
    .replace(
      /: (\".*?\"|true|false|null|\d+)/g,
      ': <span class="json-value">$1</span>'
    );
};

const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code).then(
    () => alert("Code copied to clipboard!"),
    (err) => alert("Failed to copy the code!")
  );
};

function ReadmeViewer() {
  const [markdownContent, setMarkdownContent] = useState("");

  const renderers: Components = {
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";
      const code = String(children);

      if (language === "json") {
        const highlightedJson = highlightJson(String(children));
        return (
          <div className="relative p-1">
            <button
              onClick={() => copyToClipboard(code)}
              className="absolute right-2 top-2 bg-gray-700 text-white text-xs py-1 px-2 rounded hover:bg-gray-600"
            >
              Copy
            </button>
            <pre
              {...(props as React.HTMLProps<HTMLPreElement>)}
              className={`json inline-block p-2 m-1 overflow-x-auto `}
            >
              <code
                className={className}
                dangerouslySetInnerHTML={{ __html: highlightedJson }}
              />
            </pre>
          </div>
        );
      }

      return (
        <div className="relative p-0">
          {code.includes("\n") ? (
            <button
              onClick={() => copyToClipboard(code)}
              className="absolute right-2 top-2 bg-gray-700 text-white text-xs py-1 px-2 rounded hover:bg-gray-600"
            >
              Copy
            </button>
          ) : null}
          <pre
            {...(props as React.HTMLProps<HTMLPreElement>)}
            className={` inline-block overflow-x-auto p-1 m-0  ${className}`}
          >
            <code className="p-0 inline">{children}</code>
          </pre>
        </div>
      );
    },
  };

  useEffect(() => {
    fetch("/README.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <div className="prose dark:prose-dark max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ReadmeViewer;
