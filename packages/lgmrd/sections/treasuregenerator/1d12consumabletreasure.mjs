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
  id: "1d12consumabletreasure",
  title: "1d12 Consumable Treasure",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        { item_num: 1, item: "Potion of healing" },
        { item_num: 2, item: "Potion of greater healing" },
        { item_num: 3, item: "Oil of slipperiness" },
        { item_num: 4, item: "Potion of animal friendship" },
        { item_num: 5, item: "Potion of climbing" },
        { item_num: 6, item: "Potion of growth" },
        { item_num: 7, item: "Potion of mind reading" },
        { item_num: 8, item: "Potion of poison" },
        { item_num: 9, item: "Potion of resistance" },
        { item_num: 10, item: "Potion of water breathing" },
        { item_num: 11, item: "Dust of disappearance" },
        { item_num: 12, item: "Dust of dryness" },
      ],
    },
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Rather than standard consumable items, you can also award powerful single-use magic items generated using the Spells table from the "Core Adventure Generator" included in this document. You can also use the Condition, Description, and Origin table in that section to give an item a unique flavor.',
    },
  ],
  order: 2,
};
