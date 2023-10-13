/*
 * This work includes material taken from the Lazy GM's 5e Monster Builder Resource 
 * Document 
 * (https://slyflourish.com/lazy_5e_monster_building_resource_document.html) 
 * written by Teos Abadía of Alphastream.org (https://alphastream.org/), Scott 
 * Fitzgerald Gray of Insaneangel.com (https://insaneangel.com/), and Michael E. 
 * Shea of SlyFlourish.com (https://slyflourish.com/), available under a Creative 
 * Commons Attribution 4.0 International License 
 * (http://creativecommons.org/licenses/by/4.0/).

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

export default {
  id: "otherlazymonstertricks",
  title: "Other Lazy Monster Tricks",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Once you\'re in the middle of an encounter, you can make use of a number of other quick tricks to make running monsters easier, with more flexibility and greater speed. Try any of the following options at your table, and make use of any trick that helps your game:\n\nInclude creatures designed to eat "save or suck" attacks such as *banishment* or *polymorph*.',
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "Use fixed initiative for monsters equal to 10 + each monster's Dexterity bonus. Even faster? Just have all monsters act on initiative count 12.",
        },
        {
          item: "Reduce hit points on the fly to allow monsters to drop or surrender more quickly, or increase a monster's number of attacks or damage if the characters are having too easy a time.",
        },
        {
          item: "Have foes flee or surrender when it makes sense to move the game forward.",
        },
        {
          item: "Have constructs and undead be destroyed when the creature controlling them dies.",
        },
        { item: "Run multiple waves of monsters for big battles." },
      ],
    },
  ],
  order: 3,
};
