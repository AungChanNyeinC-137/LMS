import CompanionCard from '@/components/CompanionCard';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';
  const companions = await getAllCompanions({ subject, topic })
  console.log('Companions:', companions)
  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1> Companion Library</h1>
          <div className="flex gap-4"> Filters</div>
      </section>
      <section className='companions-grid'>
        {companions.map((companion) => (
          <CompanionCard key={companion.id}
           {...companion}
          //  pass them all by destructuring it with ...
          color={getSubjectColor(companion.subject)}
           />
        )) }
      </section>
    </main>
  )
}

export default CompanionsLibrary