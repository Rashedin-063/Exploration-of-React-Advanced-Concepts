/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { TextField } from "@mui/material";

// const textfield = ({ label, variant }, ref) => {
//   return <TextField ref={ref} label={label} variant={variant} />;
// };

// const MuiTextfield = forwardRef(textfield)

const MuiTextfield = forwardRef(({ label, variant }, ref) => { 
  return <TextField ref={ref} label={label} variant={variant} />;
})

MuiTextfield.displayName = MuiTextfield



export default MuiTextfield;
