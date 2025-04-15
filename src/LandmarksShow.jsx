export function LandmarksShow({ landmark, onUpdate, onDestroy }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const params = {
      landmark: {
        name: formData.get('name'),
        description: formData.get('description'),
        image_url: formData.get('image_url'),
        location: formData.get('location'),
      }
    }
    const successCallback = () => form.reset();
    onUpdate(landmark, params, successCallback);
  };
  
  
  return (
    <div>
      <h1>Landmark Information:</h1>
      <p>Name: {landmark.name}</p>
      <p>Image Url: {landmark.image_url}</p>
      <p>Description: {landmark.description}</p>
      <p>Location: {landmark.location}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={landmark.name} name="name" type="text" />
        </div>
        <div>
          Image Url: <input defaultValue={landmark.image_url} name="image url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={landmark.description} name="description" type="text" />
        </div>
        <div>
          Location: <input defaultValue={landmark.location} name="location" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(landmark)}>Delete Landmark</button>
    </div>
  );
}