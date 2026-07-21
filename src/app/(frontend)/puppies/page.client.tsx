'use client'

import { Media } from '@/components/Media'
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
                key={image.image.id}
                className="absolute inset-0"
                style={{
                  transform: `translateX(${(idx - 1) * 20}%) rotate(${(idx - 1) * 8}deg)`,
                }}
              >
                <Media
                  resource={image.image}
                  priority
                  requestedSize={solo ? 'medium' : 'small'}
                  alt={image.image?.alt || `puppy-${idx}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  pictureClassName="absolute inset-0 w-full h-full"
                  imgClassName={cn(
                    `${solo ? 'h-' : 'h-[30vh]'} w-full`,
                    'absolute inset-0 object-cover',
                    'mt-6 rounded-2xl shadow-2xl cursor-pointer',
                    'outline-2 outline-offset-[-2px] outline-white',
                    'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
                    '[&:is(:hover,:focus,:active)]:-translate-y-8',
                    '[&:is(:hover,:focus,:active)]:rotate-0',
                    '[&:is(:hover,:focus,:active)]:z-50',
                    '[&:is(:hover,:focus,:active)]:shadow-[0_0_0_4px_rgb(253_224_71),0_25px_80px_rgba(0,0,0,0.4)]',
                    idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : 'z-30',
                  )}
                />
              </div>
            ),
        )}
    </div>
  )
}
