import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="my-3">Rules</h1>
        <h3 className="my-3">Basic on Ice Rules</h3>
        <ul>
          <li>The on ice waiver must be signed or you will be required to leave the ice surface.</li>
          <li>All vehicles parked on the ice must have a tarp or other suitable method of catching any possible fluid leaks. This item must cover the entire area beneath your engine and transmission and rear differential (if applicable).</li>
          <li>All fueling must be done on the shore.</li>
          <li>Any persons using a camera at turn stations must have a spotter. Please seek permission from race organizer if you would like to go out to the infield for media purposes.</li>
          <li>KEEP THE LAKE CLEAN, this includes spills, food and drink waste, and cigarette butts. If it doesn’t belong in the lake, keep it off the ice.</li>
          <li>We want to keep a peaceful relationship with the locals. Be respectful, no hooning!</li>
        </ul>
        <h3 className="my-3">IceX and Time Attack (No Passing) </h3>
        <div class="alert alert-danger" role="alert">
        **NOTE** Time Attack requires a CACC competition licence to participate. 
        </div>
        <ul class="list-group">
          <li class="list-group-item"><a href="http://www.caccautosport.org/wp-content/uploads/2017/01/2017-CACC-Autoslalom-Regulations.pdf" target="_blank" rel="noopener noreferrer">Auto Slalom Rule Book (CACC)</a></li>
          <li class="list-group-item"><a href={require('../docs/2020-carsonice-supreg.pdf')} target="_blank" rel="noopener noreferrer">IceX supplemental regulations ( Cars On Ice )</a></li>
          <li class="list-group-item"><a href="http://www.caccautosport.org/wp-content/uploads/2017/12/2019-Time-Attack-Rulebook-V1-1.pdf" target="_blank" rel="noopener noreferrer">Time Attack Rule Book (CACC)</a></li>
          <li class="list-group-item"><a href={require('../docs/2020-carsonice-supreg.pdf')} target="_blank" rel="noopener noreferrer">Time Attack Supplemental Regulations ( Cars On Ice )</a></li>
          <li class="list-group-item"><a href={require('../docs/2020-carsonice-techform.pdf')} target="_blank" rel="noopener noreferrer">IceX and Time attack Tech Forms (Please print and fill out, making sure your car is compliant)</a></li>
        </ul>

        <h3 className="my-3">Ice Racing (Wheel to Wheel) Car Preparation</h3>
        <ul class="list-group">
          <li class="list-group-item"><a href="http://www.caccautosport.org/wp-content/uploads/2017/12/2019-CACC-GCR-V1-1.pdf" target="_blank" rel="noopener noreferrer">CACC GCR for Car building specifications</a></li>
          <li class="list-group-item"><a href={require('../docs/2020-carsonice-rules.pdf')} target="_blank" rel="noopener noreferrer">CACC Ice Racing Discipline Car Preparation Specifications</a></li>
          <li class="list-group-item"><a href={require('../docs/2020-carsonice-supreg.pdf')} target="_blank" rel="noopener noreferrer">Cars on Ice Supplemental Rule Book</a></li>
        </ul>
      </div>
    );
  }
}
 
export default Contact;