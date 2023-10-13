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
  id: "vampirespawn",
  title: "Vampire Spawn",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        {
          item: "Resistance to necrotic, bludgeoning, piercing, and slashing damage from nonmagical attacks.",
        },
        {
          item: "The creature has the vampire spawn's Spider Climb, Vampire Weaknesses, and Regeneration traits.",
        },
        {
          item: "Bite. Melee Weapon Attack: 4 + one-half the creature's CR to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire spawn creature, incapacitated, or restrained. Hit: piercing damage equal to 1d6 + one-half the creature's CR, plus necrotic damage equal to 1d6 per one- half the creature's CR (minimum 1d6). The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the templated creature regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
        },
        {
          item: "The creature can grapple a target instead of dealing damage with any of its attacks. If it makes multiple attacks, it can replace one of those attacks with the Bite action.",
        },
        {
          item: "If you want your vampire spawn creature to feel even more vampiric, give it the ability to cast the misty step, command, or hold person spells at will as a bonus action.",
        },
      ],
    },
  ],
  order: 6,
};
