import React, { useState } from "react";

const Hero = () => {
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setcheckOut] = useState("");
  const [myArray, setMyArray] = useState([]);
  // eslint-disable-next-line
  const [FinalArray, setFinalArray] = useState([]);

  return (
    <div data-theme="night">
      <div
        className="card w-96 bg-base-100 shadow-xl"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="card-body ">
          <h2 className="card-title text-center text-primary mb-6">
            Attendance
          </h2>
          <div className="card-actions justify-center items-center flex-col gap-5  ">
            <form
              action=""
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                myArray.push(name, checkIn, checkOut, rollno);
                console.log("INITIAL", myArray);
                FinalArray.splice(1, 0, myArray);
                console.log("FINAL", FinalArray);
                setMyArray([]);
              }}
            >
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  placeholder="Type Here"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Roll Number </span>
                </label>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  placeholder="Type Here"
                  type="number"
                  value={rollno}
                  onChange={(e) => {
                    setRollno(e.target.value);
                  }}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Check In Time</span>
                </label>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="time"
                  placeholder="Check-in Time"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Check Out Time</span>
                </label>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="time"
                  placeholder="Check-out Time"
                  value={checkOut}
                  onChange={(e) => {
                    setcheckOut(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {" "}
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
