let admins = ['Ada','Greta','Vim','Tim'];

function administrador(req, res, next) {
  admins.forEach((admin) => {
    if (admin === req.query.admin) {
      return res.send("Hola Administrador");
    } else {
      return res.send("No tienes los privilegios para ingresar.");
    }
    next();
  });
}

module.exports = administrador;

