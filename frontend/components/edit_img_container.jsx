import React from 'react';
import { connect } from 'react-redux';
import { updateGroup } from '../actions/meetin_actions';

class EditImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {photoFile: null, photoUrl: null};
    this.upload = this.upload.bind(this);
  }
  showForm(e){
    e.preventDefault();
    document.getElementById('update-photo-form').classList.toggle('hide');
    document.getElementById('display-update-photo-form').classList.toggle('hide');
  }
  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file){
      fileReader.readAsDataURL(file);
    }
  }
  upload(e){
    e.preventDefault();
    let formData = new FormData();
    console.log(this.state);
    formData.append(this.props.entity+'[id]', this.props.entityId);
    formData.append(this.props.entity+'[img]', this.state.photoFile);
    // debugger
    this.props.updateEntity(formData);
  }
  render(){
    console.log(this.state);
    const preview = this.state.photoUrl;
    if (this.props.currUserId === this.props.leaderId){
      return (
        <div className="edit-image-background">
          <form id="update-photo-form" className="hide">
            <input type="file" onChange={this.handleFile.bind(this)}/>
            <img className="img-preview" src={preview}/>
            <div className="action-icons">
              <div className="action-icon-item" onClick={this.showForm}>
                <i className="fas fa-times updating-icon"></i>
                <h6 className="photo-label">Cancel</h6>
              </div>
              <div className="action-icon-item" onClick={this.upload.bind(this)}>
                <i className="fas fa-upload updating-icon"></i>
                <h6 className="photo-label">Upload Photo</h6>
              </div>
            </div>
          </form>
          <div id="display-update-photo-form" className="action-icon-item" onClick={this.showForm}>
            <i className="fas fa-camera updating-icon"></i>
            <h6 className="photo-label">New Photo</h6>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const msp = (state, ownProps) => {
  const currUserId = state.session.currentUserId;

  return {
    currUserId: currUserId,
  };
};


const mdp = (dispatch) => {
  return {
    // createEvent: (event) => dispatch(createEvent(event))
    updateEntity: (group) => dispatch(updateGroup(group))
  };
};

const EditImageContainer = connect(msp, mdp)(EditImage);
export default EditImageContainer;
