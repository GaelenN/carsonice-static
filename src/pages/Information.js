import React, { Component } from "react";
 
class Information extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-3">Information</h1>
        <h3 className="my-3">Accommodations</h3>
        <p>Majority of the racers and volunteers stay at the Ashcroft River Inn. They provide a discounted rate on race weekends. Please let them know you are participating in the Cars on Ice events. Book in advance as the Inn gets booked up quickly!</p>
        <ol>
          <li>Desert Inn</li>
          <li>Bear’s Claw Inn</li>
          <li>Sandman Inn Cache Creek</li>
        </ol>
        <p>Barnes Lake is located 4.2 km from Ashcroft, BC. <a href="https://www.google.com/maps/place/50%C2%B042'21.8%22N+121%C2%B014'20.5%22W/@50.706055,-121.2412117,594m/data=!3m2!1e3!4b1!4m21!1m14!4m13!1m6!1m2!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!2sVancouver,+BC!2m2!1d-123.1207375!2d49.2827291!1m3!2m2!1d-121.2333333!2d50.7!3e0!5i1!3m5!1s0x0:0x0!7e2!8m2!3d50.7060551!4d-121.2390226" target="_blank" rel="noopener noreferrer">(Lat/Long: 50.700001 -121.23333)</a></p>

        <h3 className="my-3">FAQ - Frequently Asked Questions</h3>
        <h4>What is IceX?</h4>
        <p>IceX is an autocross event held on a frozen lake.  This is a single car timed event completing 1 lap at a time.  IceX allows beginners to learn car control techniques and gives an experienced driver a chance to hone and perfect the skills they already have. Previous experience not required.</p>
            
        <h4>What is Time Attack (No Passing)?</h4>
        <p>Time Attack (No Passing) is multi lap timed event on a frozen lake.  Passing is not allowed, but there is a pull out lane for slower drivers to allow for the faster cars to continue.  This event is more race oriented with higher speeds and has continuous lapping to increase seat time.  Previous ice experience is required.  This minimum includes completion of 1 IceX event or a previous wheel to wheel event and a minimum of a CACC Time Attack competition license.</p>
            
        <h4>What is the Wheel to Wheel Enduro?</h4>
        <p>Wheel to Wheel Ice Racing is door to door racing.  This involves fully caged race prepped cars with a CACC Ice Race competition license or a CACC Senior Race license. </p>
            
        <h4>Will I fall through the ice?</h4>
        <p>No. Often the ice is thicker than the governed safety minimum of 8” of ice. The ice is checked multiple times during the event weekend to ensure the safety of the participants and volunteers.</p>
            
        <h4>Can I use my street car?</h4>
        <p>IceX – Yes</p>
        <p>Time Attack (no passing) – Yes</p>
        <p>Please see the rules section of the website for more details.</p>
            
        <h4>Is it cold?</h4>
        <p>The weather fluctuates during the season from approximately 0 degrees to minus 20 degrees Celsius. Please check the weather forecast for Ashcroft, BC before packing to ensure you have adequate weather protection (snow jackets, pants and boots are highly encouraged).</p>
        <p>Often the sun will come out during the weekend. Remember to bring sunscreen and sunglasses.</p>
            
        <h4>I’ve raced for years. Do I need any prior experience?</h4>
        <p>IceX – No.  Experience is not required.</p>
        <p>Time Attack – Yes.  Minimum of at least one Ice-x event or greater experience required.</p>
      </div>
    );
  }
}
 
export default Information;