import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'userComments',
      type: 'join',
      collection: 'comments',
      on: 'user',
    },
  ],
}
