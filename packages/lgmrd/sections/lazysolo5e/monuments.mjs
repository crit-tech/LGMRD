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
  id: "monuments",
  title: "Monuments",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Each monster encounter includes a helpful, neutral, or harmful monument. Generate monuments using the Locations, Monuments, and Items table, and the Condition, Description, and Origin table in the "[Core Adventure Generators](25-coreadventuregenerators.md)" section.\n\nRoll a d6 to determine the effect of the monument.\n\nHelpful monuments provide this benefit to your character. Harmful monuments provide this benefit to monsters. For neutral monuments, your character can roll a DC 12 Intelligence (Arcana or Religion) check. On a success, your character gains the benefit. On a failure, the monster gains the benefit.',
    },
    {
      type: "table",
      order: 1,
      data: [
        { item_num: 1, item: "+1 to AC" },
        { item_num: 2, item: "+1 to attacks and save DCs" },
        { item_num: 3, item: "+1 AC and saving throws" },
        {
          item_num: 4,
          item: "+1 temp hit point per character level (minimum 5)",
        },
        { item_num: 5, item: "+1d6 damage per five character levels" },
        { item_num: 6, item: "Advantage on attack rolls" },
      ],
    },
  ],
  order: 4,
};
