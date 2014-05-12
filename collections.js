Items = new Meteor.Collection('items');

if (Meteor.isServer) {
    if (!Items.find().count()) {
        Items.insert({
            name: 'item1'
        });

        Items.insert({
            name: 'item2'
        });
    }

    Meteor.publish('items', function () {
        return Items.find({});
    });

    Meteor.publish('item', function (id) {
        return Items.find(id);
    });
}