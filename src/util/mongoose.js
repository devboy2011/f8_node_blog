module.exports = {
    multipleMongooseToObject : function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject : function() {
        return mongoose ? mongoose.toOject() : mongoose;
    } 
}