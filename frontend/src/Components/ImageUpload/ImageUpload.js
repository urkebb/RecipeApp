import React, { useRef, useState, useEffect } from 'react'
import './ImageUpload.css'

export default function ImageUpload(props) {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState();


    const filePickerRef = useRef();

    useEffect(() => {

        const fileReader = new FileReader();
        if (!file) {
            return;
        }

        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
    }, [file])

    function pickedhandler(event) {
        let pickedFile;
        let fileIsValid = isValid;
        console.log(event.target.files[0]);
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        props.onInput(props.id, pickedFile, fileIsValid);
    }


    function pickImageHandler() {
        filePickerRef.current.click();
    };

    return (
        <div className="form-control">
            <input
                id={props.id}
                ref={filePickerRef}
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedhandler}
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="preview" />}
                    {!previewUrl && <p style={{ color: "red" }}>Molim Vas izaberite sliku.</p>}
                </div>
                <div>
                    <button type="button" onClick={pickImageHandler}>PICK IMAGE</button>
                    
                </div>
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    )
}
