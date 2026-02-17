
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "61472526148";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" fill="white" />
    </Link>
  );
}
