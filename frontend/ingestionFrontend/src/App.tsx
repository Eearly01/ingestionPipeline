import { useEffect, useState } from "react";

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

type Status = 'idle' | 'requesting-upload' | 'processing' | 'ready' | 'error';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [documentId, setDocumentId] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const ready = status === "ready";

  async function handleUpload() {
    if (!file) return;
    setStatus("requesting-upload");
    setErrorMessage("");

    try {
      const presignRes = await fetch(`${API_BASE}/presign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type || "application/octet-stream",
        }),
      });

      if (!presignRes.ok) {
        throw new Error(`Presign failed: ${presignRes.statusText}`);
      }

      const presign = await presignRes.json();

      const uploadRes = await fetch(presign.uploadUrl, {
        method: "PUT",
        headers: presign.uploadHeaders,
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error(`Upload failed: ${uploadRes.statusText}`);
      }

      setDocumentId(presign.documentId);
      setStatus("processing");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Upload failed");
    }
  }

  useEffect(() => {
    if (!documentId || status !== "processing") return;

    const timer = setInterval(async () => {
      try {
        const res = await fetch(`${API_BASE}/status/${documentId}`);
        if (!res.ok) {
          throw new Error(`Status check failed: ${res.statusText}`);
        }
        const body = await res.json();
        setStatus(body.status);
      } catch (error) {
        setStatus("error");
        setErrorMessage(error instanceof Error ? error.message : "Status check failed");
        clearInterval(timer);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [documentId, status]);

  async function ask() {
    if (!question.trim() || !documentId) return;

    const nextMessages: Message[] = [...messages, { role: "user", text: question }];
    setMessages(nextMessages);
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentId,
          question,
          history: nextMessages.slice(0, -1),
        }),
      });

      if (!res.ok) {
        throw new Error(`Ask failed: ${res.statusText}`);
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.answer }]);
      setQuestion("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to get answer");
      setMessages((prev) => prev.slice(0, -1)); // Remove the user message on error
    }
  }

  return (
    <main className="app">
      <h1>Serverless AI Document Reader</h1>

      <section className="upload-section">
        <input
          type="file"
          accept=".txt,.md,.json,.csv"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button className="button" onClick={handleUpload} disabled={!file || status === "processing" || status === "requesting-upload"}>
          Upload
        </button>
        <div className="status">
          <span>Status: {status}</span>
          {status === "processing" && <div className="spinner"></div>}
        </div>
        {errorMessage && <p className="error">Error: {errorMessage}</p>}
        {documentId && <p>Document ID: {documentId}</p>}
      </section>

      <section className="chat-section">
        <div className="chat-messages">
          {messages.map((m, i) => (
            <p key={i} className="message">
              <strong>{m.role === "user" ? "You" : "AI"}:</strong> {m.text}
            </p>
          ))}
          {!messages.length && <p>Upload a file, wait for processing, then ask questions.</p>}
        </div>

        <div className="input-group">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={ready ? "Ask about the uploaded document" : "Waiting for processing..."}
            disabled={!ready}
          />
          <button className="button" onClick={ask} disabled={!ready || !question.trim()}>
            Ask
          </button>
        </div>
      </section>
    </main>
  );
}
