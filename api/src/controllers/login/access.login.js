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
    try {
        res.json({
            msg: "Estas en la zona VIP"
        })
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    publicAccess, privateAccess, privateAccessVIP
}