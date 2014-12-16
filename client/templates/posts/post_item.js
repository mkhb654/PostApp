/**
 * Created by mkaleem on 12/15/14.
 */
Template.postItem.helpers({
    ownPost: function () {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});