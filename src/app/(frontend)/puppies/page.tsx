import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { PuppiesImageStack } from './page.client'
import { PuppyForm } from './form-render'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const revalidate = 0
export default async function Puppies() {
  const payload = await getPayload({ config: configPromise })

  const puppies = await payload.find({
    collection: 'puppies',
  })

  return (
    <div className="mx-auto max-w-7xl px-8 pt-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {puppies?.docs?.map((puppy, idx) => (
          <div key={puppy.id} className="container mx-auto flex flex-col gap-6 items-center ">
            <h2 className="text-2xl font-bold">{puppy.name}</h2>
            <PuppiesImageStack puppy={puppy} />
            {puppy.status === 'available' ? (
              <PuppyForm id={`puppy-form-${idx}`} key={puppy.id}>
                <RenderBlocks blocks={puppy.form} isInsiteForm />
              </PuppyForm>
            ) : (
              <div className="text-blue-500 text-lg border-1 border-accent bg-accent-100 rounded-full px-4 py-2">
                Đã tặng
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
