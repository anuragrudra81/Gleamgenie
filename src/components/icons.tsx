import type { SVGProps } from "react";
import { MessageCircle } from "lucide-react";

export function GleamGenieLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent-foreground))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        d="M50,5A45,45,0,1,1,5,50,45,45,0,0,1,50,5m0-5A50,50,0,1,0,100,50,50,50,0,0,0,50,0h0Z"
      />
      <path
        fill="hsl(var(--background))"
        d="M50,12.5A37.5,37.5,0,1,1,12.5,50,37.5,37.5,0,0,1,50,12.5m0-5A42.5,42.5,0,1,0,92.5,50,42.5,42.5,0,0,0,50,7.5h0Z"
      />
      <path
        fill="url(#grad1)"
        d="M50,25a25,25,0,1,1-17.68,7.32A25,25,0,0,1,50,25m0-5A30,30,0,1,0,80,50,30,30,0,0,0,50,20h0Z"
      />
      <path
        fill="hsl(var(--background))"
        d="M50,30a20,20,0,1,1-14.14,5.86A20,20,0,0,1,50,30m0-5A25,25,0,1,0,75,50,25,25,0,0,0,50,25h0Z"
      />
      <g>
        <path
          fill="hsl(var(--primary))"
          d="M40,50a10,10,0,1,0,10,10A10,10,0,0,0,40,50Z"
        />
        <circle fill="hsl(var(--background))" cx="42.5" cy="47.5" r="2.5" />
      </g>
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MessageCircle {...props} />
  );
}
