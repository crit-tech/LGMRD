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
  id: "damageseveritybylevel",
  title: "Damage Severity by Level",
  content: [
    {
      type: "table",
      order: 0,
      headers: {
        character_level: "Character Level",
        setback: "Setback",
        dangerous: "Dangerous",
        deadly: "Deadly",
      },
      data: [
        {
          character_level: "1st - 4th",
          setback: "5 (1d10)",
          dangerous: "11 (2d10)",
          deadly: "22 (4d10)",
        },
        {
          character_level: "5th - 10th",
          setback: "11 (2d10)",
          dangerous: "22 (4d10)",
          deadly: "55 (10d10)",
        },
        {
          character_level: "11-16th",
          setback: "22 (4d10)",
          dangerous: "55 (10d10)",
          deadly: "99 (18d10)",
        },
        {
          character_level: "17th - 20th",
          setback: "55 (10d10)",
          dangerous: "99 (18d10)",
          deadly: "132 (24d10)",
        },
      ],
    },
  ],
  order: 3,
};
