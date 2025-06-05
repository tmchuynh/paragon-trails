import clsx from "clsx";
import Image from "next/image";

export default function HeroSlantedPhotos({ images }: { images: string[] }) {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 sm:gap-8 -my-4 py-4 overflow-hidden">
        {images.map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              "relative flex-none rounded-xl sm:rounded-2xl w-44 sm:w-72 overflow-hidden aspect-9/10",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 w-full h-full object-cover"
              width={600}
              height={600}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
