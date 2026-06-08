
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Check } from "lucide-react";


const serviceImage = PlaceHolderImages.find(p => p.id === 'service-builder-cleaning');

const officeQuoteFormSchema = z.object({
  name: z.string().min(1, 'name is required'),
  email: z.string().email('invalid email address'),
  phone: z.string().min(1, 'phone is required'),
  company: z.string().min(1, 'company is required'),
});

const constructionServices = [
    "pre build cleans",
    "final cleans",
    "refurbishment cleans",
    "maintenance cleans",
    "retail display installations",
    "retail fit outs",
    "demolition and strip outs",
];

function OfficeQuoteForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof officeQuoteFormSchema>>({
        resolver: zodResolver(officeQuoteFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: ""
        },
    });

    async function onSubmit(values: z.infer<typeof officeQuoteFormSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('something went wrong');
            }

            toast({
                title: "quote request sent",
                description: "thanks, we will get back to you with a quote shortly",
            });
            form.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "uh oh, something went wrong",
                description: "there was a problem sending your request, please try again",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <section id="inquiry-form" className="w-full py-12 md:py-24 lg:py-32 bg-brand-navy text-white">
            <div className="container px-4 md:px-6">
                 <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-white mb-8">
                    send us an inquiry
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                         <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="your name" {...field} className="bg-white text-foreground" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="phone" {...field} className="bg-white text-foreground" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="company" {...field} className="bg-white text-foreground" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="email" {...field} className="bg-white text-foreground" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                       <div className="md:col-span-2 flex justify-center">
                         <Button type="submit" disabled={isSubmitting} size="lg" className="bg-white/80 text-brand-navy hover:bg-white w-full max-w-xs">
                           {isSubmitting ? "sending" : "send inquiry"}
                         </Button>
                       </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default function ConstructionCleaningPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-md overflow-hidden animate-fade-in">
            {serviceImage && (
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                fill
                className="object-cover"
                data-ai-hint={serviceImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">construction cleaning</h1>
            <div className="text-muted-foreground font-light max-w-lg space-y-4">
                <p>
                    all gleam genie workers are fully equipped with the required ppe and white cards, and follow site specific swms to ensure safe, compliant refurbishment cleaning on construction sites
                </p>
                <div>
                    <h3 className="font-semibold text-primary mb-2">our construction and building facility services include:</h3>
                    <ul className="space-y-2">
                        {constructionServices.map((service) => (
                             <li key={service} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <OfficeQuoteForm />
    </>
  );
}
