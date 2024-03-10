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
  id: "abyssalkeep",
  title: "Abyssal Keep",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "2nd to 4th",
          example_encounters:
            "* A night hag and their pet quasit schemes within a chamber guarded by hell hounds.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "A summoning circle disgorges a barlgura and a gang of dretches. |\n| 5th to 10th  | - A glabrezu commands from a throne flanked by chasmes.                                                                                                   |\n| 11th to 16th | * A marilith, their cambion advisor, and a number of hezrou servants guard a planar gateway.                                                              |\n| 17th to 20th | - A balor, a servile archmage, and a squad of glabrezu soldiers guard an artifact.                                                                        |",
        },
      ],
    },
  ],
  order: 7,
};
