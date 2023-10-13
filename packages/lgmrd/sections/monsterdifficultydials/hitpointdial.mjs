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
  id: "hitpointdial",
  title: '"Hit Point" Dial',
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Hit points given for monsters are the average of their Hit Dice. This means you can adjust hit points within the minimum and maximum of a monster's Hit Dice formula based on the individual story for that particular monster, the current pacing of the battle, or both.\n\nFor example, an average ogre has 59 hit points from 7d10 + 21 Hit Dice. This means a weak ogre might have as few as 28 hit points, while a particularly strong ogre might have 91. This lets you easily set up fights in which minion ogres might have fewer hit points while boss ogres have more. (As an even lazier rule of thumb, you can halve or double a monster's average hit points to give you a weaker or stronger version of that monster.)\n\nYou can turn this dial before a battle begins or even during the battle itself. If a battle drags, reduce the hit points of a monster to get it out of the fight earlier. If a battle feels like it will be over too quickly, increase the monster's hit points to make it hold up longer. Start with average hit points, and then turn the hit point dial one way or the other whenever doing so can make the game more fun.",
    },
  ],
  order: 0,
};
