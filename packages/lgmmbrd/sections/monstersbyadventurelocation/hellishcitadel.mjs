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
            "* A bearded devil draws lemures through a portal connected to the river Styx.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "A barbed devil and a host of imps keep watch on enemy forces.        |\n| 5th to 10th  | - An armored erinyes commanding a host of spined devils prepares for war.",
        },
      ],
    },
    {
      type: "table",
      order: 2,
      data: [
        {
          item: "A horned devil leading bearded devil soldiers guards an oracular sphere. |\n| 11th to 16th | * Ice devil wardens and bone devil guards protect a valuable prisoner.                                                                                   |\n| 17th to 20th | - Pit fiend commanders and horned devil lieutenants use scrying crystals to get the drop on the characters.                                              |",
        },
      ],
    },
  ],
  order: 9,
};
