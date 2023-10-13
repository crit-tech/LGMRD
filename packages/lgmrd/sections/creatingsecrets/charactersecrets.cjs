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
  id: "charactersecrets",
  title: "Character Secrets",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Use character secrets to tie the characters to the world around them. These sorts of secrets might be revealed by NPCs, old journals or letters, suddenly recalled memories, or prophetic dreams.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item_num: 1, item: "What family history might be revealed?" },
        { item_num: 2, item: "What ties the character to this location?" },
        { item_num: 3, item: "What ghost or spirit haunts the character?" },
        { item_num: 4, item: "What dreams fill the character's rest?" },
        { item_num: 5, item: "What parasite secretly infests the character?" },
        {
          item_num: 6,
          item: "Which family member is involved in the adventure?",
        },
        { item_num: 7, item: "How is the villain related to the character?" },
        {
          item_num: 8,
          item: "What NPC who the character thinks is dead still lives?",
        },
        {
          item_num: 9,
          item: "What ritual was the character blessed with as a child?",
        },
        {
          item_num: 10,
          item: "What previous event ties the character to the story?",
        },
      ],
    },
  ],
  order: 0,
};
