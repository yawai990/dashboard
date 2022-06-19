import React from 'react';
import { ChartComponent,Inject,SeriesDirective,Tooltip,DateTime, Legend, StackingColumnSeries, AnnotationsDirective, AnnotationDirective, SeriesCollectionDirective, Category, ChartAnnotation } from '@syncfusion/ej2-react-charts';
import {stackedChartData,stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = () => {
 
  const {currentMode} = useStateContext();

  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Stacked' />

      <ChartComponent id='area-charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}
                                    tooltip={{enable:true}}  chartArea={{border:{width:0}}}
                                    background={currentMode === 'dark' ? '#33373e' : '#f4f4f4'}

      >
              <Inject services={[StackingColumnSeries,DateTime,Legend,Tooltip,Category,ChartAnnotation]} />

              <AnnotationsDirective>
                  {stackedChartData.map((data,ind)=>(
                    <AnnotationDirective key={ind} coordinateUnits="Point" {...data} />
                  ))}
              </AnnotationsDirective>

              <SeriesCollectionDirective>
                {stackedCustomSeries.map((item,ind)=>(
                  <SeriesDirective key={ind} {...item} />
                ))}
              </SeriesCollectionDirective>

      </ChartComponent>
    </div>
)
}

export default Stacked