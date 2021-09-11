import { Button } from "@material-ui/core"
import { CameraAlt } from "@material-ui/icons"
import "./InputBox.css"
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";


const InputBox = () => {
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();



    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
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

        inputRef.current.value = "";
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
                <input ref={inputRef} type="text" placeholder="" />
                <Button variant="contained" color="primary" onClick={sendPost} >Submit</Button>

                {imageToPost && (
                    <div onClick={removeImage} className="inputBox__searchBar__removeImage">
                        <img src={imageToPost} alt="" />
                        <p >Remove</p>
                    </div>
                )}

            </div>
            <div onClick={() => filePickerRef.current.click()} className="inputBox__photo">
                <CameraAlt />
                <p>Photo/Video</p>
                <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
            </div>
        </div>
    )
}

export default InputBox
