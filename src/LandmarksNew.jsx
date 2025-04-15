export function LandmarksNew({ onCreate }) {
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
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>New Landmark</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <button type="submit">Create Landmark</button>
      </form>
    </div>
  )
}

