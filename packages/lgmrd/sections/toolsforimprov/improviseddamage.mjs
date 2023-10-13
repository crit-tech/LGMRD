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
  id: "improviseddamage",
  title: "Improvised Damage",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Decide on a challenge rating (CR) for the source of the damage, from CR 1 (low challenge) to CR 20 (very high challenge). Then roll a number of damage dice of a particular kind, as follows:\n\nThis challenge rating can be thought of as roughly equivalent to the average level of a group of characters. However, don't automatically choose a challenge rating based on the level of the characters. Rather, the level of the challenge might be higher or lower than the characters, depending on the situation.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Single-Target Damage: 7 × CR (or 2d6 per CR)" },
        { item: "Multiple-Target Damage: 3 × CR (or 1d6 per CR)" },
      ],
    },
  ],
  order: 1,
};
