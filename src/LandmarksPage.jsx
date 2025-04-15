import axios from "axios";
import { useState, useEffect } from "react";
import { LandmarksIndex } from "./LandmarksIndex";
import { LandmarksNew } from "./LandmarksNew";
import { Modal } from "./Modal";
import { LandmarksShow } from "./LandmarksShow";

export function LandmarksPage() {
 
  const [landmarks, setLandmarks] = useState([]);
  const [isLandmarksShowVisible, setIsLandmarkVisible] =useState(false);
  const [currentLandmark, setCurrentLandmark] = useState({});

  const handleIndex = () => {
    console.log("handleIndex")
    axios.get("http://localhost:3000/api/v1/landmarks")
      .then((response) => {
      console.log(response.data);
      setLandmarks(response.data);
    });
  };

  useEffect(handleIndex, []);

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate")
    axios.post("http://localhost:3000/api/v1/landmarks", params)
    .then((response) => {
      console.log(response.data);
      setLandmarks([...landmarks, response.data]);
      successCallback;
    });
  };

  const handleShow = (landmark) => {
    console.log("handleShow", landmark);
    setIsLandmarkVisible(true);
    setCurrentLandmark(landmark);
  };

  const handleUpdate = (landmark, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`http://localhost:3000/api/v1/landmarks/${landmark.id}`, params)
    .then((response) => {
      console.log(response.data);
      setLandmarks(landmarks.map(l => l.id === response.data.id ? response.data : l));
      successCallback();
      setIsLandmarkVisible(false);
    });
  };

  const handleDestroy = (landmark) => {
    console.log("handleDestroy", landmark);
    axios.delete(`http://localhost:3000/api/v1/landmarks/${landmark.id}`)
    .then(() => {
      setLandmarks(landmarks.filter(l => l.id !== landmark.id));
      setIsLandmarkVisible(false);
    });
  };

  return (
    <main>
      <h1>Landmarks</h1>
      <LandmarksNew onCreate={handleCreate}/>
      <LandmarksIndex landmarks={landmarks} onShow={handleShow}/>
      <Modal show={isLandmarksShowVisible} onClose={() => setIsLandmarkVisible(false)}>
        <LandmarksShow
          landmark={currentLandmark}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
        />
      </Modal>
    </main>
  );
}