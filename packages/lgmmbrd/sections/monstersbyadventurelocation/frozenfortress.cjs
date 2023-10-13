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
  id: "frozenfortress",
  title: "Frozen Fortress",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "5th to 10th",
          example_encounters:
            "*   Frost giant hunters enjoy the sport of their remorhaz pet stalking commoners.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "The bone-cluttered cave of an abominable yeti is guarded by winter wolves. |\n| 11th to 16th | *   An adult white dragon is served by loyal frost giants.                                                                                                           |\n| 17th to 20th | *   An ancient white dragon lairing atop an inaccessible peak is worshiped by generations of abominable yetis.                                                       |",
        },
      ],
    },
  ],
  order: 10,
};
