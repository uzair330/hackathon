import Image from 'next/image'
import { Hero } from '../../components/section/Hero'
import { Promotion } from '../../components/section/Promotion'
import { Promotion02 } from '../../components/section/Promotion02'

export default function Home() {
  return (
    <>
    <div className="px-28">
  <Hero />
 
  <Promotion02 />
  </div>
  </>
  )
}
