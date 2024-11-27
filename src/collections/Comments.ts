import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  fields: [
    {
        name: 'comment',
        type: 'text',
    },
    {
        name: 'user',
        type: 'relationship',
        relationTo: 'users',
    }
  ],
}
