import React, { useState } from "react";
import { Button, TextField, Dialog, DialogContent, DialogTitle, DialogActions } from "@material-ui/core";
import styles from "./UserProfile.style";
import axios from "axios";

const EditProfile = (props) => {
    const classes = styles();

    const [name, setName] = useState(props.name);
    const [lastName, setLastName] = useState(props.lastName);
    const [location, setLocation] = useState(props.location);
    const [occupation, setOccupation] = useState(props.occupation);
    const [nationality, setNationality] = useState(props.nationality);
    const [languages, setLanguages] = useState(props.languages);
    const [skills, setSkills] = useState(props.skills);
    const [interests, setInterests] = useState(props.interests);

    const onCloseDialog = () => {
        props.onOpen(false);
    };

    const saveProfile = () => {
        var profileData = {
            name: name,
            lastName: lastName,
            location: location,
            occupation: occupation,
            skills: skills,
            interests: interests,
            languages: languages,
            nationality: nationality,
        };

        axios
            .put("/api/updateprofile", profileData)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {});

        props.onNameChange(name);
        props.onLastNameChange(lastName);
        props.onLocationChange(location);
        props.onLanguagesChange(languages);
        props.onNationalityChange(nationality);
        props.onInterestsChange(interests);
        props.onSkillsChange(skills);
        props.onOccupationChange(occupation);

        onCloseDialog();
    };

    return (
        <Dialog
            maxWidth="lg"
            open={props.open}
            onClose={onCloseDialog}
            aria-labelledby="form-dialog-title"
            className={classes.modalBox}
        >
            <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
            <DialogContent>
                <TextField value={name} id="fieldName" onInput={(e) => setName(e.target.value)} label="Name" />
            </DialogContent>
            <DialogContent>
                <TextField value={lastName} onInput={(e) => setLastName(e.target.value)} label="Last name" />
            </DialogContent>
            <DialogContent>
                <TextField value={location} onInput={(e) => setLocation(e.target.value)} label="Location" />
            </DialogContent>
            <DialogContent>
                <TextField value={skills} onInput={(e) => setSkills(e.target.value)} label="Skills" />
            </DialogContent>
            <DialogContent>
                <TextField value={nationality} onInput={(e) => setNationality(e.target.value)} label="Nationality" />
            </DialogContent>
            <DialogContent>
                <TextField value={occupation} onInput={(e) => setOccupation(e.target.value)} label="Ocupation" />
            </DialogContent>{" "}
            <DialogContent>
                <TextField value={interests} onInput={(e) => setInterests(e.target.value)} label="Interests" />
            </DialogContent>
            <DialogContent>
                <TextField value={languages} onInput={(e) => setLanguages(e.target.value)} label="Language" />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button onClick={saveProfile} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default EditProfile;
