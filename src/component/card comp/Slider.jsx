import React from 'react'
import CardFeature from './CardFeature'

const Slider = () => {
  return (
    <div className='flex flex-row gap-8'>
      <CardFeature
        title='Unlimited Share'
        icon='fluent:people-team-48-filled'
        text='Invite all your family, friends and people you love without limits'
      />
     <CardFeature
       title='Detail Info'
       icon='lucide:calendar-fold'
       text='Detailed event information from reception to wedding ceremony'
      />
      <CardFeature
        title='Countdown Timer'
        icon='pepicons-pop:countdown'
        text='Look forward to every happy time with the countdown timer feature'
      />
      <CardFeature
        title='Countdown Timer'
        icon='pepicons-pop:countdown'
        text='Look forward to every happy time with the countdown timer feature'
      />
      
      
      
    </div>
  )
}

export default Slider