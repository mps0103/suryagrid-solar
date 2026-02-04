export default function WhatsAppFloat() {
  const phoneNumber = "917508485376"; // 👈 replace with your WhatsApp number
  const message = "Hello Suryagrid Energy, I am interested in solar solutions.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M19.11 17.38c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.37-.83-.74-1.39-1.65-1.56-1.93-.17-.28-.02-.43.13-.57.14-.14.28-.33.43-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2.01 3.07 4.88 4.31.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z"/>
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.65.87 5.09 2.34 7.06L4 29l7.18-2.27A11.94 11.94 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.82c-2.06 0-4.08-.55-5.84-1.6l-.42-.25-4.26 1.35 1.39-4.15-.27-.43A9.8 9.8 0 0 1 6.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z"/>
        </svg>
      </div>
    </a>
  );
}
