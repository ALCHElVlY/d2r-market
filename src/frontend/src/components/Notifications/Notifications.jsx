// External imports
import { toast } from 'react-toastify';

// Internal imports
import './notifications.css';


/**
 * React consumer function to return a custom toast notification.
 * @param {object} type - The type of notification to display.
 * @param {string} message - The message to display.
 * @param {object} options - (optional) Additional options to pass to the toast.
 */
const ToastNotification = (type, message, options={}) => {
    let toastOptions;

    // Type guard: Check if a message was passed
    if (!message) {
        throw new Error('ToastNotificationError: A message is required.');
    }
    // Type guard: Check if the message is a string
    if (typeof message !== 'string') {
        throw new Error('ToastNotificationError: Message type must be a string.');
    }

    // Set the options for the toast notification
    toastOptions = {
        className: options.className || null,
        position: 'top-center',
        ...options,
    };
    let TOAST;
    switch (type) {
        case 'success':
            TOAST = toast.success(message, toastOptions);
            break;
        case 'error':
            TOAST = toast.error(message, toastOptions);
            break;
        case 'info':
            TOAST = toast.info(message, toastOptions);
            break;
        case 'warning':
            TOAST = toast.warning(message, toastOptions);
            break;
        default:
            throw new Error(`Invalid toast type: ${type}`);
    }
    return TOAST;
}

export default ToastNotification;