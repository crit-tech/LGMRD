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
  id: "wizardstower",
  title: "Wizard's Tower",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "*   A loyal imp commands a squad of guardian flying swords.",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "*   A summoned succubus or incubus directs animated armor serving as guards.",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "*   Apprentice mages command elementals and flesh golems.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "An important chamber is guarded by two flameskulls and a number of helmed horrors. |\n| 11th to 16th | *   An impatient archmage is protected by two stone golems in an arcane laboratory.                                                                  |\n| 17th to 20th | *   A lich studies the multiverse while protected by bound balors and iron golems.                                                                   |",
        },
      ],
    },
  ],
  order: 5,
};
