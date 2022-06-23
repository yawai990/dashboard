import React from 'react';
import {BiBarChartAlt2} from 'react-icons/bi';
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
          {colorMappingData.map((data,ind)=>(
                        <SeriesDirective key={ind} dataSource ={data} xName='x' yName='y' name={rangeColorMapping.map(data=>data.label)} type='Column' columnWidth={10} columnSpacing={0.7} fill={rangeColorMapping.map(data=>data.colors)} />
          ))}
          {/* {rangeColorMapping.map(name=>{
         
               {colorMappingData.map((data,ind)=>(
                        <SeriesDirective key={ind} dataSource ={data} xName='x' yName='y' name={name.label} type='Column' columnWidth={10} columnSpacing={0.7} fill={name.colors} />
          ))}             
          })}  */}
    </SeriesCollectionDirective>
    </ChartComponent>
        
    </div>
  )
}

export default ColorMapping