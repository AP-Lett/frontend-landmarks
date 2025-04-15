export function LandmarksIndex({ landmarks, onShow }) {
  return(
    <div>
      <h1>All Landmarks ({landmarks.length} total)</h1>
      {landmarks.map((landmark) => (
        <div key={landmark.id}>
          <h2>{landmark.name}</h2>
          <img src={landmark.image_url} />
          <p>{landmark.description}</p>
          <p>{landmark.location}</p>
          <button onClick={() => onShow(landmark)}>More Info</button>
        </div>
      ))}
    </div>
  );
}