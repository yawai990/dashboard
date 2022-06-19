import React from 'react';
import { AccumulationChartComponent,AccumulationSeriesDirective,PieSeries,Inject,AccumulationSeriesCollectionDirective, AccumulationLegend, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { pieChartData,ecomPieChartData } from '../../data/dummy';
import { Header } from '../../components';

const Pie = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Chart' title='Pie' />

  
      <AccumulationChartComponent id='pie-chart'>
        <Inject services={[PieSeries,AccumulationLegend,AccumulationDataLabel]} />
        <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective type='Pie' dataSource={pieChartData} xName='x' yName='y'  dataLabel={{
                visible:true,
                name:'text',
                position:'Inside'
              }} />
              
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>

    </div>
  )
}

export default Pie;