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
  id: "agoal",
  title: "A Goal",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Finally, think about what objective an encounter might have beyond simply taking out all the enemies. What might the characters do to "complete" the encounter? The following sorts of goals work well in a big set-piece encounter:',
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Stop a ritual before cultists summon a demon." },
        { item: "Recover an artifact and escape with it." },
        { item: "Kill the boss, but don't worry about their minions." },
        { item: "Activate a gateway and escape through it." },
        { item: "Recover a prisoner." },
        { item: "Steal secret plans." },
        { item: "Destroy a powerful monument." },
        { item: "Activate the four altars around a temple site." },
        { item: "Close a magical gateway and prevent the villain's escape." },
        {
          item: "Destroy a doomsday device before it blows up the multiverse.",
        },
      ],
    },
  ],
  order: 9,
};
