var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/fruits";

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to " + url);
    var collection = db.db("fruits").collection("apples");
    var doc1 = { name: "red apples", color: "red" };
    var doc2 = { name: "green apples", color: "green" };

    //To Insert into db
    collection.insert([doc1, doc2], function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log("%d docs inserted", res.insertedCount);
      }
      //   db.close();
    });

    //To find from db
    collection.find().toArray(function (err, res) {
      if (err) {
        console.log(err);
      } else if (res.length) {
        console.log(res);
      } else {
        console.log("No match found");
      }
      //   db.close();
    });

    //To update a document
    collection.update(
      { name: "red apples" },
      { $set: { color: "blue" } },
      function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log("Update Succesful ");
        }
        // db.close();
      }
    );

    //To remove a collection
    collection.remove({ name: "red apples" }, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log("%s", res);
      }
      db.close();
    });
  }
  //   MongoClient.connect(url, function (err, db) {
  //     db.db("fruits").dropDatabase(function (err, res) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log("Database dropped successful");
  //         db.close();
  //       }
  //     });
  //   });
});
