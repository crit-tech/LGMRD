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

export default {
  id: "hellishcitadel",
  title: "Hellish Citadel",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>A <strong>bearded devil</strong> draws lemures through a portal connected to the river Styx.</li><li>A <strong>barbed devil</strong> and a host of imps keep watch on enemy forces.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>An armored <strong>erinyes</strong> commanding a host of spined devils prepares for war.</li><li>A <strong>horned devil</strong> leading bearded devil soldiers guards an oracular sphere.</li></ul>",
        },
        {
          level: "11th to 16th",
          example_encounters:
            "<ul><li><strong>Ice devil</strong> wardens and bone devil guards protect a valuable prisoner.</li></ul>",
        },
        {
          level: "17th to 20th",
          example_encounters:
            "<ul><li><strong>Pit fiend</strong> commanders and horned devil lieutenants use scrying crystals to get the drop on the characters.</li></ul>",
        },
      ],
    },
  ],
  order: 9,
};
