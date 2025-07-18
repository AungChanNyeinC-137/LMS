import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'

const Page = () => {
  return (
    <main>
      <h1 className='text-xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id='123'
        name = 'Lession Number One'
        topic = 'Some Topic'
        subject = 'science'
        duration = {45}
        color = '#E5D0FF'
        />
        <CompanionCard 
        id='124'
        name = 'Lession Number Two'
        topic = 'Some Topic'
        subject = 'science'
        duration = {45}
        color = '#FFDA6E'
        />
        <CompanionCard 
        id='125'
        name = 'Lession Number Three'
        topic = 'Some Topic'
        subject = 'Maths'
        duration = {45}
        color = '#BDE7FF'
        />

      </section>
      <section className='home-section'>
        <CompanionsList/>
        <CTA/>
      </section>
    </main>
  )
}

export default Page