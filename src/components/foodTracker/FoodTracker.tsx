import React from 'react'
import './FoodTracker.css'
import { PiCube } from 'react-icons/pi';
export const FoodTracker = () => {
  return (
    <div className="FoodTracker_Container">
      <div className="Tracker_content">
        <div className="Tracker_BT">
          <PiCube className="TrackerBox_Icon" />
          <div className="Tracker_Line"></div>
        </div>
        <div className="Tracker_Title_Date">
          <p>Order Place</p>
          <p>09:30am, 9 August 2024</p>
        </div>
      </div>
    </div>
  );
}
