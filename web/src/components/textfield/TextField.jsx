import React from "react";
import { TextField as MUITextField } from "@material-ui/core";

const TextField = (props) => {
    const { value, onChange, data, ...tfProps } = props;

    return <MUITextField fullWidth margin="normal" variant="outlined" value={value} onChange={onChange} {...tfProps} />;
};

export default TextField;
