export default function WhatsAppFloat() {
  const phoneNumber = "919286799221"; // 👈 replace with your WhatsApp number
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
  <path d="M16 3C9.372 3 4 8.373 4 15c0 2.648.868 5.088 2.337 7.055L4 29l7.124-2.297A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.82a9.77 9.77 0 0 1-5.003-1.372l-.358-.214-4.23 1.364 1.38-4.12-.233-.374A9.786 9.786 0 0 1 6.214 15c0-5.4 4.39-9.786 9.786-9.786 5.396 0 9.786 4.386 9.786 9.786 0 5.4-4.39 9.786-9.786 9.786z"/>
  <path d="M20.73 17.62c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.69.85-.84 1.03-.15.18-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.27-.78-.7-1.31-1.56-1.47-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.15.18-.26.26-.44.09-.18.04-.33-.02-.46-.06-.13-.6-1.45-.83-1.99-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.46.07-.7.33-.24.26-.93.94-.93 2.3s.95 2.67 1.08 2.85c.13.18 1.88 2.89 4.56 4.05.63.27 1.12.43 1.51.55.64.2 1.22.17 1.68.1.51-.08 1.53-.63 1.75-1.24.22-.61.22-1.12.15-1.24-.06-.11-.24-.18-.5-.31z"/>
</svg>

      </div>
    </a>
  );
}
