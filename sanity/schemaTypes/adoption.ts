import { defineField, defineType } from 'sanity'

export const adoption = defineType({
  name: 'adoption',
  title: 'Adoptable Animal',
  type: 'document',
  orderings: [
    {
      title: 'Date Available (oldest first)',
      name: 'dateAvailableAsc',
      by: [{ field: 'dateAvailable', direction: 'asc' }],
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'species',
      title: 'Species',
      type: 'string',
      options: {
        list: [
          { title: 'Cat', value: 'cat' },
          { title: 'Dog', value: 'dog' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageYears',
      title: 'Age — Years',
      type: 'number',
      description: 'Enter 0 for kittens/puppies under 1 year',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'ageMonths',
      title: 'Age — Additional Months',
      type: 'number',
      description: 'Optional. E.g. for a 1 year 3 month old, enter 1 year + 3 months.',
      validation: (Rule) => Rule.min(0).max(11),
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1).error('At least one photo is required'),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 Available for Adoption', value: 'available' },
          { title: '🟡 Available to Foster', value: 'fostering' },
          { title: '✅ Adopted', value: 'adopted' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateAvailable',
      title: 'Date Available',
      type: 'date',
      description: 'When this animal first became available — used to show "X days waiting"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Tell their story — personality, background, what makes them special',
    }),
    defineField({
      name: 'personalityTags',
      title: 'Personality Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Playful', 'Shy', 'Affectionate', 'Independent', 'Energetic',
          'Calm', 'Curious', 'Social', 'Gentle', 'Bold', 'Lap cat',
          'House trained', 'Good with kids', 'Good with cats', 'Good with dogs',
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'vaccinated',
      title: 'Vaccinated',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'neutered',
      title: 'Neutered / Spayed',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'microchipped',
      title: 'Microchipped',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured (appears first)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'breed',
      media: 'photos.0',
      status: 'status',
    },
    prepare({ title, subtitle, media, status }) {
      const emoji = status === 'adopted' ? '✅' : status === 'fostering' ? '🟡' : '🟢'
      return { title: `${emoji} ${title}`, subtitle, media }
    },
  },
})
