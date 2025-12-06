import Link from "next/link";
import { Button } from "./ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <FacebookIcon className="h-6 w-6" />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <InstagramIcon className="h-6 w-6" />,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: <LinkedinIcon className="h-6 w-6" />,
  },
];

export function SocialFABs() {
  return (
    <div className="fixed bottom-24 right-6 flex flex-col items-center gap-3 z-50">
      <TooltipProvider>
        {socialLinks.map((social, index) => (
          <Tooltip key={social.href}>
            <TooltipTrigger asChild>
              <Button
                asChild
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Contact via ${social.label}`}>
                  {social.icon}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{social.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
