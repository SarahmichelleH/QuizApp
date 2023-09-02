import React, { useState } from 'react';
import './appnotif.css';

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, sender: 'John', message: 'Hello!' },
    { id: 2, sender: 'Alice', message: 'How are you?' },
    { id: 3, sender: 'Bob', message: 'Reminder: Meeting at 2 PM' },
    { id: 4, sender: 'John', message: 'Hello!' },
    { id: 5, sender: 'Alice', message: 'How are you?' },
    { id: 6, sender: 'Bob', message: 'Reminder: Meeting at 2 PM' },
    { id: 7, sender: 'John', message: 'Hello!' },
    { id: 8, sender: 'Alice', message: 'How are you?' },
    { id: 9, sender: 'Bob', message: 'Reminder: Meeting at 2 PM' },
    // Add more notifications here...
  ]);

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notifications-container">
      <h1 className="heading">
        <span className="notifications-icon">🔔</span> Notifications
      </h1>
      {notifications.length > 0 ? (
        <ul className="notifications-list notifications-scroll">
          {notifications.map((notification) => (
            <li className="notification" key={notification.id}>
              <div className="notification-content">
                <h3 className="notification-sender">{notification.sender}</h3>
                <p className="notification-message">{notification.message}</p>
              </div>
              <button className="delete-button" onClick={() => deleteNotification(notification.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No notifications to display</p>
      )}
    </div>
  );
};

export default NotificationsList;