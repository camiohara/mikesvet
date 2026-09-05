import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: Parameters<typeof imageBuilder.image>[0]) =>
  imageBuilder.image(source)
