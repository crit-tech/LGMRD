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
            "<ul><li>A pair of <strong>skeletons</strong> rises from a pile of crawling claws.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>A lost <strong>ghost</strong> wanders, surrounded by specters.</li><li>A <strong>bone naga</strong> rises from an obsidian sarcophagus to command a host of skeletons.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>A <strong>mummy lord</strong> entombed in a cold-iron sarcophagus is guarded by mummies and wights.</li><li>A pair of <strong>wraiths</strong> float above unholy urns surrounded by vengeful specters.</li></ul>",
        },
        {
          level: "11th to 16th",
          example_encounters:
            "<ul><li>A <strong>vampire</strong> in a gilded tomb is guarded by howling dire wolves and served by vampire spawn.</li></ul>",
        },
        {
          level: "17th to 20th",
          example_encounters:
            "<ul><li>A <strong>lich</strong> in an unhallowed laboratory is protected by loyal death knights and iron golems.</li></ul>",
        },
      ],
    },
  ],
  order: 2,
};
