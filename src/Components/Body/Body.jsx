import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./body.css";
import React from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Body = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleincbtn = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const searchfunction = () => {
    navigate("/Hotels", { state: { destination, date, options } });
  };
  return (
    <>
      <div className="head">
        <div
          className={
            type === "list" ? "headcontainer listmode " : "headcontainer"
          }
        >
          <div className="bodylist">
            <div className="bodylistitems active">
              <FontAwesomeIcon icon={faBed} />
              <span>stays</span>
            </div>
            <div className="bodylistitems">
              <FontAwesomeIcon icon={faPlane} />
              <span>flights</span>
            </div>
            <div className="bodylistitems">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="bodylistitems">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="bodylistitems">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="bodytitle">A lifetime discounts?</h1>
              <p className="bodydescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                nesciunt!
              </p>
              <button className="btn-body">Sign in / Register</button>
              <div className="bodysearch">
                <div className="bodysearchitem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where you want to go?"
                    className="bodysearchinput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="bodysearchitem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="bodysearchtext"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="bodysearchitem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="bodysearchtext"
                  >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionitem">
                        <span className="textoption">Adult</span>
                        <div className="counteroption">
                          <button
                            disabled={options.adult <= 1}
                            className="optionincrementbtn"
                            onClick={() => handleincbtn("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionincrementnumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionincrementbtn"
                            onClick={() => handleincbtn("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionitem">
                        <span className="textoption">Children</span>
                        <div className="counteroption">
                          <button
                            disabled={options.children <= 0}
                            className="optionincrementbtn"
                            onClick={() => handleincbtn("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionincrementnumber">
                            {options.children}
                          </span>
                          <button
                            className="optionincrementbtn"
                            onClick={() => handleincbtn("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionitem">
                        <span className="textoption">Room</span>
                        <div className="counteroption">
                          <button
                            disabled={options.room <= 1}
                            className="optionincrementbtn"
                            onClick={() => handleincbtn("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionincrementnumber">
                            {options.room}
                          </span>
                          <button
                            className="optionincrementbtn"
                            onClick={() => handleincbtn("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="bodysearchitem">
                  <button className="btn-body" onClick={searchfunction}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
