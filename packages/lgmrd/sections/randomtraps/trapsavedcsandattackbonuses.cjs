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
  id: "trapsavedcsandattackbonuses",
  title: "Trap Save DCs and Attack Bonuses",
  content: [
    {
      type: "table",
      order: 0,
      headers: {
        trap_danger: "Trap Danger",
        save_dc: "Save DC",
        attack_bonus: "Attack Bonus",
      },
      data: [
        {
          trap_danger: "Setback",
          save_dc: "10 - 11",
          attack_bonus: "+3 to +5",
        },
        {
          trap_danger: "Dangerous",
          save_dc: "12 - 15",
          attack_bonus: "+6 to +8",
        },
        {
          trap_danger: "Deadly",
          save_dc: "16 - 20",
          attack_bonus: "+9 to +12",
        },
      ],
    },
  ],
  order: 4,
};
