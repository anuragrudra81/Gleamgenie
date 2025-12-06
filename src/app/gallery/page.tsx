
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryItems = PlaceHolderImages.filter(p => 
  p.id.startsWith('gallery-image-') || 
  p.id.startsWith('service-')
);

const galleryVideo = PlaceHolderImages.find(item => item.id.includes('video'));

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Our Work</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
          A glimpse into the spotless spaces we create.
        </p>
      </div>

      <div className="w-full animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
          {galleryVideo && (
            <div className="sm:col-span-2 md:col-span-3 rounded-lg overflow-hidden relative aspect-video w-full">
              <video
                src={galleryVideo.imageUrl}
                title={galleryVideo.description}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-end justify-end text-right p-4">
                <p className="text-white text-sm font-semibold">Brighton</p>
                <p className="text-white text-xs font-light">{galleryVideo.description}</p>
              </div>
            </div>
          )}
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative h-64 md:h-80 w-full rounded-md overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end justify-end text-right p-4">
                <p className="text-white text-sm font-semibold">Brighton</p>
                <p className="text-white text-xs font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
