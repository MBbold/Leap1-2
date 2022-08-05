const { time } = require("console");

exports.chat = (a) => `Hello ${a}, My name is NestBot`
exports.date = (a) => {
    const today = new Date();

    if(a==="date"){
        return today.toLocaleDateString();
    } else{
        return today.toLocaleTimeString();
    }
}
