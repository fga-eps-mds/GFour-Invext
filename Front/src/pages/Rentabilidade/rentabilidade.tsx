import "../rentabilidade.css";
import { useState, useEffect } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import Axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAuth } from "../../services/Provider";

export const Rentabilidade = () => {
    const auth = useAuth();
    const token = auth.getToken();
}

export default Rentabilidade;