import React from 'react';
import { ChartComponent,SeriesCollectionDirective,Inject,BarSeries,SeriesDirective,Column,Tooltip,DateTime, Legend, Category, DataLabel, Border } from '@syncfusion/ej2-react-charts';
import {barPrimaryXAxis,barPrimaryYAxis,barCustomSeries } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const {currentMode} = useStateContext();


  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Medal Tally' />

      <ChartComponent id='bar-charts'
       primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} title="Most Medal Top 3 Countries"
      tooltip={{enable:true}} chartArea={{border:{width:0}}} 
      background={currentMode === 'dark' ? '#33373e' : '#f4f4f4'}
       >

        <Inject services={[BarSeries,Tooltip,Legend,Category,DataLabel]} />

              <SeriesCollectionDirective>

                  {barCustomSeries.map((item,ind)=>(
                    <SeriesDirective key={ind} {...item} type='Bar' />
                  ))}

              </SeriesCollectionDirective>
      </ChartComponent>
    </div>
)
}

export default Bar