import React from 'react';
import { ChartComponent,Category,SeriesCollectionDirective,Inject,Column,SeriesDirective,Tooltip,LineSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Line = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Inflation Rate' />

      <ChartComponent id='charts' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis}
                                    tooltip={{enable:true}}  chartArea={{border:{width:0}}}
                                    background={currentMode === 'dark' ? '#33373e' : '#f4f4f4'}
      >
              <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
              <SeriesCollectionDirective>
              {lineCustomSeries.map((line,ind)=>(
                <SeriesDirective key={ind} {...line} />
              ))}

              </SeriesCollectionDirective>

      </ChartComponent>
    </div>
  )
}

export default Line