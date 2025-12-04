import Link from "next/link";
import { Button } from "./ui/button";
import { WhatsAppIcon } from "./icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function WhatsAppFAB() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Contact via WhatsApp">
              <WhatsAppIcon className="h-7 w-7" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Contact via WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
