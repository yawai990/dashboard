import { AccumulationChartComponent,AccumulationSeriesDirective,PieSeries,Inject,AccumulationSeriesCollectionDirective, AccumulationLegend, AccumulationDataLabel, PyramidSeries } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { Header } from '../../components';

const Pyramid = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Chart' title='Pyramid' />

  
      <AccumulationChartComponent id='pyramid-chart'>
        <Inject services={[PyramidSeries,AccumulationLegend,AccumulationDataLabel]} />
        <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective type='Pyramid' dataSource={PyramidData} xName='x' yName='y'  dataLabel={{
                visible:true,
                name:'text',
                position:'Inside'
              }} />
              
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>

    </div>
  )
}

export default Pyramid