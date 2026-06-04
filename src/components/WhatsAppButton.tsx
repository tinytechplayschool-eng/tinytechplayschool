import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20BrightSparks%2C%20I%27d%20like%20to%20know%20more%20about%20admissions."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-brand-green text-white grid place-items-center shadow-pop hover:scale-110 transition-transform animate-float-slow"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
