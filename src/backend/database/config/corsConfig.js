const corsConfig = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5002',
    ],
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true,
}

module.exports = corsConfig;