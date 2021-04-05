
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js")

module.exports = {
name: "anime",
  category: "info",
  aliases: ['kitsu', 'animeinfo'],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    
    
    
    if(!args.length) {
      return message.channel.send("Please enter the name of the anime")
    }


      let msg = await message.channel.send("Fetching Informations...")
    

    try {

    let body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)
    body = await body.json()

  
     
    
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.canonicalTitle)
        .setColor("RANDOM")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Evaluations", body.data[0].attributes.averageRating)
        .addField("Total episodes", body.data[0].attributes.episodeCount)
        .addField("Popularity", body.data[0].attributes.popularityRank)
        .addField("Show Type", body.data[0].attributes.showType)
        .addField("Status", body.data[0].attributes.status)
        
        
        message.channel.send(embed)
        msg.delete();
          

      } catch (err) {
        msg.delete();   
     
         return message.channel.send("Sorry, I didn't find the anime....");
       }                              
    
  }

}