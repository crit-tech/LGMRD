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
  id: "patronsandnpcs",
  title: "Patrons and NPCs",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Use these tables to generate a patron or NPC for your adventure, applying an NPC stat block to create villains, hirelings, rivals, or heralds.",
    },
    {
      type: "table",
      order: 1,
      headers: { d20: "d20", behavior: "Behavior", ancestry: "Ancestry" },
      data: [
        { d20: "1", behavior: "Enthusiastic", ancestry: "Human" },
        { d20: "2", behavior: "Flighty", ancestry: "Elf" },
        { d20: "3", behavior: "Shifty", ancestry: "Dwarf" },
        { d20: "4", behavior: "Optimistic", ancestry: "Halfling" },
        { d20: "5", behavior: "Paranoid", ancestry: "Orc" },
        { d20: "6", behavior: "Well spoken", ancestry: "Drow" },
        { d20: "7", behavior: "Superior", ancestry: "Tiefling" },
        { d20: "8", behavior: "Haughty", ancestry: "Dragonborn" },
        { d20: "9", behavior: "Pessimistic", ancestry: "Fey" },
        { d20: "10", behavior: "Suspicious", ancestry: "Goblin" },
        { d20: "11", behavior: "Worried", ancestry: "Construct" },
        { d20: "12", behavior: "Greedy", ancestry: "Celestial" },
        { d20: "13", behavior: "Brave", ancestry: "Ghost" },
        { d20: "14", behavior: "Stern", ancestry: "Wizard's familiar" },
        { d20: "15", behavior: "Sly", ancestry: "Talking animal" },
        { d20: "16", behavior: "Wise", ancestry: "Avian" },
        { d20: "17", behavior: "Reserved", ancestry: "Lizardfolk" },
        { d20: "18", behavior: "Cheery", ancestry: "Catfolk" },
        { d20: "19", behavior: "Opportunistic", ancestry: "Lycanthrope" },
        { d20: "20", behavior: "Soft spoken", ancestry: "Artifact" },
      ],
    },
  ],
  order: 0,
};
