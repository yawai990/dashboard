import React from 'react';
import { MapsComponent,LayersDirective,LayerDirective} from '@syncfusion/ej2-react-maps';
import { colorMappingData,ColorMappingPrimaryXAxis,ColorMappingPrimaryYAxis,rangeColorMapping } from '../../data/dummy';
import { Header } from '../../components';

const ColorMapping = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Color Mapping' />

      <MapsComponent id='maps'>
      <LayersDirective>
             <LayerDirective shapeSettings={{
              fill: '#E5E5E5',
              colorMapping: [
                  {
                      value: 'Permanent',
                      color: '#EDB46F'
                  },
                  {
                      color: '#F1931B',
                      value: 'Non-Permanent'
                  }
              ],
              colorValuePath: 'Membership'
            }}/>
      
      </LayersDirective>
      </MapsComponent>

    </div>
  )
}

export default ColorMapping