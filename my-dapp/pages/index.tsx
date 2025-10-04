import { useEffect, useState } from "react"
import { readMessage } from "../read"

export default function Home() {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    async function fetchMessage() {
      const msg = await readMessage()
      setMessage(msg)
    }
    fetchMessage()
  }, [])

  return (
    <div style={{
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center",
    }}>
      <h1 style={{ color: "#1e3a8a", marginBottom: "1rem" }}>My DApp</h1>
      <p style={{ fontSize: "1.25rem", color: "#111827" }}>
        Contract message:
      </p>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563eb" }}>
        {message || "Loading..."}
      </p>
    </div>
  )
}
