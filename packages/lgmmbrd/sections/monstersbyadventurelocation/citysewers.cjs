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
  id: "citysewers",
  title: "City Sewers",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "<ul><li>A wandering <strong>zombie</strong> is covered by a swarm of rats.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>An erudite <strong>ghast</strong> weaves fantastic tales to their ravenous ghoul followers.</li><li>A <strong>spy</strong> is guarded by unscrupulous bandits while awaiting the arrival of a contact.</li><li>An <strong>otyugh</strong> luxuriates in a watery pit, surrounded by concealed gray oozes.</li><li><strong>Wererats</strong> try to be intimidating by threatening to feed prisoners to their giant rat pets.</li></ul>",
        },
      ],
    },
  ],
  order: 3,
};
