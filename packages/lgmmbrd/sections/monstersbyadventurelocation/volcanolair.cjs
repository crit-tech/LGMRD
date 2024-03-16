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
  id: "volcanolair",
  title: "Volcano Lair",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>A <strong>fire giant</strong> with pet hell hounds commands an azer to dig for them.</li><li>A trapped <strong>efreeti</strong> uses fire elementals to fight for freedom.</li></ul>",
        },
        {
          level: "11th to 16th",
          example_encounters:
            "<ul><li>An <strong>adult red dragon</strong> served by salamanders demands fealty from the characters.</li></ul>",
        },
        {
          level: "17th to 20th",
          example_encounters:
            "<ul><li>An <strong>ancient red dragon</strong> worshiped by fire giants awakens from slumber.</li></ul>",
        },
      ],
    },
  ],
  order: 6,
};
