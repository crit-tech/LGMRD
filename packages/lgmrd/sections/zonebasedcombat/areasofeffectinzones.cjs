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
  id: "areasofeffectinzones",
  title: "Areas of Effect in Zones",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Many spells and features have areas of effect. GMs can use the following guidelines to adjudicate which targets are hit by such effects. These guidelines break out general descriptions of the size of an area of effect, how many creatures are typically affected in that area using zone-based combat, and examples of common spells and class features that use that size:\n\nGMs can adjudicate and adjust these numbers based on the current situation. For example, an area containing a horde of monsters might double the potential number of monsters affected. Whatever the circumstances, though, a GM should always adjudicate in favor of the characters.",
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "Tiny Area: One or two creatures in the same zone (cloud of daggers)",
        },
        {
          item: "Small Area: Two or three creatures in the same zone (burning hands, thunderwave)",
        },
        {
          item: "Large Area: Four to six creatures in the same zone (cone of cold, fireball)",
        },
        {
          item: "Huge Area: Twelve creatures across two zones (circle of death, Turn Undead)",
        },
        {
          item: "Short Line: Two or three creatures in the same zone (wall of fire)",
        },
        {
          item: "Large Line: Two to four creatures across two zones (lightning bolt)",
        },
      ],
    },
  ],
  order: 1,
};
