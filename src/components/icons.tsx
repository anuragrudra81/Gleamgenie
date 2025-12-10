import type { SVGProps } from "react";
import { MessageCircle } from "lucide-react";

export function GleamGenieLogo(props: React.SVGProps<SVGSVGElement>) {
  // This now points to the logo you placed in the public folder.
  return (
    <img 
      src="/Cleaing.png" 
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

export function GenieLampIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.73,19.29,6,14.56a1,1,0,0,1,0-1.41L9.41,9.76a1,1,0,0,0,0-1.41L6,4.93" />
      <path d="M10.73,19.29a2.38,2.38,0,0,0,3.36,0l2.39-2.39" />
      <path d="M15,18a1,1,0,0,0,1-1V15" />
      <path d="M18.89,12.18A5,5,0,0,0,13.41,6.7" />
      <path d="M21.07,10.42a1,1,0,0,0-1.42,0l-1.41,1.41" />
      <path d="M6,14.56a1,1,0,0,0-1.41,0L3.17,16a1,1,0,0,0,0,1.41l1.42,1.42a1,1,0,0,0,1.41,0Z" />
    </svg>
  );
}
