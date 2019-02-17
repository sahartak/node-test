module.exports = [
    
    {
        controller: 'category',
        rules: [
            {type: 'get', rule: '/', method: 'getAll', secure: true},
            {type: 'get', rule: '/:id', method: 'getById', secure: true},
            {type: 'delete', rule: '/:id', method: 'remove', secure: true},
            {type: 'post', rule: '/', method: 'create', secure: true},
            {type: 'patch', rule: '/:id', method: 'update', secure: true}
        ]
    },

    {
        controller: 'auth',
        rules: [
            {type: 'post', rule: '/login', method: 'login'},
            {type: 'post', rule: '/register', method: 'register'}
        ]
    },

    {
        controller: 'order',
        rules: [
            {type: 'get', rule: '/', method: 'getAll', secure: true},
            {type: 'post', rule: '/', method: 'create', secure: true},
        ]
    },


    {
        controller: 'analytics',
        rules: [
            {type: 'get', rule: '/overview', method: 'overview', secure: true},
            {type: 'get', rule: '/analytics', method: 'analytics', secure: true}
        ]
    },

    {
        controller: 'position',
        rules: [
            {type: 'get', rule: '/:categoryId', method: 'getByCategoryId', secure: true},
            {type: 'delete', rule: '/:id', method: 'remove', secure: true},
            {type: 'post', rule: '/', method: 'create', secure: true},
            {type: 'patch', rule: '/:id', method: 'update', secure: true}
        ]
    },

    
    
    
]