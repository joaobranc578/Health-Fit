import React from 'react';
import './Toast.css';

export default function Toast({ message, show, onClose }) {
  if (!show) return null;

  return (
    <div className="toast-overlay">
      <div className="toast">
        <div className="toast-icon">✅</div>
        <div className="toast-message">{message}</div>
        <button className="toast-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}