import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Search,Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/dummy';
import { Header } from '../components';


const Employees = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Employees'/>     

    <GridComponent dataSource={employeesData} toolbar={['Search']} searchSettings={{
      operator:'contains'
// https://ej2.syncfusion.com/react/documentation/grid/searching/
    }}>
      <ColumnsDirective>
          {employeesGrid.map((employee,index)=>(
            <ColumnDirective key={index} {...employee}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Search,Toolbar,Page]} />
      </GridComponent> 
  </div>
  )
}

export default Employees