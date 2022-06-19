import React from 'react';
import {ScheduleComponent,Resize,Day,Week,WorkWeek,Month,Agenda,Inject,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='mt-10 m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Apps' title='Calendar'  />
      {/* in react Date is zero start,. Jan === 0 */}
      <ScheduleComponent height='650px' selectedDate={new Date(2021,0,10)} eventSettings={{dataSource:scheduleData}}>
        <Inject services={[Resize,Day,Week,WorkWeek,Month,Agenda,DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar