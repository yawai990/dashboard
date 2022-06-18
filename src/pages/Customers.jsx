import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Inject,Edit,Page,Selection,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Customers'/>     

    <GridComponent dataSource={customersData}
    toolbar={['Edit','Delete']}
    editSettings={{allowEditing: true,allowDeleting:true}}
     allowPaging allowSorting 
    pageSettings={{pageSize:7}} //this make how many do u want to show in one page
    >
      <ColumnsDirective>
          {customersGrid.map((customerTh,index)=>(
            <ColumnDirective key={index} {...customerTh}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Edit,Page,Selection,Toolbar,Sort,Filter]} />
      </GridComponent> 
  </div>
  )
}

export default Customers