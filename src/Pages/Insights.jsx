import React from 'react'
import InsightsHero from '../component/insights/InsightsHero'
import LatestInsights from '../component/insights/LatestInsights'
import WeAreOchi from '../component/home/WeAreOchi'
import LatestPublications from '../component/insights/LatestPublications'
function Insights() {
  return (
    <>
      <InsightsHero />
      <LatestInsights />
      <div className='bg-[#004d43] md:sticky md:-top-9'>
        <WeAreOchi movingText="instagram instagram" />
        <LatestPublications />
      </div>
    </>
  )
}

export default Insights
