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
  id: "improvisedstatistics",
  title: "Improvised Statistics",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Whenever you need to improvise Armor Class, attack modifiers, saving throw DCs, or other combat statistics for a creature, trap, object, or obstacle, use the following guidelines based on its challenge rating:\n\nWhen improvising statistics for traps and other objects that deal damage and can be attacked to destroy them, estimate the object's CR by comparing it to various creatures that produce the same sorts of effects in combat.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "AC = 12 + 1/2 CR" },
        { item: "DC = 12 + 1/2 CR" },
        { item: "Attack Bonus = 3 + 1/2 CR" },
        { item: "Damage = 7 × CR (or 2d6 per CR)" },
        { item: "Saving Throw with Proficiency = 3 + 1/2 CR" },
        { item: "Hit Points = 20 × CR" },
      ],
    },
  ],
  order: 2,
};
