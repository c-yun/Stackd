import React, {Component} from 'react';
import Loading from './Components/Loading';

class UpdateProfile extends Component{
    constructor(props){
    super(props)
    this.state = {
        isHidden: true
        }
    }

    toggleHide = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        let update = <Loading />
        if (this.props.user) {
            update = (
            <>
                <div className='profilePic'>
                    <img src={this.props.user.image} alt='' />
                    <small onClick={() => this.toggleHide()}>Upload a Photo</small>
                    <div className={`cloudinary ${this.state.isHidden ? 'hidden' : ''}`}>
                        <form id='upload-photo' encType='multipart/form-data' method='POST' action='/UpdateProfile'>
                            <input type='hidden' name='userId' value={this.props.user ? this.props.user._id : ''} />
                            <input type='file' name='myPic' />
                            <input type='submit' />
                        </form>
                    </div>
                </div>

            </>
        )
    }
        return(
            <div className='UpdateProfile'>
                {update}
            </div>
        )
    }
}

export default UpdateProfile; 
