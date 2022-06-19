import React from 'react';
import { ChartComponent,Inject,SeriesCollectionDirective,SeriesDirective,Category,Tooltip,Zoom,Crosshair,DateTime, HiloOpenCloseSeries, HiloSeries } from '@syncfusion/ej2-react-charts';
import { financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis } from '../../data/dummy';
import {Header} from '../../components'; 

const Financial = () => {

  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Chart' title='Financial' />

     <ChartComponent id='chart' 
                                   primaryXAxis = {FinancialPrimaryXAxis}
                                   primaryYAxis = {FinancialPrimaryYAxis}
                                    title='Maximum and Minimum Rainfall'
                                    chartArea={{border:{width:0}}}
                                    legendSettings={{
                                      visible:true
                                    }}

     >
      <Inject services={[HiloSeries,DateTime,Category,Zoom,Tooltip,Crosshair]} />
      <SeriesCollectionDirective>
          <SeriesDirective dataSource={financialChartData} xName='x' yName='low' type='Hilo' low='low' high='high' />
      </SeriesCollectionDirective>
     </ChartComponent>
    </div>
  )
}

export default Financial