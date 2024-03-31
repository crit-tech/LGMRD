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

module.exports = {
  id: "monsterencounter",
  title: "Monster Encounter",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Roll for a random monster on the Monster table in the "[Random Dungeon Monsters](33-randomdungeonmonsters.md)" section, selecting a dungeon level equal to your character level.\n\nAssume the monster starts 25 feet away from you. Roll for initiative, with the monster using a static initiative score of 10 + the monster\'s Dexterity bonus. Adjudicate combat as you desire, assuming the monster acts as they would given their fiction.',
    },
  ],
  order: 3,
};
