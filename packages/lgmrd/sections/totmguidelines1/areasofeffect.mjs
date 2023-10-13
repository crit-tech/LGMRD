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
  id: "areasofeffect",
  title: "Areas of Effect",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The following guidelines offer a rough baseline for determining the number of targets that fall within an area of effect. The circumstances of a battle can increase or decrease this number. For example, for larger monsters or monsters that are more spread out, an area of effect might target only half the normal number of creatures. For smaller monsters or monsters that are packed close together, an area of effect might include up to double the normal number of targets.\n\nAbilities like the evoker's Sculpt Spells feature can increase the number of affected enemies, usually by one or two. Likewise, an area of effect that targets both the characters and their enemies might affect more total targets — including an effect created by a character or monster willing to put allies in harm's way. If a spellcaster character wishes to place allies within an area of effect, you and the players should negotiate this before the spell is cast.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Tiny Area: 1 or 2 creatures (cloud of daggers)" },
        { item: "Small Area: 2 creatures (burning hands, thunderwave)" },
        { item: "Large Area: 4 creatures (cone of cold, fireball)" },
        { item: "Huge Area: Everyone (circle of death, earthquake)" },
        { item: "Short Line: 2 creatures (wall of fire)" },
        { item: "Long Line: 3 creatures (blade barrier, lightning bolt)" },
      ],
    },
  ],
  order: 4,
};
