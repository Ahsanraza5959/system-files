import React, {Component } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';  
import { DateRangePicker} from 'react-dates';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'

  class Days extends Component {
   
  constructor(props){
  super(props);
  this.state={
    startDate:null,
    endDate:null
  }
}
     render(){
  return (
    <>
    <Card className='row'  style={{marginLeft:'200px', marginRight:'200px', background:"black"}}>
  
  
  
   <div>
    <DateRangePicker
  startDate={this.state.startDate}
  startDateId="your_unique_start_date_id" 
  endDate={this.state.endDate}
  endDateId="your_unique_end_date_id" 
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput} 
  onFocusChange={focusedInput => this.setState({ focusedInput })}
/>
</div>

<div className='row'>
<Form className='row-col-2'>
<Form.Row >
  <Form.Group as={Col} controlId="city">
      <Form.Label></Form.Label>
      
      <Form.Control as="select">
      <option>City</option>
        <option>Lahore</option>
        <option>Multan</option>
        <option>Karachi</option>
        <option>Murree</option>
      </Form.Control>
<br/>
      <Form.Control as="select">
        <option>Town</option>
        <option>Bahria Town</option>
        <option>Jubilee Town</option>
        <option>DHA</option>
        <option>Gulberg</option>
      </Form.Control>
      <br/>

      <Form.Control as="select">
        <option>Guests</option>
        <option>1 Person</option>
        <option>2 Persons</option>
        <option>3 Persons</option>
      </Form.Control>

    </Form.Group>
    </Form.Row>
</Form>

</div>
<br/>
<div >
<Button as="input" type="submit" value="Search" />{' '}
</div>


    </Card>
    </>
  );
}
}

export default Days;