import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PuppiesImageStack } from '../page.client'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { PuppyForm } from '../form-render'
import { Link } from '@payloadcms/ui/elements/Link'

export default async function Puppies({ params }: { params: { id: string } }) {
  const payload = await getPayload({ config: configPromise })
  const { id } = await params

  const puppy = await payload.find({
    collection: 'puppies',
    where: {
      id: { equals: id },
    },
  })

  return (
    <div className="mx-auto p-6 ">
      <div className="flex gap-6">
        {puppy?.docs?.map((puppy) => (
          <div key={puppy.id} className=" mx-auto h-[90vh] flex flex-col gap-2 items-center ">
            <h1 className="text-4xl font-bold">{puppy.name}</h1>
            <div
              className="h-[80vh] max-w-2/3 relative w-full flex items-center justify-center "
              tabIndex={0}
            >
              <PuppiesImageStack puppy={puppy} solo />
            </div>
            <div className="w-xs mt-10 flex flex-row items-center justify-between">
              <Link className="text-lg mb-2 text-blue-500 hover:text-blue-700" href="/puppies">
                Xem tất cả
              </Link>
              <PuppyForm id="form" key={puppy.id}>
                <RenderBlocks blocks={puppy.form} isInsiteForm />
              </PuppyForm>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
