import React, { Component } from "react";
 
class Register extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-3">Register</h1>
        <h5 className="my-3">Full Season Packages are Available!</h5>

        <h3>2021 Schedule</h3>

        <table class="table mb-5">
          <tbody>
            <tr>
              <th className="" scope="row">Ice X</th>
              <td className="text-right">Jan 23 / 24</td>
              <td className="text-right">Feb 13 / 14</td>
            </tr>
            <tr>
              <th className="" scope="row">Ice Attack <small>No Passing</small></th>
              <td className="text-right">Jan 30 / 31</td>
              <td className="text-right">Feb 27 / 28</td>
            </tr>
          </tbody>
        </table>

        <h3>2021 Event Pricing</h3>

        <table class="table mb-5">
          <thead>
            <tr>
              <th className="text-nowrap" scope="col"></th>
              <th className="text-nowrap text-right" scope="col">1 Day</th>
              <th className="text-nowrap text-right" scope="col">Full</th>
              <th className="text-nowrap text-right" scope="col">Season</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="" scope="row">Ice X</th>
              <td className="text-right">$70.00</td>
              <td className="text-right">$105.00</td>
              <td className="text-right">$210.00</td>
            </tr>
            <tr>
              <th className="" scope="row">Ice Attack <small>No Passing</small></th>
              <td className="text-right">$165.00</td>
              <td className="text-right">$250.00</td>
              <td className="text-right">$450.00</td>
            </tr>
          </tbody>
        </table>
        <p>Lunch can be purchased in advance on Motorsportreg for $13 per day</p>
        <p>
          <small><em>Dates are subject to change due to ice conditions</em></small><br/>
          <small><em>No refunds (If Cars on Ice cancels an event, refunds will be given)</em></small>
        </p>


        <a class="btn btn-info btn-lg mr-3 mb-5" href="https://facebook.com/carsonice.ca" target="_blank" rel="noopener noreferrer">Join Us on Facebook</a>
        <a class="btn btn-info btn-lg mb-5" href="https://www.motorsportreg.com/orgs/cars-on-ice-wcirabc" target="_blank" rel="noopener noreferrer">Register Now on MotorsportReg</a>

        <h2>Volunteers</h2>
        <p>Cars on Ice is always seeking new volunteers. Without the volunteers, the races cannot continue. Volunteering is a great way to get to know the sport, meet new people and have fun.</p>
        <p>Many positions are available (but not limited to):</p>
        <ul>
          <li>Pre-grid Marshall</li>
          <li>Turn Worker / Flagger</li>
          <li>Pace Car</li>
          <li>Safety</li>
          <li>Timing and Scoring</li>
          <li>Start/Finish</li>
          <li>Tech Inspector</li>
          <li>Pit Marshall</li>
          <li>Plow Truck Driver</li>
          <li>Worker Director</li>
        </ul>

        <p>To become a volunteer, please contact us at <a href="mailto:info@carsonice.ca?Subject=I Want To Volunteer!">info@carsonice.ca</a> or register as a volunteer on <a href="https://www.motorsportreg.com/orgs/cars-on-ice-wcirabc" target="_blank" rel="noopener noreferrer">motorsportreg.com</a></p>
      </div>
    );
  }
}
 
export default Register;