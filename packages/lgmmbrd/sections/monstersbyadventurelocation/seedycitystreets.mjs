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
  id: "seedycitystreets",
  title: "Seedy City Streets",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "* A giant rat and the swarm of rats that travels with them are feeding on a dead body.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "A thug and a pack of bandit toadies are waiting for someone to rob.                                                                                                                   |\n| 2nd to 4th  | - A spy assisted by thugs has been hired to steal something from the characters.",
        },
      ],
    },
    {
      type: "table",
      order: 2,
      data: [
        {
          item: "A bandit captain with berserker bodyguards and bandit followers is easily insulted.",
        },
        {
          item: "A cult fanatic leads cultists who have summoned ravenous dretches into the world.                 |\n| 5th to 10th | * A mage commanding veterans is seeking something the characters seek as well.",
        },
      ],
    },
    {
      type: "table",
      order: 3,
      data: [
        {
          item: "A bandit captain protected by hired gladiators and veterans seeks the characters with an offer they can't refuse.",
        },
        {
          item: "A careful assassin backed up by spies and thugs hunts the characters. |",
        },
      ],
    },
  ],
  order: 4,
};
