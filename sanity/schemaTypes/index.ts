import { type SchemaTypeDefinition } from 'sanity'

import { service } from './service'
import { teamMember } from './teamMember'
import { post } from './post'
import { adoption } from './adoption'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, teamMember, post, adoption],
}
