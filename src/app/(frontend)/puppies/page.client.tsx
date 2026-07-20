'use client'

import type { Puppy } from '@/payload-types'

import { cn } from '@/utilities/ui'

export const PuppiesImageStack = ({ puppy, solo }: { puppy: Puppy; solo?: boolean }) => {
  return (
    <div
      className={cn(
        ' relative aspect-9/16 flex items-center justify-center',
        solo ? 'h-[60vh]' : 'h-[30vh]',
      )}
      tabIndex={0}
    >
      {Array.isArray(puppy.images) &&
        puppy.images.map(
          (image, idx) =>
            typeof image.image === 'object' &&
            image.image !== null && (
              <div
                key={idx}
                tabIndex={1}
                role="img"
                aria-label={image.image?.alt || `puppy-${idx}`}
                style={{
                  backgroundImage: `url(${image.image?.thumbnailURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: `translateX(${(idx - 1) * 20}%) rotate(${(idx - 1) * 8}deg)`,
                }}
                className={cn(
                  'w-[clamp(250px,20vw,300px)] aspect-[3/4]',
                  'absolute inset-0 mt-6 rounded-2xl shadow-2xl cursor-pointer',
                  'outline-4 outline-offset-[-2px] outline-white',
                  'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
                  '[&:is(:hover,:focus,:active)]:-translate-y-8',
                  '[&:is(:hover,:focus,:active)]:rotate-0',
                  '[&:is(:hover,:focus,:active)]:z-50',
                  '[&:is(:hover,:focus,:active)]:shadow-[0_0_0_4px_rgb(253_224_71),0_25px_80px_rgba(0,0,0,0.4)]',
                  idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : 'z-30',
                )}
              />
            ),
        )}
    </div>
  )
}
