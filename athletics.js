//Example for modules

// function relay() {
//   console.log("This is a relay function");
// }

function longjump() {
  console.log("This is a longjump function");
}

//module.exports.relay = relay;

module.exports = {
  relay: function () {
    console.log("This is a relay function");
  },
};

module.exports.longjump = longjump;
