import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white animate-fade-in">
      <video
        src="https://pixabay.com/videos/download/video-42217_large.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
          your space, spotlessly clean.
        </h1>
        <p className="mt-6 text-lg font-light max-w-3xl mx-auto text-white/90">
          gleam genie provides premium residential and commercial cleaning services in bayside melbourne. experience the gold standard of luxury cleaning.
        </p>
        <div className="mt-8 flex justify-center">
          <Button 
            size="lg"
            variant="outline"
            className="w-full sm:w-auto tracking-wide transform transition-transform duration-300 hover:-translate-y-1 bg-transparent border-white text-white hover:bg-white hover:text-primary">
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
}
