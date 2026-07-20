import { describe, expect, it } from 'vitest'

import { resolveMediaSource } from '@/components/Media/ImageMedia'

describe('resolveMediaSource', () => {
  it('uses the requested Payload image variant when the size matches a known key', () => {
    const resource = {
      url: '/media/original.webp',
      updatedAt: '2024-01-01',
      sizes: {
        thumbnail: { url: '/media/thumbnail.webp' },
        medium: { url: '/media/medium.webp' },
      },
    }

    expect(resolveMediaSource(resource, 'thumbnail')).toBe('/media/thumbnail.webp')
  })

  it('falls back to the base media url when no matching variant exists', () => {
    const resource = {
      url: '/media/original.webp',
      updatedAt: '2024-01-01',
      sizes: {
        thumbnail: { url: '/media/thumbnail.webp' },
      },
    }

    expect(resolveMediaSource(resource, 'large')).toBe('/media/original.webp')
  })
})
