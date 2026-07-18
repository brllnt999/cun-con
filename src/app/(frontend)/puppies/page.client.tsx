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
                style={
                  image.image?.url
                    ? {
                        backgroundImage: `url(${image.image.url})`,
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        inset: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // transition removed from here
                        transform: `translateX(${(idx - 1) * 20}%) rotate(${(idx - 1) * 8}deg)`,
                      }
                    : { backgroundColor: 'transparent' }
                }
                className={`
                
                  mt-6
  shadow-2xl 
  rounded-2xl
  transition-all 
  duration-500 
  ease-[cubic-bezier(0.34,1.56,0.64,1)]
  
  ${idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : 'z-30'}
  
 outline-4 
  outline-offset-[-2px]
  outline-white
  hover:shadow-[0_0_0_4px_yellow-300,0_25px_80px_rgba(0,0,0,0.4)]
  
  hover:-translate-y-8
  hover:rotate-0
  hover:z-50
  focus:shadow-[0_0_0_4px_yellow-300,0_25px_80px_rgba(0,0,0,0.4)]
  focus:-translate-y-8
  focus:rotate-0
  focus:z-50
  active:shadow-[0_0_0_4px_yellow-300,0_25px_80px_rgba(0,0,0,0.4)]
  active:-translate-y-8
  active:rotate-0
  active:z-50
  cursor-pointer
`}
              />
            ),
        )}
    </div>
  )
}
