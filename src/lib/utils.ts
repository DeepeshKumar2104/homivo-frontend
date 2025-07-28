import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price string with the appropriate currency symbol
 */
export function formatPrice(price: string | number, currency: string = "₹") {
  if (typeof price === "string" && price.startsWith(currency)) {
    return price;
  }
  return `${currency}${price}`;
}

/**
 * Truncates text to a specified length and adds ellipsis if needed
 */
export function truncateText(text: string, maxLength: number = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Formats a date string to a more readable format
 */
export function formatDate(dateString: string | Date) {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Debounce function to limit the rate at which a function is executed
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Generate a random ID (useful for temporary keys)
 */
export function generateId(length: number = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Check if the device is mobile based on screen width
 */
export function isMobileDevice() {
  return window.innerWidth < 768;
}