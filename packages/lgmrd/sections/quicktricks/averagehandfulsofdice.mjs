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
  id: "averagehandfulsofdice",
  title: "Average Handfuls of Dice",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "You can reduce the size of huge handfuls of dice by removing pairs of dice from the pile and adding their average as a static number. For every two dice you remove, just add the maximum value on a single die plus one to the static bonus. So 2d4 becomes 5, 2d6 becomes 7, 2d8 becomes 9, 2d10 becomes 11, and 2d12 becomes 13. This way, rolling 8d6 can instead become 2d6 + 21 or 8d8 can become 2d8 + 27.",
    },
  ],
  order: 2,
};
