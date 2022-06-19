import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditStatus = () => {
        this.setState({editMode: !this.state.editMode})
    }

    updateStatus = (event) => {
        event.repeat = false
        if(event.code === 'Enter') {
            this.props.updateStatusThunk(this.state.status)
        }
    }

    onChangeStatus = (event) => {
        this.setState({status: event.currentTarget.value})
    }

    render() {
        return (
            <div className={s.container} >
                {!this.state.editMode ?
                    <div onDoubleClick={this.toggleEditStatus} className={s.status} >{this.props.status || '----------'}</div> :
                    <input
                    onChange={this.onChangeStatus}
                    onKeyDown={this.updateStatus}
                    onBlur={this.toggleEditStatus} 
                    autoFocus={true} 
                    value={this.state.status} 
                    className={s.status} />
                }
            </div>
        )
    }
}

export default ProfileStatus