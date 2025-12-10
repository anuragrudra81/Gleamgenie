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
      fill="currentColor"
      {...props}
    >
      <path d="M18.669 16.572c.07.394-.036.796-.282 1.112-.246.315-.61.51-1.002.51h-1.385v2h-2v-2h-4v2h-2v-2H5.615c-.393 0-.756-.195-1.002-.51-.246-.316-.352-.718-.282-1.112l.66-3.722c.214-1.206 1.077-2.185 2.25-2.583.12-.04.24-.078.358-.114.12-.037.24-.07.358-.1C9.69 9.58 11.23 9 13 9c.957 0 1.832.228 2.58.62.33.175.644.382.94.615.485.38.89.873 1.146 1.442l1.003 2.932-3.098.962L15 13c-.22-.387-.5-.73-.833-1.003-.382-.31-.83-.54-1.31-.69-.533-.164-1.1-.25-1.667-.25-.92 0-1.74.223-2.333.614-.73.48-1.163 1.284-1.167 2.14l-.004.02 1.334 7.5h6l1.334-7.5.004-.02c.004-.856-.437-1.66-1.168-2.14-.593-.39-1.413-.614-2.333-.614-.567 0-1.134.086-1.667.25-.48.15-.928.38-1.31.69-.333.273-.613.616-.833 1.003l-1.07 1.89-3.098-.962 1.003-2.932c.257-.57.66-1.063 1.146-1.442.296-.233.61-.44.94-.615C11.168 9.228 12.043 9 13 9c1.77 0 3.31.58 4.642 1.554.118.03.238.063.358.1.118.036.238.073.358.114 1.173.398 2.036 1.377 2.25 2.583l.66 3.722zM12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1z" />
    </svg>
  );
}
