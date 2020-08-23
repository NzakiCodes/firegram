import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null)
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    return (
        <form >
            <div className="form">
                <label className="file-label" htmlFor="file">+</label>
                <input id="file" type="file" onChange={changeHandler} />
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {/* {file && <div>{file.name}</div>} */}
                {file && <ProgressBar file={file} setFile={setFile} />}

            </div>
        </form>
    )
}

export default UploadForm
