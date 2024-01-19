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

export default {
  id: "usingthebenchmark",
  title: "Using the Benchmark",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The primary calculation of the lazy encounter benchmark compares the challenge ratings of monsters with the levels of the characters in the following way:\n\n**An encounter might be deadly if the sum total of monster challenge ratings is greater than 1/4 of the sum total of character levels, for characters of 1st to 4th level; or greater than 1/2 of the sum total of character levels, for characters of 5th level or higher.**\n\nWhat exactly does \"deadly\" mean in this context? In a deadly encounter:\n\nFor example, imagine an encounter pitting five 4th-level characters against four ogres of CR 2. To see how dangerous this fight might be, add all the character levels together and divide by 4 (because they're lower than 5th level), giving a result of 20 ÷ 4 = 5. Now compare that result to the sum of monster challenge ratings, with four CR 2 ogres giving a total of 8. Because 8 is more than 5, this could be a potentially deadly encounter.\n\nAbove 4th level, you divide character levels by 2 instead of 4 because of the extra resources and synergies characters gain at 5th level and higher. Going back to the previous example, if the characters were 5th level instead of 4th, their total levels would be 25. The benchmark gives a result of 25 ÷ 2 = 12 (rounded down, as usual in the game). The four ogres still have a total CR of 8, and with 8 less than 12, these fifth-level characters aren't likely to find this a deadly fight.\n\nAs another example, consider six 8th-level characters facing three CR 11 horned devils. Dividing the total character levels of 48 by 2 gives a result of 24. Adding up the challenge ratings of the horned devils gives you 33. So with 33 much higher than 24, that's a potentially deadly fight.\n\nStill, even when a calculated benchmark suggests that an encounter might be too tough, that doesn't mean you should automatically change things up. The lazy encounter benchmark is there to give you a warning sign that your encounter might be into the danger zone where it becomes more than the characters can handle. But your own experiences with the characters and players should ultimately tell you whether you should change things up or not.\n\nThe lazy encounter benchmark intentionally doesn't provide specific measurements for easy, medium, or hard encounters. Instead, think of it like an analog gauge. The lower the total monster challenge ratings are compared to the benchmark calculation from character levels, the easier the battle might be. The higher the total monster challenge ratings are above the benchmark, the deadlier the battle might be.\n\n> ***Write Down the Benchmark Result***\n\n> Because the benchmark result only changes when the characters increase in level, you can write it down and keep it in your notes. If you're going to have five 8th-level characters in your next several sessions, you can write down \"Lazy Encounter Benchmark: 20\" and reference that when throwing monsters together for an encounter. It's especially useful to keep this number in front of you when improvising encounters during a session.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Most characters might lose more than half their hit points." },
        { item: "Several characters might go unconscious." },
        { item: "There's a chance that one or more characters might die." },
      ],
    },
  ],
  order: 0,
};
