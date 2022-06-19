import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const changeColor=(argu)=>{
  document.getElementById('preview').style.backgroundColor=argu.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Apps' title='Color-Picker' />

      <div className="text-center">
        <div id="preview"/>

        <div className="flex justify-center items-center flex-wrap gap-20">
          <div>
            <p className="text-2xl font-semibold">Inline Palette</p>
            <ColorPickerComponent
                                                    id='inline-palette'
                                                    modeSwitcher={false}
                                                    inline
                                                    showButtons={false}
                                                    mode='Palette'
                                                    change={changeColor}
            >
      </ColorPickerComponent>
          </div>

          <div>
            <p className="text-2xl font-semibold">Inline Palette</p>
            <ColorPickerComponent
                                                    id='inline-palette'
                                                    modeSwitcher={false}
                                                    inline
                                                    showButtons={false}
                                                    mode='Picker'
                                                    change={changeColor}
                                                    >
      </ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker