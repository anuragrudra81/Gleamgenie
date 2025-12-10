import type { SVGProps } from "react";
import { MessageCircle } from "lucide-react";

export function GleamGenieLogo(props: React.SVGProps<SVGSVGElement>) {
  // This now points to the logo you placed in the public folder.
  return (
    <img 
      src="/gleamGenieLogo.png" 
      alt="Gleam Genie Logo" 
      {...props} 
    />
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MessageCircle {...props} />
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69a.75.75 0 01.981.981A10.503 10.503 0 0118 18a10.5 10.5 0 01-10.5-10.5c0-1.77.42-3.44 1.172-4.944a.75.75 0 01.856-.138z"
        clipRule="evenodd"
      />
    </svg>
  );
}
