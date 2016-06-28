Ext.define('SlideNavigation.model.VideoFeed', {
    extend: 'Ext.data.Model',
    alias: 'model.feed',

    requires: [
        'Ext.data.Field',
        'Ext.data.association.HasMany'
    ],
    uses: [
        'SlideNavigation.model.VideoPost'
    ],

    config: {
        fields: [
            {
                mapping: 'feedUrl',
                name: 'url'
            },
            {
                name: 'title'
            },
            {
                name: 'link'
            },
            {
                name: 'author'
            },
            {
                name: 'description'
            }
        ],
        hasMany: {
            associationKey: 'entries',
            model: 'SlideNavigation.model.VideoPost',
            name: 'videoposts'
        }
    }
});