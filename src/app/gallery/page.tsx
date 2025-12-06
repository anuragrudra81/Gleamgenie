
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryItems = PlaceHolderImages.filter(p => p.id.startsWith('gallery-') || p.id.startsWith('service-'));

const homeCleaningItems = [
  PlaceHolderImages.find(p => p.id === 'service-home-cleaning'),
  PlaceHolderImages.find(p => p.id === 'gallery-image-1'),
  PlaceHolderImages.find(p => p.id === 'gallery-image-2'),
  PlaceHolderImages.find(p => p.id === 'gallery-image-4'),
].filter(Boolean);

const officeCleaningItems = [
  PlaceHolderImages.find(p => p.id === 'service-office-cleaning'),
  PlaceHolderImages.find(p => p.id === 'gallery-image-3'),
].filter(Boolean);

const builderCleaningItems = [
  PlaceHolderImages.find(p => p.id === 'service-builder-cleaning'),
].filter(Boolean);

const moveInOutItems = [
  PlaceHolderImages.find(p => p.id === 'service-move-in-out'),
].filter(Boolean);


const galleryVideo = PlaceHolderImages.find(item => item.id.includes('video'));

const galleryData = {
  'home-cleaning': { title: 'Home Cleaning', items: homeCleaningItems },
  'office-cleaning': { title: 'Office Cleaning', items: officeCleaningItems },
  'builder-cleaning': { title: 'Builder Cleaning', items: builderCleaningItems },
  'move-in-out': { title: 'Move-in/out', items: moveInOutItems },
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Our Work</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
          A glimpse into the spotless spaces we create.
        </p>
      </div>

      <Tabs defaultValue="home-cleaning" className="w-full animate-fade-in">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          {Object.entries(galleryData).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key} className="py-2.5">{title}</TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(galleryData).map(([key, { items }]) => (
          <TabsContent key={key} value={key}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
              {key === 'home-cleaning' && galleryVideo && (
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
              {items.map((item, index) => (
                <div
                  key={item!.id}
                  className="relative h-64 md:h-80 w-full rounded-md overflow-hidden group transform transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={item!.imageUrl}
                    alt={item!.description}
                    fill
                    className="object-cover"
                    data-ai-hint={item!.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end justify-end text-right p-4">
                    <p className="text-white text-sm font-semibold">Brighton</p>
                    <p className="text-white text-xs font-light">{item!.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
