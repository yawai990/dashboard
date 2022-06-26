import React from 'react';
import { ChartComponent,SeriesCollectionDirective,Inject,SeriesDirective,ColumnSeries,Tooltip,Legend, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import {colorMappingData,ColorMappingPrimaryXAxis,ColorMappingPrimaryYAxis,rangeColorMapping } from '../../data/dummy';
import { Header } from '../../components';

const ColorMapping = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Color Mapping' />

      <ChartComponent id='charts' primaryXAxis={ColorMappingPrimaryXAxis}
       primaryYAxis={ColorMappingPrimaryYAxis}
       tooltip={{enable:true}}
       chartArea={{border:{width:0}}}
       title="US-CLIMATE WEATHER BY MONTH"
      >
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
                                <SeriesDirective type='Column' dataSource={[
                                { x: 'Jan', y: 6.96 },
                                { x: 'Feb', y: 8.9 },
                                { x: 'Mar', y: 12 },
                                { x: 'Apr', y: 17.5 }
                                ]} 
                                xName='x' yName='y' name='1°C to 10°C' fill='#FFFF99' />

                                <SeriesDirective type='Column' dataSource={[
                                  { x: 'May', y: 22.1 },
                                  { x: 'June', y: 25 },
                                  { x: 'July', y: 29.4 },
                                  { x: 'Aug', y: 29.6 }
                          ]}
                           xName='x' yName='y' name='11°C to 20°C' fill='#FFA500' />
                          <SeriesDirective type='Column' dataSource={[
                              { x: 'Sep', y: 25.8 },
                              { x: 'Oct', y: 21.1 },
                              { x: 'Nov', y: 15.5 },
                              { x: 'Dec', y: 9.9 }
                    ]} 
                    xName='x' yName='y' name='21°C to 30°C' fill='#FF4040' />

    </SeriesCollectionDirective>
    </ChartComponent>
        
    </div>
  )
}

export default ColorMapping