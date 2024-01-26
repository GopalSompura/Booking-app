import "./list.css";
import React, { useState } from "react";
import Body from "../../Components/Body/Body";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  console.log(location);
  return (
    <>
      <div>
        <Navbar />
        <Body type="list" />
        <div className="wrapperlist">
          <div className="wrapper">
            <div className="findlist">
              <h1 className="fltitle">Search</h1>
              <div className="flitem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="flitem">
                <label>Check-in-date</label>
                <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
              </div>
            </div>
            <div className="finallist"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
