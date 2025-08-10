export function track() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
}
