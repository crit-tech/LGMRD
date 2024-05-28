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

export default {
  id: "potentialdeadliness",
  title: "Potential Deadliness",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Assuming that your chosen monsters aren't dealing damage that easily overwhelms the characters' hit points, you can usually not worry about an encounter's difficulty — unless the encounter is potentially deadly. You can gauge an encounter's potential deadliness with the following benchmark:\n\n**An encounter might be deadly if the total of all the monsters' challenge ratings is greater than one quarter of the total of all the characters' levels, or one half of their levels if the characters are 5th level or higher.**\n\nTo use this benchmark for characters of 1st through 4th level, add up the challenge ratings of all monsters in the encounter. Then add up the levels of all of the characters and divide that number by 4. If the challenge level summation is greater than the sum of character levels divided by 4, the encounter might be deadly. If the characters are above 5th level, use the same process but divide the total character levels by 2 instead of 4.\n\nEach time the characters gain a new level, calculate this deadly benchmark score and jot it down in your preparation notes so you have it on hand. If you find that the characters in your game often have an easy time with potentially deadly encounters, treat the characters as though they are one or more levels higher. This will raise the benchmark at which an encounter might become deadly, making the calculation more accurate.\n\nThis baseline assumes multiple monsters. A single monster may be deadly if it's challenge rating is equal to the average level of the characters or 1.5× the average level of the characters if they're above 5th level.",
    },
  ],
  order: 2,
};
