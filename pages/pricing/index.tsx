import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'


export default function PricingPage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        <Link href="/">
          Página Pricing
        </Link>
      </h1>
    </MainLayout>
  )
}
