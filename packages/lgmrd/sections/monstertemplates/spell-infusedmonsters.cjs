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
  id: "spell-infusedmonsters",
  title: "Spell-Infused Monsters",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Some monsters can innately cast magical spells. Spell-infused monsters typically have a spell attack bonus of 3 + one-half the monster's challenge rating, and a spell save DC of 12 + one-half the monster's challenge rating (rounded down in both cases).\n\nSpell-infused creatures do not require components to cast their spells. They typically use each of their spells once, recovering the ability to do so when they finish a long rest. Roll for or choose from the table to determine which spells a creature can use. Spells that deal high damage can affect a creature's challenge rating.",
    },
    {
      type: "table",
      order: 1,
      headers: { d20: "d20", spell: "Spell" },
      data: [
        { d20: "1", spell: "Burning hands" },
        { d20: "2", spell: "Magic missile" },
        { d20: "3", spell: "Disguise self" },
        { d20: "4", spell: "Fog cloud" },
        { d20: "5", spell: "Shield" },
        { d20: "6", spell: "Inflict wounds" },
        { d20: "7", spell: "Faerie fire" },
        { d20: "8", spell: "Thunderwave" },
        { d20: "9", spell: "Blur" },
        { d20: "10", spell: "Darkness" },
        { d20: "11", spell: "Invisibility" },
        { d20: "12", spell: "Misty step" },
        { d20: "13", spell: "Scorching ray" },
        { d20: "14", spell: "Shatter" },
        { d20: "15", spell: "Spirit guardians" },
        { d20: "16", spell: "Dispel magic" },
        { d20: "17", spell: "Fly" },
        { d20: "18", spell: "Gaseous form" },
        { d20: "19", spell: "Lightning bolt" },
        { d20: "20", spell: "Fireball" },
      ],
    },
  ],
  order: 4,
};
