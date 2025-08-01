import exp from 'constants'
import { Montserrat } from 'next/font/google'
import { Lusitana } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
})

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
})
