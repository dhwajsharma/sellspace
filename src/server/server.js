const express = require('express');
const auth = require('./authService');
var cors = require('cors')
const app = express();

app.use(cors())
app.use('/', express.static(`${__dirname}/../client`));
const authSvc = new auth.AuthService({
    consumerKey: '3IWONttlJfVBGfSJA5UeMUeqSaVjiCtT',
    consumerSecret: 'sDp1wXQ1XT4O2FtL',
});

app.use('/api/auth', authSvc.router);
const port = process.env.PORT || 5000;

app.set('port', port);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

