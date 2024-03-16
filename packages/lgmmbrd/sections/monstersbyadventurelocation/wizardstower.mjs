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
            "<ul><li>A loyal <strong>imp</strong> commands a squad of guardian flying swords.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>A summoned <strong>succubus</strong> or <strong>incubus</strong> directs animated armor serving as guards.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>Apprentice <strong>mages</strong> command elementals and flesh golems.</li><li>An important chamber is guarded by two <strong>flameskulls</strong> and a number of helmed horrors.</li></ul>",
        },
        {
          level: "11th to 16th",
          example_encounters:
            "<ul><li>An impatient <strong>archmage</strong> is protected by two stone golems in an arcane laboratory.</li></ul>",
        },
        {
          level: "17th to 20th",
          example_encounters:
            "<ul><li>A <strong>lich</strong> studies the multiverse while protected by bound balors and iron golems.</li></ul>",
        },
      ],
    },
  ],
  order: 5,
};
