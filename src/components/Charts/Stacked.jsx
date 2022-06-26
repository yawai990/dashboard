import React from 'react';
import {
  ChartComponent,Inject,
  Legend, Category, StackingColumnSeries, Tooltip,SeriesCollectionDirective, SeriesDirective} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({mode}) => {
  return (
    <ChartComponent id='charts' 
    width='400px' height='300px'
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border:{width:0}}} 
    tooltip={{enable:true}}
    legendSettings={{background:'white'}}
    background={mode === 'dark' && '#33373E'}
    >
        <Inject services={[StackingColumnSeries,Tooltip,Legend,Category]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item,ind)=>(
            <SeriesDirective key={ind} {...item}>
            </SeriesDirective>
          ))}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked