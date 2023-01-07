import React, { useState } from "react";

const Hero = () => {
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setcheckOut] = useState("");
  const [myArray, setMyArray] = useState([]);
  // eslint-disable-next-line
  const [FinalArray, setFinalArray] = useState([]);

  const table = () => {
    const table = JSON.stringify(localStorage.getItem("Records"));
    console.log(table);
  };
  return (
    <div data-theme="night">
      <div className="App flex flex-col lg:flex-row lg:mt-20 justify-center items-center gap-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body flex felx-col items-center">
            <h2 className="card-title  text-primary mb-6">Attendance</h2>
            <div className="card-actions justify-center items-center flex-col gap-5  ">
              <form
                action=""
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  myArray.push(name, checkIn, checkOut, rollno);
                  console.log("INITIAL", myArray);
                  FinalArray.splice(1, 0, myArray);
                  setMyArray([]);
                  alert("Data Entered Succefully");
                  setName("");
                  setRollno("");
                  setCheckIn("");
                  setcheckOut("");
                  setFinalArray(FinalArray);
                  console.log("FINAL", FinalArray);
                  localStorage.setItem("records", JSON.stringify(FinalArray));
                  table();
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

        <div className="card-body items-center text-center">
          <h2 className="card-title">Records </h2>
          <div className="overflow-x-auto">
            <table className="table w-2/12">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>RollNo.</th>
                  <th>CheckIn</th>
                  <th>CheckOut</th>
                </tr>
              </thead>
              {FinalArray.map((record) => {
                return (
                  <tbody>
                    <tr className="mb-2">
                      <th></th>
                      <td>{record[0]}</td>
                      <td>{record[3]}</td>
                      <td>{record[2]}</td>
                      <td>{record[1]}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFinalArray([]);
              window.location.reload();
            }}
          >
            CLEAR TABLE
          </button>
          <p className="text-xl text-center">
            Total No. Of Students {FinalArray.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
