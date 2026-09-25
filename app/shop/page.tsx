import { Metadata } from 'next'
import { getProducts } from '../lib/shopify'
import ShopClient from './ShopClient'

export const metadata: Metadata = {
  title: "Pet Shop - Vet-Approved Products",
  description: "Shop vet-approved supplements, grooming, dental care, and pet supplies at Mike's Vet Dubai.",
}

export default async function ShopPage() {
  const products = await getProducts(200)
  return <ShopClient products={products} />
}
