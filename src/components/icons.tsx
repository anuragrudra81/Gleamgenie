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
