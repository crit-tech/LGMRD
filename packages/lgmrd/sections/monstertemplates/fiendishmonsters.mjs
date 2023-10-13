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
  id: "fiendishmonsters",
  title: "Fiendish Monsters",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Infernal or abyssal variants of existing monsters are endlessly spawned across the Lower Planes. This template can turn any monster into a fiendish variant:",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "The monster's type becomes fiend." },
        {
          item: "The monster has advantage on saving throws against spells and other magical effects.",
        },
        {
          item: "The monster has resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
        },
        { item: "The monster has resistance to cold and fire damage." },
        {
          item: "The monster has immunity to poison damage and the poisoned condition.",
        },
        { item: "The monster's weapon attacks are magical." },
        { item: "The monster has darkvision out to a range of 120 feet." },
        { item: "The monster's challenge rating increases by 1." },
      ],
    },
  ],
  order: 3,
};
