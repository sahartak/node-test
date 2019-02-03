module.exports = [
    
    {
        controller: 'category',
        rules: [
            {type: 'get', rule: '/', method: 'getAll'},
            {type: 'get', rule: '/:id', method: 'getById'},
            {type: 'delete', rule: '/:id', method: 'remove'},
            {type: 'post', rule: '/', method: 'create'},
            {type: 'patch', rule: '/:id', method: 'update'}
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
            {type: 'get', rule: '/', method: 'getAll'},
            {type: 'post', rule: '/', method: 'create'},
        ]
    },


    {
        controller: 'analytics',
        rules: [
            {type: 'get', rule: '/overview', method: 'overview'},
            {type: 'get', rule: '/analytics', method: 'analytics'}
        ]
    },

    {
        controller: 'position',
        rules: [
            {type: 'get', rule: '/:categoryId', method: 'getByCategoryId'},
            {type: 'delete', rule: '/:id', method: 'remove'},
            {type: 'post', rule: '/', method: 'create'},
            {type: 'patch', rule: '/:id', method: 'update'}
        ]
    },

    
    
    
]