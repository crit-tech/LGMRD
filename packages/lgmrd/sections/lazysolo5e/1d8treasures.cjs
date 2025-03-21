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
  id: "1d8treasures",
  title: "1d8 Treasures",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        { item_num: 1, item: "No treasure" },
        { item_num: 2, item: "No treasure" },
        { item_num: 3, item: "3d12 gp" },
        { item_num: 4, item: "3d12 gp" },
        { item_num: 5, item: "Potion of healing" },
        { item_num: 6, item: "Potion of healing" },
        { item_num: 7, item: "Consumable item" },
        { item_num: 8, item: "Permanent item" },
      ],
    },
    {
      type: "paragraph",
      order: 0,
      markdown:
        'For consumable and permanent items, roll on the tables in the "[Treasure Generator](26-treasuregenerator.md)" section or a random treasure table of your choice. You can replace any consumable magic item with a *potion of healing*. You can replace any permanent magic item with a *+1 weapon* of your choice.',
    },
  ],
  order: 6,
};
