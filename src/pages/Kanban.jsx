import React from 'react';
import { KanbanComponent,ColumnsDirective,ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData,kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 mt-24 bg-white rounded-3xl'>
      <Header category='Apps' title='Kanban'  />
      <KanbanComponent id='kanban'
       keyField='Status' dataSource={kanbanData}
       cardSettings={{
        contentField:'Summary',
        headerField:'Id'
      }}
       >
        <ColumnsDirective>
                {kanbanGrid.map((data,ind)=>(
                  <ColumnDirective key={ind} {...data} ></ColumnDirective>
                ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban;