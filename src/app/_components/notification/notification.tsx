"use client";

import { useNotificationStore } from "@/store/notification.store";
import { NotificationToast } from "./notification-toast";
import { NotificationProps } from "./notification.types";
import { useEffect } from "react";

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notification);
  if (notifications.length < 1) return null;

  return (
    <div className="fixed  flex flex-col-reverse bottom-3 right-3 gap-3">
      {notifications.map((p) => {
        return (
          <NotificationToast key={`notification-${p.id}`} notification={p} />
        );
      })}
    </div>
  );
};