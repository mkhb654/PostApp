/**
 * Created by mkaleem on 12/15/14.
 */
Router.configure({
    layoutTemplate: 'layout' ,
   //
    notFoundTemplate: 'notFound',
    //This helps when it stars to load it waits on the subscription
    waitOn: function() {return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
//this tell the router to match any post to the form posts/xyz where xyz can be anything.  2 what ever it find to put in xyz ins
//inside an id in the routers params array.
Router.route('/posts/:_id' , {
    name: 'postPage',
    data: function() {return Posts.findONe(this.params._id); }
});
    Router.route('/submit', {name: 'postSubmit'});

Router.onBeforeAction('dataNotFound' , {only: 'postPage'});