"use strict";
// Problem 17 — Notification Center Renderer
Object.defineProperty(exports, "__esModule", { value: true });
function renderNotification(notification) {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post.`;
    }
    if (notification.actionUrl) {
        return `System: ${notification.message} (Tap to view)`;
    }
    return `System: ${notification.message}`;
}
console.log(renderNotification({
    type: "like",
    fromUser: "Abid"
}));
// Aisha liked your post.
console.log(renderNotification({
    type: "system",
    message: "Maintenance complete."
}));
// System: Maintenance complete.
console.log(renderNotification({
    type: "system",
    message: "Your subscription is expiring soon.",
    actionUrl: "/billing"
}));
// System: Your subscription is expiring soon. (Tap to view)
//# sourceMappingURL=problem_17.js.map