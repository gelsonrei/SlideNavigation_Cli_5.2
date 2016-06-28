Ext.define('SlideNavigation.model.DicasFeed', {
    extend: 'Ext.data.Model',
    alias: 'model.dicasfeed',

    requires: [
        'Ext.data.Field',
        'Ext.data.association.HasMany'
    ],
    uses: [
        'SlideNavigation.model.DicasPost'
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
            model: 'SlideNavigation.model.DicasPost',
            name: 'dicasposts'
        }
    }
});