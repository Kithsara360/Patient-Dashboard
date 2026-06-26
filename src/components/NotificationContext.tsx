"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 1. Define the shape of what the context exposes
interface NotificationContextType {
  showNotification: (message: string, type: "success" | "error") => void;
}

// 2. Create the context object with a default value of null
const NotificationContext = createContext<NotificationContextType | null>(null);

// 3. The Provider component — wraps your whole app
export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 2000);
    return () => clearTimeout(timer);
  }, [notification]);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}

      {/* Toast — fixed to bottom-left, always rendered at layout level */}
      {notification && (
        <div
          role="alert"
          className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-lg px-5 py-3 text-white shadow-lg transition-all ${
            notification.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 font-bold opacity-70 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      )}
    </NotificationContext.Provider>
  );
}

// 4. Custom hook — how any component accesses showNotification
export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used inside NotificationProvider");
  }
  return context;
}