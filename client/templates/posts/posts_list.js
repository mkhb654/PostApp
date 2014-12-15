/**
 * Created by mkaleem on 12/15/14.
 */

Template.postsList.helpers({
    posts: function(){
        //find return a cursor which is a reactive data source.  when we want to log it we use fetch on that cursor to transform it int oa n array
        return Posts.find();
    }
});