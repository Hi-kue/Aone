const app = require('./config/config')
const colors = require('colors');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`${colors.bgGreen.black('SUCCESS')} Server is Running → http://localhost:${app.get('port') || 3000}`);
});

app.on('error', (error) => {
    console.log(`${colors.bgRed.black('ERROR')} Server Error → ${error.message}`);
});