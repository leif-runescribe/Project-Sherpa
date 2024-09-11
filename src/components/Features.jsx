import React from 'react'
import ScrollReveal from './ScrollReveal'
import CardContainer from './FeaturesComponents'

const Features = () => {
  return (
    <div className='bg-white'>
        <section class="text-white ">
  <div class="container py-20 mx-auto">
    <ScrollReveal><div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-4xl  tracking-widest font-medium text-black title-font mb-1">What exactly does Sherpa do?</h2>
      <h1 class="sm:text-7xl px-20 text-3xl font-medium title-font mb-4 text-gray-900">Here is how Sherpa will potentially</h1>
      <p class="lg:w-2/3 text-4xl text-black font-medium mx-auto leading-relaxed ">enhance the Productivity, Sustainability, and Profitability in Himachal Pradesh's Apple Industry</p>
    </div>
    </ScrollReveal>
    <ScrollReveal>
    <CardContainer/>
    </ScrollReveal>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-6 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-2xl">Learn more</button>
  </div>
</section>
    </div>
  )
}

export default Features