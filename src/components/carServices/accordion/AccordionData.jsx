import React from 'react'
import CustomAccordion from './CustomAccordion'

export default function AccordionData() {
  return (
    <div>
      <CustomAccordion data={[
        {
          title: 'What Is Challan Check And How Does It Work?',
          content: `Challan check allows you to view and pay your pending traffic challans. Our system retrieves this information 
          through the RTO API, ensuring that you have an accurate record of your traffic fines.`
        },
        {
          title: 'How Can I Check If I Have Any Pending Traffic Violations Or Challans?',
          content: `To check for any pending traffic violations or challans, you can use Challan Check. Simply provide the vehicle 
          details and use the challan check service on our platform. This service allows you to check all your challans for free, 
          providing you with information about any pending traffic violations associated with your vehicle.`
        },
        {
          title: 'What Information Do I Need To Provide To Check My Challan Status?', content: `To check the status of your challans, 
        you will need to provide the relevant vehicle details. These details typically include the vehicle's registration number, 
        which will enable our system to retrieve the necessary information and display any pending challans associated with your vehicle.`
        },
        {
          title: 'Can I Check Challans For Multiple Vehicles?', content: `Yes, you can check challans for multiple vehicles. Our challan
           check service allows you to verify and access information regarding pending traffic violations for each vehicle individually. 
           Simply follow the same process for each vehicle by providing the respective vehicle details.`
        },
        {
          title: 'Are There Any Penalties For Unpaid Challans?', content: `Yes, there may be penalties associated with unpaid challans.
         It is essential to promptly address and pay any pending traffic violations to avoid further penalties or legal consequences. 
         Our challan check service provides you with the necessary information to stay on top of your pending challans and take the 
         appropriate actions to resolve them.`
        }]} />

    </div>
  )
}