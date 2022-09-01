const app = require('./app')
require('./app')

const PORT = process.env.POT || 3000;

const main = async () => {
    await app.listen(PORT);
    console.log('Server is running...')
}

main()