import Accordion from 'react-bootstrap/Accordion';

function CustomAccordion({data}) {
  return (
    <Accordion defaultActiveKey="0" className='accordion'>
     {data?.map((item, i)=> <Accordion.Item eventKey={i} key={i}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>
         {item.content}
        </Accordion.Body>
      </Accordion.Item>)}
     
    </Accordion>
  );
}

export default CustomAccordion;