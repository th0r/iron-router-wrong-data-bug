if (Meteor.isClient) {

    Template.items.created = function () {
        console.log('Template "items" created with data:');
        console.dir(this.data);
    };

    Template.items.helpers({
        itemsCount: function () {
            console.log('itemsCount helper: this.items === ', this.items);
            return this.items.length;
        }
    });

    Template.item.created = function () {
        console.log('Template "item" created with data:');
        console.dir(this.data);
    };

}