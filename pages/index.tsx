import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        <Link href="/about">
          Ir a About
        </Link>
      </h1>
    </MainLayout>
  )
}
