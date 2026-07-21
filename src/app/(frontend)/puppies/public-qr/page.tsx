import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { QRCode } from 'react-qr-code'

export default async function Puppies() {
  const payload = await getPayload({ config: configPromise })

  const puppies = await payload.find({
    collection: 'puppies',
  })

  const pages = []

  for (let i = 0; i < puppies.docs.length; i += 4) {
    pages.push(puppies.docs.slice(i, i + 4))
  }

  return (
    <div className="mx-auto flex gap-[10mm]">
      {pages.map((page, idx) => (
        <div className="flex flex-col  items-center" key={idx}>
          <p>🐾 18/7 - 31/7 🐾</p>
          <p>🐾🐾 Hưng - 0974718820 🐾🐾</p>
          <div
            key={idx}
            className="grid w-[148mm]
    h-[180mm] grid-cols-2 grid-rows-2 gap-[5mm] pt-2"
          >
            {page.map((puppy) => {
              const qrCodeValue = `${process.env.PUBLIC_DOMAIN}/puppies/${puppy.id}`
              const imgBg =
                Array.isArray(puppy.images) &&
                typeof puppy.images[0] === 'object' &&
                typeof puppy.images[0].image === 'object' &&
                puppy.images[0].image !== null
                  ? puppy.images[0].image?.thumbnailURL
                  : null
              return (
                <div
                  key={puppy.id}
                  className="flex flex-col items-center justify-center p-[5mm] h-[85mm] w-[60mm] relative rounded-lg"
                  style={
                    imgBg
                      ? {
                          backgroundImage: `url(${imgBg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : {}
                  }
                >
                  <div className="absolute bottom-0 right-0 w-[30mm] h-[30mm] flex items-center justify-center p-[2mm] rounded-tl-xl bg-white">
                    <div className="p-0 w-full h-full flex items-center justify-center bg-gray-500">
                      <QRCode
                        value={qrCodeValue}
                        size={100}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                      />
                    </div>
                  </div>
                  <h2 className=" absolute bottom-0 right-[29.5mm] h-auto text-xl font-bold px-2 py-1 bg-white rounded-tl-lg">
                    {puppy.name}
                  </h2>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
