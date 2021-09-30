import * as React from 'react';
import { Button } from '@mui/material';
import { CameraAlt } from "@material-ui/icons"
import "./InputBox.css"
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const InputBox = () => {
    const title = useRef(null);
    const price = useRef(null);
    const description = useRef(null);
    const number = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendPost = (e) => {
        e.preventDefault();
        if (!title.current.value) return;
        if (!price.current.value) return;
        if (!description.current.value) return;
        if (!number.current.value) return;


        db.collection("posts").add({
            title: title.current.value,
            price: price.current.value,
            description: description.current.value,
            number: number.current.value,
            name: user.displayName,
            email: user.email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url")

                removeImage();

                uploadTask.on("state_change", null, error => console.error(error), () => {
                    storage.ref(`posts`).child(doc.id).getDownloadURL().then(url => {
                        db.collection("posts").doc(doc.id).set({
                            postImage: url
                        }, { merge: true })
                    })
                })
            }
        })

        title.current.value = "";
        price.current.value = "";
        description.current.value = "";
        number.current.value = "";
        handleClose();

    }
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="inputBox">
            <div className="inputBox__searchBar">

                {!user ? (
                    <Button variant="contained" onClick={handleClickOpen} disabled>
                        Add Post
                    </Button>
                ) : (
                    <Button variant="contained" onClick={handleClickOpen} >
                        Add Post
                    </Button>
                )}

                <Dialog className="inputBox__dialog" open={open} onClose={handleClose}>

                    <DialogTitle>Enter Details</DialogTitle>

                    <DialogContent>
                        <TextField
                            inputRef={title}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            inputRef={price}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Price (₹)"
                            type="number"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            inputRef={description}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description"
                            multiline
                            rows={4}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            inputRef={number}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Contact Number"
                            type="number"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>

                    <DialogActions>
                        {imageToPost && (
                            <div onClick={removeImage} className="inputBox__searchBar__removeImage">
                                <img src={imageToPost} alt="" />
                                <p>Remove</p>
                            </div>
                        )}
                    </DialogActions>

                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={() => filePickerRef.current.click()} >Photo</Button>
                        <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
                    </DialogActions>

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={sendPost}>Post</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default InputBox
