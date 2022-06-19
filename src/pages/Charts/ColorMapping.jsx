import React from 'react';
import { ChartComponent,SeriesCollectionDirective,Inject,SeriesDirective,MultiColoredAreaSeries,Tooltip,Legend, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import {colorMappingData,ColorMappingPrimaryXAxis,ColorMappingPrimaryYAxis,rangeColorMapping } from '../../data/dummy';
import { Header } from '../../components';

const ColorMapping = () => {

  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Color Mapping' />

      <ChartComponent id='charts' primaryXAxis={ColorMappingPrimaryXAxis}
       primaryYAxis={ColorMappingPrimaryYAxis}
       tooltip={{enable:true}}
      >
      <Inject services={[MultiColoredAreaSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
      
      {colorMappingData[0].map((data,ind)=>{
        
        return <SeriesDirective key={ind} dataSource={data} xName='x' yName='y' type='MultiColoredArea'> 
        </SeriesDirective>
      })}
    </SeriesCollectionDirective>
    </ChartComponent>;

    </div>
  )
}

export default ColorMapping