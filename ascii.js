const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async run (client, message, args){
        if(!args[0]) return message.channel.send('Please enter the text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Error!');
                console.dir(err);
            }

            message.channel.send('```' + data + '```')
        })
    }
}
