import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jobs.css';
import { Row, Col , Container, Spinner} from 'react-bootstrap';
import {CircleFill} from 'react-bootstrap-icons';

// import job view from jobs
import Job from './job';


class jobs extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
            view: 'jobs',
            id: null , //id number of the startup to open

            startups: this.props.startups,
            jobs: this.props.startups.jobs
          })
         
     }

     jobs = () =>{
          return(
          <div > 
               <h1 className='investors-head'>Latest jobs at startups</h1>
               {(this.state.jobs) ?
               <div>
                    <h5>Showing <b></b>{Object.keys(this.state.jobs).length} available jobs</h5>  
                    <Container >
                         <Row>
                         {Object.values(this.state.jobs).map((val, ind) => 
                         <div key={ind} className='job-container shadow'>
                         <Row>
                         {/* <Col sm='auto'><CircleFill className='icon-back' height={50} width={50}/></Col> */}
                         <Col sm='auto'>
                              <div key={ind} className='col-startup-name' onClick={() => {this.setState({id: ind, view: 'job' })}}>{val.company}</div>
                              <span>{val.job_title}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span >{val.location}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span >{val.job_type}</span>
                         </Col>
                         </Row>
                         </div>
                         )}
                         </Row>
                    </Container>
                </div>
               :
               <div>
                    There are no current job listings available currently, plesae check again later
               </div>
               }
               
          </div>
          )
     }

     renderview = () =>{
          switch(this.state.view){
               default: return <div><Spinner className="load"  animation='border' color='#21295C'/></div>
                   case 'jobs': return this.jobs();
                   case 'job': return <Job job={this.state.jobs[this.state.id]} goback={() =>{this.setState({view: 'jobs'})}}/>;
                   
           }
     }

     render(){
          return(
          <div className='job-view'>
               {this.renderview()}
          </div>
          )
     }
}
export default jobs;