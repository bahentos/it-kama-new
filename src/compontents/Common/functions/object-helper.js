

export const updateObjectInArrayForFollowed = (items, propForCompare, propInObject) => {
    return items.map(u => {
        if (u[propInObject] === propForCompare) {
            return { ...u,  followed: !u.followed}
        }
        return u
    })
}

export const updateObjectInArray = (items, propForCompare, propInObject, newObjectProp) => {
    return items.map(u => {
        if (u[propInObject] === propForCompare) {
            return { ...u,  ...newObjectProp}
        }
        return u
    })
}