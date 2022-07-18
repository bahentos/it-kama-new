import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusHook = ({status, updateStatusThunk, ...props}) => {
    const [editMode, setEditMode] = useState(false)
    const [statusLocal, setStatus] = useState(status)

    let toggleEditStatus = () => {
        setEditMode(!editMode)
    }

    let updateStatus = (event) => {
        event.repeat = false
        if (event.code === 'Enter') {
            updateStatusThunk(statusLocal)
            setEditMode(!editMode)
        }
    }

    let onChangeStatus = (event) => {
        setStatus(event.currentTarget.value)
    }

    useEffect(() => {
        setStatus(status)
    }, [status])

    return (
        <div className={s.container} >
            {!editMode ?
                <div onDoubleClick={toggleEditStatus} className={s.status} >{status || '----------'}</div> :
                <input
                    onChange={onChangeStatus}
                    onKeyDown={updateStatus}
                    onBlur={toggleEditStatus}
                    autoFocus={true}
                    value={statusLocal}
                    className={s.status} />
            }
        </div>
    )

}

export default ProfileStatusHook