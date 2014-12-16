/**
 * Created by mkaleem on 12/15/14.
 */
Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });

        if (Meteor.isServer) {
            postAttributes.title += "(Server)";
            Meteor.sleepForMs(5000);
        }else {
            postAttributes.title += "(client)";
        }






//this helps so we do not repost the same article as before. We're searching our database for any posts with the same URL. If any are found, we return that post's _id along with a postExists: true flag to let the client know about this special situation.

       // And since we're triggering a return call, the method stops at that point without executing the insert statement, thus elegantly preventing any duplicates.

        //All that's left is to use this new postExists information in our client-side event helper to show a warning message:
        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});
