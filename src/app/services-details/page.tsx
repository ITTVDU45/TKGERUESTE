// Redirect page: use new /services/[slug] route. Keep minimal placeholder.
import { redirect } from 'next/navigation'

export default function Page() {
  // redirect to /services (listing) by default
  redirect('/services')
}