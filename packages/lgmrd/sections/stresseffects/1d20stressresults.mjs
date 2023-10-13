/*
 * This work includes material taken from The Lazy GM's Resource Document by 
 * Michael E. Shea of SlyFlourish.com (https://www.slyflourish.com) and vailable at 
 * https://slyflourish.com/lazy_gm_resource_document.html. The Lazy GM's Resource 
 * Document is licensed under the Creative Commons Attribution 4.0 International 
 * License available at https://creativecommons.org/licenses/by/4.0/legalcode.

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

export default {
  id: "1d20stressresults",
  title: "1d20 Stress Results",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        {
          item_num: 1,
          item: "You slip into a mental vision of a restful place.",
        },
        { item_num: 2, item: "You whisper in a tongue no mortal understands." },
        { item_num: 3, item: "Blood flows from your eyes." },
        { item_num: 4, item: "You collapse as you lose all strength." },
        { item_num: 5, item: "A screaming whine fills your hearing." },
        { item_num: 6, item: "Your heart seems to stop in your chest." },
        { item_num: 7, item: "The faces of your friends hideously contort." },
        { item_num: 8, item: "Your heartbeat hammers in your ears." },
        { item_num: 9, item: "You hear strange, discordant music." },
        { item_num: 10, item: "You fall asleep and dream of darkness." },
        { item_num: 11, item: "A terrible memory of your past comes to mind." },
        { item_num: 12, item: "Physical pain and burning wracks your body." },
        { item_num: 13, item: "You find yourself unable to move or speak." },
        { item_num: 14, item: "Unbound shadows seem to crawl toward you." },
        {
          item_num: 15,
          item: "You hear the echoing sound of children crying.",
        },
        { item_num: 16, item: "You lose control of your bodily functions." },
        {
          item_num: 17,
          item: "Your vision fills with twisted geometric shapes.",
        },
        {
          item_num: 18,
          item: "You hear the whispers of an otherworldly being.",
        },
        { item_num: 19, item: "You scream as blood flows from your mouth." },
        {
          item_num: 20,
          item: "You feel as though all your bones begin to crack.",
        },
      ],
    },
    {
      type: "paragraph",
      order: 0,
      markdown:
        "You determine how long the effect lasts and can add mechanical hindrances inspired by the effect at your discretion. Alternatively, you can add the following mechanical effect:\n\nOn a failed save, the character becomes stunned for 1 minute. The character can repeat the saving throw at the end of each of their turns and whenever they take damage, ending the effect on themself on a success. If the character's saving throw is successful or if the effect ends for it, the character is immune to this effect for the next 24 hours. A character can also choose to break this effect at the start of their turn by taking 4 (1d8) psychic damage per two character levels. A *lesser restoration* or equivalent effect likewise negates a stress effect.\n\n(You can also apply this mechanism for breaking an effect by taking psychic damage to characters who are frightened, stunned, or incapacitated.)",
    },
  ],
  order: 2,
};
