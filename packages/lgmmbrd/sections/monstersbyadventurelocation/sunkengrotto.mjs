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
            "*   A lizardfolk hunter is teaching their trained giant crabs how to hunt.",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "*   A sea hag commands loyal kuo-toa to set up an effigy to a fictitious god.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "A lizard king with a lizardfolk shaman advisor commands a clan of lizardfolk from a coral throne.                                                                  |\n| 5th to 10th  | *   An aboleth in a swirling pool is guarded by chuuls and worshiped by enthralled veterans.",
        },
        {
          item: "A sahuagin baron watches a pack of sahuagin fight water weirds.",
        },
        {
          item: "A corrupt sahuagin priestess feeds sacrificial victims to giant crocodiles. |\n| 11th to 16th | *   A kraken rules a deep-sea trench, surrounded by reverent water elementals.                                                                                                                                                                           |",
        },
      ],
    },
  ],
  order: 12,
};
