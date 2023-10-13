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
  id: "adjudicatingareasofeffect",
  title: "Adjudicating Areas of Effect",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Adjudicate the number of creatures caught up in an area of effect based on the circumstances, but leaning toward more creatures rather than fewer. You can use the following as a baseline for the number of tightly packed creatures in a horde that are affected in a given area:",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Tiny Area (5-foot radius): Two creatures" },
        { item: "Small Area (10- to 15-foot radius): Four creatures" },
        { item: "Large Area (20-foot radius): Sixteen creatures" },
        {
          item: "Huge Area (30-foot radius or more): Thirty-two or more creatures",
        },
        { item: "Short Line (60 feet): Six creatures" },
        { item: "Long Line (120 feet): Eight creatures" },
      ],
    },
  ],
  order: 3,
};
