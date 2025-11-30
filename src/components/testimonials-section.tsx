import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Sarah L.",
    avatarId: "testimonial-avatar-1",
    text: "Gleam Genie is a lifesaver! My apartment has never been cleaner. The team was professional, on time, and incredibly thorough. Highly recommend!",
  },
  {
    name: "Michael B.",
    avatarId: "testimonial-avatar-2",
    text: "We use Gleam Genie for our office and the difference is night and day. A clean workspace has definitely boosted morale. Fantastic service.",
  },
  {
    name: "Jessica P.",
    avatarId: "testimonial-avatar-3",
    text: "The deep clean service was worth every penny. They got into nooks and crannies I didn't even know existed. It feels like a brand new home.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl font-headline">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to have happy customers. Here's what they think about our service.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto pt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                        <Avatar>
                          {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                        <p className="font-semibold font-headline">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
