/*
 * This work includes material taken from The Lazy GM's Resource Document by 
 * Michael E. Shea of SlyFlourish.com (https://www.slyflourish.com) and vailable at 
 * https://slyflourish.com/lazy_gm_resource_document.html. The Lazy GM's Resource 
 * Document is licensed under the Creative Commons Attribution 4.0 International 
 * License available at https://creativecommons.org/licenses/by/4.0/legalcode.

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

module.exports = {
  id: "poolingdamage",
  title: "Pooling Damage",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Pooling damage means that instead of tracking the damage dealt to individual monsters, you track damage dealt to the horde as a whole. Add up the damage of each attack, regardless of which monster in the horde is hit. Then every time the total of damage taken is higher than the hit points of a single monster in the horde, remove the last monster hit and reset the damage dealt to zero.\n\nIf enough damage is dealt with a single attack to kill multiple monsters, remove that number of monsters, subtracting their hit points from the damage dealt until there isn't enough damage remaining to kill another monster.\n\nTo make this math even easier, you can round each monster's hit points to the nearest 5 or 10.\n\nIf the horde is hit by a damage-dealing area effect (including spells), remove any creatures that took damage equal to or greater than their hit points after determining their saving throw results. If the damage isn't enough to kill a single monster, tally up the total damage done and remove monsters one at a time, subtracting their hit points from the damage until all damage is accounted for.\n\nFor even easier adjudication, you can simply remove any monsters that fail their saving throws, without worrying about their hit points.",
    },
  ],
  order: 0,
};
