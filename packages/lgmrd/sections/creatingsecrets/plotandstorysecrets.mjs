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
  id: "plotandstorysecrets",
  title: "Plot and Story Secrets",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Use plot and story secrets to teach characters about the larger events going on in the world, and to move the characters forward in the story of your campaign.\n\nCharacters might learn these secrets from quest-giving NPCs, notes found on defeated foes, dreams or portents from the gods, NPCs fleeing a disaster, arcane feedback from an object, or psychic projections.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item_num: 1, item: "What villainous event will soon come to pass?" },
        { item_num: 2, item: "What disaster is about to befall the land?" },
        { item_num: 3, item: "What royal figure was just assassinated?" },
        { item_num: 4, item: "What dungeon entrance just became revealed?" },
        { item_num: 5, item: "What monsters recently appeared in the realm?" },
        { item_num: 6, item: "What armies just invaded the realm?" },
        { item_num: 7, item: "What dark sign or portent just appeared?" },
        {
          item_num: 8,
          item: "What natural disaster has recently struck the area?",
        },
        {
          item_num: 9,
          item: "What unnatural being has appeared in the world?",
        },
        {
          item_num: 10,
          item: "What unusual creature was seen walking the wilds?",
        },
      ],
    },
  ],
  order: 3,
};
