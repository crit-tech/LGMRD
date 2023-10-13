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
  id: "undeadtemplates",
  title: "Undead Templates",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "All creatures that take on one of these templates gain the following universal changes:\n\nThen apply the traits and actions of any of the following specific templates.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "The creature's type becomes undead." },
        { item: "The creature has darkvision out to a range of 60 feet." },
        {
          item: "Any new trait of the creature's that requires a saving throw uses a DC of 12 + one-half the undead creature's challenge rating.",
        },
      ],
    },
  ],
  order: 0,
};
