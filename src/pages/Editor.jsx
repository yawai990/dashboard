import React from 'react';
import { HtmlEditor,RichTextEditorComponent ,Inject,Image,Link,QuickToolbar,Toolbar} from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl '>
      <Header category='Apps' title='Editor' />
      <RichTextEditorComponent height='450px'>
        <EditorData/>
        <Inject services={[Toolbar,Image,Link,HtmlEditor,QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor