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
  id: "sunkengrotto",
  title: "Sunken Grotto",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "<ul><li>A <strong>lizardfolk</strong> hunter is teaching their trained giant crabs how to hunt.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>A <strong>sea hag</strong> commands loyal kuo-toa to set up an effigy to a fictitious god.</li><li>A <strong>lizard king</strong> with a lizardfolk shaman advisor commands a clan of lizardfolk from a coral throne.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>An <strong>aboleth</strong> in a swirling pool is guarded by chuuls and worshiped by enthralled veterans.</li><li>A <strong>sahuagin baron</strong> watches a pack of sahuagin fight water weirds.</li><li>A corrupt <strong>sahuagin priestess</strong> feeds sacrificial victims to giant crocodiles.</li></ul>",
        },
        {
          level: "11th to 16th",
          example_encounters:
            "<ul><li>A <strong>kraken</strong> rules a deep-sea trench, surrounded by reverent water elementals.</li></ul>",
        },
      ],
    },
  ],
  order: 12,
};
