/*
 * This work includes material taken from the Lazy GM's 5e Monster Builder Resource 
 * Document 
 * (https://slyflourish.com/lazy_5e_monster_building_resource_document.html) 
 * written by Teos Abadía of Alphastream.org (https://alphastream.org/), Scott 
 * Fitzgerald Gray of Insaneangel.com (https://insaneangel.com/), and Michael E. 
 * Shea of SlyFlourish.com (https://slyflourish.com/), available under a Creative 
 * Commons Attribution 4.0 International License 
 * (http://creativecommons.org/licenses/by/4.0/).

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

module.exports = {
  id: "darkforestsandfetidswamps",
  title: "Dark Forests and Fetid Swamps",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "*   An elf cultist hunts prey with bloodthirsty wolves.",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "*   Two ettercaps and their giant spiders stalk adventurers.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "An ettin warlord commands a host of orc mercenaries." },
        {
          item: "A green hag lurks in an old hut with a pet giant toad, and is guarded by loyal bullywugs.",
        },
        {
          item: "A werewolf prowls the shadows with their dire wolf companions. |\n| 5th to 10th  | *   An orc war chief commands a force of ettin and orc scouts based in a ruined keep.                                                                                                                                                                                                              |\n| 11th to 16th | *   An adult black dragon commands a host of trolls made loyal through fear.",
        },
        {
          item: "An adult green dragon lurks in a dead forest, protected by shambling mounds.                                                                                                                                  |\n| 17th to 20th | *   An ancient black dragon dwells in a sunken bog filled with giant crocodiles.",
        },
        {
          item: "An ancient green dragon rules from an ancient wooden throne guarded by loyal treants.                                                                                                                     |",
        },
      ],
    },
  ],
  order: 8,
};
