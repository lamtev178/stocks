import React from "react";
import { Typography, Divider, Row, Col} from 'antd';
import {useGetCommentsQuery} from '../services/stocks';
import Error from './ErrorComponent'

const { Title, Paragraph} = Typography;

function Comments({symbol}){
  const { data : comments, isError : commentsIsError, error:commentsError} = useGetCommentsQuery(symbol)
  const stocksComments = comments?.finance?.result?.reports.map((comment) => {
    return(
      <Col key={comment.id}>
        <Title  level={4} style={{textAlign:'left'}}>{comment.title}</Title>
        <Paragraph><blockquote>{comment.summary}</blockquote></Paragraph>
        <Divider orientation='right'>{comment.publishedOn.slice(0,10)}</Divider>
      </Col>
    );
  })
  return(
    <section>
      <Typography >
        <Title level={3}>Comments : </Title>
        {commentsIsError ? <Error error={commentsError}/> : <Row>{stocksComments}</Row>}
      </Typography>
    </section>
  )
}

export default Comments