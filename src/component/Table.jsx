import React, { useState } from "react";

const Table = () => {
  // eslint-disable-next-line
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("records"))
  );
  console.log("TABLEDATA", tableData);

  if (tableData) {
    return (
      <div>
        <div className="card w-full bg-neutral text-neutral-content">
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
                {tableData.map((record) => {
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
                localStorage.clear();
                window.location.reload();
              }}
            >
              CLEAR TABLE
            </button>
          </div>
        </div>

        <p className="text-xl text-center">
          Total No. Of Students {tableData.length}
        </p>
      </div>
    );
  }
};

export default Table;
