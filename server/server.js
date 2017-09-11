const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const middleware = require('./middleware')
const port = process.env.apiPort || 8081

const app = express()

app.use(cors())
app.use(middleware.malformedUrl)

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
