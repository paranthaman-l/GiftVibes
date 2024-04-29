import axios from 'axios';
import { fileUploadApi } from '../apis/appScript'
import { useEffect, useRef, useState } from 'react';
function FileUpload() {
    const [profile, setProfile] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [audioUrl, setAudioUrl] = useState(null);
    // const [googleDriveUrl, setGoogleDriveUrl] = useState("https://docs.google.com/uc?export=download&id=1SxlSPdnVfRHEgEJKALl8rnF_mpna9GVJ");
    // useEffect(() => {
    //     const fetchAudioData = async () => {
    //         setIsLoading(true);
    //         setError(null);
    //         console.log("Hii");
    //         try {
    //             const response = await axios.get('http://localhost:3000/getAudioData', {
    //                 params: { url: googleDriveUrl }, // Send Google Drive URL as query parameter
    //             });
    //             console.log(response);

    //             if (!response.ok) {
    //                 throw new Error(`Error fetching audio data: ${response.statusText}`);
    //             }

    //             const audioBlob = await response.blob();
    //             const audioUrl = window.URL.createObjectURL(audioBlob);
    //             console.log(audioUrl);
    //             setAudioUrl(audioUrl);

    //         } catch (error) {
    //             console.log(error);
    //             setError(error.message);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchAudioData();
    // }, [googleDriveUrl]);
    function upload(e) {
        const file = e.target.files[0];

        if (!file) {
            alert('Please select a file.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            const base64String = event.target.result.split(',')[1];

            const formData = {
                action: 'upload',
                fileName: file.name,
                fileType: file.type,
                fileSize: file.size,
                fileData: base64String
            };

            console.log(formData);

            fileUploadApi.post("", JSON.stringify(formData))
                .then(response => {
                    console.log('Uploaded file URL:', response.data.fileUrl.id);
                    setProfile("https://lh3.googleusercontent.com/d/" + response.data.fileUrl.id);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        };
    }




    return (
        <div className="App">
            <div className="App-header">
                <input type="file" accept="image/*" id="customFile" onChange={(e) => { upload(e) }} />
                <img src={profile} alt="" />


                <audio controls src="https://lh3.googleusercontent.com/d/1SxlSPdnVfRHEgEJKALl8rnF_mpna9GVJ"></audio>
                <audio controls src="https://drive.google.com/file/d/1SxlSPdnVfRHEgEJKALl8rnF_mpna9GVJ/preview"></audio>
                {/* <iframe src="https://drive.google.com/file/d/1SxlSPdnVfRHEgEJKALl8rnF_mpna9GVJ/preview" width="640" height="480" allow="autoplay"></iframe> */}
            </div>
        </div>
    );
}

export default FileUpload;
