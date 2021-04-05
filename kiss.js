const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://49.media.tumblr.com/bbdd36b04d52c1972c198ac7e048681e/tumblr_myqs1bnxJ21rveihgo1_500.gif',
  'http://gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-10.gif',
  'https://66.media.tumblr.com/tumblr_m9g1iiF3ny1r6pdh0o1_500.gif',
  'https://i1.wp.com/www.intoxianime.com/wp-content/uploads/2017/02/KuzunoHonkai-Episode5-Omake-3.gif?resize=540%2C304',
  'https://media1.tenor.com/images/37633f0b8d39daf70a50f69293e303fc/tenor.gif?itemid=13344412',
  'https://gifimage.net/wp-content/uploads/2017/09/anime-french-kiss-gif-10.gif',
  'https://68.media.tumblr.com/e14ed420800e7756934aa9058f0e1c7f/tumblr_mvckmnkug91sw3d45o1_500.gif',
  'https://media.tenor.com/images/4b75a7e318cb515156bb7bfe5b3bbe6f/tenor.gif',
  'https://gifimage.net/wp-content/uploads/2017/09/anime-hug-kiss-gif-9.gif'



];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Please mention user!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('RED')
        .setDescription(`${message.author} Kissed ${user}`)
        .setImage(rand)
  await message.channel.send(embed);
}