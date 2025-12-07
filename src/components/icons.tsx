import type { SVGProps } from "react";

export function GleamGenieLogo(props: SVGProps<SVGSVGElement>) {
  // Using an img tag to easily implement the provided PNG logo.
  // The original SVG props are passed for sizing and styling.
  return (
    <img 
      src="https://storage.googleapis.com/gweb-aip-images/tasks/studio/gleam-genie-logo-5f8f5394.png" 
      alt="Gleam Genie Logo" 
      {...props} 
    />
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.1 2.5C8.3 2.5 2 8.8 2 16.6C2 19.3 2.8 21.8 4.2 23.9L2 30L8.3 28.3C10.3 29.5 12.6 30.1 15 30.1H16.1C23.9 30.1 30.2 23.8 30.2 16C30.2 8.2 23.9 1.9 16.1 1.9L16.1 2.5ZM16.1 27.6H15C12.8 27.6 10.7 27 8.8 25.9L8.4 25.6L4.5 26.6L5.5 22.8L5.2 22.4C3.9 20.5 3.2 18.2 3.2 15.8C3.2 9.4 9 3.8 16.1 3.8C19.5 3.8 22.6 5.1 24.9 7.4C27.2 9.7 28.5 12.8 28.5 16.1C28.5 22.5 22.8 28.2 16.1 28.2V27.6H16.1Z"
      />
      <path
        d="M21.6 18.3C21.3 18.1 19.8 17.4 19.5 17.3C19.4 17.2 19.2 17.1 19 17.4C18.8 17.7 18.2 18.4 18 18.6C17.8 18.8 17.7 18.9 17.4 18.7C17.1 18.6 15.9 18.1 14.5 16.9C13.3 15.9 12.5 14.8 12.3 14.5C12.1 14.2 12.3 14 12.5 13.8C12.6 13.7 12.8 13.4 13 13.2C13.1 13.1 13.2 13 13.3 12.8C13.4 12.7 13.3 12.5 13.2 12.4C13.1 12.2 12.1 9.6 11.8 8.8C11.5 8 11.2 8.1 11 8.1L10.5 8.1C10.2 8.1 9.8 8.2 9.5 8.5C9.2 8.8 8.5 9.5 8.5 10.8C8.5 12.1 9.2 13.3 9.4 13.5C9.5 13.7 11.1 16.2 13.6 17.3C15.5 18.2 16.5 18.5 17.3 18.6C18.3 18.8 18.7 18.7 19.1 18.4C19.7 17.8 20.3 17 20.5 16.4C20.7 15.8 20.7 15.3 20.6 15.1C20.5 14.9 20.3 14.8 20.1 14.7L21.6 18.3Z"
      />
    </svg>
  );
}