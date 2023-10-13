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
  id: "wight",
  title: "Wight",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        {
          item: "Resistance to necrotic and poison damage, and to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't silvered.",
        },
        { item: "Immunity to exhaustion and the poisoned condition." },
        {
          item: "Life Drain. When this creature hits with a melee attack using a natural weapon, the attack deals necrotic damage equal to 1d6 + one-half the creature's challenge rating, and the target must succeed on a Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
        },
      ],
    },
  ],
  order: 4,
};
