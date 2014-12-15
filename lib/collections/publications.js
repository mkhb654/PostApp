/**
 * Created by mkaleem on 12/15/14.
 */
Meteor.publish('posts' ,function(){
    return Posts.find();


});