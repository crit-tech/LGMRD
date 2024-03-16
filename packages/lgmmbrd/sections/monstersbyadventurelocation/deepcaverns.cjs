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
  id: "deepcaverns",
  title: "Deep Caverns",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "<ul><li>A <strong>cockatrice</strong> pecks at a crumbling statue, while stirges linger above.</li><li>A <strong>giant bat</strong> surrounded by swarms of bats skulks in the shadows.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li><strong>Darkmantles</strong> and piercers lurk in pools of shadow.</li><li>A worg-riding <strong>goblin boss</strong> commands a squad of goblin hunters.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li><strong>Basilisks</strong> and cockatrices lair in a hall full of petrified adventurers.</li><li>A <strong>cloaker</strong> lurks above a pack of hook horrors disemboweling a dead bulette.</li><li><strong>Ropers</strong> and darkmantles hang above a waterfall, competing for prey.</li></ul>",
        },
      ],
    },
  ],
  order: 11,
};
