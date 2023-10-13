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
  id: "potionsofhealing",
  title: "Potions of Healing",
  content: [
    {
      type: "table",
      order: 0,
      headers: {
        d20: "d20",
        potion_of: "Potion of",
        rarity: "Rarity",
        hp_regained: "HP Regained",
      },
      data: [
        {
          d20: "1 - 12",
          potion_of: "Healing",
          rarity: "Common",
          hp_regained: "2d4 + 2",
        },
        {
          d20: "13 - 16",
          potion_of: "Greater healing",
          rarity: "Uncommon",
          hp_regained: "4d4 + 4",
        },
        {
          d20: "17 - 19",
          potion_of: "Superior healing",
          rarity: "Rare",
          hp_regained: "8d4 + 8",
        },
        {
          d20: "20",
          potion_of: "Supreme healing",
          rarity: "Very rare",
          hp_regained: "10d4 + 20",
        },
      ],
    },
  ],
  order: 6,
};
