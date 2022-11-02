const infoMail = (users) => {
  return {
    from: process.env.EMAIL,
    to: `itsmarcos.1up@gmail.com`,
    subject: `¡No te lo pierdas! Descubre novedades en HeladitosApp 🍦!`,
    //todo el html que va en el body:
    html: ``,
    //attachments: [{ filename: "", path: "" }],
  };
};

module.exports = {
  infoMail,
};
