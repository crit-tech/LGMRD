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
  id: "scalingforhigherlevels",
  title: "Scaling for Higher Levels",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "As characters reach 11th level and higher, the deadly encounter benchmark becomes less useful for accurately representing a deadly encounter. Depending on the capabilities of those higher-level characters, monsters might pose even less of a threat than their challenge rating denotes. As such, you can further adjust the deadly encounter benchmark to account for this power with the following optional guideline:\n\nAt 11th level and higher, an encounter might be deadly if the total of all the monsters' challenge ratings is greater than three quarters of the total of all the characters' levels, or if it is equal to the total of their levels if the characters are 17th level or higher.\n\nThis sets up encounters of a much greater challenge than the baseline benchmark, but it might work more accurately for higher-powered characters.\n\nThe following table summarizes the Lazy Encounter Benchmark for three, four, five, or six 1st to 20th level characters. It includes the total monster CR for a potentially deadly encounter and the maximum CR for any single creature in a battle. At 11th level and above, it includes the lower and higher benchmarks described above.",
    },
    {
      type: "table",
      order: 1,
      headers: {
        lazy_encounter_benchmark_for_potentially_deadly_encounters:
          "Lazy Encounter Benchmark for Potentially Deadly Encounters",
        item: "",
      },
      data: [
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters:
            "Char Lvl / Num Chars",
          item: "Max Single Monster CR",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "1",
          item: "0.5",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "2",
          item: "2",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "3",
          item: "3",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "4",
          item: "4",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "5",
          item: "8",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "6",
          item: "9",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "7",
          item: "11",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "8",
          item: "12",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "9",
          item: "14",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "10",
          item: "15",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "11",
          item: "17",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "12",
          item: "18",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "13",
          item: "20",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "14",
          item: "21",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "15",
          item: "23",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "16",
          item: "24",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "17",
          item: "26",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "18",
          item: "27",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "19",
          item: "29",
        },
        {
          lazy_encounter_benchmark_for_potentially_deadly_encounters: "20",
          item: "30",
        },
      ],
    },
  ],
  order: 4,
};
