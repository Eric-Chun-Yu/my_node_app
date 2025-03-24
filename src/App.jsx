import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 1. 訪客計數器 (每次刷新會重置)
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    setVisitorCount(visitorCount + 1);  // 訪問計數器每次刷新增加1
  }, []);  // 空依賴數組，確保只在第一次渲染時執行一次

  // 2. 留言板
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);  // 添加新留言
      setNewMessage("");  // 清空輸入框
    }
  };

  return (
    <>
      {/* 1. 顯示個人照片 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="./my_photo.jpg" // 替換為你的照片路徑
          alt="My Photo"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      </div>

      {/* 2. 簡短介紹 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Hello everyone, I'm Andy Chen from NTUEE. My student ID is R13921A07.</h1>
        <p>
          I'm passionate about technology and software development. Currently, I'm studying in the Department of Electrical Engineering at National Taiwan University of Science and Technology.
        </p>
      </div>

      {/* 3. 訪客計數器 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>Visitor Count: {visitorCount}</h2>
      </div>

      {/* 4. 留言板 */}
      <div style={{ textAlign: 'center' }}>
        <h2>Message Board</h2>
        <form onSubmit={handleSubmitMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Leave a message..."
            style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
        </form>
        <ul>
          {messages.map((msg, index) => (
            <li key={index} style={{ marginTop: '10px' }}>{msg}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
