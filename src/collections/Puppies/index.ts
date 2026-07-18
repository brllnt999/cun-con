
import { FormBlock } from '@/blocks/Form/config'
import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Puppies: CollectionConfig<'puppies'> = {
	slug: 'puppies',
	admin: {
		useAsTitle: 'name',
		defaultColumns: ['name', 'createdAt'],
	},
	access: {
		create: () => true,
		read: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			fields: [
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
				},
				{
					name: 'alt',
					type: 'text',
					admin: { description: 'Alt text for accessibility' },
				},
			],
        },
        {
            name: 'description',
            type: 'textarea',
		},
		{
			name: 'form',
			type: 'blocks',
			blocks: [FormBlock],
			required: true,
			
		},
	
		slugField(),
	],
}

export default Puppies

