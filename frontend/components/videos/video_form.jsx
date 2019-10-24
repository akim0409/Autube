import React from "react";

class VidoeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      videoFile: null,
      imageUrl: "",
      //   imageUrl: null,
      uploaded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }

  // handleFile(e) {
  //   e.preventDefault();

  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({
  //       videoFile: file,
  //       //the bottom code sets the image of video as a preview
  //       imageUrl: fileReader.result,
  //       uploaded: true
  //     });
  //     //you want to put uploaded true here bc if you put the code below, once you upload video
  //     //it would re-render and then jump to the render code below,
  //     //and therefore you wouldn't hit this line and dont have access to videoUrl
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }

  handleFile(field) {
    return e => {
      debugger;
      this.setState({ [field]: e.currentTarget.files[0], uploaded: true });
    };
  }
  // handleFile(e) {
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () =>
  //     this.setState({ videoUrl: reader.result, videoFile: file });
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ videoUrl: "", videoFile: null });
  //   }
  // }

  handleImage(e) {
    debugger;
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        imageUrl: reader.result,
        imageFile: file,
        uploaded: true
      });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }
  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[user_id]", this.props.currentUser.id);
    formData.append("video[image]", this.state.imageFile);
    if (this.state.videoFile) {
      formData.append("video[video]", this.state.videoFile);
    }
    this.props.createVideo(formData);
    this.setState({
      title: "",
      description: "",
      videoFile: null,
      imageUrl: "",
      uploaded: false
    });
  }

  render() {
    return this.state.uploaded ? (
      <div>
        <div>
          <div>
            <img src={this.state.imageUrl} />
          </div>
          <div>
            <label htmlFor="files">
              <div>Change Video</div>
              <input
                type="file"
                onChange={this.handleFile("videoFile")}
                id="files"
              />
            </label>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleInput("title")}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={this.state.description}
            onChange={this.handleInput("description")}
          />
          <input type="file" onChange={this.handleImage} id="files" />
          <button>Post a video</button>
        </form>
      </div>
    ) : (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="files">Select Video</label>
          <input
            type="file"
            onChange={this.handleFile("videoFile")}
            id="files"
          />
        </form>
      </div>
    );
  }
}

export default VidoeForm;
