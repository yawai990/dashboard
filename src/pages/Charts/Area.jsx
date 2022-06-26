import React from 'react';
import { ChartComponent,SeriesCollectionDirective,Inject,SplineAreaSeries,SeriesDirective,Tooltip,DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries,areaPrimaryYAxis,areaPrimaryXAxis } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
 
    const {currentMode} = useStateContext();

    return (
      <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category='Chart' title='Inflation Rate In Percentage' />
  
        <ChartComponent id='area-charts' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis}
                                      tooltip={{enable:true}}  chartArea={{border:{width:0}}}
                                      legendSettings={{background:'white'}}
                                      background={currentMode === 'dark' ? '#33373e' : '#f4f4f4'}
        >
                <Inject services={[SplineAreaSeries,DateTime,Legend,Tooltip]} />
                <SeriesCollectionDirective>
                {areaCustomSeries.map((line,ind)=>(
                  <SeriesDirective key={ind} {...line} />
                ))}
  
                </SeriesCollectionDirective>
  
        </ChartComponent>
      </div>
  )
}

export default Area;