const express = require('express');
const forge = require('forge-apis');

class AuthService {
    constructor(options) {
        this._options = options;
        this._router = express.Router();
        this.initializeRoutes();
    }

    get router() {
        return this._router;
    }

    initializeRoutes() {
        this.router.post('/viewtoken', (req, res) => {
            this.createViewToken(req, res);
        });
    }

    async createViewToken(req, res) {
        if (!this._auth) {
            this._auth = new forge.AuthClientTwoLegged(this._options.consumerKey, this._options.consumerSecret, [ 'viewables:read' ]);
        }
        const token = await this._auth.authenticate();

        res.status(200).json(token);
    }
}

exports.AuthService = AuthService;