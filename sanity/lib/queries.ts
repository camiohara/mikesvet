import { groq } from 'next-sanity'

// All services, ordered manually via the "order" field set in the Studio
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    summary,
    body
  }
`

// All team members, ordered manually
export const teamQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    photo,
    bio,
    isHeadVet
  }
`

// Blog / pet-health articles, most recent first
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage,
    publishedAt,
    category
  }
`
