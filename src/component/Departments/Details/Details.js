import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import "./Details.css";

const Details = () => {
  const {departmentId} = useParams();

  // const [departmentDetails, setDepartmentDetails] = useState([]);
  const [singleDepartment, setSingleDepartment] = useState({});

  useEffect(() => {
    fetch("/departments.json")
      .then((res) => res.json())
      .then((data) => {
        const foundDepartment = data.find(
          (department) => department.id == departmentId
        );
        setSingleDepartment(foundDepartment);
        console.log(foundDepartment);
      });
  }, [departmentId]);

  return (
    <div>
      <div>
        <div className="card mx-auto mb-5 mt-5">
          <img src={singleDepartment.img} className="details-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">{singleDepartment.name}</h5>
            <p className="card-text">{singleDepartment.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
