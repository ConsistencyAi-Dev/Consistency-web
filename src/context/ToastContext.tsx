"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  title?: string;
  duration?: number;
}

export interface ToastOptions {
  title?: string;
  duration?: number;
}

interface ToastContextValue {
  toasts: ToastItem[];
  showToast: (message: string, type?: ToastType, options?: ToastOptions) => string;
  removeToast: (id: string) => void;
  toast: {
    success: (message: string, options?: ToastOptions) => string;
    error: (message: string, options?: ToastOptions) => string;
    info: (message: string, options?: ToastOptions) => string;
    warning: (message: string, options?: ToastOptions) => string;
  };
}

const ToastContext = createContext<ToastContextValue | null>(null);

// Standalone global trigger (can be called outside React tree, e.g. in services/api)
export const globalToast = {
  show: (message: string, type: ToastType = "info", options?: ToastOptions) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("consistency_toast", {
          detail: { message, type, options },
        })
      );
    }
  },
  success: (message: string, options?: ToastOptions) => globalToast.show(message, "success", options),
  error: (message: string, options?: ToastOptions) => globalToast.show(message, "error", options),
  info: (message: string, options?: ToastOptions) => globalToast.show(message, "info", options),
  warning: (message: string, options?: ToastOptions) => globalToast.show(message, "warning", options),
};

const DEFAULT_TITLES: Record<ToastType, string> = {
  success: "Done!",
  error: "Oops!",
  info: "Heads up",
  warning: "Attention",
};

function ToastCard({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}) {
  const duration = toast.duration ?? 4000;

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, duration);
    return () => clearTimeout(timer);
  }, [toast.id, duration, onDismiss]);

  const title = toast.title || DEFAULT_TITLES[toast.type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 45, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 45, scale: 0.95 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-sm pointer-events-auto"
    >
      <div
        className={`relative overflow-hidden flex items-start gap-3 px-4 py-3.5 rounded-2xl shadow-xl border backdrop-blur-md transition-all ${
          toast.type === "error"
            ? "bg-white/95 border-red-100 shadow-[0_8px_30px_rgba(239,68,68,0.12)]"
            : toast.type === "success"
            ? "bg-white/95 border-emerald-100 shadow-[0_8px_30px_rgba(16,185,129,0.12)]"
            : toast.type === "warning"
            ? "bg-white/95 border-amber-100 shadow-[0_8px_30px_rgba(245,158,11,0.12)]"
            : "bg-white/95 border-[#2B50EC]/20 shadow-[0_8px_30px_rgba(43,80,236,0.12)]"
        }`}
      >
        {/* Icon */}
        <div
          className={`mt-0.5 shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${
            toast.type === "error"
              ? "bg-red-50 text-red-500"
              : toast.type === "success"
              ? "bg-emerald-50 text-emerald-500"
              : toast.type === "warning"
              ? "bg-amber-50 text-amber-500"
              : "bg-[#EEF1FD] text-[#2B50EC]"
          }`}
        >
          {toast.type === "error" && (
            <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          )}
          {toast.type === "success" && (
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {toast.type === "warning" && (
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          )}
          {toast.type === "info" && (
            <svg className="w-4 h-4 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pt-0.5">
          <p
            className={`text-[13px] font-semibold leading-snug ${
              toast.type === "error"
                ? "text-red-700"
                : toast.type === "success"
                ? "text-emerald-700"
                : toast.type === "warning"
                ? "text-amber-800"
                : "text-[#1a1a2e]"
            }`}
          >
            {title}
          </p>
          <p className="text-[12px] text-gray-600 leading-snug mt-0.5 font-medium break-words">
            {toast.message}
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          className="shrink-0 mt-0.5 p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Animated Progress Bar */}
        <motion.div
          key={`bar-${toast.id}`}
          className={`absolute bottom-0 left-0 h-[2.5px] rounded-full ${
            toast.type === "error"
              ? "bg-red-400"
              : toast.type === "success"
              ? "bg-emerald-400"
              : toast.type === "warning"
              ? "bg-amber-400"
              : "bg-[#2B50EC]"
          }`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "info", options?: ToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const newToast: ToastItem = {
        id,
        message,
        type,
        title: options?.title,
        duration: options?.duration ?? 4000,
      };

      setToasts((prev) => {
        // Keep up to 4 most recent toasts to avoid overcrowding
        const updated = [...prev, newToast];
        return updated.slice(-4);
      });

      return id;
    },
    []
  );

  // Listen to standalone window events
  useEffect(() => {
    const handleCustomToast = (e: Event) => {
      const customEvent = e as CustomEvent<{
        message: string;
        type?: ToastType;
        options?: ToastOptions;
      }>;
      if (customEvent.detail?.message) {
        showToast(
          customEvent.detail.message,
          customEvent.detail.type || "info",
          customEvent.detail.options
        );
      }
    };

    window.addEventListener("consistency_toast", handleCustomToast);
    return () => {
      window.removeEventListener("consistency_toast", handleCustomToast);
    };
  }, [showToast]);

  const toastMethods = {
    success: (msg: string, opt?: ToastOptions) => showToast(msg, "success", opt),
    error: (msg: string, opt?: ToastOptions) => showToast(msg, "error", opt),
    info: (msg: string, opt?: ToastOptions) => showToast(msg, "info", opt),
    warning: (msg: string, opt?: ToastOptions) => showToast(msg, "warning", opt),
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
        removeToast,
        toast: toastMethods,
      }}
    >
      {children}

      {/* Floating Global Toast Container on the Right Side */}
      <aside
        aria-live="polite"
        aria-label="Notifications"
        className="fixed top-6 right-6 z-[9999] flex flex-col items-end gap-3 w-[calc(100vw-3rem)] max-w-sm pointer-events-none"
      >
        <AnimatePresence mode="sync">
          {toasts.map((item) => (
            <ToastCard key={item.id} toast={item} onDismiss={removeToast} />
          ))}
        </AnimatePresence>
      </aside>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    // Graceful fallback if called outside provider
    return {
      toasts: [],
      showToast: globalToast.show,
      removeToast: () => {},
      toast: {
        success: globalToast.success,
        error: globalToast.error,
        info: globalToast.info,
        warning: globalToast.warning,
      },
    };
  }
  return context;
}
