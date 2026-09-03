import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `false` if you want to ensure fresh data (bypasses the CDN cache) -
  // useful while you're actively editing content in the Studio.
  useCdn: process.env.NODE_ENV === 'production',
})
