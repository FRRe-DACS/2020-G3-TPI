const path = require('path')
const jwt = require('jwt-simple')

class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }


    loginView(req,res){
        res.render(path.join(__dirname+'/../views/login'), {headerTitle: "Hola"});
    }

    async login(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(usuarioValidado => {  
                if(usuarioValidado!=false){
                    const token = jwt.encode(usuarioValidado, 'pass');
                    res.status(200).json({token: token})
                } else {
                    res.status(401).json({msg: "Acceso denegado"})
                }})
            .catch(error => {
                res.status(401).json({msg: error.message});  
            });
        /*await this._loginService.create(req.body)
            .then(medicoCreated => res.status(201).json(medicoCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });*/
    }

}

module.exports = LoginController;