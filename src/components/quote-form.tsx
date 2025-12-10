
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type."),
  residenceType: z.string().min(1, "Please select a residence type."),
  bedrooms: z.string().min(1, "Please select the number of bedrooms."),
  bathrooms: z.string().min(1, "Please select the number of bathrooms."),
  stories: z.string().min(1, "Please select the number of stories."),
  package: z.string().min(1, "Please select a package."),
  frequency: z.string().min(1, "Please select a frequency."),
  lastCleaned: z.string().min(1, "Please select when it was last cleaned."),
  additionalServices: z.array(z.string()).optional(),
  furnished: z.string().min(1, "Please specify if the property is furnished."),
  pets: z.string().min(1, "Please specify if you have pets."),
  heardAbout: z.string().min(1, "Please let us know how you heard about us."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  streetAddress: z.string().min(1, "Street address is required."),
  suburb: z.string().min(1, "Suburb is required."),
  state: z.string().min(1, "State is required."),
  postcode: z.string().min(1, "Postcode is required."),
});

const additionalServicesItems = [
  { id: "deep_clean", label: "Deep Clean" },
  { id: "oven_clean", label: "Oven Clean" },
  { id: "window_clean", label: "Window Clean" },
  { id: "fridge_clean", label: "Fridge Clean" },
  { id: "laundry", label: "Wash dry + fold laundry" },
  { id: "balcony", label: "Balcony" },
  { id: "pantry", label: "Pantry" },
];

export function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      additionalServices: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
        description: "Thanks for reaching out. We'll get back to you with a quote shortly.",
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

  const renderRadioGroup = (name: keyof z.infer<typeof formSchema>, label: string, options: string[]) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map(option => (
                <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option} />
                  </FormControl>
                  <FormLabel className="font-normal">{option}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <section id="quote-form" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-primary">Claim Your Free Quote</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              We just ask a few quick questions to provide you with an accurate quote.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl pt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {renderRadioGroup("serviceType", "Choose your service", ["General Cleaning", "Move-out / End-of-Lease Cleaning"])}
                {renderRadioGroup("residenceType", "Type of Residence", ["Apartment", "House", "Townhouse", "Office"])}
                {renderRadioGroup("bedrooms", "Number of Bedrooms", ["1", "2", "3", "4+"])}
                {renderRadioGroup("bathrooms", "Number of Bathrooms", ["1", "2", "3", "4+"])}
                {renderRadioGroup("stories", "Number of Stories", ["1", "2", "3", "4+"])}
                {renderRadioGroup("package", "Select a Package", ["Basic Package", "Gold Package", "Platinum Package"])}
                {renderRadioGroup("frequency", "How often would you like your home cleaned?", ["One-time", "Weekly", "Fortnightly", "Monthly"])}
                {renderRadioGroup("lastCleaned", "When was the property last cleaned?", ["A month ago", "3 months ago", "6 months ago", "More than 6 months"])}
              </div>
              
              <FormField
                control={form.control}
                name="additionalServices"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base font-semibold">Do you require any of the following additional services?</FormLabel>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {additionalServicesItems.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="additionalServices"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {renderRadioGroup("furnished", "Is the property furnished?", ["Yes", "No"])}
                {renderRadioGroup("pets", "Do you have pets?", ["Yes", "No"])}
              </div>

              {renderRadioGroup("heardAbout", "How did you hear about Clean Choice?", ["Google", "Facebook", "Instagram", "Referral", "Real Estate Agency"])}
              
              <Separator className="my-8" />
              
              <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-primary">Contact Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="First Name" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input placeholder="Last Name" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="Your Phone Number" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

               <FormField control={form.control} name="streetAddress" render={({ field }) => (
                  <FormItem><FormLabel>Property Address</FormLabel><FormControl><Input placeholder="Street Address" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField control={form.control} name="suburb" render={({ field }) => (
                        <FormItem><FormControl><Input placeholder="Suburb" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="state" render={({ field }) => (
                        <FormItem><FormControl><Input placeholder="State" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="postcode" render={({ field }) => (
                        <FormItem><FormControl><Input placeholder="Postcode" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                </div>


              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
