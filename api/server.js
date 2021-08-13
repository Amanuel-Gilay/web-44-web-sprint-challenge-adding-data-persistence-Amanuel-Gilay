// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const projectRouter = require('./project/model')
//const resourceRouter = require('./resource/model')

const server = express()

server.use(helmet())

server.use(express.json())

// server.use('*', (req,res) => {
//     res.json({api: 'up'})
// })

server.use('/api/projects', projectRouter)

server.use((err, req, res, next) => {  //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;
