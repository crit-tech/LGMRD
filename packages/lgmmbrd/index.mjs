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
  version: "3.1.0",
  sections: [
    {
      id: "index",
      title: "The Lazy GM's 5e Monster Builder Resource Document",
      intro:
        "Scott Fitzgerald Gray, Teos Abadía, Michael E. Shea.\n\nUpdated 18 January 2024\n\nThis document includes tools and material for building, modifying, and running monsters for your 5th edition fantasy roleplaying games.\n\nThe material in this document is copyright 2023 Scott Fitzgerald Gray, Teos Abadía, and Michael E. Shea and is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). You are free to use this content in any manner permitted by that license as long as you include the following attribution statement in your own work:",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                '> This work includes material taken from the [Lazy GM\'s 5e Monster Builder Resource Document](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) written by Teos Abadía of [Alphastream.org](https://alphastream.org), Scott Fitzgerald Gray of [Insaneangel.com](https://insaneangel.com), and Michael E. Shea of [SlyFlourish.com](https://slyflourish.com), available under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).\n\nThis work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC and available at <https://dnd.wizards.com/resources/systems-reference-document>. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at <https://creativecommons.org/licenses/by/4.0/legalcode>.\n\nThis document is a single self-contained HTML file. To save an offline local copy, "save as" either the page source or HTML in your browser. Use tools such as [Calibre](https://calibre-ebook.com) and [Pandoc](https://pandoc.org) to convert this document to markdown, PDF, ePub or another format of your choice. Use [Send to Kindle](https://www.amazon.com/sendtokindle) to send a version to your Kindle.\n\nYou can find several versions of this document including EPUB, Markdown, JSON, and braille on [Crit.Tech\'s LGMRD Github Repo](https://github.com/crit-tech/LGMRD) and can [download a zip file containing all these formats](https://slyflourish_content.s3.amazonaws.com/lazy_gm_cc_docs_multiformat.zip).\n\n### Table of Contents',
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Building a Quick Monster" },
                { item: "General-Use Combat Stat Blocks" },
                { item: "Lazy Tricks for Running Monsters" },
                { item: "Lightning Rods" },
                { item: "Monster Roles" },
                { item: "Bosses and Minions" },
                { item: "The Combat Encounter Checklist" },
                { item: "Monster Combinations for a Hard Challenge" },
                { item: "The Lazy Encounter Benchmark" },
                { item: "Monsters by Adventure Location" },
                { item: "Monsters and the Tiers of Play" },
              ],
            },
          ],
          order: 0,
        },
      ],
    },
    {
      id: "buildingaquickmonster",
      title: "Building a Quick Monster",
      intro:
        "Sometimes you need a monster right now but you don't have the right one handy. Maybe the creature you're imagining doesn't exist in any given book of published monsters, or you simply don't have the time to look it up. Maybe you're in the middle of your game and want some quick statistics for a creature you didn't think you'd need. For all these problems, this section offers solutions.\n\nThe core tool for building a quick monster for a 5e game is the Monster Statistics by Challenge Rating table, which offers you a set of statistics that can be used to build and run a quick monster of any challenge rating (CR). You then have two paths for customizing a monster built from these baseline statistics—with flavor and description during the game, or with a refinement of the creature's mechanics.\n\nIt's worth your time to review and understand how this table works before you start using it in your game. Read the column descriptions. Understand the relationship between a monster's challenge rating and equivalent character level. Once you've internalized how this table works, you can use it in seconds to build a monster and throw that foe into your game.",
      subsections: [
        {
          id: "columndescriptions",
          title: "Column Descriptions",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The table includes the following columns, which will become more familiar to you as you build your monsters.\n\n***Monster CR.*** The challenge ratings presented in the CR column are the baseline measure to determine the relative difficulty of a monster in combat. You'll almost always reference this column first when building a quick monster.\n\n***Equivalent Character Level.*** This column describes the roughly equivalent level of a single character facing a single monster of this challenge rating in a hard encounter. This gives you a quick way to determine how difficult this monster will be when facing characters of a particular level.\n\nAs you can see from the table, matching character level to challenge rating isn't a simple mathematical process. There are a number of character levels missing from the table where certain challenge ratings represent a large jump in how tough a monster is.\n\n***AC/DC.*** This column indicates the typical Armor Class of a monster of the indicated challenge rating. It also describes the typical Difficulty Class if this monster uses a DC for any of their attacks or other features.\n\n***Hit Points.*** This column offers the baseline hit points of a monster of a given challenge rating. Feel free to add or subtract hit points within the suggested range based on the monster's in-world features or physiology, or the pacing you want to maintain during a battle.\n\n***Proficient Ability Bonus.*** This column gives the expected bonus for abilities with which the monster is proficient, adding the monster's ability score modifier and proficiency bonus together. This number can be used as an attack bonus, or as a bonus for proficient saving throws and ability checks. (Ability-based modifiers without proficiency are fixed values between −2 and +4, based on the monster's story.)\n\n***Damage per Round.*** This column contains the total expected damage that a monster can deal in a round. Higher-CR monsters typically split this total damage among a number of attacks, instead of doing one big attack that either deals a tremendous amount of damage or misses completely. If a single effect targets two or more characters, such as a fiery breath weapon, the damage for that effect should be half the indicated number.\n\n***Number of Attacks.*** This column notes the number of attacks a monster of a particular challenge rating typically makes per round. The damage per round from the previous column is divided among these multiple attacks in the following column.\n\n***Damage per Attack.*** This column shows the baseline amount of damage a monster deals per attack when using the default number of attacks in the previous column. It includes both average damage and a dice equation.\n\n***Example Monsters.*** This column offers example monsters for each challenge rating. This can help you gauge where your monster fits among a sampling of existing 5e monsters.",
            },
          ],
          order: 0,
        },
        {
          id: "buildingamonster",
          title: "Building a Monster",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "With the Monster Statistics by Challenge Rating table at hand, you can use the following quick steps to build a custom monster from scratch. The first four steps alone let you easily create a monster ready to run in your game. The optional steps that follow then let you fill out the monster's details and custom mechanics as desired.\n\n### Step 1: Determine Challenge Rating\n\nBegin by determining the challenge rating for your quick monster based on that creature's fiction in the world. When considering the challenge rating of a custom monster, you might compare them to existing creatures on the table. If the in-world power of your monster compares well to a skeleton, the monster might have a challenge rating of 1/4. If they're more like a fire giant, they might have a challenge rating of 9. Look at the list of example monsters and ask yourself which monster makes the best comparison to yours. Then assign your creature that monster's challenge rating.\n\n### Alternatively, What Challenge Rating Do You Need?\n\nYou might also want to choose a challenge rating based on the level of the characters, using the Equivalent Character Level column of the table. If you want an encounter with four monsters who are roughly equal in power to four characters, this column lets you figure out those monsters' statistics. It also helps you build NPCs—knights, mages, thieves, and so forth—intended to be a match for characters of a particular level.\n\n### Step 2: Write Down the Baseline Statistics\n\nOnce you've determined a challenge rating for your monster, write down their statistics. You might jot them on an index card, in a text editor on your computer, or wherever you keep notes for your adventures and campaigns. You might end up customizing those statistics, though, so be ready to change them.\n\n### Step 3: Determine Proficient Abilities\n\nNext, determine which abilities—Strength, Dexterity, Constitution, Intelligence, Wisdom, or Charisma—a monster is proficient in, using the Proficient Ability Bonus column on the table. This sets up the bonus a monster has when using any ability with which they're proficient, and is largely based on the monster's story. A big, beefy monster might be proficient in skills or saving throws involving Strength and Constitution. A mastermind monster might be proficient in Wisdom- and Intelligence-based skills and saving throws. A fast monster might be proficient in Dexterity (Acrobatics) checks and Dexterity saving throws, while an otherworldly monster might be proficient in Charisma-based skills and saves.\n\nThe bonus indicated in the table is what the monster uses to make saving throws and ability checks with those proficient abilities. Just remember that the number on the table already includes a monster's proficiency bonus, in addition to their ability score modifier.\n\n### Step 4: Determine Remaining Abilities\n\nNext, you can determine the modifier (either a penalty or a bonus) that a monster uses for their nonproficient abilities. This is for all the ability checks and saving throws a monster isn't great at, and can be determined by asking yourself how strong a monster feels in those abilities. The bonus can range anywhere from −2 to +4, and is independent of a monster's challenge rating. Even a high-challenge monster might have a lousy Dexterity saving throw. When in doubt, or to speed things up, use a modifier of +0 for these nonproficient abilities. You can always change this during the game if a higher or lower number makes sense.\n\nA creature's Dexterity modifier is also used to determine their initiative modifier. Or you can skip your improvised creature's initiative roll and use a static initiative of 12.\n\n### You're Ready to Go\n\nAt this point, you have enough information on hand to run your monster in a game, with little else needed. However, you can also continue with a few more quick steps to further customize your monster, making them more distinct.",
            },
          ],
          order: 1,
        },
        {
          id: "monsterstatisticsbychallengerating",
          title: "Monster Statistics by Challenge Rating",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                cr: "CR",
                eqv_char_lvl: "Eqv Char Lvl",
                acdc: "AC/DC",
                hp: "HP",
                prof_bonus: "Prof Bonus",
                damage_per_round: "Damage per Round",
                num_attacks: "# Attacks",
                damage: "Damage",
                example_monster: "Example Monster",
              },
              data: [
                {
                  cr: "0",
                  eqv_char_lvl: "< 1",
                  acdc: "10",
                  hp: "3 (2-4)",
                  prof_bonus: "+2",
                  damage_per_round: "2",
                  num_attacks: "1",
                  damage: "2 (1d4)",
                  example_monster: "Commoner, rat, spider",
                },
                {
                  cr: "1/8",
                  eqv_char_lvl: "< 1",
                  acdc: "11",
                  hp: "9 (7-11)",
                  prof_bonus: "+3",
                  damage_per_round: "3",
                  num_attacks: "1",
                  damage: "4 (1d6 + 1)",
                  example_monster: "Bandit, cultist, giant rat",
                },
                {
                  cr: "1/4",
                  eqv_char_lvl: "1",
                  acdc: "11",
                  hp: "13 (10-16)",
                  prof_bonus: "+3",
                  damage_per_round: "5",
                  num_attacks: "1",
                  damage: "5 (1d6 + 2)",
                  example_monster: "Acolyte, skeleton, wolf",
                },
                {
                  cr: "1/2",
                  eqv_char_lvl: "2",
                  acdc: "12",
                  hp: "22 (17-28)",
                  prof_bonus: "+4",
                  damage_per_round: "8",
                  num_attacks: "2",
                  damage: "4 (1d4 + 2)",
                  example_monster: "Black bear, scout, shadow",
                },
                {
                  cr: "1",
                  eqv_char_lvl: "3",
                  acdc: "12",
                  hp: "33 (25-41)",
                  prof_bonus: "+5",
                  damage_per_round: "12",
                  num_attacks: "2",
                  damage: "6 (1d8 + 2)",
                  example_monster: "Dire wolf, specter, spy",
                },
                {
                  cr: "2",
                  eqv_char_lvl: "5",
                  acdc: "13",
                  hp: "45 (34-56)",
                  prof_bonus: "+5",
                  damage_per_round: "17",
                  num_attacks: "2",
                  damage: "9 (2d6 + 2)",
                  example_monster: "Ghast, ogre, priest",
                },
                {
                  cr: "3",
                  eqv_char_lvl: "7",
                  acdc: "13",
                  hp: "65 (49-81)",
                  prof_bonus: "+5",
                  damage_per_round: "23",
                  num_attacks: "2",
                  damage: "12 (2d8 + 3)",
                  example_monster: "Knight, mummy, werewolf",
                },
                {
                  cr: "4",
                  eqv_char_lvl: "9",
                  acdc: "14",
                  hp: "84 (64-106)",
                  prof_bonus: "+6",
                  damage_per_round: "28",
                  num_attacks: "2",
                  damage: "14 (3d8 + 1)",
                  example_monster: "Ettin, ghost",
                },
                {
                  cr: "5",
                  eqv_char_lvl: "10",
                  acdc: "15",
                  hp: "95 (71-119)",
                  prof_bonus: "+7",
                  damage_per_round: "35",
                  num_attacks: "3",
                  damage: "12 (3d6 + 2)",
                  example_monster: "Elemental, gladiator, vampire spawn",
                },
                {
                  cr: "6",
                  eqv_char_lvl: "11",
                  acdc: "15",
                  hp: "112 (84-140)",
                  prof_bonus: "+7",
                  damage_per_round: "41",
                  num_attacks: "3",
                  damage: "14 (3d6 + 4)",
                  example_monster: "Mage, medusa, wyvern",
                },
                {
                  cr: "7",
                  eqv_char_lvl: "12",
                  acdc: "15",
                  hp: "130 (98-162)",
                  prof_bonus: "+7",
                  damage_per_round: "47",
                  num_attacks: "3",
                  damage: "16 (3d8 + 3)",
                  example_monster: "Stone giant, young black dragon",
                },
                {
                  cr: "8",
                  eqv_char_lvl: "13",
                  acdc: "15",
                  hp: "136 (102-170)",
                  prof_bonus: "+7",
                  damage_per_round: "53",
                  num_attacks: "3",
                  damage: "18 (3d10 + 2)",
                  example_monster: "Assassin, frost giant",
                },
                {
                  cr: "9",
                  eqv_char_lvl: "15",
                  acdc: "16",
                  hp: "145 (109-181)",
                  prof_bonus: "+8",
                  damage_per_round: "59",
                  num_attacks: "3",
                  damage: "19 (3d10 + 3)",
                  example_monster: "Bone devil, fire giant, young blue dragon",
                },
                {
                  cr: "10",
                  eqv_char_lvl: "16",
                  acdc: "17",
                  hp: "155 (116-194)",
                  prof_bonus: "+9",
                  damage_per_round: "65",
                  num_attacks: "4",
                  damage: "16 (3d8 + 3)",
                  example_monster: "Stone golem, young red dragon",
                },
                {
                  cr: "11",
                  eqv_char_lvl: "17",
                  acdc: "17",
                  hp: "165 (124-206)",
                  prof_bonus: "+9",
                  damage_per_round: "71",
                  num_attacks: "4",
                  damage: "18 (3d10 + 2)",
                  example_monster: "Djinni, efreeti, horned devil",
                },
                {
                  cr: "12",
                  eqv_char_lvl: "18",
                  acdc: "17",
                  hp: "175 (131-219)",
                  prof_bonus: "+9",
                  damage_per_round: "77",
                  num_attacks: "4",
                  damage: "19 (3d10 + 3)",
                  example_monster: "Archmage, erinyes",
                },
                {
                  cr: "13",
                  eqv_char_lvl: "19",
                  acdc: "18",
                  hp: "184 (138-230)",
                  prof_bonus: "+10",
                  damage_per_round: "83",
                  num_attacks: "4",
                  damage: "21 (4d8 + 3)",
                  example_monster: "Adult white dragon, storm giant, vampire",
                },
                {
                  cr: "14",
                  eqv_char_lvl: "20",
                  acdc: "19",
                  hp: "196 (147-245)",
                  prof_bonus: "+11",
                  damage_per_round: "89",
                  num_attacks: "4",
                  damage: "22 (4d10)",
                  example_monster: "Adult black dragon, ice devil",
                },
                {
                  cr: "15",
                  eqv_char_lvl: "> 20",
                  acdc: "19",
                  hp: "210 (158-263)",
                  prof_bonus: "+11",
                  damage_per_round: "95",
                  num_attacks: "5",
                  damage: "19 (3d10 + 3)",
                  example_monster:
                    "Adult green dragon, mummy lord, purple worm",
                },
                {
                  cr: "16",
                  eqv_char_lvl: "> 20",
                  acdc: "19",
                  hp: "229 (172-286)",
                  prof_bonus: "+11",
                  damage_per_round: "101",
                  num_attacks: "5",
                  damage: "21 (4d8 + 3)",
                  example_monster: "Adult blue dragon, iron golem, marilith",
                },
                {
                  cr: "17",
                  eqv_char_lvl: "> 20",
                  acdc: "20",
                  hp: "246 (185-308)",
                  prof_bonus: "+12",
                  damage_per_round: "107",
                  num_attacks: "5",
                  damage: "22 (3d12 + 3)",
                  example_monster: "Adult red dragon",
                },
                {
                  cr: "18",
                  eqv_char_lvl: "> 20",
                  acdc: "21",
                  hp: "266 (200-333)",
                  prof_bonus: "+13",
                  damage_per_round: "113",
                  num_attacks: "5",
                  damage: "23 (4d10 + 1)",
                  example_monster: "Demilich",
                },
                {
                  cr: "19",
                  eqv_char_lvl: "> 20",
                  acdc: "21",
                  hp: "285 (214-356)",
                  prof_bonus: "+13",
                  damage_per_round: "119",
                  num_attacks: "5",
                  damage: "24 (4d10 + 2)",
                  example_monster: "Balor",
                },
                {
                  cr: "20",
                  eqv_char_lvl: "> 20",
                  acdc: "21",
                  hp: "300 (225-375)",
                  prof_bonus: "+13",
                  damage_per_round: "132",
                  num_attacks: "5",
                  damage: "26 (4d12)",
                  example_monster: "Ancient white dragon, pit fiend",
                },
                {
                  cr: "21",
                  eqv_char_lvl: "> 20",
                  acdc: "22",
                  hp: "325 (244-406)",
                  prof_bonus: "+14",
                  damage_per_round: "150",
                  num_attacks: "5",
                  damage: "30 (4d12 + 4)",
                  example_monster: "Ancient black dragon, lich, solar",
                },
                {
                  cr: "22",
                  eqv_char_lvl: "> 20",
                  acdc: "23",
                  hp: "350 (263-438)",
                  prof_bonus: "+15",
                  damage_per_round: "168",
                  num_attacks: "5",
                  damage: "34 (4d12 + 8)",
                  example_monster: "Ancient green dragon",
                },
                {
                  cr: "23",
                  eqv_char_lvl: "> 20",
                  acdc: "23",
                  hp: "375 (281-469)",
                  prof_bonus: "+15",
                  damage_per_round: "186",
                  num_attacks: "5",
                  damage: "37 (6d10 + 4)",
                  example_monster: "Ancient blue dragon, kraken",
                },
                {
                  cr: "24",
                  eqv_char_lvl: "> 20",
                  acdc: "23",
                  hp: "400 (300-500)",
                  prof_bonus: "+15",
                  damage_per_round: "204",
                  num_attacks: "5",
                  damage: "41 (6d10 + 8)",
                  example_monster: "Ancient red dragon",
                },
                {
                  cr: "25",
                  eqv_char_lvl: "> 20",
                  acdc: "24",
                  hp: "430 (323-538)",
                  prof_bonus: "+16",
                  damage_per_round: "222",
                  num_attacks: "5",
                  damage: "44 (6d10 + 11)",
                  example_monster: "",
                },
                {
                  cr: "26",
                  eqv_char_lvl: "> 20",
                  acdc: "25",
                  hp: "460 (345-575)",
                  prof_bonus: "+17",
                  damage_per_round: "240",
                  num_attacks: "5",
                  damage: "48 (6d10 + 15)",
                  example_monster: "",
                },
                {
                  cr: "27",
                  eqv_char_lvl: "> 20",
                  acdc: "25",
                  hp: "490 (368-613)",
                  prof_bonus: "+17",
                  damage_per_round: "258",
                  num_attacks: "5",
                  damage: "52 (6d10 + 19)",
                  example_monster: "",
                },
                {
                  cr: "28",
                  eqv_char_lvl: "> 20",
                  acdc: "25",
                  hp: "540 (405-675)",
                  prof_bonus: "+17",
                  damage_per_round: "276",
                  num_attacks: "5",
                  damage: "55 (6d10 + 22)",
                  example_monster: "",
                },
                {
                  cr: "29",
                  eqv_char_lvl: "> 20",
                  acdc: "26",
                  hp: "600 (450-750)",
                  prof_bonus: "+18",
                  damage_per_round: "294",
                  num_attacks: "5",
                  damage: "59 (6d10 + 26)",
                  example_monster: "",
                },
                {
                  cr: "30",
                  eqv_char_lvl: "> 20",
                  acdc: "27",
                  hp: "666 (500-833)",
                  prof_bonus: "+19",
                  damage_per_round: "312",
                  num_attacks: "5",
                  damage: "62 (6d10 + 29)",
                  example_monster: "Tarrasque",
                },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                "### Optional Step: Consider Armor Class\n\nThough the Monster Statistics by Challenge Rating table offers a value for Armor Class that increases with challenge rating, you can modify a monster's Armor Class further based on their story. A big beefy titan set up as a CR 16 monster might still be easy to hit—maybe with an Armor Class of 14.\n\nIt's easiest to think of Armor Class on a scale of 10 to 20, with 10 being the equivalent of an unarmored opponent with no Dexterity bonus, and 20 being an opponent wearing plate armor with a shield. (Armor Class can go above 20 or below 10, though.)\n\nKeep in mind that missing an opponent isn't much fun for a player. Lower-AC opponents, even those with more hit points, are often more fun to fight than high-AC opponents with fewer hit points.\n\n### Optional Step: Customize Attacks\n\nThe table includes a recommended number of attacks for a monster, an attack bonus, and the amount of damage those attacks should deal. If desired, tailor this damage to fit the monster's story. Choose a creature's damage type, such as fire for a flaming Greatsword attack, or necrotic for a Death Blast attack. You can also mix up multiple damage types, so that a CR 10 hell knight might have a Longsword attack dealing both slashing and fire damage.\n\nConsider the ranged attacks a monster might have as well. You can use the same attack bonus, number of attacks, and damage. Or you could give a creature weaker ranged attacks (attacking once instead of twice, for example). Depending on the creature's story, the flavor of those attacks might be physical (hurling javelins or rocks) or arcane (firing energy blasts).\n\nTo further customize a monster, you can divide up their total damage per round into a different number of attacks than indicated on the table, if that makes sense for the monster's story. (As noted above, for attacks that target two or more opponents, use half the indicated damage.)\n\n### Optional Step: Further Modify Statistics\n\nDepending on the story of your monster, you can make general adjustments to their baseline statistics however you see fit. For example, you might lower a monster's hit points and increase the damage they deal to create a dangerous foe who drops out of the fight quickly. However, always consider whether such changes make a combat encounter more fun to play. It might make sense to create a monster with high hit points and a higher Armor Class who deals less damage, thinking that those two things balance out. But fighting such a monster can easily become a slog. Likewise, a monster with significantly fewer hit points that deals high damage might end up being inadvertently deadly if too many characters roll low on attacks, or could feel pointless if the monster is killed too quickly.\n\n### Optional Step: Add Monster Types and Features\n\nTo further flesh out your monster, add monster types and features found for monsters similar to the one you're building such as extra weapon damage types, breath weapons, auras, damage shields, and other traits and features that better define your monster in the story and situation.",
            },
          ],
          order: 2,
        },
        {
          id: "usingthetablewithpublishedmonsters",
          title: "Using the Table with Published Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "While the Monster Statistics by Challenge Rating table is intended to let you build monsters from scratch, it can easily be used as a reference to better understand how a published monster might act in combat. If a published CR 4 monster has 30 hit points but deals 35 damage per round, you can see from the table that their hit points are low but their damage is high compared to the creature's baseline challenge rating. Such a monster hits hard for their challenge rating, but when they're hit in turn, they go down fast.",
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "generalusestatblocks",
      title: "General-Use Combat Stat Blocks",
      intro:
        "This section contains several general-use stat blocks specifically built for reskinning into whatever monsters you need for your combat encounters.\n\nEach stat block uses d8 Hit Dice, but can be used for creatures in a range of sizes. Each focuses on a primary ability score, but you can shift abilities as needed to better fit the story of the creature the stat block represents. Swap Strength and Intelligence to run a spellcaster instead of a melee combatant, or switch Dexterity and Strength to turn a shifty rogue into a powerful fighter.\n\nA stat block's attack lets you choose the most appropriate type of damage for a creature, and you can easily increase an attack's reach or range. Ranges for attacks are given as a single number indicating maximum range, but you can modify that range or replace it with the normal and long range of a specific weapon as you wish.\n\nThe spread of challenge ratings of these stat blocks provides options for weak, moderate, and strong foes at any character level. Each stat block description includes comparisons between the stat block and characters of different levels, providing guidelines for when a stat block can serve as a boss, an elite foe (suitable for two characters against one creature), or a one-on-one combatant, or in larger groups of two to four monsters per character. All these setups are geared toward a hard encounter, but one that the characters should definitely be able to win.",
      subsections: [
        {
          id: "minion",
          title: "Minion (CR 1/8)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The low-CR minions represented by this stat block might include ravenous rats, weak skeletons, shifty bandits, or low-ranking cultists. A minion can serve as a one-on-one combatant against 1st-level characters, or can be deployed in large groups at 4th level or above. This stat block focuses on Dexterity as its primary ability.\n\n**MINION**\n\nSmall or Medium Creature\n\n**Armor Class** 11\n\n**Hit Points** 9 (2d8)\n\n**Speed** 30 ft.\n\n**Senses** passive Perception 11\n\n**Challenge** 1/8 (25 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 4 (1d6 + 1) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "10 (+0)",
                  dex: "12 (+1)",
                  con: "10 (+0)",
                  int: "10 (+0)",
                  wis: "12 (+1)",
                  cha: "10 (+0)",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "soldier",
          title: "Soldier (CR 1/2)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Representing seasoned guards, trained soldiers, powerful bandits, murderous humanoids, or armed undead, the soldier stat block works well as a boss at 1st level, an elite foe for two 2nd-level characters, or one-on-one combatants at 4th level, or in large groups at 6th level and above. Strength is this stat block's primary ability.\n\n**SOLDIER**\n\nMedium Creature\n\n**Armor Class** 12 (leather armor or natural armor)\n\n**Hit Points** 22 (4d8 + 4)\n\n**Speed** 30 ft.\n\n**Senses** passive Perception 10\n\n**Challenge** 1/2 (100 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 8 (1d12 + 2) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "14 (+2)",
                  dex: "12 (+1)",
                  con: "12 (+1)",
                  int: "10 (+0)",
                  wis: "10 (+0)",
                  cha: "10 (+0)",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "brute",
          title: "Brute (CR 2)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Heavy-hitting veterans, capable bodyguards, low-ranking demons or devils, dangerous monsters in the wild, and powerful humanoids can all be represented by this stat block. A brute can serve as a boss against 2nd-level characters, an elite foe against two 4th-level characters, or a one-on-one opponent at 5th level, or in large groups at 10th level. This stat block relies on Strength.\n\n**BRUTE**\n\nMedium or Large Creature\n\n**Armor Class** 13 (studded leather or natural armor)\n\n**Hit Points** 45 (7d8 + 14)\n\n**Speed** 30 ft.\n\n**Saving Throws** Con +4\n\n**Skills** Athletics +5\n\n**Senses** passive Perception 10\n\n**Challenge** 2 (450 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Multiattack.*** The brute makes two attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 9 (1d12 + 3) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "16 (+3)",
                  dex: "12 (+1)",
                  con: "14 (+2)",
                  int: "10 (+0)",
                  wis: "10 (+0)",
                  cha: "8 (−1)",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "specialist",
          title: "Specialist (CR 4)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "This stat block can represent spies, assassins, hunters, and trained elite forces. The specialist serves as a boss for 4th-level characters, an elite opponent versus two 5th-level characters, or a one-on-one combatant for 10th-level characters, or in large groups against 16th-level characters. Dexterity is this stat block's primary ability.\n\n**SPECIALIST**\n\nMedium Creature\n\n**Armor Class** 14\n\n**Hit Points** 84 (13d8 + 26)\n\n**Speed** 30 ft.\n\n**Saving Throws** Dex +6, Wis +4\n\n**Skills** Acrobatics +6, Perception +4, Stealth +6\n\n**Senses** passive Perception 14\n\n**Challenge** 4 (1,100 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Multiattack.*** The specialist makes two attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 14 (3d6 + 4) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "12 (+1)",
                  dex: "18 (+4)",
                  con: "14 (+2)",
                  int: "10 (+0)",
                  wis: "14 (+2)",
                  cha: "12 (+1)",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "myrmidon",
          title: "Myrmidon (CR 7)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Powerful elite bodyguards, high priests, wizards, warlocks, sorcerers, demons, and devils can all be represented by this stat block. A myrmidon can serve as a boss monster for 5th-level characters, an elite combatant against two characters of 7th level, or a one-on-one combatant against 14th-level characters, or in large groups against 20th-level characters. This stat block focuses on Intelligence.\n\n**MYRMIDON**\n\nMedium or Large creature\n\n**Armor Class** 15 (chain shirt or natural armor)\n\n**Hit Points** 130 (20d8 + 40)\n\n**Speed** 30 ft.\n\n**Saving Throws** Dex +5, Wis +5\n\n**Skills** Perception +5\n\n**Senses** passive Perception 15\n\n**Challenge** 7 (2,900 XP) **Proficiency Bonus** +3\n\n**ACTIONS**\n\n***Multiattack.*** The myrmidon makes three attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 17 (3d8 + 4) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "10 (+0)",
                  dex: "14 (+2)",
                  con: "14 (+2)",
                  int: "18 (+4)",
                  wis: "14 (+2)",
                  cha: "10 (+0)",
                },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "sentinel",
          title: "Sentinel (CR 11)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "This stat block is a good fit for strong, often-otherworldly creatures such as demons, devils, impressive beings of the Outer Planes, guardian constructs, or powerful undead. The sentinel can serve as a boss for 7th-level characters, an elite foe against two 12th-level characters, or can stand one-on-one against 16th-level characters. This stat block focuses on Strength.\n\n**SENTINEL**\n\nMedium, Large, or Huge Creature\n\n**Armor Class** 17 (natural armor or magical protection)\n\n**Hit Points** 165 (22d8 + 66)\n\n**Speed** 30 ft.\n\n**Saving Throws** Str +9, Dex +7\n\n**Skills** Perception +6\n\n**Senses** passive Perception 16\n\n**Challenge** 11 (7,200 XP) **Proficiency Bonus** +4\n\n**ACTIONS**\n\n***Multiattack.*** The sentinel makes four attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +9 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 18 (3d8 + 5) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "20 (+5)",
                  dex: "16 (+3)",
                  con: "16 (+3)",
                  int: "10 (+0)",
                  wis: "14 (+2)",
                  cha: "10 (+0)",
                },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "champion",
          title: "Champion (CR 15)",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Representing greater demons, devils, vampires, liches, or powerful spellcasters, the champion serves as a boss for 11th-level characters, an elite foe for two 15th-level characters, or a one-on-one challenge against 17th-level characters. This stat block focuses on Charisma.\n\n**CHAMPION**\n\nMedium, Large, or Huge Creature\n\n**Armor Class** 19 (natural armor or magical protection)\n\n**Hit Points** 212 (25d8 + 100)\n\n**Speed** 30 ft.\n\n**Saving Throws** Wis +8, Cha +11\n\n**Skills** Perception +8\n\n**Senses** passive Perception 18\n\n**Challenge** 15 (13,000 XP) **Proficiency Bonus** +5\n\n**ACTIONS**\n\n***Multiattack.*** The champion makes four attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +11 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 24 (4d8 + 6) damage.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                str: "STR",
                dex: "DEX",
                con: "CON",
                int: "INT",
                wis: "WIS",
                cha: "CHA",
              },
              data: [
                {
                  str: "10 (+0)",
                  dex: "12 (+1)",
                  con: "18 (+4)",
                  int: "12 (+1)",
                  wis: "16 (+3)",
                  cha: "22 (+6)",
                },
              ],
            },
          ],
          order: 6,
        },
      ],
    },
    {
      id: "lightingrods",
      title: "Lightning Rods",
      intro:
        "When characters rise above 4th level, their ability to deal with powerful foes makes a huge jump. But challenging characters of 5th level and higher isn't just about making things hard. It's easy for GMs to fall into the trap of thwarting the coolest things the heroes can do, by giving monsters immunities to certain conditions, increasing their hit points to offset the high damage a character can deal, or running monsters with tactics clearly built to bypass the characters' best attacks. But thwarting the characters' best features can be frustrating to the players, for obvious reasons.\n\nSo instead of shutting down the characters, build your encounters around monsters specifically designed to show off—by eating up—the characters' cool new capabilities as they rise in level. You can think of these monsters as \"lightning rods\"—intended victims ready to take the full effect of a character's most powerful attacks and features.",
      subsections: [
        {
          id: "watchwhatthecharactersbring",
          title: "Watch What the Characters Bring",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "When running encounters challenging enough for the characters to use their top-tier features and attacks, pay attention to what they do. Does the wizard blast enemies with high-damage spells like *fireball*? Does the cleric make liberal use of Turn Undead when faced with those monsters? Do spells like *polymorph* or *banishment* come into play to get rid of bosses and elite threats?\n\nNote which features the players enjoy having their characters use, and think about how to build for those features in your next big battle. If you aren't sure what features the characters have, ask the players. Each time the characters level, start the session by having the players talk about what new attacks, spells, and special abilities they've picked up. Then build encounters to show off those features, not avoid them.\n\nFor example, at higher levels, a monk gains the ability to stun creatures with a single strike, effectively taking a monster out of the fight for a round or more. So when you know a player's monk has this feature, add monsters into big battles that you specifically want the monk to stun. A smack-talking spellcaster with a low Constitution saving throw, and who only a monk can reach with their enhanced movement, is just begging to have a hero leap up and punch them in the face.\n\n### Run Hordes for Area Effects\n\nAt 5th level and above, characters get access to spells and class features with large areas of effect, including *hypnotic pattern*, *fireball*, and Destroy Undead. When you know the characters have such features at their disposal, add hordes of low-CR creatures who can charge at them, all grouped up and ready to be blasted away.\n\nIgnore the fact that it might be more tactically appropriate for such creatures to spread out, instead thinking of yourself as the director of an action movie. What's the coolest outcome for the scene—a group of careful zombies staying 20 feet away from one another, or a huge mob of undead in perfect position to be turned to ash or blown to pieces with a well-placed *fireball*?\n\n### Expendable Lieutenants\n\nMany legendary monsters can use Legendary Resistance to avoid being taken out with a single casting of *banishment* or *polymorph*, but their lieutenants have no such advantage. When the characters have access to such spells, add powerful monsters into your encounters specifically designed to be banished, polymorphed, or otherwise controlled or incapacitated. Monsters with the bruiser or defender role are often perfect targets for such spells (see \"Monster Roles\"), especially those with terrible Wisdom and Charisma saving throws.\n\nKeep in mind, though, that if you add one or two hard-hitting foes to an encounter who don't get controlled, things can go south for the characters quickly.\n\n### Fragile Damage-Dealers\n\nFor stunning-strike monks, hard-hitting paladins, sharpshooter rangers, or great-weapon fighters, fragile foes who deal a ton of damage make fantastic targets. These are creatures with a low Armor Class, low hit points, and a low Constitution save, but who are deadly until taken out. (Creatures with the artillery or skirmisher role are great choices; see \"Monster Roles.\") It's always rewarding for a character to reach such a foe and cut them down with a single powerful attack.\n\n### Play to the Characters' Strengths\n\nPlayers and their characters love to outsmart their foes. You can help with this by placing artillery in locations that the foes assume will be hard to reach, but which you know present just a minor challenge to characters who can climb, fly, or short-range teleport. Likewise, add hidden ambushers when you know that some of the characters will be able to easily perceive them. These sorts of setups let the characters show off, and reward the players for choosing those specific tactical capabilities.",
            },
          ],
          order: 0,
        },
        {
          id: "telegraphinglightningrods",
          title: "Telegraphing Lightning Rods",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Less tactically minded players might need help, or even direct advice, to recognize the danger of not dealing with lightning rods. If you intend for a fire giant bodyguard of the hobgoblin king to be banished and the characters don't pick up on that, they might be in trouble when the giant starts pounding them into the ground like tent pegs. If the characters are focused on the boss while getting pelted by the fiery rays of flameskulls just begging to be stunned, blasted, or turned, be prepared to project or reveal outright to the players the dangers their characters face, and how they might deal with them.",
            },
          ],
          order: 1,
        },
      ],
    },
    {
      id: "lazytricksforrunningmonsters",
      title: "Lazy Tricks for Running Monsters",
      intro:
        "This section presents a number of tricks and tips that can help you more easily prepare and run monsters during your games. We call them \"lazy tricks\" not because they're about cheating or doing less work overall, but because they're meant to let you quickly accomplish things when your game is in progress and you don't have a lot of extra time.",
      subsections: [
        {
          id: "quickmonsterstatistics",
          title: "Quick Monster Statistics",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                '"Building a Quick Monster" provides great guidelines for creating a foe for your game in just a few minutes. But you can come up with an even quicker set of monster statistics using the following steps.\n\nFirst, choose a challenge rating for your monster, based on their perceived power in the encounter. When needed, compare your monster to existing monsters to find a suitable challenge rating. Then use the following guidelines to craft their baseline statistics:\n\nStart your monster out with one attack, then add one additional attack at CR 2, CR 7, CR 11, and CR 15. Split the total damage noted above across all attacks.\n\nWith a solid set of combat statistics at hand, you can then use narrative descriptions to make your monster unique, interesting, and evocative.',
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Armor Class = 12 + 1/2 CR" },
                { item: "Hit points = (15 × CR) + 15" },
                { item: "Proficient saving throws and skills = 4 + 1/2 CR" },
                {
                  item: "Nonproficient saving throws and abilities = −2 to +2, based on the monster's story",
                },
                { item: "Attack bonus = 4 + 1/2 CR" },
                { item: "DC for saving throws = 12 + 1/2 CR" },
                { item: "Total damage per round = (7 × CR) + 5" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "tenusefulmonsterfeatures",
          title: "Ten Useful Monster Features",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Give any custom monster impactful features and attacks that make sense for their place in the game. When a monster feature deals damage, choose a damage type appropriate to the creature's physiology, theme, or story. A creature channeling magical power might deal acid, cold, fire, lightning, force, poison, psychic, necrotic, radiant, or thunder damage. A creature making use of spines, spikes, or projectiles might deal bludgeoning, piercing, or slashing damage.\n\n***Damaging Blast.*** This creature has one or more single-target ranged attacks using the attack bonus and damage calculated above, and which deal damage of an appropriate type.\n\n***Damage Reflection.*** Whenever a creature within 5 feet of this creature hits them with a melee attack, the attacker takes damage in return of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.\n\n***Misty Step.*** As a bonus action, this creature can teleport up to 30 feet to an unoccupied space they can see.\n\n***Knockdown.*** When this creature hits a target with a melee attack, the target must succeed on a Strength saving throw or be knocked prone.\n\n***Restraining Grab.*** When this creature hits a target with a melee attack, the target is grappled (escape DC based on this creature's Strength or Dexterity modifier). While grappled, the target is restrained.\n\n***Damaging Burst.*** As an action, this creature can create a burst of energy, magic, spines, or some other effect in a 10-foot-radius sphere, either around themself or at a point within 120 feet. Each creature in that area must make a Dexterity, Constitution, or Wisdom saving throw (your choice, based on the type of burst). On a failure, a target takes damage of an appropriate type equal to half this creature's total damage per round. On a success, a target takes half as much damage.\n\n***Cunning Action***. On each of their turns, this creature can use a bonus action to take the Dash, Disengage, or Hide action.\n\n***Damaging Aura.*** Each creature who starts their turn within 10 feet of this creature takes damage of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.\n\n***Energy Weapons.*** The creature's weapon attacks deal extra damage of an appropriate type. You can add this damage on top of the creature's regular damage output to give them a combat boost, or you can replace some of the creature's normal weapon damage with this energy damage.\n\n***Damage Transference.*** When this creature takes damage, they can transfer half or all of that damage (your choice) to a willing creature within 30 or 60 feet of them. This feature is particularly good for boss monsters.",
            },
          ],
          order: 1,
        },
        {
          id: "usingaverages",
          title: "Using Averages",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "By default, 5e monster stat blocks calculate the average damage for any attack's dice expression, as with \"13 (2d8 + 4) bludgeoning damage\" for an ogre's Greatclub attack. Using average damage for a monster's attacks is one of the best ways to speed up combat.\n\nSometimes, though, you need to roll damage for effects that aren't in a stat block. When you do, you can use the following table to quickly look up the average value of various dice equations. Simply find the number of dice in the leftmost column, then go across to the appropriate die type. As can be seen in the table, you can add up averages to get an average value for higher numbers of dice—for example, adding the average of 2d10 and 6d10 to get the average of 8d10. You can use this approach to find the average for rolling more than twelve dice, so that if you need an average for 24d10, you can simply look at the 12d10 average and double it.\n\nYou can also compute averages for dice expressions with simple equations you can keep in your head. The average of two dice is the maximum value of one of those dice + 1, so that the average of 2d12 is 13. Then double that number for multiples of two, so that the average of 2d8 is 9, the average of 4d8 is 18, and so forth. Likewise, the average of a single die is half the size of the die, so add that number to a two-dice average to get odd numbers. For example, the average of 4d6 is 14, so the average of 5d6 is 17. (The average of one die is actually half the size of the die plus 0.5, which is why the average of two dice is the maximum value of the die +1.)",
            },
            {
              type: "table",
              order: 1,
              headers: {
                num_of_dice: "# of dice",
                d4: "d4",
                d6: "d6",
                d8: "d8",
                d10: "d10",
                d12: "d12",
              },
              data: [
                {
                  num_of_dice: "1",
                  d4: "2",
                  d6: "3",
                  d8: "4",
                  d10: "5",
                  d12: "6",
                },
                {
                  num_of_dice: "2",
                  d4: "5",
                  d6: "7",
                  d8: "9",
                  d10: "11",
                  d12: "13",
                },
                {
                  num_of_dice: "3",
                  d4: "7",
                  d6: "10",
                  d8: "13",
                  d10: "16",
                  d12: "19",
                },
                {
                  num_of_dice: "4",
                  d4: "10",
                  d6: "14",
                  d8: "18",
                  d10: "22",
                  d12: "26",
                },
                {
                  num_of_dice: "5",
                  d4: "12",
                  d6: "17",
                  d8: "22",
                  d10: "27",
                  d12: "32",
                },
                {
                  num_of_dice: "6",
                  d4: "15",
                  d6: "21",
                  d8: "27",
                  d10: "33",
                  d12: "39",
                },
                {
                  num_of_dice: "7",
                  d4: "17",
                  d6: "24",
                  d8: "31",
                  d10: "38",
                  d12: "45",
                },
                {
                  num_of_dice: "8",
                  d4: "20",
                  d6: "28",
                  d8: "36",
                  d10: "44",
                  d12: "52",
                },
                {
                  num_of_dice: "9",
                  d4: "22",
                  d6: "31",
                  d8: "40",
                  d10: "49",
                  d12: "58",
                },
                {
                  num_of_dice: "10",
                  d4: "25",
                  d6: "35",
                  d8: "45",
                  d10: "55",
                  d12: "65",
                },
                {
                  num_of_dice: "11",
                  d4: "27",
                  d6: "38",
                  d8: "49",
                  d10: "60",
                  d12: "71",
                },
                {
                  num_of_dice: "12",
                  d4: "30",
                  d6: "42",
                  d8: "54",
                  d10: "66",
                  d12: "78",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "otherlazymonstertricks",
          title: "Other Lazy Monster Tricks",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Once you\'re in the middle of an encounter, you can make use of a number of other quick tricks to make running monsters easier, with more flexibility and greater speed. Try any of the following options at your table, and make use of any trick that helps your game:\n\nInclude creatures designed to eat "save or suck" attacks such as *banishment* or *polymorph*.',
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Use fixed initiative for monsters equal to 10 + each monster's Dexterity bonus. Even faster? Just have all monsters act on initiative count 12.",
                },
                {
                  item: "Reduce hit points on the fly to allow monsters to drop or surrender more quickly, or increase a monster's number of attacks or damage if the characters are having too easy a time.",
                },
                {
                  item: "Have foes flee or surrender when it makes sense to move the game forward.",
                },
                {
                  item: "Have constructs and undead be destroyed when the creature controlling them dies.",
                },
                { item: "Run multiple waves of monsters for big battles." },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "monsterroles",
      title: "Monster Roles",
      intro:
        "Thinking about the roles that creatures play in combat helps to create better encounters. A monster who has tons of hit points can stand up front, soaking up damage while the more vulnerable evil wizard launches devastating spells from behind cover. Skirmisher monsters can dart in from the sides and back away, forcing the characters to spread out and leaving them open to an ambusher. Foes of different roles complement each other, creating an effective team.\n\nMonsters in 5e don't have defined roles with connections to specific mechanics and tactics, as the creatures in some fantasy RPGs do. However, many 5e foes either already fit a specific role or are flexible enough to allow us to assign roles to them. For example, a harpy is a highly effective controller, and a spy is an excellent skirmisher or ambusher. We can also modify monsters to enable them to play a role. By assigning a role to a foe, you enable a specific set of tactics that allow you to challenge the characters more effectively.",
      subsections: [
        {
          id: "definingroles",
          title: "Defining Roles",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The following roles capture the most important tactical concepts in 5e combat, and cover virtually all the foes you might make use of in a 5e game.\n\n### Ambusher\n\nAmbushers have special features that allow them to hide, dart out of danger, render targets senseless, or otherwise prevent characters from attacking them easily. An ambusher often deals more damage when hidden, and might engage in a pattern of hiding, attacking, and hiding again. Ambusher foes are often less effective when they can't hide, which incentivizes characters to force them into the open. Many ambushers have low hit points.\n\n***When to Use Them.*** Because ambushers can result in longer, drawn-out fights, you want to use them sparingly. However, they can be a good choice for a villain who needs to get away. Ambushers are likewise an excellent choice if a combat encounter is preceded by a free-form roleplaying or social encounter, with foes hiding in plain sight before the fight breaks out.\n\n***Placement and Tactics.*** An ambusher is usually most effective when they start out hidden, revealing themself only when they attack. Some ambushers start out in the open, then disappear and reposition once characters have moved toward them.\n\n***Example Ambushers.*** Dust mephit, ghost, mimic, phase spider, spy.\n\n### Artillery\n\nArtillery typically have a high attack bonus and deal good damage at range, but have lower hit points or AC than other foes. Sacrificing survivability can be fun, allowing these monsters to hit hard and die quickly. This creates tension and pressure early in an encounter, followed by increasing confidence as the heroes reach the artillery and quickly defeat them.\n\nArtillery creatures might strike at single targets or an area, and their high accuracy lets them deal consistent damage. Because they operate at range, you might focus the attacks of artillery foes on characters who usually stay out of trouble, using the flexibility of range to put them in peril. Alternatively, you can put their accuracy to use against the characters with the highest defenses.\n\n***When to Use Them.*** Artillery creatures work well in most encounters. Because of their placement at range, they draw attention away from other important targets such as controllers, leaders, or bosses. Artillery foes encourage characters to use resources to reach them, finish them off, and heal from their long-range damage.\n\n***Placement and Tactics.*** Artillery creatures seek cover and elevation from which to rain down destruction. They stand behind other monsters and blocking terrain so that characters can't easily get to them. They might also be placed without cover and to the sides of the battle, forcing characters who want to attack them to spread out—so that ambushers or skirmishers can pick those characters off. Place artillery closer to the action when you want them to be easy to reach and to draw attention deliberately away from other foes.\n\nArtillery creatures like to focus fire and group up on one target when possible. However, you want to change up that tactic if you start rolling too well, which can make artillery creatures extremely dangerous even in relatively easy encounters. Make sure getting to artillery foes is fun and not frustrating. A good rule of thumb is that characters shouldn't need to spend more than 1 round of movement to engage an artillery creature.\n\n***Example Artillery.*** Hill giant, mage, manticore, scout, solar. Of all the roles, artillery creatures are generally the least represented in typical 5e monster books.\n\n### Bruiser\n\nA bruiser foe deals higher-than-average melee damage, bringing the pain up close. But that focus on damage often comes with lower AC, lower attack accuracy, or lower hit points. Bruisers draw attention with their damage, and make fun opponents because they're often easy to hit, or die quickly.\n\nWhen a bruiser has low accuracy, a battle often feels swingy, with a sense of impending doom as each attack roll creates tension. Even when an attack misses, the players are usually watching that roll and wincing as they think about what would have happened if it hit.\n\n***When to Use Them.*** Bruisers should be used in most encounters, surprising players with their impressive damage. However, they should be used with care in encounters against 1st-level characters, who are particularly susceptible to being dropped with a single lucky blow.\n\nLike artillery, bruisers can be used to draw attention away from other important targets such as controllers, leaders, and bosses. Bruisers encourage characters to use resources, first to finish off the bruiser more quickly, then to heal up in the aftermath.\n\n***Placement and Tactics.*** Melee bruisers should be in the front lines, where they can deal damage as soon as possible. They might come out of side passages or otherwise surprise characters in the rear ranks, but bruisers seldom switch targets unless a different target is obviously easier to kill. Bruisers like to focus fire and group up on one target when possible, so keep an eye on their damage output to ensure that a few lucky attack rolls don't push the challenge level of an encounter too high.\n\n***Example Bruisers.*** Ettin, flesh golem, owlbear, shambling mound, wolf.\n\n### Controller\n\nController creatures use their attacks and features to impose conditions or otherwise impede characters from being their most effective. This role covers many different types of foes, and the extent of their control can vary. Some controller creatures grapple, swallow, or otherwise lock down targets, preventing movement. They might impose disadvantage on attacks through conditions such as poisoned or restrained, or use magic such as the *confusion* or *hold person* spells to limit actions.\n\n***When to Use Them.*** Controllers create dilemmas for a party to contend with. How do the characters change tactics when the fighter is poisoned and the cleric is inside a creature's gullet? These situations can be exciting and challenging, forcing characters to expend resources and think of clever solutions. However, used too often, too extensively, or too effectively, controller foes can feel like punishment. Be wary of a character rendered ineffective for several rounds, or of more than a couple of characters being ineffective for longer than 1 round. When a control effect feels clearly frustrating, try to change targets over the course of combat so that the same character isn't being controlled round after round.\n\n***Placement and Tactics.*** Controllers should be placed where they can't be easily reached, but close to prospective targets based on the range of their powers. Spellcaster controllers might be careful to always start farther than 60 feet from the characters—beyond the range of *counterspell*. A controller pairs well with a defender whose job is to keep the controller safe, or with skirmishers who can easily move around controlled characters. Controllers usually have trouble defeating characters one-on-one, due to their lower damage, but they work well with bruisers and artillery who can deal high damage to controlled characters.\n\n***Example Controllers.*** Black pudding, cockatrice, ettercap, harpy.\n\n### Defender\n\nDefender foes soak up hits and damage. They might deal lower-than-average damage or be less accurate with attacks, but have higher AC, saving throws, and hit points. They often look big and imposing, drawing attention to themselves by issuing challenges and making threats.\n\nSome defenders have attacks or features that pin characters in place—often referred to as \"sticky\" features that make the defender hard to get away from once engaged. Stickiness can also take the form of imposing penalties to attack any creatures other than the defender, or similar features that help the defender soak up the heroes' attacks.\n\n***When to Use Them.*** Defenders should be used sparingly, as too many defenders in an encounter or too many encounters featuring defenders can make combats longer and less interesting. Use them in fights where other vulnerable foes need assistance to prevent being taken down too quickly. Defenders work well with skirmishers or ambushers, who can surprise characters focused on the defender. They excel at protecting key villains, especially artillery or controller spellcasters.\n\n***Placement and Tactics.*** Defenders are often placed in the front lines to tie down characters. However, you can also place them farther back, closer to another creature they defend. Make sure defenders won't lock down all the characters at once, though. Combat works best when most characters can move around the encounter area and discover all it has to offer. You don't want to design an amazing encounter and then have the characters spend all their time locked down in specific locations.\n\n***Example Defenders.*** Animated armor, chuul, gelatinous cube, knight, shambling mound.\n\n### Leader\n\nA leader has features that help other creatures. They might heal, boost statistics such as attack modifiers or saving throws, or move other creatures, and they often have lower-than-average hit points, damage output, or accuracy.\n\n***When to Use Them.*** Leaders are most interesting when used sparingly, though they can be used more often when they are of different types. For example, a hobgoblin priest NPC focused on healing feels different from a duergar war priest who boosts their allies' attacks.\n\n***Placement and Tactics.*** Leaders can be placed according to the focus of their useful features, letting them help as many of their allies as possible. Because the characters often want to target them, leaders operate best in the center or slightly back from the center of the encounter area.\n\nLeaders make good bosses, or can act as lieutenants for bosses. Be careful when using them with skirmishers and ambushers, though, since characters moving to pursue those foes might go after the leader instead. A good default setup is to have one or two defenders protecting a leader.\n\n***Example Leaders.*** Couatl, knight, priest.\n\n### Skirmisher\n\nSkirmishers dance around the battlefield, using high mobility to dart in for an attack and then get away. They might have lower AC or hit points than other foes, but possess features that let them evade blows, retreat, or counterattack. Skirmishers are usually accurate, having a high attack bonus, and their damage might be especially high when using their mobility features.\n\n***When to Use Them.*** Use skirmishers to liven up battles. They can draw characters farther into an area of combat, making good use of areas that have dividing features such as interior walls, side chambers, or more than one level.\n\n***Placement and Tactics.*** Skirmishers should usually start far enough from the characters to show off their ability to move in and then move back out, forcing characters to reposition themselves. Skirmishers with high speed or supernatural movement can avoid or surpass terrain that challenges pursuing characters, who might trigger traps or spread out so other foes can surround them.\n\n***Example Skirmishers.*** Bulette, copper dragon, goblin, spy, wraith.",
            },
          ],
          order: 0,
        },
      ],
    },
    {
      id: "bossesandminions",
      title: "Bosses and Minions",
      intro:
        "When creating a boss battle, thinking about which bosses pair well with which minions can be a great starting point. You can use the table below to match up minions and bosses in a number of classic adventure environments.",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                boss_cr: "Boss CR",
                boss: "Boss",
                environments: "Environments",
                minions: "Minions",
              },
              data: [
                {
                  boss_cr: "1",
                  boss: "Goblin boss",
                  environments: "Caves, mountains",
                  minions: "Goblins, worgs",
                },
                {
                  boss_cr: "2",
                  boss: "Bandit captain",
                  environments: "Cities, sewers, ruins",
                  minions: "Bandits, spies, thugs, berserkers, gladiators",
                },
                {
                  boss_cr: "2",
                  boss: "Cult fanatic",
                  environments: "Cities, ruins",
                  minions: "Cultists, bandits, thugs, dretches",
                },
                {
                  boss_cr: "2",
                  boss: "Ettercap",
                  environments: "Caves, ruins",
                  minions: "Giant spiders",
                },
                {
                  boss_cr: "2",
                  boss: "Ghast",
                  environments: "Ruins, crypts, cities, sewers",
                  minions: "Ghouls, zombies",
                },
                {
                  boss_cr: "2",
                  boss: "Gnoll pack lord",
                  environments: "Plains, caves, ruins",
                  minions: "Gnolls, hyenas",
                },
                {
                  boss_cr: "2",
                  boss: "Ogre",
                  environments: "Ruins, caves",
                  minions: "Orcs, goblins",
                },
                {
                  boss_cr: "2",
                  boss: "Sea hag",
                  environments: "Coves, swamps, grottos",
                  minions: "Giant constrictor snakes, crocodiles",
                },
                {
                  boss_cr: "3",
                  boss: "Bugbear chief",
                  environments: "Keeps, fortresses, ruins, caves",
                  minions: "Bugbears, goblins, worgs",
                },
                {
                  boss_cr: "3",
                  boss: "Green hag",
                  environments: "Forests, swamps",
                  minions:
                    "Bullywugs, giant toads, giant constrictor snakes, imps, quasits",
                },
                {
                  boss_cr: "3",
                  boss: "Winter wolf",
                  environments: "Frozen mountains, frozen ruins",
                  minions: "Dire wolves, ice mephits",
                },
                {
                  boss_cr: "4",
                  boss: "Banshee",
                  environments: "Ruins, crypts",
                  minions: "Specters, skeletons",
                },
                {
                  boss_cr: "4",
                  boss: "Bone naga",
                  environments: "Ruins, crypts",
                  minions: "Skeletons, specters, wights",
                },
                {
                  boss_cr: "4",
                  boss: "Ettin",
                  environments: "Mountains, ruins, caves",
                  minions: "Ogres, orcs",
                },
                {
                  boss_cr: "4",
                  boss: "Lamia",
                  environments: "Ruins, towers, caves",
                  minions: "Jackalweres",
                },
                {
                  boss_cr: "4",
                  boss: "Lizard king/queen",
                  environments: "Swamps, sunken grottos",
                  minions: "Lizardfolk shamans, lizardfolk, monitor lizards",
                },
                {
                  boss_cr: "5",
                  boss: "Hill giant",
                  environments: "Mountains, ruins, caves",
                  minions: "Ogres, orcs, bugbears, goblins, cave bears",
                },
                {
                  boss_cr: "5",
                  boss: "Night hag",
                  environments: "Ruins, crypts, Lower Planes",
                  minions: "Hell hounds, quasits, manes, shadow demons",
                },
                {
                  boss_cr: "5",
                  boss: "Sahuagin baron",
                  environments: "Coves, grottos, underwater ruins",
                  minions:
                    "Sahuagin priestesses, sahuagin, reef sharks, giant octopuses, krakens",
                },
                {
                  boss_cr: "5",
                  boss: "Wraith",
                  environments: "Ruins, crypts",
                  minions: "Flameskulls, specters, wights",
                },
                {
                  boss_cr: "6",
                  boss: "Hobgoblin warlord",
                  environments: "Ruins, keeps, fortresses",
                  minions:
                    "Hobgoblin captains, hobgoblins, bugbears, goblins, worgs",
                },
                {
                  boss_cr: "6",
                  boss: "Mage",
                  environments: "Towers, cities",
                  minions:
                    "Animated armor, imps, acolytes, flesh golems, veterans",
                },
                {
                  boss_cr: "6",
                  boss: "Medusa",
                  environments: "Ruins, caves",
                  minions: "Basilisks, giant constrictor snakes, death dogs",
                },
                {
                  boss_cr: "7",
                  boss: "Oni",
                  environments: "Ruins, caves, cities",
                  minions: "Hobgoblins, orcs",
                },
                {
                  boss_cr: "8",
                  boss: "Frost giant",
                  environments: "Frozen mountains, frozen ruins",
                  minions:
                    "Yetis, young white dragons, polar bears, winter wolves",
                },
                {
                  boss_cr: "9",
                  boss: "Fire giant",
                  environments: "Volcanoes, caverns",
                  minions:
                    "Hell hounds, young red dragons, salamanders, azers, fire mephits",
                },
                {
                  boss_cr: "9",
                  boss: "Glabrezu",
                  environments: "Lower Planes, ruins, towers",
                  minions: "Barlguras, chasmes",
                },
                {
                  boss_cr: "10",
                  boss: "Aboleth",
                  environments: "Caverns, coves, lakes",
                  minions:
                    "Chuuls, cult fanatics, hydras, NPCs (enthralled), sea hags",
                },
                {
                  boss_cr: "11",
                  boss: "Efreeti",
                  environments: "Ruins, volcanoes, cities, deserts",
                  minions: "Fire elementals, salamanders, fire snakes",
                },
                {
                  boss_cr: "11",
                  boss: "Horned devil",
                  environments: "Lower Planes, ruins, towers",
                  minions: "Barbed devils, bearded devils, spined devils",
                },
                {
                  boss_cr: "12",
                  boss: "Archmage",
                  environments: "Towers, cities",
                  minions:
                    "Animated armor, imps, cambions, demons (any), elementals, golems",
                },
                {
                  boss_cr: "13",
                  boss: "Adult white dragon",
                  environments: "Frozen mountains, frozen ruins",
                  minions: "Yetis",
                },
                {
                  boss_cr: "13",
                  boss: "Vampire",
                  environments: "Ruins, crypts",
                  minions:
                    "Vampire spawn, giant bats, dire wolves, specters, wights",
                },
                {
                  boss_cr: "14",
                  boss: "Adult black dragon",
                  environments: "Swamps, sunken grottos",
                  minions:
                    "Giant crocodiles, trolls, bullywugs, lizardfolk, kuo-toa",
                },
                {
                  boss_cr: "15",
                  boss: "Adult green dragon",
                  environments: "Forests, ruins, caverns",
                  minions: "Treants, elves",
                },
                {
                  boss_cr: "15",
                  boss: "Mummy lord",
                  environments: "Ruins, crypts",
                  minions: "Mummies, skeletons, wights, cult fanatics",
                },
                {
                  boss_cr: "16",
                  boss: "Adult blue dragon",
                  environments: "Deserts, ruins, towers",
                  minions: "Air elementals, mages",
                },
                {
                  boss_cr: "16",
                  boss: "Marilith",
                  environments: "Lower Planes, ruins, towers",
                  minions: "Hezrous, vrocks",
                },
                {
                  boss_cr: "17",
                  boss: "Adult red dragon",
                  environments: "Mountains, volcanoes, ruins, caverns",
                  minions: "Fire elementals, kobolds",
                },
                {
                  boss_cr: "17",
                  boss: "Death knight",
                  environments: "Crypts, ruins, Lower Planes",
                  minions:
                    "Wights, wraiths, liches, flameskulls, nightmares, revenants",
                },
                {
                  boss_cr: "19",
                  boss: "Balor",
                  environments: "Lower planes, ruins",
                  minions:
                    "Mariliths, glabrezus, goristros, cambions, cult fanatics",
                },
                {
                  boss_cr: "20",
                  boss: "Ancient white dragon",
                  environments: "Frozen mountains, frozen ruins",
                  minions: "Abominable yetis",
                },
                {
                  boss_cr: "20",
                  boss: "Pit fiend",
                  environments: "Lower planes, ruins, towers",
                  minions: "Horned devils, bone devils, erinyes",
                },
                {
                  boss_cr: "21",
                  boss: "Ancient black dragon",
                  environments: "Swamps, sunken grottos",
                  minions: "Giant crocodiles, trolls, bullywugs, lizardfolk",
                },
                {
                  boss_cr: "21",
                  boss: "Lich",
                  environments: "Ruins, towers, crypts, caves",
                  minions: "Death knights, iron golems, wraiths, mages",
                },
                {
                  boss_cr: "22",
                  boss: "Ancient green dragon",
                  environments: "Forests, ruins, caverns",
                  minions: "Treants, elves",
                },
                {
                  boss_cr: "23",
                  boss: "Ancient blue dragon",
                  environments: "Deserts, ruins, towers",
                  minions: "Air elementals, mages",
                },
                {
                  boss_cr: "24",
                  boss: "Ancient red dragon",
                  environments: "Mountains, volcanoes, ruins, caverns",
                  minions: "Fire giants, fire elementals, kobolds",
                },
              ],
            },
          ],
          order: 0,
        },
      ],
    },
    {
      id: "combatencounterchecklist",
      title: "The Combat Encounter Checklist",
      intro:
        "Sometimes all a game needs is an interesting location and some cool monsters to fight, setting up a combat encounter that a GM might build right at the table. The characters go somewhere, everyone decides it's time for a fun fight, and you whip something up. Or you determine that, given the circumstances going on in the story, it's time for the characters to run into some opposition, and you're off to the races.\n\nSometimes we need more, though, particularly for big set-piece battles or boss fights. When it's time to build an interesting and dynamic encounter, the following checklist can help determine what options a big combat might need:",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Interesting monsters" },
                { item: "A fantastic location" },
                { item: "Zone-wide effects" },
                { item: "Traps and hazards" },
                { item: "Advantageous positions" },
                { item: "Interactive objects" },
                { item: "Cover" },
                { item: "Difficult or fantastic terrain" },
                { item: "A goal" },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                "No battle needs all these things, but it's worth running through the list to see which options fit the sort of combat scenario you're putting together.",
            },
          ],
          order: 0,
        },
        {
          id: "interestingmonsters",
          title: "Interesting Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "For a big, self-contained combat encounter, a single monster usually won't do it. Even several monsters of the same type might not prove interesting enough for a big fight. Complex, climactic battles often work best with two or three creature types that work well together—big bruisers up front and powerful artillery in the back, for example.However, having more than three types of creatures in any one battle is going to be hard to manage. As such, designing a big set-piece battle is also a great time to think about waves of monsters.",
            },
          ],
          order: 1,
        },
        {
          id: "afantasticlocation",
          title: "A Fantastic Location",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "An empty, 50-foot-square room doesn't lend itself to an interesting set-piece battle. We want fantastic rooms with interesting shapes, lots of room to move around, and a cool environment for the characters to spend time in. Great self-contained fights are like theme parks where the characters can climb up big statues, swing from chandeliers, and dance across elevated platforms. Whether you're playing online or in person, you can purchase battle maps showing off interesting locations, or might find maps that cartographers have released for free. Build a library of cool maps that inspire your players to enjoy the scenery while they're kicking ass.\n\nHowever, you want to ensure that your fantastic location isn't too big. It's no fun to have a character spend multiple rounds running to the far side of an arena—only to arrive just in time to watch the other characters drop the big bad to the mat. Let all the characters get to the meaty part of a location in two moves at most.",
            },
          ],
          order: 2,
        },
        {
          id: "zone-wideeffects",
          title: "Zone-Wide Effects",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Sometimes a combat environment has a big ongoing effect—something that impacts all the creatures in the area, no matter where they are. Such zone-wide effects can make a fight more interesting, as with any of the following examples:\n\nAvoid zone-wide effects that are just plain annoying. Having creatures fall down a lot because of icy floors sounds fun—until all the characters are lying on their backs and the players are wishing they'd never entered the fight in the first place.\n\nLikewise, certain effects hurt some classes more than others. Disadvantage on attack rolls hurts martial combatants more than spellcasters. Limiting movement hurts melee attackers, while limiting visibility hurts ranged attackers. Be aware of when a zone-wide effect affects some characters more than others, so that you can change it up if needed.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Unholy energy in a crypt makes healing magic only half as effective as normal.",
                },
                {
                  item: "Supernatural fire negates any creature's resistance to fire, and turns immunity to fire into resistance.",
                },
                {
                  item: "Psychic wailing forces each character to succeed on a DC 10 Constitution check to successfully cast a spell.",
                },
                {
                  item: "Periodic bolts of lightning strike, with each creature in combat having a 1-in-4 chance of being struck at the start of their turn.",
                },
                {
                  item: "An arcane rift causes each damaging spell cast in a fight to deal an extra 2d6 force damage.",
                },
                {
                  item: "An aura of bloody rage fills the area, granting each combatant advantage on attack rolls.",
                },
                {
                  item: "A rift to a realm of chaos causes all spells to trigger a wild magic surge.",
                },
                {
                  item: "The god of blood infuses all melee attacks with an extra die of damage.",
                },
                {
                  item: "A rift in space-time lets a creature swap places with an enemy within 60 feet if that enemy fails a DC 12 Wisdom saving throw.",
                },
                {
                  item: "A thick fog makes it impossible to see creatures more than 30 feet away.",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "trapsandhazards",
          title: "Traps and Hazards",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Certain parts of a battlefield might contain traps or hazards. Some of these might be easily seen, such as bladed pillars or spike-lined pits. Others might come as a surprise, such as a trap door over an acid pool.\n\nCharacters with high passive Wisdom (Perception) scores might notice hidden traps automatically, or you might give each character a chance to make a Wisdom (Perception) check requiring no action—maybe even rolling on their behalf—to detect a trap before stumbling into it.\n\nMake sure these traps matter if you're going to put them in an encounter. Traps that are too far out of the way might never come into play. Likewise, it can be fun for players to spring traps on their opponents, so don't use them only as a threat against the characters.",
            },
          ],
          order: 4,
        },
        {
          id: "advantageouspositions",
          title: "Advantageous Positions",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Getting the characters to enter an arena (literal or metaphorical) and move around can be hard. Advantageous positions give them a reason to do so. Areas of high ground where they can gain cover against their foes—and perhaps advantage on attacks—are highly sought after by ranged attackers. Arcane circles that infuse a spellcaster\'s magic with greater power might draw wizards into a room. This approach can turn a whole encounter into a fun game of "king of the hill" as the characters and their enemies fight for superior position.',
            },
          ],
          order: 5,
        },
        {
          id: "interactiveobjects",
          title: "Interactive Objects",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Make sure that the battlefield features some interactive objects. This can include any physical features the characters can manipulate and use to their advantage in a fight, including things like the following:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Crumbling statues that can be easily toppled" },
                { item: "Pillars that collapse part of the ceiling" },
                { item: "Chandeliers upon which to swing" },
                {
                  item: "Ballistas the characters can use to fire upon their foes",
                },
                {
                  item: "Obelisks infusing the villain with power until they're destroyed",
                },
                {
                  item: "Levers that physically or magically transform parts of the battlefield",
                },
                {
                  item: "Catapults that can hurl allies to the far side of the fight",
                },
                {
                  item: "Cranes lifting heavy objects that can be dropped onto foes",
                },
                { item: "Fiery cauldrons or braziers ready to tip over" },
                { item: "Deep wells into which enemies can be dumped" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "cover",
          title: "Cover",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Shattered pillars, crumbling statues, destroyed furniture, fallen trees, and other forms of cover can help break up the otherwise open terrain of a big battleground. When you drop in these elements of cover, be sure that the players understand the advantages of hiding behind them.\n\nFor bonus points, tie the history of the location and other secrets and clues to these elements of cover. It's not just a statue—it's a statue of the forgotten god Gan, lost in history and now seeking just one follower to pull their spark of divinity from the edges of infinite darkness.",
            },
          ],
          order: 7,
        },
        {
          id: "difficultorfantasticterrain",
          title: "Difficult or Fantastic Terrain",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Different areas of a location might have some sort of terrain feature that can impact the fight. Difficult terrain is the easiest option, making it challenging but not impossible to take certain routes across the battlefield. But other areas of interesting terrain can also shake up a physical encounter. Icy floors where the characters might slip don't work well as a zone-wide effect. But they can be great in specific areas, forcing the characters to avoid those areas as they move.\n\nAny of the following terrain features can make a big battle location more interesting:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "A crumbling bridge over a deep crevasse" },
                {
                  item: "Spikes of sharp glass that cut creatures when they fall or are forced to move through them",
                },
                { item: "Jets of flame that randomly erupt" },
                {
                  item: "Swampy land that belches forth poisonous gas when crossed",
                },
                {
                  item: "Oiled surfaces that cause creatures to slide across them uncontrollably.",
                },
                {
                  item: "Electrified floors that deal damage to creatures at the start of each turn",
                },
                {
                  item: "An area filled with antigravity magic that causes creatures to fall to the ceiling",
                },
                {
                  item: "An ethereal rift where creatures become invisible and insubstantial",
                },
                {
                  item: "Pockets of shadow where characters have their life energy drained away",
                },
                {
                  item: "An area of antilife magic where living creatures gain vulnerability to necrotic damage",
                },
              ],
            },
          ],
          order: 8,
        },
        {
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
                {
                  item: "Close a magical gateway and prevent the villain's escape.",
                },
                {
                  item: "Destroy a doomsday device before it blows up the multiverse.",
                },
              ],
            },
          ],
          order: 9,
        },
      ],
    },
    {
      id: "monstercombinationsforahardchallenge",
      title: "Monster Combinations for a Hard Challenge",
      intro:
        "When GMs design encounters, we often have a concept that includes the number of foes the characters will face. An encounter might feature a squad of four monsters going against the characters one-to-one, or perhaps a larger force of six or eight swarming the heroes. Or maybe we want a stronger creature, acting as a boss or captain, with only a few other creatures to back them up. And, of course, it's always fun for characters to face a single dangerous foe.\n\nThis section provides guidelines for combining creatures of different challenge ratings to enable these various concepts. Simply pick your concept, consult the appropriate table for the number of characters in your game, look up their average character level, and you have the monster challenge ratings you need to build different types of encounters and boss scenarios. You can then use the other tips in this document to make encounters unique.",
      subsections: [
        {
          id: "hardchallengelevelmonstercombinations",
          title: "Hard Challenge Level Monster Combinations",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The challenge ratings in the tables are geared toward creating encounters that are a hard challenge. The encounter concepts are set up along specific lines, reflecting some of the most common—and fun—combinations of foes.\n\n***One Monster.*** The leftmost column notes the challenge rating expected for a solo creature whose statistics and capabilities can build a hard challenge. Running an encounter for a single solo monster is always tricky, so make sure an intended solo creature is up to the challenge.\n\n***Two, Four, Six, Eight, or Twelve Monsters.*** The other columns under Monsters of the Same CR allow you to challenge the characters with a number of creatures of the same CR, and usually of the same type. For example, a hard challenge for four 4th-level characters could constitute six scouts (CR 1/2) or two ogres (CR 2).\n\nUsing creatures of the same type allows you to quickly and simply tell a story as the characters find themselves in an ogre market cavern, a caravan under attack, the room with mimics, and so forth. Using the same monsters also lets you focus on a single stat block for ease of play.\n\n***One Boss + X Monsters.*** Encounter concepts often suggest a group of creatures led by a more formidable leader. Each of the Boss Scenarios columns pairs up one boss and a number of subordinates of lower challenge rating. For example, a group of four 3rd-level characters could face one boss of CR 2 and two subordinates of CR 1/2-perhaps an ogre explorer and the two rust monsters they've befriended.\n\nThe rightmost column under Boss Scenarios builds encounters with eight minions, two lieutenants of a higher challenge rating, and one boss whose CR is higher again.\n\n### Using the Tables\n\nTo build encounters using the tables, follow these steps:\n\n### Scaling Encounters\n\nEach of the tables is intended to build a hard encounter. However, you can easily build encounters with other challenge levels in mind by adding or subtracting a modifier to the party's average character level:\n\nFor example, when building an encounter for four 10th-level characters, you could use the row for 8th-level characters to create a medium challenge.\n\nIn all cases, be cautious with scaling. Encounters of certain types and at certain levels will be harder or easier than the approximation would indicate. Always be prepared to adjust encounters on the fly.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Select the appropriate table, based on the number of characters in the party—four, five, or six.",
                },
                {
                  item: "In the leftmost column of the selected table, find the row containing the average character level for all the characters. (To find the average, add up all the characters' levels, then divide by the number of characters and round down.)",
                },
                {
                  item: "Follow that row to the column containing the encounter concept you wish to use. For example, to create an encounter with one boss and three lesser monsters, you'd go to the 1 Boss + 3 Monsters column.",
                },
                {
                  item: 'The entry you cross-referenced notes the challenge ratings of the creature or creatures in your encounter. If a multiplier is indicated, that\'s the number of monsters for the preceding CR. For example, wanting to challenge four 3rd-level characters with the encounter concept of one boss and three monsters yields an entry of "2 + 1/4 (×3)." This indicates that you want one CR 2 creature acting as the boss, and three CR 1/4 creatures acting as subordinates.',
                },
                {
                  item: 'Choose your monsters! If you\'re building a quick encounter, the recommendations in "Monsters by Adventure Location" are a good starting point.',
                },
              ],
            },
            {
              type: "table",
              order: 2,
              data: [
                { item: "For a deadly challenge: +1 or +2" },
                { item: "For a medium challenge: −2" },
                { item: "For an easy challenge: −4" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "fourcharacters",
          title: "Four Characters (Hard Challenges)",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                item: "",
                monsters_of_the_same_cr: "Monsters of the Same CR",
                boss_scenarios: "Boss Scenarios",
              },
              data: [
                {
                  item: "1 Boss + 2 Lieutenants + 8 Minions",
                  monsters_of_the_same_cr: "1",
                  boss_scenarios: "2",
                },
                {
                  item: "-",
                  monsters_of_the_same_cr: "1",
                  boss_scenarios: "1/2",
                },
                {
                  item: "1/2 + 1/4 (x2) + 0 (x8)",
                  monsters_of_the_same_cr: "3",
                  boss_scenarios: "1",
                },
                {
                  item: "1 + 1/4 (x2) + 0 (x8)",
                  monsters_of_the_same_cr: "4",
                  boss_scenarios: "2",
                },
                {
                  item: "2 + 1/4 (x2) + 0 (x8)",
                  monsters_of_the_same_cr: "5",
                  boss_scenarios: "2",
                },
                {
                  item: "3 + 1/2 (x2) + 1/4 (x8)",
                  monsters_of_the_same_cr: "8",
                  boss_scenarios: "4",
                },
                {
                  item: "4 + 1 (x2) + 1/4 (x8)",
                  monsters_of_the_same_cr: "9",
                  boss_scenarios: "5",
                },
                {
                  item: "4 + 1 (x2) + 1/2 (x8)",
                  monsters_of_the_same_cr: "10",
                  boss_scenarios: "6",
                },
                {
                  item: "4 + 2 (x2) + 1/2 (x8)",
                  monsters_of_the_same_cr: "12",
                  boss_scenarios: "7",
                },
                {
                  item: "5 + 2 (x2) + 1/2 (x8)",
                  monsters_of_the_same_cr: "12",
                  boss_scenarios: "8",
                },
                {
                  item: "5 + 2 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "14",
                  boss_scenarios: "8",
                },
                {
                  item: "6 + 3 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "16",
                  boss_scenarios: "9",
                },
                {
                  item: "7 + 4 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "18",
                  boss_scenarios: "11",
                },
                {
                  item: "8 + 4 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "19",
                  boss_scenarios: "12",
                },
                {
                  item: "8 + 5 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "20",
                  boss_scenarios: "13",
                },
                {
                  item: "9 + 5 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "21",
                  boss_scenarios: "14",
                },
                {
                  item: "10 + 6 (x2) + 3 (x8)",
                  monsters_of_the_same_cr: "22",
                  boss_scenarios: "15",
                },
                {
                  item: "12 + 6 (x2) + 3 (x8)",
                  monsters_of_the_same_cr: "24",
                  boss_scenarios: "16",
                },
                {
                  item: "13 + 7 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "26",
                  boss_scenarios: "17",
                },
                {
                  item: "13 + 8 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "27",
                  boss_scenarios: "19",
                },
                {
                  item: "14 + 8 (x2) + 5 (x8)",
                  monsters_of_the_same_cr: "29",
                  boss_scenarios: "19",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "fivecharacters",
          title: "Five Characters (Hard Challenges)",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                item: "",
                monsters_of_the_same_cr: "Monsters of the Same CR",
                boss_scenarios: "Boss Scenarios",
              },
              data: [
                {
                  item: "1 Boss + 2 Lieutenants + 8 Minions",
                  monsters_of_the_same_cr: "1",
                  boss_scenarios: "2",
                },
                {
                  item: "-",
                  monsters_of_the_same_cr: "1",
                  boss_scenarios: "1/2",
                },
                {
                  item: "1/2 + 1/4 (x2) + 0 (x8)",
                  monsters_of_the_same_cr: "4",
                  boss_scenarios: "1",
                },
                {
                  item: "1 + 1/4 (x2) + 1/8 (x8)",
                  monsters_of_the_same_cr: "5",
                  boss_scenarios: "2",
                },
                {
                  item: "2 + 1/4 (x2) + 1/8 (x8)",
                  monsters_of_the_same_cr: "6",
                  boss_scenarios: "3",
                },
                {
                  item: "3 + 1 (x2) + 1/2 (x8)",
                  monsters_of_the_same_cr: "9",
                  boss_scenarios: "5",
                },
                {
                  item: "4 + 1 (x2) + 1/2 (x8)",
                  monsters_of_the_same_cr: "11",
                  boss_scenarios: "6",
                },
                {
                  item: "4 + 2 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "12",
                  boss_scenarios: "7",
                },
                {
                  item: "5 + 2 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "13",
                  boss_scenarios: "8",
                },
                {
                  item: "6 + 2 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "14",
                  boss_scenarios: "8",
                },
                {
                  item: "6 + 3 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "15",
                  boss_scenarios: "9",
                },
                {
                  item: "6 + 4 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "17",
                  boss_scenarios: "11",
                },
                {
                  item: "8 + 4 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "19",
                  boss_scenarios: "12",
                },
                {
                  item: "9 + 4 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "20",
                  boss_scenarios: "13",
                },
                {
                  item: "10 + 5 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "22",
                  boss_scenarios: "14",
                },
                {
                  item: "11 + 5 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "22",
                  boss_scenarios: "15",
                },
                {
                  item: "11 + 7 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "24",
                  boss_scenarios: "16",
                },
                {
                  item: "12 + 7 (x2) + 3 (x8)",
                  monsters_of_the_same_cr: "25",
                  boss_scenarios: "17",
                },
                {
                  item: "12 + 8 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "27",
                  boss_scenarios: "18",
                },
                {
                  item: "13 + 9 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "28",
                  boss_scenarios: "20",
                },
                {
                  item: "14 + 9 (x2) + 5 (x8)",
                  monsters_of_the_same_cr: "29",
                  boss_scenarios: "20",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "sixcharacters",
          title: "Six Characters (Hard Challenges)",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                item: "",
                monsters_of_the_same_cr: "Monsters of the Same CR",
                boss_scenarios: "Boss Scenarios",
              },
              data: [
                {
                  item: "1 Boss + 2 Lieutenants + 8 Minions",
                  monsters_of_the_same_cr: "1",
                  boss_scenarios: "2",
                },
                {
                  item: "-",
                  monsters_of_the_same_cr: "1",
                  boss_scenarios: "1",
                },
                {
                  item: "1/2 + 1/4 (x2) + 1/8 (x8)",
                  monsters_of_the_same_cr: "5",
                  boss_scenarios: "2",
                },
                {
                  item: "1 + 1/2 (x2) + 1/4 (x8)",
                  monsters_of_the_same_cr: "7",
                  boss_scenarios: "3",
                },
                {
                  item: "2 + 1/2 (x2) + 1/4 (x8)",
                  monsters_of_the_same_cr: "8",
                  boss_scenarios: "4",
                },
                {
                  item: "3 + 1 (x2) + 1/2 (x8)",
                  monsters_of_the_same_cr: "10",
                  boss_scenarios: "6",
                },
                {
                  item: "3 + 2 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "12",
                  boss_scenarios: "8",
                },
                {
                  item: "5 + 2 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "13",
                  boss_scenarios: "9",
                },
                {
                  item: "6 + 3 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "15",
                  boss_scenarios: "11",
                },
                {
                  item: "6 + 4 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "16",
                  boss_scenarios: "12",
                },
                {
                  item: "7 + 4 (x2) + 1 (x8)",
                  monsters_of_the_same_cr: "17",
                  boss_scenarios: "13",
                },
                {
                  item: "8 + 4 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "19",
                  boss_scenarios: "14",
                },
                {
                  item: "9 + 5 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "20",
                  boss_scenarios: "16",
                },
                {
                  item: "10 + 6 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "21",
                  boss_scenarios: "17",
                },
                {
                  item: "9 + 7 (x2) + 2 (x8)",
                  monsters_of_the_same_cr: "23",
                  boss_scenarios: "17",
                },
                {
                  item: "9 + 7 (x2) + 3 (x8)",
                  monsters_of_the_same_cr: "24",
                  boss_scenarios: "18",
                },
                {
                  item: "11 + 7 (x2) + 3 (x8)",
                  monsters_of_the_same_cr: "25",
                  boss_scenarios: "19",
                },
                {
                  item: "11 + 7 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "27",
                  boss_scenarios: "20",
                },
                {
                  item: "12 + 8 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "28",
                  boss_scenarios: "21",
                },
                {
                  item: "13 + 9 (x2) + 4 (x8)",
                  monsters_of_the_same_cr: "29",
                  boss_scenarios: "21",
                },
                {
                  item: "13 + 10 (x2) + 5 (x8)",
                  monsters_of_the_same_cr: "30",
                  boss_scenarios: "22",
                },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "lazyencounterbenchmark",
      title: "The Lazy Encounter Benchmark",
      intro:
        'This section sets out a simple calculation you can keep in your head to give you a gauge of the difficulty of an encounter. This "lazy encounter benchmark" isn\'t perfect or precise. Rather, it\'s a tool for getting a rough sense of the potential challenge of a combat encounter–and for recognizing when an encounter crosses over from challenging to potentially deadly. Think of it like a tachometer measuring how fast the engine is running in a car. If you go beyond the limit defined by the benchmark, you\'re "in the red"–pushing to a point where your encounter might be more than the characters can handle.',
      subsections: [
        {
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
                {
                  item: "Most characters might lose more than half their hit points.",
                },
                { item: "Several characters might go unconscious." },
                {
                  item: "There's a chance that one or more characters might die.",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "optionalscalingforhigherlevels",
          title: "Optional Scaling for Higher Levels",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "As characters rise in level above 10th, their increased power and synergies mean that you might find the benchmark becomes less accurate about representing the potential deadliness of encounters. If this is the case in your games, you can scale up the benchmark equation for higher-level characters with the following variation:\n\n**An encounter might be deadly if the sum total of monster challenge ratings is greater than 3/4 of the sum total of character levels, for characters of 11th to 16th level; or equal to the sum total of character levels, for characters of 17th level or higher.**\n\nExplore this option only if it feels as though encounters assessed using the original benchmark are consistently underpowered for your group. But if you need it, this option sets the benchmark for truly dangerous encounters at the highest levels, where characters of great heroic capability might face several powerful creatures in a single battle.",
            },
          ],
          order: 1,
        },
        {
          id: "thecrcapforasinglemonster",
          title: "The CR Cap for a Single Monster",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Although the lazy encounter benchmark uses the total challenge ratings of all monsters in an encounter, it doesn't take into consideration the maximum challenge rating for any single monster, either alone or with a group. For that, you can use a different benchmark calculation to describe when a single monster of a particular challenge rating might represent a deadly challenge for characters of a given level, whether battled alone or in a group:\n\n**A single monster might be deadly if their challenge rating is equal to or higher than the average level of the characters, or 1.5 times the average level of the characters if the characters are 5th level or higher.**",
            },
          ],
          order: 2,
        },
        {
          id: "tuningthebenchmark",
          title: "Tuning the Benchmark",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Given the many different circumstances that can affect character power and encounter difficulty, you might want to tune the benchmark calculation up or down to serve as a more accurate guideline for your own group. To do so, simply increase or decrease the number of characters you use to calculate the sum total of character levels, treating that as a dial for tuning the benchmark for your own group.\n\nFor example, if a party in your campaign has companion NPCs who make combat easier, or if characters employ spells that often remove monsters from combat, you can pretend the group consists of six characters instead of their actual five and calculate the benchmark that way. Likewise, if a group regularly gets into trouble in encounters where the sum total of monster CR is well below the benchmark, pretend the party has four characters instead of five.",
            },
          ],
          order: 3,
        },
        {
          id: "otherconsiderations",
          title: "Other Considerations",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Many circumstances can change how challenging an actual combat encounter might be. All of the following examples set up types of encounters that often play out more easily than the lazy encounter benchmark might suggest:\n\nLikewise, the monsters might be favored over the characters in the following types of encounters:\n\nAs you make use of the benchmark, you'll soon come to recognize when the circumstances of a combat encounter might steer it toward an easier or harder fight.\n\n> ***Alternative Benchmark***\n\n> An alternative approach to the lazy encounter benchmark lets you compare monster challenge ratings and character levels with a single straightforward formula, as follows:\n\n> To assess the strength of the characters relative to the monsters they face, take the sum total of all character levels and divide by 4. Then multiply that number by the characters' tier.\n\n> At 1st tier (levels 1 to 4), the benchmark is simply the total of all character levels divided by 4. But as characters rise in level and across the tiers of play, they experience three distinct bumps in power at 5th level (the start of the second tier, multiplying the benchmark by 2), 11th level (the start of the third tier, for a ×3 multiplier), and 17th level (the start of the fourth tier, for a ×4 multiplier).\n\n> In a broad sense, characters of the second tier can be thought of as effectively twice as powerful as characters of the first tier, with characters of the third and fourth tiers increasing in power yet again. However, as with the default versions of the benchmarks, it's important to remember that increasing the multipliers for the third and fourth tier is optional, and should be done only if you find that encounters created with the ×2 multiplier aren't keeping up to the characters.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "The fight features significantly more characters than foes.",
                },
                {
                  item: "The characters' goals in an encounter can be achieved without eliminating all the foes from the fight.",
                },
                { item: "The environment favors the characters." },
                { item: "The monsters come in waves instead of all at once." },
                {
                  item: "Foes are distracted or in disadvantageous positions.",
                },
                {
                  item: "The monsters are all surprised, or all act after the characters in initiative.",
                },
                {
                  item: "The characters have spells or features well suited for taking out foes.",
                },
                {
                  item: "The players engage in excellent tactical behavior and synergistic strategies.",
                },
                { item: "The characters are well rested and coming in fresh." },
                {
                  item: "The characters have an arsenal of powerful magic items.",
                },
                { item: "The characters have useful companions." },
              ],
            },
            {
              type: "table",
              order: 2,
              data: [
                { item: "The monsters outnumber the characters." },
                { item: "The characters are surprised by the monsters." },
                { item: "Foes have advantageous position." },
                { item: "The terrain favors the foes." },
                { item: "The monsters fight with a strong tactical synergy." },
                {
                  item: "The characters are coming in well worn by previous fights and have no chance to rest.",
                },
              ],
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "monstersbyadventurelocation",
      title: "Monsters by Adventure Location",
      intro:
        "This section offers quick starting points for building encounters, in the form of tables that cover a broad range of foes in twelve types of common adventure location. The tables serve four purposes:",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "They show which creatures might inhabit a particular adventure location.",
                },
                {
                  item: "They highlight foes appropriate for a given level range in that location.",
                },
                {
                  item: "They show which foes might naturally pair up with other foes.",
                },
                {
                  item: "They offer example relationships between creatures and suggest what they might be doing in a location.",
                },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Though you can use the setups in the tables directly, you\'ll get even more value from them by customizing your own list of foes for these common locations and scenarios—or by adding environments and scenarios that fit the specifics of your campaign.\n\nEach line in the "Example Encounters" column contains an example encounter with multiple monsters. You can decide how many monsters are appropriate given the scenario, the number of characters, and their level.\n\nMonsters who are in **bold** represent potential bosses for an encounter.',
            },
          ],
          order: 0,
        },
        {
          id: "ancientruins",
          title: "Ancient Ruins",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>A <strong>thug</strong> leads bandits intending to rob a caravan.</li><li>A vengeful <strong>shadow</strong> shifts in the darkness among a handful of arisen skeletons.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A pair of <strong>bugbear</strong> entrepreneurs use goblin actors as bait to seek adventurers as prey.</li><li>A sorrowful <strong>banshee</strong> orders specters to recreate their former beautiful life.</li><li>A <strong>gnoll pack lord</strong> bounty hunter leads gnolls and hyenas after an escaped prisoner.</li><li>A <strong>death dog</strong> protected by wolves lairs in a ruined cave.</li><li>A <strong>lamia</strong> served by jackalweres dwells in an illusory paradise.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>A wise <strong>bugbear chief</strong> leads bugbear and goblin soldiers from an obsidian throne.</li><li>A <strong>cyclops</strong> matriarch leads fanatically loyal ogres.</li><li>A solitary <strong>medusa</strong> dwells in a mausoleum, surrounded by petrified heroes and protected by death dogs.</li><li>A noble <strong>oni</strong> in a posh den is guarded by loyal spirit naga storytellers.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>An <strong>adult blue dragon</strong> is guarded by clay golems in a jeweled lair.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>An <strong>ancient blue dragon</strong> protected by stone golems and air elementals dwells in the shattered remains of a tower.</li></ul>",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "cryptscatacombsnecropolises",
          title: "Crypts, Catacombs, Necropolises",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>A pair of <strong>skeletons</strong> rises from a pile of crawling claws.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A lost <strong>ghost</strong> wanders, surrounded by specters.</li><li>A <strong>bone naga</strong> rises from an obsidian sarcophagus to command a host of skeletons.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>A <strong>mummy lord</strong> entombed in a cold-iron sarcophagus is guarded by mummies and wights.</li><li>A pair of <strong>wraiths</strong> float above unholy urns surrounded by vengeful specters.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>A <strong>vampire</strong> in a gilded tomb is guarded by howling dire wolves and served by vampire spawn.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>A <strong>lich</strong> in an unhallowed laboratory is protected by loyal death knights and iron golems.</li></ul>",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "citysewers",
          title: "City Sewers",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>A wandering <strong>zombie</strong> is covered by a swarm of rats.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>An erudite <strong>ghast</strong> weaves fantastic tales to their ravenous ghoul followers.</li><li>A <strong>spy</strong> is guarded by unscrupulous bandits while awaiting the arrival of a contact.</li><li>An <strong>otyugh</strong> luxuriates in a watery pit, surrounded by concealed gray oozes.</li><li><strong>Wererats</strong> try to be intimidating by threatening to feed prisoners to their giant rat pets.</li></ul>",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "seedycitystreets",
          title: "Seedy City Streets",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>A <strong>giant rat</strong> and the swarm of rats that travels with them are feeding on a dead body.</li><li>A <strong>thug</strong> and a pack of bandit toadies are waiting for someone to rob.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A <strong>spy</strong> assisted by thugs has been hired to steal something from the characters.</li><li>A <strong>bandit captain</strong> with berserker bodyguards and bandit followers is easily insulted.</li><li>A <strong>cult fanatic</strong> leads cultists who have summoned ravenous dretches into the world.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>A <strong>mage</strong> commanding veterans is seeking something the characters seek as well.</li><li>A <strong>bandit captain</strong> protected by hired gladiators and veterans seeks the characters with an offer they can't refuse.</li><li>A careful <strong>assassin</strong> backed up by spies and thugs hunts the characters.</li></ul>",
                },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "wizardstower",
          title: "Wizard's Tower",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>A loyal <strong>imp</strong> commands a squad of guardian flying swords.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A summoned <strong>succubus</strong> or <strong>incubus</strong> directs animated armor serving as guards.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>Apprentice <strong>mages</strong> command elementals and flesh golems.</li><li>An important chamber is guarded by two <strong>flameskulls</strong> and a number of helmed horrors.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>An impatient <strong>archmage</strong> is protected by two stone golems in an arcane laboratory.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>A <strong>lich</strong> studies the multiverse while protected by bound balors and iron golems.</li></ul>",
                },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "volcanolair",
          title: "Volcano Lair",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>A <strong>fire giant</strong> with pet hell hounds commands an azer to dig for them.</li><li>A trapped <strong>efreeti</strong> uses fire elementals to fight for freedom.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>An <strong>adult red dragon</strong> served by salamanders demands fealty from the characters.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>An <strong>ancient red dragon</strong> worshiped by fire giants awakens from slumber.</li></ul>",
                },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "abyssalkeep",
          title: "Abyssal Keep",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A <strong>night hag</strong> and their pet quasit schemes within a chamber guarded by hell hounds.</li><li>A summoning circle disgorges a <strong>barlgura</strong> and a gang of dretches.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>A <strong>glabrezu</strong> commands from a throne flanked by chasmes.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>A <strong>marilith</strong>, their cambion advisor, and a number of hezrou servants guard a planar gateway.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>A <strong>balor</strong>, a servile archmage, and a squad of glabrezu soldiers guard an artifact.</li></ul>",
                },
              ],
            },
          ],
          order: 7,
        },
        {
          id: "darkforestsandfetidswamps",
          title: "Dark Forests and Fetid Swamps",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>An elf <strong>cultist</strong> hunts prey with bloodthirsty wolves.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>Two <strong>ettercaps</strong> and their giant spiders stalk adventurers.</li><li>An <strong>ettin</strong> warlord commands a host of orc mercenaries.</li><li>A <strong>green hag</strong> lurks in an old hut with a pet giant toad, and is guarded by loyal bullywugs.</li><li>A <strong>werewolf</strong> prowls the shadows with their dire wolf companions.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>An <strong>orc war chief</strong> commands a force of ettin and orc scouts based in a ruined keep.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>An <strong>adult black dragon</strong> commands a host of trolls made loyal through fear.</li><li>An <strong>adult green dragon</strong> lurks in a dead forest, protected by shambling mounds.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>An <strong>ancient black dragon</strong> dwells in a sunken bog filled with giant crocodiles.</li><li>An <strong>ancient green dragon</strong> rules from an ancient wooden throne guarded by loyal treants.</li></ul>",
                },
              ],
            },
          ],
          order: 8,
        },
        {
          id: "hellishcitadel",
          title: "Hellish Citadel",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A <strong>bearded devil</strong> draws lemures through a portal connected to the river Styx.</li><li>A <strong>barbed devil</strong> and a host of imps keep watch on enemy forces.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>An armored <strong>erinyes</strong> commanding a host of spined devils prepares for war.</li><li>A <strong>horned devil</strong> leading bearded devil soldiers guards an oracular sphere.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li><strong>Ice devil</strong> wardens and bone devil guards protect a valuable prisoner.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li><strong>Pit fiend</strong> commanders and horned devil lieutenants use scrying crystals to get the drop on the characters.</li></ul>",
                },
              ],
            },
          ],
          order: 9,
        },
        {
          id: "frozenfortress",
          title: "Frozen Fortress",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li><strong>Frost giant</strong> hunters enjoy the sport of their remorhaz pet stalking commoners.</li><li>The bone-cluttered cave of an <strong>abominable yeti</strong> is guarded by winter wolves.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>An <strong>adult white dragon</strong> is served by loyal frost giants.</li></ul>",
                },
                {
                  level: "17th to 20th",
                  example_encounters:
                    "<ul><li>An <strong>ancient white dragon</strong> lairing atop an inaccessible peak is worshiped by generations of abominable yetis.</li></ul>",
                },
              ],
            },
          ],
          order: 10,
        },
        {
          id: "deepcaverns",
          title: "Deep Caverns",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
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
        },
        {
          id: "sunkengrotto",
          title: "Sunken Grotto",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                level: "Level",
                example_encounters: "Example Encounters",
              },
              data: [
                {
                  level: "1st",
                  example_encounters:
                    "<ul><li>A <strong>lizardfolk</strong> hunter is teaching their trained giant crabs how to hunt.</li></ul>",
                },
                {
                  level: "2nd to 4th",
                  example_encounters:
                    "<ul><li>A <strong>sea hag</strong> commands loyal kuo-toa to set up an effigy to a fictitious god.</li><li>A <strong>lizard king</strong> with a lizardfolk shaman advisor commands a clan of lizardfolk from a coral throne.</li></ul>",
                },
                {
                  level: "5th to 10th",
                  example_encounters:
                    "<ul><li>An <strong>aboleth</strong> in a swirling pool is guarded by chuuls and worshiped by enthralled veterans.</li><li>A <strong>sahuagin baron</strong> watches a pack of sahuagin fight water weirds.</li><li>A corrupt <strong>sahuagin priestess</strong> feeds sacrificial victims to giant crocodiles.</li></ul>",
                },
                {
                  level: "11th to 16th",
                  example_encounters:
                    "<ul><li>A <strong>kraken</strong> rules a deep-sea trench, surrounded by reverent water elementals.</li></ul>",
                },
              ],
            },
          ],
          order: 12,
        },
      ],
    },
    {
      id: "monstersandthetiersofplay",
      title: "Monsters and the Tiers of Play",
      intro:
        "How combat plays out against specific types of monsters in other 5e games changes depending on the level of the characters. Character power progression isn't smooth and linear across levels. Rather, it spikes at particular levels, potentially changing the outcome of a battle dramatically. As an example, the jump from 4th to 5th level gives melee characters twice as many attacks, while spellcasters gain access to spells such as *fireball*, significantly raising a party's damage output overnight. Recognizing when and how these changes take place can help GMs understand and prepare for these shifts in game play.",
      subsections: [
        {
          id: "1stlevel",
          title: "1st Level",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Though not identified as its own tier of play in the fifth edition core rules, games at 1st level are entirely different from games at later levels. Characters of 1st level have few resources—hit points in particular. Creatures of CR 1/2 can kill 1st-level characters with a single critical hit, and 1st-level spellcasters have few spells able to control more than one or two monsters.\n\nWhen designing combat encounters at 1st level, be wary of using foes higher than CR 1/4, and lean toward running fewer monsters than characters. A CR 1/2 creature might make a decent boss monster for 1st-level characters, but a CR 1 monster might knock characters unconscious with a single hit-or even kill them completely.\n\nEven when running a published adventure for 1st-level characters, take note of the encounters it offers. Many such adventures include potentially deadly encounters at 1st level, so adjust them accordingly by running lower-CR monsters and fewer of them.\n\nCreatures of CR 1/8 to CR 1/2 work well for 1st-level characters, including bandits, cultists, and skeletons, with maybe a thug for a boss.",
            },
          ],
          order: 0,
        },
        {
          id: "2ndthrough4thlevel",
          title: "2nd through 4th Level",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "At 2nd through 4th level, encounters most often play out as expected for a heroic fantasy roleplaying game. Characters are robust enough to face a range of monsters and not get killed. Most characters have a single attack, or sometimes two if they fight with a weapon in each hand. Spells usually target one or two creatures.\n\nCombat encounters of 2nd to 4th level are often the easiest to balance compared to other levels of play. Characters of 2nd through 4th level can typically handle a group of monsters from challenge rating 1/8 to CR 1, a pair of monsters of CR 2 or 3, or a single monster up to about CR 5.\n\nGreat foes at these levels include all of those appropriate for 1st-level characters, along with ogres, scouts, dire wolves, and veterans. Cult fanatics, hags, vampire spawn, ettins, and lamias can work well for bosses at this tier.",
            },
          ],
          order: 1,
        },
        {
          id: "5thto10thlevel",
          title: "5th to 10th Level",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "At 5th level, character power spikes up. Fighters can attack twice, and can double that double attack with Action Surge. Spellcasters gain access to spells such as *fireball*, *spirit guardians*, and *hypnotic pattern*. As characters rise above 5th level, their capabilities increase quickly. Monks get Stunning Strike. Spellcasters learn spells able to take out a foe with a single failed saving throw, including *banishment* and *polymorph*.\n\nAt 5th level and above, you can no longer trust a lone nonlegendary monster to challenge a group of characters. Often a single spell, class feature, or volley of attacks can incapacitate or kill any such creature. Against large groups of foes, a casting of *fireball* or a use of Turn Undead can end the fight. Get comfortable with this change to how your encounters are going to play out, and use lightning rod monsters to let the characters show off these potent capabilities without ruining your fun.\n\nAt these levels, the heroes' defensive capabilities increase as well. Characters can fly, turn invisible, or block off entire sections of the battlefield with spells like *wall of fire*. Healing becomes plentiful. Paladins can protect entire parties with their defensive features. Even lower-level defensive features such as the *shield* spell can be used more often with a larger number of available spell slots.\n\nAt 5th level and above, a GM's understanding of the capabilities of the characters and how those capabilities relate to a monster's stat block is vital to building challenging encounters. Creatures who challenge characters at 5th level and above (roughly CR 4 and up) are usually more complicated than those of lower challenge ratings. Hard encounters put together using default encounter-building rules might be less challenging than expected.\n\nCharacters of 5th to 10th level can often take on hordes of foes of CR 1/4 to CR 1. They can usually survive battles against groups of CR 2 to CR 5 monsters, small groups of CR 6 to CR 10 foes, and single monsters up to CR 15.\n\nGreat foes at this tier include young dragons, giants, mages, and lower-CR demons and devils. Bosses can include medusas, lower-CR adult dragons, mid-CR demons and devils, and maybe even an archmage.",
            },
          ],
          order: 2,
        },
        {
          id: "11thto16thlevel",
          title: "11th to 16th level",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "At 11th level, characters become superheroes. They have huge amounts of resources at their disposal to handle the hardest monsters in the game. The heroes' ability to control or incapacitate foes continues to increase, along with their ability to dish out tremendous amounts of damage.\n\nThe variance in power and capabilities between different groups at these levels of play is wide. Challenging battles can take significantly longer to run than those of lower levels. Monsters who feel like a good challenge often end up easier to defeat than expected, and characters at this level can often take out a single powerful boss with ease. Likewise, the characters have numerous options to mitigate the damage their foes deal—made worse by the fact that many published monsters appropriate for these levels deal too little damage for their challenge rating.\n\nCharacters at these levels can often take on large groups of monsters of up to CR 3, medium-sized groups of CR 6 to CR 10, small groups of CR 11 to CR 14, and single opponents of up to CR 21. Good foes at this tier include all of those mentioned previously, along with ancient dragons, higher-CR giants, liches, and high-CR demons and devils. And even at a high CR, a boss monster almost certainly wants some friends to defend against the characters.",
            },
          ],
          order: 3,
        },
        {
          id: "17thto20thlevel",
          title: "17th to 20th level",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "From 17th level up, the characters are just short of godlike. They travel across worlds. They can often easily defeat any single monster of any challenge rating, unless the GM customizes that monster to face them. Characters at the highest levels have the strongest defenses imaginable, letting them absorb tremendous amounts of damage and wave off most detrimental effects. To build challenging encounters at these levels, GMs must customize those encounters around the powers and capabilities of the characters, and such battles can take a long time to run.\n\nAt these levels, characters can take on huge numbers of foes below CR 5, large groups of CR 6 to CR 10, medium-sized groups of CR 11 to CR 15, and bosses of CR 22 and above. Characters at these levels can fight—and triumph over—any monster in 5e, even when partnered with other monsters.",
            },
          ],
          order: 4,
        },
      ],
    },
  ],
  attribution:
    'This work includes material taken from the [Lazy GM\'s 5e Monster Builder Resource Document](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) written by Teos Abadía of [Alphastream.org](https://alphastream.org/), Scott Fitzgerald Gray of [Insaneangel.com](https://insaneangel.com/), and Michael E. Shea of [SlyFlourish.com](https://slyflourish.com/), available under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).\n\nThis work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC and available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode.\n',
};
