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
  id: "exploringthedungeon",
  title: "Exploring the Dungeon",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Each time you enter a chamber, roll to determine what you find there.\n\nEach time your roll comes up 4, 5, 6, or 7, indicated by "QP" below, your quest progresses one step. You might acquire a needed key or face a villain\'s lieutenant. You decide what type of progress you make.\n\nOn your fourth roll of quest progress, you reach the final challenge of the quest. If you succeed, you have completed the quest and gain a new level.',
    },
    {
      type: "table",
      order: 1,
      data: [
        { item_num: 1, item: "Trap or hazard" },
        { item_num: 2, item: "Trap or hazard" },
        { item_num: 3, item: "Monster and harmful monument" },
        { item_num: 4, item: "Monster and harmful monument (QP)" },
        { item_num: 5, item: "Monster and neutral monument (QP)" },
        { item_num: 6, item: "Monster and neutral monument (QP)" },
        { item_num: 7, item: "Monster and helpful monument (QP)" },
        { item_num: 8, item: "Monster and helpful monument" },
        { item_num: 9, item: "Healing font (restore 2d6 hit points)." },
        { item_num: 10, item: "Unguarded treasure" },
      ],
    },
  ],
  order: 1,
};
