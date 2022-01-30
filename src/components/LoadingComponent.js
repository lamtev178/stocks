import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import {Row} from 'antd'

function Loading(){
  return(
    <Row justify='center'>
      <LoadingOutlined style={{fontSize:'40px', padding:'60px'}} spin/>
    </Row>
  );
}

export default Loading
