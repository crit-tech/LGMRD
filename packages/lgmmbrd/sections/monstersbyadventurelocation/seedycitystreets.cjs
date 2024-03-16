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
            "<ul><li>A <strong>giant rat</strong> and the swarm of rats that travels with them are feeding on a dead body.</li><li>A <strong>thug</strong> and a pack of bandit toadies are waiting for someone to rob.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>A <strong>spy</strong> assisted by thugs has been hired to steal something from the characters.</li><li>A <strong>bandit captain</strong> with berserker bodyguards and bandit followers is easily insulted.</li><li>A <strong>cult fanatic</strong> leads cultists who have summoned ravenous dretches into the world.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>A <strong>mage</strong> commanding veterans is seeking something the characters seek as well.</li><li>A <strong>bandit captain</strong> protected by hired gladiators and veterans seeks the characters with an offer they can't refuse.</li><li>A careful <strong>assassin</strong> backed up by spies and thugs hunts the characters.</li></ul>",
        },
      ],
    },
  ],
  order: 4,
};
