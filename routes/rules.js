module.exports = [
    
    {
        name: 'category',
        rules: [
            {type: 'get', rule: '/', method: 'getAll'},
            {type: 'get', rule: '/:id', method: 'getById'},
            {type: 'delete', rule: '/:id', method: 'remove'},
            {type: 'post', rule: '/', method: 'create'},
            {type: 'patch', rule: '/:id', method: 'update'}
        ]
    },

    {
        name: 'auth',
        rules: [
            {type: 'get', rule: '/login', method: 'login'},
            {type: 'post', rule: '/register', method: 'register'}
        ]
    },

    {
        name: 'order',
        rules: [
            {type: 'get', rule: '/', method: 'getAll'},
            {type: 'post', rule: '/', method: 'create'},
        ]
    },


    {
        name: 'analytics',
        rules: [
            {type: 'get', rule: '/overview', method: 'overview'},
            {type: 'get', rule: '/analytics', method: 'analytics'}
        ]
    },

    {
        name: 'position',
        rules: [
            {type: 'get', rule: '/:categoryId', method: 'getByCategoryId'},
            {type: 'delete', rule: '/:id', method: 'remove'},
            {type: 'post', rule: '/', method: 'create'},
            {type: 'patch', rule: '/:id', method: 'update'}
        ]
    },

    
    
    
]