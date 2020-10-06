import React, { Component } from "react";
import {NavLink} from "react-router-dom";
// import logo from "./../img/cars-colour-alt.svg";
import banner from "./../img/banner.jpg";
 
class Home extends Component {
  render() {
    return (
      <div>
        {/* <img className="mx-auto d-block" src={logo} alt="logo" width="200" height="200"/>
        <h1 className="text-center">Cars On Ice</h1> */}
        <img className="img-fluid my-5" src={banner} alt="logo" width="5300" height="1736"/>
        <h3 className="my-3">Getting Started</h3>
        <p>Learn about how to get started to race on ice </p>
        <p>Getting started with Cars on Ice is really easy.  There are 3 main types of racing.  Listed below is the general requirements for each type. </p>
        <table class="table">
          <thead>
            <tr>
              <th className="text-nowrap" scope="col"></th>
              <th className="text-nowrap" scope="col">Ice X</th>
              <th className="text-nowrap" scope="col">Ice Attack</th>
              <th className="text-nowrap" scope="col">Ice Race</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="" scope="row">Helmet</th>
              <td className="text-center">X</td>
              <td className="text-center">X</td>
              <td className="text-center">X</td>
            </tr>
            <tr>
              <th className="" scope="row">Snow Tires</th>
              <td className="text-center">X</td>
              <td className="text-center">X</td>
              <td className="text-center">X</td>
            </tr>
            <tr>
              <th className="" scope="row">Previous Ice Racing Experience</th>
              <td className="text-center"></td>
              <td className="text-center">X</td>
              <td className="text-center">X</td>
            </tr>
            <tr>
              <th className="" scope="row">Roll Cage</th>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">X</td>
            </tr>
            <tr>
              <th className="" scope="row">CACC Licence</th>
              <td className="text-center"></td>
              <td className="text-center">X</td>
              <td className="text-center">X</td>
            </tr>
          </tbody>
        </table>

        <NavLink className="btn btn-success mb-5" to="/rules">Rules and Requirements</NavLink>

        <h3 className="my-3">History</h3>
        <p>In 1972 a group of rally enthusiasts thought it might be interesting to hold a solo event on ice. It was something to do to pass the time during the winter season when no other motorsport events were happening and to continue to fuel their passion for motorsport. They found the best place to hold the event was in the Thompson/Okanagan area.</p>
        <p>A member of the group suggested Cache Creek. His parents owned a hotel in Cache Creek and it was cold enough in the winter. Barnes Lake was discovered just outside of Cache Creek in Ashcroft on the highway to Merritt. The event planning began.</p>
        <p>For the first couple years, the solo events ran and attracted several entries. The group was still looking for more; they wanted actual wheel to wheel racing. And that was the start of Cars on Ice. Sanctioned by the Confederation of Autosport Car Clubs (CACC), Ice Racing took off. It attracted up to 80 entries on average. Two full days of racing are held on two weekends in January and two weekends in February.</p>
      
        <h6>Competitors raced on:</h6>
        <ul>
          <li>Aggressive Race Studded Tires</li>
          <li>Street Legal Studded Tires and</li>
          <li>Rubber Snow Tires and standard winter snow tire.</li>
        </ul>
        
        <p>After over 40 years of continuous automobile ice racing in British Columbia, Mother Nature has made it challenging at times; different lakes have been used, but Barnes Lake has been the main event location since 1972. The organizing clubs have gone through many changes over the years, and the entry numbers are down from the heyday of 80 entries per weekend; but today, the races still continue. The original pioneers of Ice Racing have passed the torch to their sons and daughters to continue to organize and participate in the races. As long as Mother Nature allows, the races will go on!</p>
      </div>
    );
  }
}
 
export default Home;