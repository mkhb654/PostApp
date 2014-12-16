/**
 * Created by mkaleem on 12/16/14.
 */
//local (client-only) collections
Errors = new Mongo.Collection(null);

throwError = function(message){
    Errors.insert({message: message});
};
