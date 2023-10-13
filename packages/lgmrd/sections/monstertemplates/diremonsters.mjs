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
  id: "diremonsters",
  title: "Dire Monsters",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Dire monsters are particularly large and dangerous versions of typical monsters, and can be created using the following guidelines:",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "The monster's hit points are doubled." },
        { item: "The monster's size increases one category." },
        { item: "The monster gains a +2 bonus to attack rolls." },
        {
          item: "The monster can use one or more of its standard attacks multiple times on its attack action. Use your best judgment to choose which of the monster's attacks to use for multiple attacks.",
        },
        { item: "The monster's challenge rating increases by 2 or 3." },
      ],
    },
  ],
  order: 2,
};
