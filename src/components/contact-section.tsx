import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "./ui/label";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-extralight tracking-tighter sm:text-5xl text-primary">get in touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              have a question or want to book a cleaning? send us a message!
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl pt-12">
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              <form className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="font-light tracking-widest text-xs">name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="font-light tracking-widest text-xs">email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="font-light tracking-widest text-xs">message</Label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full tracking-widest" size="lg">
                  send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
