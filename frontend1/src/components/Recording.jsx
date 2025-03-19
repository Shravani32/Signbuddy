import { useRef, useState } from "react";

const Recording = () => {
  const videoRef = useRef(null);
  const recordedVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  const [stream, setStream] = useState(null);

  // Start Webcam
  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  // Start Recording
  const startRecording = () => {
    if (!stream) return;
    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const recordedBlob = new Blob(chunks, { type: "video/webm" });
      setRecordedVideoURL(URL.createObjectURL(recordedBlob));
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    setIsRecording(true);
  };

  // Stop Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Record Your Sign Language</h2>

      {/* Start Webcam Button */}
      {!isCameraOn && (
        <button
          onClick={startWebcam}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Start Webcam
        </button>
      )}

      {/* Live Video Stream */}
      {isCameraOn && (
        <div className="mt-8 border-2 border-gray-300 rounded-lg overflow-hidden">
          <video ref={videoRef} autoPlay playsInline className="w-full h-auto"></video>
        </div>
      )}

      {/* Start/Stop Recording Buttons */}
      {isCameraOn && (
        <div className="mt-4 flex space-x-4">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-300"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition duration-300"
            >
              Stop Recording
            </button>
          )}
        </div>
      )}

      {/* Display Recorded Video */}
      {recordedVideoURL && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recorded Video</h3>
          <video ref={recordedVideoRef} controls className="w-full h-auto border border-gray-400 rounded-lg">
            <source src={recordedVideoURL} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Recording;