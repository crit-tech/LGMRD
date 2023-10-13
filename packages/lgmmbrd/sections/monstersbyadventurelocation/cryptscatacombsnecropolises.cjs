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
  id: "cryptscatacombsnecropolises",
  title: "Crypts, Catacombs, Necropolises",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "*   A pair of skeletons rises from a pile of crawling claws.",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "*   A lost ghost wanders, surrounded by specters.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "A bone naga rises from an obsidian sarcophagus to command a host of skeletons.                                  |\n| 5th to 10th  | *   A mummy lord entombed in a cold-iron sarcophagus is guarded by mummies and wights.",
        },
        {
          item: "A pair of wraiths float above unholy urns surrounded by vengeful specters. |\n| 11th to 16th | *   A vampire in a gilded tomb is guarded by howling dire wolves and served by vampire spawn.                                                                             |\n| 17th to 20th | *   A lich in an unhallowed laboratory is protected by loyal death knights and iron golems.                                                                               |",
        },
      ],
    },
  ],
  order: 2,
};
