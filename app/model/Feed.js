Ext.define('SlideNavigation.model.Feed', {
    extend: 'Ext.data.Model',
    alias: 'model.feed',

    requires: [
        'Ext.data.Field',
        'Ext.data.association.HasMany'
    ],
    uses: [
        'SlideNavigation.model.Post'
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
            model: 'SlideNavigation.model.Post',
            name: 'posts'
        }
    }
});