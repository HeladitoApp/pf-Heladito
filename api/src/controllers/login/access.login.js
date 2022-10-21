const publicAccess = (req, res) => {
    res.json({
        msg: "Bemvindo a zona abierta"
    })
}

const privateAccess = (req, res) => {
    res.json({
        msg: "Bienvenido al club"
    })
}

const privateAccessVIP = (req, res) => {
    res.json({
        msg: "Estas en la zona VIP"
    })
}



module.exports = {
    publicAccess, privateAccess, privateAccessVIP
}