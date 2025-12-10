
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
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


const serviceImage = PlaceHolderImages.find(p => p.id === 'service-office-cleaning');

const officeQuoteFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  company: z.string().min(1, 'Company is required'),
});

const whoWeServiceItems = [
    "Corporate",
    "Large Offices",
    "Business Centres",
    "Property Cleaning & Management",
    "Car Park Cleaning",
    "Apartment Cleaning",
    "Office Cleaning Services",
    "Commercial Building",
    "Commercial & Retail",
    "Large Retail Stores",
    "Luxury Car Dealerships and showroom",
    "Cleaning of Shopping Complexes"
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
                throw new Error('Something went wrong.');
            }

            toast({
                title: "Quote request sent!",
                description: "Thanks! We'll get back to you with a quote shortly.",
            });
            form.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem sending your request. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-navy text-white">
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
                                    <Input placeholder="Your Name:" {...field} className="bg-white text-foreground" />
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
                                    <Input placeholder="Phone:" {...field} className="bg-white text-foreground" />
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
                                    <Input placeholder="Company:" {...field} className="bg-white text-foreground" />
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
                                    <Input placeholder="Email:" {...field} className="bg-white text-foreground" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                       <div className="md:col-span-2 flex justify-center">
                         <Button type="submit" disabled={isSubmitting} size="lg" className="bg-white/80 text-brand-navy hover:bg-white w-full max-w-xs">
                           {isSubmitting ? "Sending..." : "Send Inquiry"}
                         </Button>
                       </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}

function WhoWeServiceSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                        Who We Service
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {whoWeServiceItems.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default function ChildcareCleaningPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Childcare Cleaning</h1>
            <p className="text-muted-foreground font-light max-w-lg">
              We provide specialized cleaning for childcare centers, ensuring a safe, hygienic, and welcoming environment for children and staff.
            </p>
            <div className="pt-4">
              <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                  <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">Get a Quote for Your Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WhoWeServiceSection />
      <OfficeQuoteForm />
    </>
  );
}
