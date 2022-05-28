import React from 'react'
import  { Navigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ReDir() {
    const params = useParams();
    const location = useLocation();
    const {pname} = location.state;
    return <Navigate to={pname} replace={true} />
}

export default ReDir
