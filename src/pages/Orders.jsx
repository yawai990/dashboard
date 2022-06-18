import React from 'react';
import {GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids';
import { ordersData,contextMenuItems,ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => { 
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders'/>     

      <GridComponent dataSource={ordersData}
      editSettings={{allowEditing:true}}
       allowPaging allowSorting 
      pageSettings={{pageSize:7}} //this make how many do u want to show in one page
      >
        <ColumnsDirective>
            {ordersGrid.map((orderTh,index)=>(
              <ColumnDirective key={index} {...orderTh}/>
            ))}
          </ColumnsDirective>
          <Inject services={[Resize,ContextMenu,ExcelExport,Edit,PdfExport,Page,Sort,Filter]} />
        </GridComponent> 
    </div>
  )
}

export default Orders