export function validateUserInfo(req, res, next) {
    const dataReq = req.body
    const nameRegex = /^[\p{L}\d\s]+$/u
    const error = {
        nameError: [],
        ageError: [],
    }
    if (!dataReq.name) {
        error.nameError.push("Name cannot be blank")
    } else if (!nameRegex.test(dataReq.name)) {
        error.nameError.push("Can't contain special character")
    }
    if (!dataReq.age) {
        error.ageError.push("Age cannot be blank")
    } else if (dataReq.age < 0) {
        error.ageError.push("Age cannot be negative number")
    }
    else if (dataReq.age > 120) {
        error.ageError.push("Go get the world's oldest person award")
    }
    if (error.nameError.length > 0 || error.ageError.length > 0) {
        res.status(400).json({ error: error })
    } else {
        next()
    }
}
