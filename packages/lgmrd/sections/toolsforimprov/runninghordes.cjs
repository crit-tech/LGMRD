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
  id: "runninghordes",
  title: "Running Hordes",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        'When running large numbers of creatures, instead of rolling independent attack rolls or saving throws, assume that one-quarter of those rolls succeed. Increase or decrease that number depending on the situation (for example, if many creatures in the horde have advantage or disadvantage). Additionally, instead of tracking individual hit points for a horde, you can tally the damage done to the entire horde when any of its creatures are hit. Every time the tally becomes equal to or higher than the hit points of any individual creature in the horde, remove a creature from the horde and reset the tally. Round monster hit points to the nearest 5 or 10 to make things easier. A more detailed version of these guidelines can be found in "[Running Hordes](23-runninghordes.md)" later in this document.',
    },
  ],
  order: 5,
};
