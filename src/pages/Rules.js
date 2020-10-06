import React, { Component } from "react";
import rules from '../docs/2020-carsonice-rules.pdf';
import supregs from '../docs/2020-carsonice-supreg.pdf';
import techforms from '../docs/2020-carsonice-techform.pdf';
 
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
        <h3 className="my-3">IceX and Ice Attack (No Passing) </h3>
        <div class="alert alert-danger" role="alert">
        **NOTE** Ice Attack requires a CACC competition licence to participate. 
        </div>
        <div>
    </div>
        <ul class="list-group">
          <li class="list-group-item"><a download href={supregs} target="_blank" rel="noopener noreferrer">Cars On Ice Rules</a></li>
          <li class="list-group-item"><a download href={rules} target="_blank" rel="noopener noreferrer">Cars On Ice Supplemental Regulations</a></li>
          <li class="list-group-item"><a download href={techforms} target="_blank" rel="noopener noreferrer">Cars On Ice Tech Form</a></li>
        </ul>
      </div>
    );
  }
}
 
export default Contact;