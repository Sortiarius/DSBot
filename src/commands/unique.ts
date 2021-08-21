import Discord from "discord.js";

const UniqueEmbed = new Discord.MessageEmbed()
  .setColor("2d2d2d")
  .addField(
    "**Unique Units**",
    "Certain units have a hidden behavior (buff) called \`Important Hero\`. Certain abilities (Dehaka's Devour, Energizer's Reclamation, and Feedback) are unable to target units with this behavior.\n\n **Unique Units**\n```Alarak\nApocalisk\nFenix Heroes\nGary and Super Gary\nKerrigan\nTychus Outlaws\nZagara```"
  );

const unique = (message: Discord.Message, args: any) => {
  message.channel.send(UniqueEmbed);
};

export default {
  name: "unique",
  description: "Displays information about sc2 time.",
  aliases: ["unique", "mapboss"],
  execute: unique,
};