import React, { useEffect, useState } from 'react'
import { getshop } from '../Apicalls/shop';

function Shoplist({formData ,setformdata}) {
    const [Data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
      // if (formData.length!=0) {
      //    const isNameInData = Data.some((item) => item.name === formData.name);
      //    if (!isNameInData) {
      //      setData((prevData) => [formData,...prevData]);
      //      setformdata([])
      //    }
      // }
  
    useEffect(() => {
      async function fetchData() {
        try {
          if(Data.length === 0){
              const result = await getshop();
              setData(result.data);
              setIsLoading(false);
          }else{
              console.log("already Fetched");
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  
  
  return (

    <div>
        {isLoading?(
            <div>Loading...</div>
        ):  <div>
        {Data.length ===0 ? (
          <p>No Data available</p> // You can customize this message
        ) : (
          <div className="card  card-table show-entire">
            
            <div className="table-responsive">
              <table className="table border-0 custom-table comman-table datatable mb-0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Shop Name</th>
                    <th>Address</th>
                    <th>District</th>
                    <th>Area</th>
                    <th>Pincode</th>
                    <th>phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((item, index) => (
                    <tr  key={`${item._id}-${index}`}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.district}</td>
                      <td>{item.pincode}</td>
                      <td>{item.phone}</td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#delete_patients"
                              >
                              <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_patient"
                            >
                              <i className="fa fa-trash-alt m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>}
  
  </div>
  )
}

export default Shoplist