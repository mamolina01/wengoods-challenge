import { Suspense } from 'react'
import { Home } from '@/components/home/Home'
import { LoadingPage } from '@/components/home/loadingPage/LoadingPage'

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-4 items-center p-4 md:p-5">
      <h4 className="text-lg">Administrator Panel</h4>
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
    </main>
  )
}
