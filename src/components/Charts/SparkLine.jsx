import React from 'react';
import { SparklineComponent, SparklineTheme, ISparklineLoadedEventArgs, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({id,height,width,data,type,color,currentColor}) => {
 
  return (
  <SparklineComponent id={id} width={width} 
                                        height={height} lineWidth={1} 
                                        type={type} fill={color} 
                                        dataSource={data} xName='x' 
                                        yName='yval' valueType='Numeric' 
                                        border={{color:currentColor,width:2}}
                                        tooltipSettings={{
                                          visible:true,
                                          format:'${x}:data ${yval}',
                                          trackLineSettings:{
                                            visible:true
                                          }
                                        }}>
                            <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
  )
}

export default SparkLine;