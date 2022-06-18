import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    toggleEditStatus () {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            this.props.status &&
            <div className={s.container} >
                {!this.state.editMode ?
                    <div onDoubleClick={this.toggleEditStatus.bind(this)} className={s.status} >{this.props.status}</div> :
                    <input 
                    onBlur={this.toggleEditStatus.bind(this)} 
                    autoFocus={true} 
                    value={this.props.status} 
                    className={s.status} />
                }
            </div>
        )
    }
}

export default ProfileStatus