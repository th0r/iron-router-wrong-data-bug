Router.configure({

    layoutTemplate: 'mainLayout',
    loadingTemplate: 'loading',
    onBeforeAction: 'loading'

});

Router.map(function () {

    this.route('items', {
        path: '/',
        waitOn: function () {
            return [
                Meteor.subscribe('items')
            ];
        },
        data: function () {
            return {
                items: Items.find({}).fetch()
            }
        }
    });

    this.route('item', {
        // Using different layout!
        layoutTemplate: 'itemLayout',
        path: '/item/:_id',
        waitOn: function () {
            return [
                // Same subscription with different layout === bug
                Meteor.subscribe('items')
                // Different subscription with different layout === no bug
                // Meteor.subscribe('item', this.params._id)
            ];
        },
        data: function () {
            return Items.findOne(this.params._id);
        }
    });

});