import React from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

const UploadPhoto = (props) => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        console.log(hiddenFileInput.current);
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];

        const formData = new FormData();
        formData.append("photo", fileUploaded, fileUploaded.name);
        formData.append("userId", "userIdFromState");

        axios.post("api/uploadfile", formData).then((response) => {
            // check if response is ok
            // if response is ok, change state.photo
        });

        props.handleFile(fileUploaded);
    };

    return (
        <>
            <Button size="small" onClick={handleClick}>
                Upload a photo
            </Button>
            <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
        </>
    );
};
export default UploadPhoto;
