Ext.define('SlideNavigation.model.VideoPost', {
    extend: 'Ext.data.Model',
    alias: 'model.videopost',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'title'
            },
            {
                name: 'author'
            },
            {
                name: 'link'
            },
            {
                mapping: 'content',
                name: 'story'
            },
            {
                name: 'description'
            },
            {
                mapping: 'publishedDate',
                name: 'date',
                type: 'date'
            }
        ]
    }
});