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
  version: "3.7.0",
  sections: [
    {
      id: "index",
      title: "The Lazy GM's Resource Document",
      intro:
        "Michael E. Shea, [SlyFlourish.com](https://slyflourish.com).\n\nUpdated 24 December 2024\n\nThis document includes resources and guidelines for preparing and running 5e and other fantasy roleplaying games taken from several books written by Michael E. Shea and available at [SlyFlourish.com](https://slyflourish.com). Much of this material is useful for any fantasy RPG but some is specific to the 5th edition of the world's most popular roleplaying game.\n\nThis work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). You are free to use this content in any manner permitted by that license as long as you include the following attribution statement in your own work:",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                '> This work includes material taken from the [Lazy GM\'s Resource Document](https://slyflourish.com/lazy_gm_resource_document.html) by Michael E. Shea of [SlyFlourish.com](https://slyflourish.com), available under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).\n\nThis work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC and available at <https://dnd.wizards.com/resources/systems-reference-document>. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at <https://creativecommons.org/licenses/by/4.0/legalcode>.\n\nThe publication and release of this document is made possible by [patrons of Sly Flourish](https://www.patreon.com/slyflourish). Thank you for your support!\n\nThis document is a single self-contained HTML file. To save an offline local copy, "save as" either the page source or HTML in your browser. Use tools such as [Calibre](https://calibre-ebook.com) and [Pandoc](https://pandoc.org) to convert this document to markdown, PDF, ePub or another format of your choice. Use [Send to Kindle](https://www.amazon.com/sendtokindle) to send a version to your Kindle.\n\nYou can find several versions of this document including EPUB, Markdown, and JSON on [Crit.Tech\'s LGMRD Github Repo](https://github.com/crit-tech/LGMRD) and can [download a zip file containing all these formats](https://slyflourish_content.s3.amazonaws.com/lazy_gm_cc_docs_multiformat.zip).',
            },
          ],
          order: 0,
        },
        {
          id: "tableofcontents",
          title: "Table of Contents",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "The Eight Steps of Lazy RPG Prep" },
                { item: "The Lazy RPG Preparation Process" },
                { item: "Example Strong Starts" },
                { item: "Creating Secrets and Clues" },
                { item: "Building an RPG Group" },
                { item: "Session Zero Checklist" },
                { item: "Safety Tools" },
                { item: "Connecting Characters" },
                { item: "Spiral Campaign Development" },
                { item: "Quest Templates" },
                { item: "Tools for 5e Improvisation" },
                { item: "Quick Tricks for Lazier 5e Games" },
                { item: "5e Quick Encounter Building" },
                { item: "Wilderness Travel and Exploration" },
                { item: "Lazy Combat Encounter Building for 5e" },
                { item: "Theater of the Mind Guidelines (Extended)" },
                { item: "Theater of the Mind Guidelines (Abbreviated)" },
                { item: "Zone-Based Combat" },
                { item: "Monster Difficulty Dials" },
                { item: "Monster Templates" },
                { item: "Undead Templates" },
                { item: "Running Hordes" },
                { item: "Stress Effects" },
                { item: "Core Adventure Generators" },
                { item: "NPC Generator" },
                { item: "Treasure Generator" },
                { item: "Random Traps" },
                { item: "Random Monuments" },
                { item: "Random Chambers" },
                { item: "Random Underground Connectors" },
                { item: "Random Items" },
                { item: "Random Town Events" },
                { item: "Random Dungeon Monsters" },
                { item: "Lazy Solo 5e" },
                { item: "The Village of Whitesparrow" },
                { item: "The Night Blade" },
              ],
            },
          ],
          order: 1,
        },
      ],
    },
    {
      id: "eightsteps",
      title: "The Eight Steps of Lazy RPG Prep",
      intro:
        "For a typical game session, the Lazy RPG Prep checklist looks like this:",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Review the characters" },
                { item: "Create a strong start" },
                { item: "Outline potential scenes" },
                { item: "Define secrets and clues" },
                { item: "Develop fantastic locations" },
                { item: "Outline important NPCs" },
                { item: "Choose relevant monsters" },
                { item: "Select magic item rewards" },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown: "Here's a brief summary of each of the steps.",
            },
          ],
          order: 0,
        },
        {
          id: "reviewthecharacters",
          title: "Review the Characters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Before we do anything else, it helps to spend a few minutes reviewing the player characters. What are their names? What do they want? What plays into their backgrounds? What do the players of these characters enjoy at the table?\n\nYou might not even write anything down during this step, but reviewing the characters helps wire them into your mind — and ensures that the rest of your preparation fits around them.",
            },
          ],
          order: 1,
        },
        {
          id: "createastrongstart",
          title: "Create a Strong Start",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "How a game starts is likely the most important piece of preparation we can do. Setting the stage for the session determines a great deal about how the rest of the game will go. When you define where a game session starts, you figure out what's going on, what the initial focus of the session is, and how you can get close to the action. When in doubt, start with a fight. Example strong starts can be found later in this document.",
            },
          ],
          order: 2,
        },
        {
          id: "outlinepotentialscenes",
          title: "Outline Potential Scenes",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "With a strong start in hand, we can then outline a short list of potential scenes that might unfold. This step exists mostly to make you feel as though you have a handle on the game before you start. However, as GMs, all of us must always be ready to throw our potential scenes away when the game goes in a different direction — as it often does. Usually, it's enough to come up with only a few words per scene, and to expect one or two scenes per hour of play. At other times, you might skip this step completely if you don't think you need it.",
            },
          ],
          order: 3,
        },
        {
          id: "definesecretsandclues",
          title: "Define Secrets and Clues",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The next step is second only in importance to the strong start, and is one of the most powerful tools available to GMs. Secrets and clues are single short sentences that describe a clue, a piece of the story, or a piece of the world that the characters can discover during the game. You don't know exactly *how* the characters will discover these clues. As such, you'll want to **keep these secrets and clues abstract from their place of discovery** so that you can drop them into the game wherever it makes sense. This lets the game flow freely, while still allowing you to reveal important pieces of the story at any point where the characters might discover them. During this step, you might write down ten such secrets or clues. Example secrets and clues are offered later in this document.",
            },
          ],
          order: 4,
        },
        {
          id: "developfantasticlocations",
          title: "Develop Fantastic Locations",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Building evocative locations isn\'t easily improvised. As such, it\'s worth spending time writing out a handful of fantastic locations that the characters might discover and explore during the game. Each location can be thought of as a set, a room, or a backdrop for a single scene in your adventure.\n\nDescribe each location with a short evocative title such as "The Sunspire." Then write down three fantastic aspects for it, along the lines of: "Blazing beam of light shining to the heavens," "Moat of molten rock," or "Huge elven glyphs carved into ancient stone." Ultimately, whole dungeons can be built from a series of connected fantastic locations, with each location representing a large area or chamber. A specific location might not come up during the game for which you prepare it, but it will be ready for a later session as the characters explore.',
            },
          ],
          order: 5,
        },
        {
          id: "outlineimportantnpcs",
          title: "Outline Important NPCs",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "During our preparation, we'll outline those NPCs (nonplayer characters) most critical to the adventure, focusing on a name and a connection to the adventure, then wrapping the NPC in a character archetype from popular fiction. Many other NPCs — maybe even most of them — can be improvised right at the table.",
            },
          ],
          order: 6,
        },
        {
          id: "chooserelevantmonsters",
          title: "Choose Relevant Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "What monsters are the characters most likely to face? What monsters make sense for a specific location and situation? We're using the term \"monster\" loosely here, so as to include enemy NPCs as well as truly monstrous foes. Whatever type of enemy you need, reading through books of monsters can give you the fuel to choose the right creatures for the right situation.\n\nAdditionally, understanding the loose relationship between monster challenge rating and character level can help you understand how a battle might go. Most of the time, you can just list a number of monsters and improvise encounters based on what's happening in the adventure. For boss battles, you might have to do more work. See [Lazy Combat Encounter Building](16-lazycombatencounterbuilding.md) for more information.",
            },
          ],
          order: 7,
        },
        {
          id: "selectmagicitemrewards",
          title: "Select Magic Item Rewards",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Players love magic items, and it's worthwhile to spend time preparing items they'll find interesting. This step also helps to directly impact the characters — by dropping an interesting part of the story literally into their hands. You can use a mixture of techniques to reward magic items, from selecting items randomly to selecting specific items based on the themes of the characters and the desires of the players. Magic items are also a great mechanism for delivering secrets and clues.",
            },
          ],
          order: 8,
        },
        {
          id: "thelazyrpgprepchecklistandonlineplay",
          title: "The Lazy RPG Prep Checklist and Online Play",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "These steps and processes work just as well whether you interact with your players online or around the table. However you play, the Lazy RPG Prep checklist still works.",
            },
          ],
          order: 9,
        },
        {
          id: "the5-minutereducedchecklist",
          title: "The 5-Minute Reduced Checklist",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "If you have very little time, reduce the checklist to the most important things you can prepare before it's time to run the game. Here are three example steps.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Create a strong start" },
                { item: "Define secrets and clues" },
                { item: "Develop fantastic locations" },
              ],
            },
          ],
          order: 10,
        },
      ],
    },
    {
      id: "prepprocess",
      title: "The Lazy RPG Preparation Process",
      intro: "",
      subsections: [
        {
          id: "thelazyrpgpreptoolkit",
          title: "The Lazy RPG Prep Toolkit",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Dice, pencils, and dry-erase markers" },
                { item: "GM's notebook" },
                { item: "Campaign worksheet" },
                { item: "Curated random name list" },
                { item: "3×5 index cards" },
                { item: "Numbered initiative cards" },
                { item: "GM screen or cheat sheet" },
                { item: "Dry-erase flip mat" },
                { item: "Published books and adventures" },
                { item: "Miniatures, maps, and terrain as needed" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "buildingalazycampaign",
          title: "Building a Lazy Campaign",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Develop a spiral campaign with the characters at the center",
                },
                {
                  item: "Build a campaign hook focusing on a single major goal",
                },
                { item: "State the six truths of your campaign" },
                {
                  item: "Define three fronts incorporating goals and grim portents",
                },
                {
                  item: "Run a session zero to help build the characters and tie them together",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "runningyourgame",
          title: "Running Your Game",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Relax" },
                { item: "Focus on your strong start" },
                {
                  item: "Listen to the players, and build off of the ideas they bring you",
                },
                {
                  item: "Trust your preparation to help you run a creative, flexible game",
                },
                {
                  item: "Ask the players to summarize the events of the previous game session",
                },
                {
                  item: "Draw players into the story by asking them to describe killing blows, define monster characteristics, and describe interesting events during travel",
                },
                {
                  item: "Imagine the world as a living place when building scenes and situations",
                },
                {
                  item: "Let the world and the NPCs react to the characters' actions",
                },
                {
                  item: "Use a mixture of combat styles, including theater of the mind, gridded maps, and abstract maps",
                },
                { item: "Maintain a good pace by staying close to the action" },
                {
                  item: "Cycle between action and relaxation, and alternate upward and downward emotional beats",
                },
                {
                  item: "Use specific hopeful or fearful beats to send the action in a specific direction",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "thinkingaboutyourgame",
          title: "Thinking About Your Game",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Prime your GM's brain with great books, movies, and TV shows",
                },
                {
                  item: "Remind yourself of the player characters' names and backgrounds",
                },
                { item: "Ask what the villains and NPCs are doing right now" },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "embracethegmstruths",
          title: "Embrace the GM's Truths",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Players don't care as much as you think" },
                {
                  item: "Players want to see their characters do awesome things",
                },
                { item: "The GM is not the enemy of the characters" },
                { item: "Be a fan of the characters" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "lazyrpgtricks",
          title: "Lazy RPG Tricks",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Award levels at key points in the story" },
                { item: "Improvise ability and skill checks" },
                { item: "Delegate certain tasks to the players" },
                { item: "Use static monster damage" },
              ],
            },
          ],
          order: 5,
        },
      ],
    },
    {
      id: "strongstarts",
      title: "Example Strong Starts",
      intro:
        "A strong start kicks your game off in the middle of the action. It helps the players to let go of the real world and fall into the story unfolding at the table. Depending on where your adventure takes place, you can use any of the following strong starts in your own game, whether running a single-session adventure or a longer campaign.",
      subsections: [
        {
          id: "citiesandtowns",
          title: "Cities and Towns",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "In a settlement, a strong start can make use of either combat or roleplaying.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item_num: 1,
                  item: "The characters interrupt bandits breaking into a shop.",
                },
                {
                  item_num: 2,
                  item: "Something slithers out of a nearby sewer.",
                },
                {
                  item_num: 3,
                  item: "A noble lord bumps into one of the characters and threatens to have them arrested.",
                },
                {
                  item_num: 4,
                  item: "A group of cultists kindly ask for a sample of a character's blood.",
                },
                {
                  item_num: 5,
                  item: "A hooded patron visits the characters, asking the characters to kill them in two days.",
                },
                {
                  item_num: 6,
                  item: "A riot draws the local watch away, whereupon a squad of hired killers descends on the characters.",
                },
                {
                  item_num: 7,
                  item: "The campaign's main villain shows up and invites the characters for a drink.",
                },
                {
                  item_num: 8,
                  item: "A scarred explorer offers to sell one of the characters a map to a site of a lost or stolen ancestral heirloom.",
                },
                {
                  item_num: 9,
                  item: "A golem from a wizards' academy goes on a rampage.",
                },
                {
                  item_num: 10,
                  item: "The local monarch is assassinated and a villain takes over the government.",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "sewers",
          title: "Sewers",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "A session that starts in a sewer can make use of numerous monsters and hazards.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item_num: 1,
                  item: "A flood of poisonous water flows past the characters' position.",
                },
                {
                  item_num: 2,
                  item: "The sewer collapses into deeper tunnels sealed up for centuries.",
                },
                {
                  item_num: 3,
                  item: "A wererat approaches the characters, offering to sell valuable information.",
                },
                {
                  item_num: 4,
                  item: "A pack of ghouls chase a young couple reported missing days ago.",
                },
                {
                  item_num: 5,
                  item: "A legendary giant crocodile stealthily stalks the characters.",
                },
                {
                  item_num: 6,
                  item: "The characters find a powerful magical dagger sought by a guild of wraith assassins.",
                },
                {
                  item_num: 7,
                  item: "Swampy sewer gas gives one of the characters supernatural visions of the villain's master plan.",
                },
                {
                  item_num: 8,
                  item: "The characters meet an eccentric wizard farming mushrooms for spell components.",
                },
                {
                  item_num: 9,
                  item: "A wall collapses, revealing a hidden temple of the god of slimes and oozes.",
                },
                {
                  item_num: 10,
                  item: "A flood of water draws the characters into a dangerously large mechanical sluice system.",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "wilderness",
          title: "Wilderness",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Wilderness locations can involve either action or mystery in a strong start.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item_num: 1,
                  item: 'A nearby tree opens up, and a satyr steps through and says "Hi!"',
                },
                {
                  item_num: 2,
                  item: "A rampaging werebear storms through the area, mistaking the characters for the hunters who killed their mate.",
                },
                {
                  item_num: 3,
                  item: "Night falls, revealing an alien starscape above.",
                },
                {
                  item_num: 4,
                  item: "The characters see a tall humanoid with antlers stalking from the shadows, carrying a large scythe in one hand and three humanoid heads in the other.",
                },
                {
                  item_num: 5,
                  item: "The ground suddenly churns, bringing the body of a long-lost elf king to the surface. The king's eyes open.",
                },
                {
                  item_num: 6,
                  item: "The characters stumble upon a nest of skeletal pixies surrounding a desecrated fey gate.",
                },
                {
                  item_num: 7,
                  item: "A golden-antlered stag leaps into the characters' camp and asks to be defended from the hunters chasing it.",
                },
                {
                  item_num: 8,
                  item: "An old woman greets the characters, offering them candy and baked treats if they will come to her nearby cottage.",
                },
                {
                  item_num: 9,
                  item: "A skeleton hanging from a tree begs the characters to right the wrong it committed while alive.",
                },
                {
                  item_num: 10,
                  item: "A sinkhole opens up, revealing the tunnels of long-forgotten burial chambers.",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "dungeonscavesandcaverns",
          title: "Dungeons, Caves, and Caverns",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Subterranean adventures lend themselves to the widest possible range of strong starts.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item_num: 1,
                  item: "A vampire appears from a sudden rise of mist, introduces herself, and asks the characters for a favor.",
                },
                {
                  item_num: 2,
                  item: "An ancient statue turns its head toward the characters and whispers a valuable secret.",
                },
                {
                  item_num: 3,
                  item: "The floor collapses, revealing even deeper tunnels long forgotten.",
                },
                {
                  item_num: 4,
                  item: "Through a cracked wall, the characters spot a gateway flanked by two huge obsidian statues, and featuring a set of stairs leading down.",
                },
                {
                  item_num: 5,
                  item: "The characters come across two bands of goblins fighting each other for the favor of a hag named Auntie Chiptooth.",
                },
                {
                  item_num: 6,
                  item: "An eyestalk swells out from an oozy patch on the wall, beholds the characters, and then disappears back into the wall.",
                },
                {
                  item_num: 7,
                  item: "A wounded knight collapses near the characters, begging them to find her lost love before she dies.",
                },
                {
                  item_num: 8,
                  item: "The ground cracks open and a pillar of chipped obsidian juts out, projecting a prophecy in red Infernal glyphs on the walls of the chamber.",
                },
                {
                  item_num: 9,
                  item: "Stars swim in a moonlit well, then rise up to reveal themselves as will-o'-wisps.",
                },
                {
                  item_num: 10,
                  item: "A spectral hound guides the characters to the camp of a reclusive mage.",
                },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "creatingsecrets",
      title: "Creating Secrets and Clues",
      intro:
        "Secrets and clues are short pieces of information the characters might discover during an adventure. Secrets and clues are initially written without regard to the method by which they might be discovered. Instead, we improvise their discovery as the characters engage with the adventure's locations and NPCs.\n\nThe following prompts don't create specific secrets and clues. Rather, the questions they ask are meant to inspire the creation of your own secrets for your campaign. Keep in mind that secrets are meant to serve you. Don't overthink them or worry about making them perfect. There's no wrong way to use secrets and clues as long as they help you run your game.",
      subsections: [
        {
          id: "charactersecrets",
          title: "Character Secrets",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use character secrets to tie the characters to the world around them. These sorts of secrets might be revealed by NPCs, old journals or letters, suddenly recalled memories, or prophetic dreams.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item_num: 1, item: "What family history might be revealed?" },
                {
                  item_num: 2,
                  item: "What ties the character to this location?",
                },
                {
                  item_num: 3,
                  item: "What ghost or spirit haunts the character?",
                },
                { item_num: 4, item: "What dreams fill the character's rest?" },
                {
                  item_num: 5,
                  item: "What parasite secretly infests the character?",
                },
                {
                  item_num: 6,
                  item: "Which family member is involved in the adventure?",
                },
                {
                  item_num: 7,
                  item: "How is the villain related to the character?",
                },
                {
                  item_num: 8,
                  item: "What NPC who the character thinks is dead still lives?",
                },
                {
                  item_num: 9,
                  item: "What ritual was the character blessed with as a child?",
                },
                {
                  item_num: 10,
                  item: "What previous event ties the character to the story?",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "historicalsecrets",
          title: "Historical Secrets",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use historical secrets to give the characters meaningful and useful information as they explore the setting of the campaign. Secrets of this kind should provide characters and players alike with bite-sized pieces of local or world history.\n\nHistorical secrets might be found as mosaics in ancient tombs, statues in old ruins, dusty tomes in ancient libraries, markings on strange weapons, or tales shared among elderly villagers.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item_num: 1,
                  item: "What dead god has a connection to the area?",
                },
                { item_num: 2, item: "What armies once battled here?" },
                {
                  item_num: 3,
                  item: "What cruel lord was slain in this place?",
                },
                {
                  item_num: 4,
                  item: "What ancient civilization once thrived here?",
                },
                {
                  item_num: 5,
                  item: "What old empire's settlements lie buried here?",
                },
                {
                  item_num: 6,
                  item: "What alien creature or power is hidden here?",
                },
                { item_num: 7, item: "What rebellion took place here?" },
                {
                  item_num: 8,
                  item: "What primeval mysteries lay buried here?",
                },
                {
                  item_num: 9,
                  item: "What was this location's former purpose?",
                },
                {
                  item_num: 10,
                  item: "What horrific monster once ruled here?",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "npcandvillainsecrets",
          title: "NPC and Villain Secrets",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use NPC and villain secrets to reveal information about these NPCs to the characters, especially as a means of introducing villains before they face the characters.\n\nCharacters might learn NPC or villain secrets from a villain's herald or sidekick, rumors at a local pub, recovered journals, a minion's last words, captured letters, or town gossip.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item_num: 1, item: "What dark history follows the NPC?" },
                {
                  item_num: 2,
                  item: "What makes the NPC think they're right?",
                },
                {
                  item_num: 3,
                  item: "What was the NPC's great accomplishment?",
                },
                { item_num: 4, item: "What foe did the NPC defeat?" },
                {
                  item_num: 5,
                  item: "What makes the NPC politically untouchable?",
                },
                { item_num: 6, item: "What great power does the NPC possess?" },
                { item_num: 7, item: "What does the NPC desire?" },
                {
                  item_num: 8,
                  item: "What regular routines does the NPC follow?",
                },
                {
                  item_num: 9,
                  item: "Who does the NPC love above all others?",
                },
                {
                  item_num: 10,
                  item: "What secret does the NPC want to keep hidden?",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "plotandstorysecrets",
          title: "Plot and Story Secrets",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use plot and story secrets to teach characters about the larger events going on in the world, and to move the characters forward in the story of your campaign.\n\nCharacters might learn these secrets from quest-giving NPCs, notes found on defeated foes, dreams or portents from the gods, NPCs fleeing a disaster, arcane feedback from an object, or psychic projections.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item_num: 1,
                  item: "What villainous event will soon come to pass?",
                },
                {
                  item_num: 2,
                  item: "What disaster is about to befall the land?",
                },
                {
                  item_num: 3,
                  item: "What royal figure was just assassinated?",
                },
                {
                  item_num: 4,
                  item: "What dungeon entrance just became revealed?",
                },
                {
                  item_num: 5,
                  item: "What monsters recently appeared in the realm?",
                },
                { item_num: 6, item: "What armies just invaded the realm?" },
                {
                  item_num: 7,
                  item: "What dark sign or portent just appeared?",
                },
                {
                  item_num: 8,
                  item: "What natural disaster has recently struck the area?",
                },
                {
                  item_num: 9,
                  item: "What unnatural being has appeared in the world?",
                },
                {
                  item_num: 10,
                  item: "What unusual creature was seen walking the wilds?",
                },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "buildingagroup",
      title: "Building an RPG Group",
      intro: "",
      subsections: [
        {
          id: "findingandmaintainingasolidgroup",
          title: "Finding and Maintaining a Solid Group",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Finding and maintaining a solid group for roleplaying gaming remains the most difficult task for many GMs. This section offers suggestions for finding players that fit well with your group, and for keeping that group going for years to come.",
            },
          ],
          order: 0,
        },
        {
          id: "findingplayers",
          title: "Finding Players",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The first step to building an RPG group is finding players. Some of the most common ways to find players for a group include the following:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Recruit friends and family" },
                { item: "Recruit coworkers" },
                {
                  item: "Ask about putting a notice up at your local game store or library",
                },
                { item: "Join local organized play groups" },
                {
                  item: "Seek LFG (Looking for Group) forums on Discord, Reddit, Meetup, Next Door, and other forums",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "selectingplayers",
          title: "Selecting Players",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Before you invite a player to your gaming group, ensure that they're the right fit for your game and the other players. Start by asking a prospective player questions about their commitment, play style, and reaction to your style of play. Example questions might include the following:\n\nAsking questions isn't about getting right or wrong answers. Rather, questions can help you identify players who will fit well into your game. They'll also help you determine if there are things a player desires that they're not going to find in your game.\n\nTake the time to meet one-on-one with a prospective player and talk to them about what they want from your game and what experiences they've had with other groups. Go with your gut judgment on whether each player you meet will be a good fit for your group.\n\nIf they seem like a good fit, invite a player to a single-session game or a short series of games at a different time than your regularly scheduled session, ideally with one or more regular players from your group. See how they fit in during an actual game. If they don't fit, you don't have to invite them to another game. But if they do feel like a good fit, you can invite them to your regular game and see how things go.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Do they live nearby, and can they commit to the game's schedule?",
                },
                {
                  item: "Do they consider themselves a more story-focused or more tactics-focused player?",
                },
                {
                  item: "Are they okay playing with theater-of-the-mind combat or playing on a battle grid?",
                },
                { item: "What do they enjoy most about RPGs?" },
                {
                  item: "How do they weight their enjoyment of the following: NPC interaction, exploration, world lore, character background, character optimization, and tactical combat?",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "flexiblenumbersofplayersandon-callplayers",
          title: "Flexible Numbers of Players and On-Call Players",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Decide on the minimum and maximum number of players for any given session. A minimum of three and maximum of six is often ideal. While seeking players, you might find some who can't commit to a regularly scheduled game, but who can come from time to time. Put these players on an \"on-call\" list so that if you have an open chair, you can ask them if they're able to fill it. Putting prospective new players on an on-call list is also a good way to see if they're a good fit for the group before they become a regular player.",
            },
          ],
          order: 3,
        },
        {
          id: "choosearegularschedule",
          title: "Choose a Regular Schedule",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Rather than attempting to schedule games from session to session, find a set day and time to run your games and stick to it. Run games every week if possible. Otherwise, try every other week at the same day and time. Choose regular, shorter games rather than longer, more infrequent games to help with scheduling.",
            },
          ],
          order: 4,
        },
        {
          id: "thegamemustgoon",
          title: "The Game Must Go On",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Run the game as regularly as you can. Don't cancel games if one or two players can't make it. If you're able to play with as few as three and have a regular group of six, it should take four players canceling before you have to call off a game. The more consistent the game, the more likely that the players will make it a part of their regular schedule.\n\nIf you find that certain players are regularly missing the game, ask if they would prefer to be on your on-call list, and then seek a new player with better availability.",
            },
          ],
          order: 5,
        },
        {
          id: "letabsentcharactersfadeintothebackground",
          title: "Let Absent Characters Fade into the Background",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Don't worry about what happens to characters in-game when a player misses the session. If there is an easy way for the character to step out of the story, take it. Otherwise, just let the character fade into the background. Your players will understand why you're taking such liberties with the universe, and that in-world consistency isn't as important as making allowances for the realities of people's lives.",
            },
          ],
          order: 6,
        },
      ],
    },
    {
      id: "sessionzerochecklist",
      title: "Session Zero Checklist",
      intro:
        "Session zero is a vital tool for getting players and GMs on the same page about a new campaign. A session zero takes place before the first session of a campaign. This special session gives you time to ensure that the players are on board with the themes of the campaign, and that their characters will integrate well together and with the adventures to come.\n\nThe following guidelines take you step-by-step through a session zero.",
      subsections: [
        {
          id: "writeaone-pageguide",
          title: "Write a One-Page Guide",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Before your session zero, write out and deliver a one-page campaign guide to your players. Include the following information:\n\nKeep your campaign guide down to a single page so that the players can easily read and absorb it.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "The campaign's theme and flavor. Sell the campaign's story to your players so they're excited for the campaign.",
                },
                {
                  item: 'What separates this campaign from others? What are the main things about this campaign that the characters would know going in? This might be the "six truths" that separate your campaign from all others.',
                },
                {
                  item: "What characters work best in the campaign? Talk about specific character options that are a good fit for the campaign, including classes, backgrounds, heritage, skills, and so forth. Then discuss what kinds of motivations will help the characters best enjoy the campaign?",
                },
                {
                  item: "What potentially troubling themes might this campaign include? Write out a list so the players know what they might be getting into and can talk to you about it as you discuss your game's safety tools.",
                },
                {
                  item: "What group patrons might the players select as a group? Who might serve as their primary quest giver?",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "describethetheme",
          title: "Describe the Theme",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Once you and your players are sitting around the table or gathered online for session zero, start by describing the theme of the campaign and going over the details of the one-page campaign guide. Use this time to get the players excited for the campaign.",
            },
          ],
          order: 1,
        },
        {
          id: "discusssafetytools",
          title: "Discuss Safety Tools",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Discuss any potentially troubling themes of the campaign and its adventures, establishing hard lines and off-screen content you and your players have for the campaign. Write these things down. Discuss what tools you and your players can use to pause the game and break character whenever it becomes necessary to talk about the campaign's themes and content.",
            },
          ],
          order: 2,
        },
        {
          id: "decideonagrouppatron",
          title: "Decide on a Group Patron",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "A group patron is any NPC tied to all of the characters, and who can help propel the characters forward in an adventure or campaign. Describe potential group patrons that the players can choose from in your campaign, and let them discuss which ones they like. Work toward a consensus where all players are happy with the chosen patron. Don't let this choice alienate any players.",
            },
          ],
          order: 3,
        },
        {
          id: "buildcharacterstogether",
          title: "Build Characters Together",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Work with the players to develop their characters, reinforcing the themes of the campaign and establishing the character motivations that will work best to fit the characters into the campaign. Mention if any skills or backgrounds are an especially good fit for the campaign. All this work is to ensure that the characters are motivated to adventure together to solve the campaign's goal.\n\nIf desired, you can connect the characters together with individual relationships. Allow the players to roll on the following list, or to use it as inspiration for a unique relationship of their own devising.",
            },
          ],
          order: 4,
        },
        {
          id: "relationships",
          title: "Relationships",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Adopted siblings" },
                { item_num: 2, item: "Mentor and student" },
                { item_num: 3, item: "Friendly rivals" },
                { item_num: 4, item: "Sage and scribe" },
                { item_num: 5, item: "Priest and acolyte" },
                { item_num: 6, item: "Fellow veterans" },
                { item_num: 7, item: "Ward and guardian" },
                { item_num: 8, item: "Spouses" },
                { item_num: 9, item: "Buddy cops" },
                { item_num: 10, item: "Childhood friends" },
                { item_num: 11, item: "Noble and bodyguard" },
                { item_num: 12, item: "Soul bound" },
                { item_num: 13, item: "Former prisoners" },
                { item_num: 14, item: "Former criminals" },
                { item_num: 15, item: "Hunted quarry" },
                { item_num: 16, item: "Pact bound" },
                { item_num: 17, item: "Apocalypse survivors" },
                { item_num: 18, item: "Savior and saved" },
                { item_num: 19, item: "Business partners" },
                { item_num: 20, item: "Master and servant" },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "runashortadventure",
          title: "Run a Short Adventure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Once the characters are built and your players are ready, you can run a short adventure at the end of session zero to introduce the characters to the campaign in a fast and exciting way. You might choose to run a single combat encounter with some added negotiation and exploration, after which the characters advance to 2nd level and are ready to fully engage with the story of the campaign.",
            },
          ],
          order: 6,
        },
      ],
    },
    {
      id: "safetytools",
      title: "Safety Tools",
      intro:
        "Safety tools help ensure that you and your players are always comfortable with the subject matter of the games you run — especially when that subject matter involves potentially troubling tropes or themes. The safety tools presented in this section can be used individually or together to make sure that everyone is comfortable with the material in the game, even as that material evolves during play. You can choose which safety tools work well for you and your group, and discuss their use early in your game. Usually this means discussing safety tools during your campaign's session zero, or at the beginning of a single-session game.",
      subsections: [
        {
          id: "potentiallysensitivetopics",
          title: "Potentially Sensitive Topics",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "When you discuss safety tools, describe potentially sensitive topics that might come up in an adventure or campaign. The following list presents a number of topics that are good to talk about, but this is not an exhaustive list.\n\nDecide first what you are comfortable with as a GM before bringing a list of topics to your players. Add any topics you're not comfortable with to your own hard lines and off-screen content (see below).\n\nWhen describing these topics, ensure that the players are comfortable with them. But also ensure that you identify which topics they are not comfortable with, so you can omit that material from your game.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Blood" },
                { item: "Body horror" },
                { item: "Burning" },
                { item: "Cancer" },
                { item: "Cannibalism" },
                { item: "Claustrophobia" },
                { item: "Death by exposure" },
                { item: "Freezing" },
                { item: "Gaslighting" },
                { item: "Genocide" },
                { item: "Gore" },
                { item: "Harm to animals" },
                { item: "Harm to children" },
                { item: "Homophobia" },
                { item: "Incest" },
                { item: "Insects" },
                { item: "Kidnapping" },
                { item: "Mental domination" },
                { item: "Murder" },
                { item: "Paralysis" },
                { item: "Physical restraint" },
                { item: "Racism" },
                { item: "Rats" },
                { item: "Real-world religion" },
                { item: "Ritual sacrifice" },
                { item: "Self-harm" },
                { item: "Sexism" },
                { item: "Sexual assault" },
                { item: "Sexual contact" },
                { item: "Slavery" },
                { item: "Spiders" },
                { item: "Starvation" },
                { item: "Terrorism" },
                { item: "Thirst" },
                { item: "Torture" },
                { item: "Transphobia" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "hardlinesandoff-screencontent",
          title: "Hard Lines and Off-Screen Content",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The concept of hard lines and off-screen content allows you to set parameters for handling sensitive topics in your game. Once you've had a discussion with your players on those topics, talk about whether individual topics should be a hard line (material that should never come up) and which can be described vaguely and handled off-screen. For example, after discussion, you and your players might come up with something like the following:\n\n**Hard Lines:** Sexual assault, non-consensual sexual contact or behavior, violence toward children, abuse toward children or animals, inter-character betrayal, character-driven torture, non-consensual violence or betrayal between characters\n\n**Off-screen Content:** Consensual sex and sexual contact, torture, racism, slavery\n\nDiscuss hard lines and off-screen content in an open, nonjudgmental conversation with your players, and capture each player's individual hard lines and off-screen content along with your own.",
            },
          ],
          order: 1,
        },
        {
          id: "pauseforasecond",
          title: "Pause for a Second",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                '"Pause for a second" is a verbal cue that players and GMs can use to interrupt the current in-world scene, have everyone break character, and discuss the current situation as players. It\'s specifically designed to work well with both online and in-person games.\n\nThis safety tool can "pause" the game to discuss any issues out of character and ensures all the players are comfortable with shifts in the game\'s story. To use it, you or any other player can say, "Pause for a second" to interrupt the current state of play and break character.\n\nIt can be used to edit content ("Pause for a second. I\'m not comfortable beating a helpless character for information.") or to check in with the group ("Pause for a second. Are we okay making a deal with a vampire?").\n\nAs the GM, think about using "pause for a second" regularly, so as to break the stigma of using it only for the most extreme circumstances — which might cause players to avoid using it at all.',
            },
          ],
          order: 2,
        },
        {
          id: "otherresources",
          title: "Other Resources",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The following resources offer further options for RPG safety tools, and influenced the tools described above.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "The X-Card by John Stavropoulos" },
                { item: "Script Change by Beau Jágr Sheldon" },
                {
                  item: "The TTRPG Safety Toolkit by Kienna Shaw and Lauren Bryant-Monk",
                },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "connectingcharacters",
      title: "Connecting Characters",
      intro:
        "During your session zero of a new campaign, or if you're running a single-session one-shot game, consider establishing connections between the characters to help build a cohesive bond between them before the game begins. This can help prevent ham-fisted and convoluted attempts to build a story that connects the characters, when all the players already know perfectly well that they're coming together simply for the adventure.\n\nThis section presents two potential approaches to connecting characters. First, all the characters can be previously connected through a single organization, faction, or patron, using ideas from the Group Connections table. Alternatively, each character can establish a connection to one or more other characters through a personal relationship and history, using ideas from the Character Connections table. Players can work together to come up with these shared histories based on the overall themes of the campaign, or the group can randomly select potential relationships and tweak the results as desired.\n\nFor individual connections, each player can roll on the Character Connections table to establish a relationship with the character of the player on their right. Going once around the game table this way means that every character will have two relationships-one with the player on their right and one with the player on their left.\n\nFor single-session games, consider establishing a single group relationship for all the characters before the game begins. This relationship can directly tie into the story of the adventure, and will speed up the game by eliminating lengthy discussions about how the characters got together.",
      subsections: [
        {
          id: "groupconnections",
          title: "Group Connections",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Mercenary company" },
                { item_num: 2, item: "Self-employed investigators" },
                { item_num: 3, item: "Official investigators" },
                { item_num: 4, item: "Royal advisors" },
                { item_num: 5, item: "Thieves' guild" },
                { item_num: 6, item: "Secret society" },
                { item_num: 7, item: "Religious investigators" },
                { item_num: 8, item: "Adventuring company" },
                { item_num: 9, item: "Business investigators" },
                { item_num: 10, item: "Assassins' guild" },
                { item_num: 11, item: "Wizarding school" },
                { item_num: 12, item: "Monastic students" },
                { item_num: 13, item: "Gladiator school" },
                { item_num: 14, item: "Military specialists" },
                { item_num: 15, item: "Spy network" },
                { item_num: 16, item: "Constabulary" },
                { item_num: 17, item: "Magically bound servants" },
                { item_num: 18, item: "Divinely inspired" },
                { item_num: 19, item: "Protectors of the common folk" },
                { item_num: 20, item: "Seekers of vengeance" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "characterconnections",
          title: "Character Connections",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Sibling of" },
                { item_num: 2, item: "Saved by" },
                { item_num: 3, item: "Served with" },
                { item_num: 4, item: "Protected by" },
                { item_num: 5, item: "Adventured with" },
                { item_num: 6, item: "Friendly rival of" },
                { item_num: 7, item: "Childhood friend of" },
                { item_num: 8, item: "Magically bound to" },
                { item_num: 9, item: "Survived with" },
                { item_num: 10, item: "Escaped with" },
                { item_num: 11, item: "Apprentice of" },
                { item_num: 12, item: "Acolyte of" },
                { item_num: 13, item: "Idolizes" },
                { item_num: 14, item: "Drinking buddies with" },
                { item_num: 15, item: "Business associate of" },
                { item_num: 16, item: "Lost a bet to" },
                { item_num: 17, item: "Indebted to" },
                { item_num: 18, item: "Trained by" },
                { item_num: 19, item: "Dueling partner of" },
                { item_num: 20, item: "On the run with" },
              ],
            },
          ],
          order: 1,
        },
      ],
    },
    {
      id: "spiralcampaigns",
      title: "Spiral Campaign Development",
      intro:
        "Spiral campaign development builds campaign worlds starting in the area immediately surrounding the characters, then spirals out, expanding the world as the characters experience it. This section offers suggestions and inspiration for building a spiral campaign.",
      subsections: [
        {
          id: "campaignpitch",
          title: "Campaign Pitch",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Start off by describing the central theme of your campaign in a single sentence. This campaign pitch becomes the main focus of the campaign, and might be given to the players during your session zero so they can build their characters around it. Use the following campaign pitches as a starting point for a campaign, or as inspiration for pitches of your own.",
            },
          ],
          order: 0,
        },
        {
          id: "campaignpitches",
          title: "Campaign Pitches",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item_num: 1,
                  item: "Prevent the summoning of the Dragon Queen",
                },
                { item_num: 2, item: "Prevent the coming of the Black Moon" },
                {
                  item_num: 3,
                  item: "End the dark reign of Elenda the lich queen",
                },
                {
                  item_num: 4,
                  item: "Break the political power of Vroth the death knight",
                },
                {
                  item_num: 5,
                  item: "Kill Veresyn the vampire lord and his horde",
                },
                {
                  item_num: 6,
                  item: "Restore light to the Vale of Nightmares",
                },
                {
                  item_num: 7,
                  item: "Restore the prison of Orlon the demon prince",
                },
                {
                  item_num: 8,
                  item: "Shatter the draconic Alliance of Five Claws",
                },
                {
                  item_num: 9,
                  item: "Save people from the blood feast of a gnoll war band",
                },
                {
                  item_num: 10,
                  item: "Restore light to the fallen celestial Ixyan",
                },
                {
                  item_num: 11,
                  item: "Dismantle the Empire of the White Blade",
                },
                {
                  item_num: 12,
                  item: "Find the seven keys to the gates of Ilumenia",
                },
                {
                  item_num: 13,
                  item: "Prevent the resurrection of the sorcerer king",
                },
                { item_num: 14, item: "Stop the cult of the Red Ocean" },
                { item_num: 15, item: "Save the heir of the sapphire throne" },
                {
                  item_num: 16,
                  item: "Find and seal the vault of the world serpent",
                },
                { item_num: 17, item: "Close the gateway to the Outside" },
                { item_num: 18, item: "Destroy the Sword of the Black Sun" },
                {
                  item_num: 19,
                  item: "Slay the ancient dragon Larthyx Flametongue",
                },
                {
                  item_num: 20,
                  item: "End the dark pact of Karthyn the archdevil",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "sixtruths",
          title: "Six Truths",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Once you have your pitch, identify six truths that set your campaign apart from others, then share them with your players. Here are six example truths for a campaign built around the coming of the Black Moon from above.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Sages and cultists describe the coming of the Black Moon — an elder evil that will swallow the world.",
                },
                {
                  item: "Monsters have been sighted along what were once the safest roads. The populations of whole villages are disappearing without a trace.",
                },
                {
                  item: "A floating obsidian citadel has appeared above the Cragteeth Mountains to the north.",
                },
                {
                  item: "Folk once had to deal with the coming of the Black Moon, but their secrets for surviving it were lost.",
                },
                {
                  item: "The evil King Trex uses the chaos created by the coming of the Black Moon to wage war across the land.",
                },
                {
                  item: "Prophecy speaks of the return of the Knights of the White Sun, who will restore light to the land.",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "startinglocation",
          title: "Starting Location",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Spiral campaigns begin in a central location, often a small settlement from which the characters set out to explore neighboring lands. A village always works well as a starting location, but there are many alternatives.",
            },
          ],
          order: 3,
        },
        {
          id: "1d10startinglocations",
          title: "1d10 Starting Locations",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Adventurers' guild" },
                { item_num: 2, item: "Mining outpost" },
                { item_num: 3, item: "Recent shipwreck" },
                { item_num: 4, item: "Frontier outpost" },
                { item_num: 5, item: "Holy temple" },
                { item_num: 6, item: "Refugee camp" },
                { item_num: 7, item: "Fortress under siege" },
                { item_num: 8, item: "Great library" },
                { item_num: 9, item: "Planar hub city" },
                { item_num: 10, item: "Crumbling fortress" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "campaignfronts",
          title: "Campaign Fronts",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Campaign fronts are the external motivators in a campaign. Like a battlefront (from which they're named), a front is a point of conflict that advances and retreats as the campaign develops. Fronts are often villains, but might also be external forces such as natural disasters or grim fate. Campaigns might have up to three fronts at any given time, including any of the following.",
            },
          ],
          order: 5,
        },
        {
          id: "1d20campaignfronts",
          title: "1d20 Campaign Fronts",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Thieves' guild" },
                { item_num: 2, item: "Dark necromancer" },
                { item_num: 3, item: "Armageddon cult" },
                { item_num: 4, item: "Mercenary army" },
                { item_num: 5, item: "Forgotten machine" },
                { item_num: 6, item: "Evil construct" },
                { item_num: 7, item: "Demon prince" },
                { item_num: 8, item: "Archdevil" },
                { item_num: 9, item: "Corrupt noble lord" },
                { item_num: 10, item: "Rival adventurers" },
                { item_num: 11, item: "Mages' guild" },
                { item_num: 12, item: "Outlander horde" },
                { item_num: 13, item: "Meteor storm" },
                { item_num: 14, item: "Planar invaders" },
                { item_num: 15, item: "Powerful archmage" },
                { item_num: 16, item: "Ancient lich" },
                { item_num: 17, item: "Blood-raging cannibals" },
                { item_num: 18, item: "Unseelie fey lord" },
                { item_num: 19, item: "Draconic terror" },
                { item_num: 20, item: "Undead prince" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "localadventurelocations",
          title: "Local Adventure Locations",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "As the campaign spirals outward, the characters will become aware of local adventuring locations. Drop three such adventure locations into the areas close by the starting location. And if you need help filling out an adventure location, look to later sections of this document.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item_num: 1, item: "Ancient crypt" },
                { item_num: 2, item: "Forgotten sewers" },
                { item_num: 3, item: "Haunted keep" },
                { item_num: 4, item: "Festering well" },
                { item_num: 5, item: "Rat-infested cellar" },
                { item_num: 6, item: "Unholy temple" },
                { item_num: 7, item: "Dangerous caves" },
                { item_num: 8, item: "Underground city" },
                { item_num: 9, item: "War-torn citadel" },
                { item_num: 10, item: "Fey glade" },
                { item_num: 11, item: "Abandoned dungeon" },
                { item_num: 12, item: "Ruined watchtower" },
                { item_num: 13, item: "Huge hollow statue" },
                { item_num: 14, item: "Sunken catacombs" },
                { item_num: 15, item: "Obsidian ziggurat" },
                { item_num: 16, item: "Haunted forest" },
                { item_num: 17, item: "Otherworldly rift" },
                { item_num: 18, item: "Submerged grotto" },
                { item_num: 19, item: "Dead hollow tree" },
                { item_num: 20, item: "Sundered shipwreck" },
              ],
            },
          ],
          order: 7,
        },
      ],
    },
    {
      id: "questtemplates",
      title: "Quest Templates",
      intro:
        "Quest templates are general-purpose designs around which you can build specific quests for your own game, using adventure archetypes that have been standard for more than forty years in RPGs. This section offers ten quest templates you can customize for your own adventures. If generating a random adventure, just roll a d10 to determine which quest template to use, then fill in the details of the quest with your own ideas or by making use of the adventure generators found later in this document.",
      subsections: [
        {
          id: "1killtheboss",
          title: "1. Kill the Boss",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "In this simple quest design, the characters are hired or conscripted to hunt down a particular monster or villain in a location, then permanently end their threat. The boss might be protected by lieutenants or other minions.",
            },
          ],
          order: 0,
        },
        {
          id: "2findsomething",
          title: "2. Find Something",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The characters are charged with finding an item, whether they have to steal it or hunt for it in a dangerous location. The item might be protected by a boss monster and could have many different purposes, such as opening a portal to another location, removing a curse, compelling servants to return it to its rightful owner, and so on. In a variant of this quest, the characters can be charged with returning an object to a location rather than seeking one.",
            },
          ],
          order: 1,
        },
        {
          id: "3rescuesomeone",
          title: "3. Rescue Someone",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "In this common quest, the characters are sent to a location in order to rescue someone-a captured spy, a wayward prince, a missing child, and so forth. In a variant of this quest, the characters must escort someone to a location, defending them every step of the way.",
            },
          ],
          order: 2,
        },
        {
          id: "4killthelieutenants",
          title: "4. Kill the Lieutenants",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'In this variant of the "Kill the Boss" quest, the characters hunt down multiple sub-bosses or lieutenants, either eliminating, capturing, or converting them as the story demands. Each of these lieutenants might reside in different parts of a single location (a dungeon, a headquarters, and so forth) or at multiple locations across the land. Dealing with an appropriate number of lieutenants might lead to a final "Kill the Boss" quest.',
            },
          ],
          order: 3,
        },
        {
          id: "5destroysomething",
          title: "5. Destroy Something",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'With this variant of the "Find Something" quest, the characters enter a hostile location to destroy a particular object-an ancient evil obelisk, the catalyst of a dark ritual, a weapon of great power, and so forth.',
            },
          ],
          order: 4,
        },
        {
          id: "6stealsomething",
          title: "6. Steal Something",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'The characters have to obtain an object from a location where the challenge is more about intrigue than the dangers of a "Find Something" quest. Players must first plan their approach, then engage in the heist. Stealth and subterfuge are often required, and you should be ready to let the characters "fail forward" so that a single bad ability check doesn\'t ruin the entire plan. Likewise, the location should have multiple entry and exit paths such as sewers and rooftops in addition to a main entrance.',
            },
          ],
          order: 5,
        },
        {
          id: "7clearthedangers",
          title: "7. Clear the Dangers",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "In this simple quest template, the characters enter a hostile location and clear it of any dangers. A dwarf clan might need their ancestral mines emptied of monsters, a local lord might want to take over a haunted keep, and so forth. This quest focuses on the characters exploring an entire location to ensure that the danger has been dealt with, as opposed to taking on just a single known foe.",
            },
          ],
          order: 6,
        },
        {
          id: "8collectthekeys",
          title: "8. Collect the Keys",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "This quest template works for both small adventures and large campaigns, and sees the characters hunting for a number of keys before another group can get them first. This quest works best if it requires a majority of keys instead of all the keys. That way, no one side can thwart the other by possessing only one key. A setup where the characters search for three of five keys, four of seven keys, or five of nine keys works well. These keys might be hidden in a single dungeon for a small adventure, or spread across the entire multiverse for a huge campaign.",
            },
          ],
          order: 7,
        },
        {
          id: "9defendalocation",
          title: "9. Defend a Location",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'The characters must defend a location from oncoming enemies. As with the "Steal Something" quest, the players will spend time preparing for the quest, shoring up their defenses and perhaps positioning NPC groups to handle parts of the defense under their direction. Though it\'s tempting to run this sort of scenario as a large-scale mass battle, that kind of combat is best handled "off-screen" while you focus the spotlight on the characters and their individual roles in the defense.',
            },
          ],
          order: 8,
        },
        {
          id: "10endtheritual",
          title: "10. End the Ritual",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "In this quest template, the characters must end an ongoing ritual. Doing so usually requires the disruption of multiple components, such as destroying glyph-marked pillars or corrupting magic pools. Suitable rituals might include those dedicated to opening or closing a gate, summoning a fiend, resurrecting a dead god, and so forth. In a variant of this quest template, the characters must defend those performing a ritual against other forces that seek to stop it.",
            },
          ],
          order: 9,
        },
      ],
    },
    {
      id: "toolsforimprov",
      title: "Tools for 5e Improvisation",
      intro: "",
      subsections: [
        {
          id: "difficultychecks",
          title: "Difficulty Checks",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "For any given task or challenge, ask yourself how hard it is to accomplish. Then assign a DC from 10 (easy) to 20 (very hard). If a task is trivial, don't bother asking for a roll. Rather, the characters automatically succeed. Likewise, reserve DCs above 20 for superhuman challenges.",
            },
          ],
          order: 0,
        },
        {
          id: "improviseddamage",
          title: "Improvised Damage",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Decide on a challenge rating (CR) for the source of the damage, from CR 1 (low challenge) to CR 20 (very high challenge). Then roll a number of damage dice of a particular kind, as follows:\n\nThis challenge rating can be thought of as roughly equivalent to the average level of a group of characters. However, don't automatically choose a challenge rating based on the level of the characters. Rather, the level of the challenge might be higher or lower than the characters, depending on the situation.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Single-Target Damage: 7 × CR (or 2d6 per CR)" },
                { item: "Multiple-Target Damage: 3 × CR (or 1d6 per CR)" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "improvisedstatistics",
          title: "Improvised Statistics",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Whenever you need to improvise Armor Class, attack modifiers, saving throw DCs, or other combat statistics for a creature, trap, object, or obstacle, use the following guidelines based on its challenge rating:\n\nWhen improvising statistics for traps and other objects that deal damage and can be attacked to destroy them, estimate the object's CR by comparing it to various creatures that produce the same sorts of effects in combat.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "AC = 12 + 1/2 CR" },
                { item: "DC = 12 + 1/2 CR" },
                { item: "Attack Bonus = 3 + 1/2 CR" },
                { item: "Damage = 7 × CR (or 2d6 per CR)" },
                { item: "Saving Throw with Proficiency = 3 + 1/2 CR" },
                { item: "Hit Points = 20 × CR" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "otherimprovtricks",
          title: "Other Improv Tricks",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The following tricks can also help make it easier for you to improvise during your game:",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Use the story the players give to you, rather than forcing the characters to stick to a path you set.",
                },
                { item: "Use static monster damage." },
                {
                  item: "In combat, go around the table by player instead of rolling for initiative.",
                },
                {
                  item: "Use advantage and disadvantage to reward unique approaches or clarify poor choices.",
                },
                {
                  item: "Improve pacing by changing monster hit points on the fly to speed up or prolong a fight.",
                },
                {
                  item: "Let the characters stumble upon two weak monsters, then see whether the monsters and characters want to fight or simply have a conversation.",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "deadlyencounterbenchmark",
          title: "Deadly Encounter Benchmark",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Choose monsters that make sense for the location, the situation, and the story. Don't worry about whether an encounter is \"balanced\" — except to determine if it might be deadly. An encounter might be deadly if the total of all the monsters' challenge ratings is greater than one quarter of the total of all the characters' levels, or one half of the characters' levels if the characters are 5th level or higher.\n\nIf an encounter might be deadly, warn the players — and make sure the characters have a chance to escape. A more detailed version of the benchmark can be found in [Lazy Combat Encounter Building for 5e](16-lazycombatencounterbuilding.md) later in this document.",
            },
          ],
          order: 4,
        },
        {
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
        },
        {
          id: "names",
          title: "Names",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'You can never have enough names on hand while improvising your game. Here are a few you can use whenever an NPC, location, business, or other part of your game needs a name.\n\nFirst Names: Shum, Agtos, Edbert, Josiane, Olaugh, Rosaline, Pearson, Boyle, Typhon, Satyros, Ronald, Brice, Wilford, Circe, Surbag, Kayla, Latona, Cecily, Shuzug, Moth, Dolly, Minerva, Prutha, Esmour, Tristan, Lake, Stewart, Hebub, Lanos, Ingram, Orvist, Daud, Metope\n\nLast Names/Organization Names: Lionstone, Treeson, Oakhelm, Gentleheart, Whitesong, Starharp, Nightchaser, Shadowstinger, Catclaw, Faeriebound, Leafwing, Goldrock, Darkslicer, Gravewalker, Rainbright, Needleflinger, Goosechaser, Steelclaw, Scalerazor, Glasscutter, Ironhouse, Eboncloud. More names can be found in the "[NPC Generator](26-npcgenerator.md)" section later in this document.',
            },
          ],
          order: 6,
        },
      ],
    },
    {
      id: "quicktricks",
      title: "Quick Tricks for Lazier 5e Games",
      intro: "",
      subsections: [
        {
          id: "startwithinspiration",
          title: "Start with Inspiration",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Award inspiration to each character at the beginning of a session. This takes some of the weight off of needing to remember to reward inspiration during the game. You can still award it again during the game if players have used it.",
            },
          ],
          order: 0,
        },
        {
          id: "useindexcardsforinitiative",
          title: "Use Index Cards for Initiative",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Index cards can be used to track initiative in two potential ways. First, fold them over into \"table tents\" and number them from 1 to 9. Then hand them out to the players in the order of their characters' initiative. Alternatively, write the characters' names on one side of the card and put character info useful for you on the other. Fold them over the top of your GM screen, then set them out in initiative order each time combat begins.",
            },
          ],
          order: 1,
        },
        {
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
        },
        {
          id: "usepassivescores",
          title: "Use Passive Scores",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Continually calling for checks in the middle of the narrative can disrupt the flow of the story. Instead, keep the characters' passive Perception, passive Insight, and passive Investigation scores in front of you on a cheat sheet or on index cards. Then use those passive scores to describe what the characters see or experience while exploring the scene.",
            },
          ],
          order: 3,
        },
        {
          id: "campsitestories",
          title: "Campsite Stories",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "During rests, ask the players to tell a story of their character or describe how their character feels about what's been going on in the campaign. This can help players dig into their characters' thoughts and expose those thoughts to you and the other players. Players might want to describe their characters' conversations while on watch in the same manner.",
            },
          ],
          order: 4,
        },
        {
          id: "passivemonsterinitiative",
          title: "Passive Monster Initiative",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "For simple battles, use a passive initiative score for monsters, equal to 10 plus the monster's Dexterity bonus. This typically puts monsters in the middle of the initiative order, rather than risking them being too high or too low.",
            },
          ],
          order: 5,
        },
        {
          id: "starsandwishes",
          title: "Stars and Wishes",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Every few games, take time to ask each player for their "stars and wishes" — a concept described on the Gauntlet RPG blog. Ask each player two questions:\n\nThe answers to these questions can help you understand exactly what your players are getting from the game, and can give you ideas for how the game might unfold in the future.',
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "What have they enjoyed about the game so far?" },
                { item: "What do they want to see more of in future games?" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "offercinematicadvantage",
          title: "Offer Cinematic Advantage",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Throughout the game, offer players advantage on checks or attacks if they're willing to undertake high-action moves. For example, a character might leap up and swing from a chandelier to stab at a foe down below. Call for an ability check, granting advantage on the character's next attack with a successful check. But on a failed check, the character's move goes awry and they fall. Most characters will focus on moves that use ability checks they're good at, making success more likely than failure. A slight chance of failure can make winning advantage feel that much sweeter, but keep failure conditions fairly minor so that going for cinematic advantage doesn't seem too risky to the players.",
            },
          ],
          order: 7,
        },
        {
          id: "otherquicktricks",
          title: "Other Quick Tricks",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The following tricks make excellent additions to every GM's toolbox:",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Keep a list of random names on hand to use for NPCs, villains, and monsters.",
                },
                {
                  item: "Describe the world through the eyes of the characters, actively narrating what they see and know about the world around them.",
                },
                {
                  item: "Don't ask for a d20 roll if there isn't a chance for failure, or if failure wouldn't be interesting. This can help you remember to never bury useful or vital information behind an ability check.",
                },
                {
                  item: "Reskin bandit, thug, ogre, and giant stat blocks to make new hard-hitting monsters of all different sizes.",
                },
                {
                  item: "Reveal monster ACs and the DCs for ability checks to the players, and help them calculate ahead of time what they'll need on their d20 roll to succeed. This lets the players focus on the excitement of the die roll rather than the math.",
                },
                {
                  item: "When appropriate, roll on a character's behalf so the player doesn't know the result for something their character wouldn't know.",
                },
              ],
            },
          ],
          order: 8,
        },
      ],
    },
    {
      id: "wildernesstravel",
      title: "Wilderness Travel and Exploration",
      intro:
        "This section offers a systematic approach for handling travel through wild lands filled with potential dangers, and can be used with both point crawls (see the previous page) or hex crawls.\n\nAs the characters travel overland, they undertake specific activities related to the journey. Select appropriate DCs for those activities, with checks usually ranging between DC 10 (easy) and DC 20 (very hard). A default of DC 12 is usually a good choice.",
      subsections: [
        {
          id: "characterroles",
          title: "Character Roles",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "When the characters choose to travel through the wilderness, each player chooses a role for their character to take on. If two characters feel like good choices for a particular role, one character can use the Help action to assist the other, granting advantage on the check.\n\n### Trailhand\n\n**Applicable Skills:** Nature, Survival\n\nA trailhand ensures that the party follows the right path to reach an intended destination, masterfully navigating the natural or constructed paths that crisscross the wilds. With a successful check, the characters stay on the correct paths. On a failure, they might become lost, stumbling into a hostile area or losing resources. Characters might also be subject to exhaustion as they try to make their way back to the correct path, or might find it difficult to take a short or long rest until they do.\n\n### Scout\n\n**Applicable Skills:** Insight, Investigation, Nature, Perception, Survival\n\nA scout keeps an eye out for potentially hostile creatures during the characters' journey. These might be creatures stalking the characters, creatures that have earlier crossed the characters' path, or creatures that are traveling in the same direction and overtake the party. With a successful check, the characters spot the potentially hostile creatures and can plan their response. On a failure, the scout might unknowingly lead the party into a hostile encounter or an ambush.\n\n### Quartermaster\n\n**Applicable Skills:** Medicine, Survival\n\nA quartermaster ensures that the characters remain well fed and hydrated during their journey. They ensure that provisions remain unspoiled, and help forage for additional resources along the way. Shorter journeys might not require a character to take on this role.\n\nWith a successful check, the characters have plenty of food and water for the journey, with provisions remaining unspoiled. On a failure, the characters might lose precious resources of food and water (potentially leading to exhaustion), or need to spend additional time searching for resources.",
            },
          ],
          order: 0,
        },
        {
          id: "groupstealth",
          title: "Group Stealth",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "If the characters decide to move stealthily through the wilderness, doing so doubles the length of their travel time and might impose disadvantage on other checks at your discretion. To move stealthily through the wilderness, the characters make a group Dexterity (Stealth) check and compare that result to the passive Wisdom (Perception) scores of any potentially hostile creatures that might spot or hear them.",
            },
          ],
          order: 1,
        },
        {
          id: "creatingthewilderness",
          title: "Creating the Wilderness",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "When an adventure sees the characters trekking across the wilds, use the following steps to create an adventure framework for that wilderness journey. You can use random tables to generate locations for wilderness journeys, including encounter ideas and suggestions for landmarks.\n\n### Determine the Weather\n\nChoose or randomly select potential weather for the characters' journey. Weather mostly adds to the in-world atmosphere, but harsh weather can change the DCs of the characters' activities as they travel if you wish.\n\n### Determine Potential Encounters\n\nAs the characters travel through the wilderness, choose or randomly select potential encounters. These might be face-to-face encounters with denizens of the wilderness, but not all such encounters need to be hostile. The characters could run into friendly travelers, fearful monsters, weak foes, or signs of a previous battle. Likewise, they might spot the tracks of creatures recently passed by, or that are heading in the party's direction.\n\n### Place Notable Landmarks\n\nUse notable landmarks to mark key points along the characters' journey. Such landmarks can serve as a backdrop for random encounters or as places to rest. They might also serve as a source of secrets and clues that the characters can discover.",
            },
          ],
          order: 2,
        },
      ],
    },
    {
      id: "quickencounterbuilding",
      title: "5e Quick Encounter Building",
      intro:
        "When building encounters, start by choosing the type and number of monsters that make sense for the situation. Then use the following guidelines to compare the challenge rating of the monsters, the level of the characters, and the ratio of monsters to characters. If the quantity of monsters or their challenge rating is beyond the indicated guidelines, the encounter might be deadly. Be especially careful with potentially deadly encounters when the characters are 1st level.",
      subsections: [
        {
          id: "forcharactersof1stlevel",
          title: "For Characters of 1st Level",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "CR 0 to 1/4: One monster per character" },
                { item: "CR 1/2: One monster per two characters" },
                { item: "CR 1: One monster per four characters" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "forcharactersof2ndto4thlevel",
          title: "For Characters of 2nd to 4th Level",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "CR = 1/10 level: Two monsters per character" },
                { item: "CR = 1/4 level: One monster per character" },
                { item: "CR = 1/2 level: One monster per two characters" },
                { item: "CR = Level: One monster per four characters" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "forcharactersof5thto20thlevel",
          title: "For characters of 5th to 20th Level",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "CR = 1/10 level: Four monsters per character" },
                { item: "CR = 1/4 level: Two monsters per character" },
                { item: "CR = 1/2 level: One monster per character" },
                { item: "CR = 3/4 level: One monster per two characters" },
                { item: "CR = Level + 3: One monster per four characters" },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Finally, tune encounters by adjusting the number of monsters, increasing or decreasing hit points, or making named or unique monsters more powerful.\n\n**Hit Points:** Standard monster hit points are an average of the monster\'s HD range. You can increase or decrease hit points within that range to model particularly weak or particularly strong monsters. To make a fight easier, you can also treat monsters as "instant minions," ignoring their usual hit points and letting a single attack kill them. Having a few enemies die quickly can turn the tide in favor of the characters and keep a battle from feeling stale.\n\n**Named Monsters:** Adding an extra attack or maximizing damage can make a named monster or unique foe more challenging. Named monsters can also be given legendary actions or the Legendary Resistance feature to make the fight more interesting.',
            },
          ],
          order: 2,
        },
      ],
    },
    {
      id: "lazycombatencounterbuilding",
      title: "Lazy Combat Encounter Building for 5e",
      intro:
        "This section helps you build and improvise dynamic combat encounters based on the fiction of the game.",
      subsections: [
        {
          id: "startwiththestory",
          title: "Start with the Story",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Good combat encounters begin with the story. Instead of building combat encounters as fixed components of the game, let combat encounters evolve naturally from the story taking place at the table.\n\nBegin by asking the following question: What monsters make sense given the current location and situation? Then let that question guide you in the creation of a list of monsters and NPCs that might show up at a given location, and in what quantity.\n\nInstead of predefining scenes as combat, roleplaying, or exploration, let the characters' approach determine what happens. Maybe they fight the guards at the gatehouse. Maybe they sneak past. Maybe they try to play the part of hired mercenaries. But let whatever happens come from the choices of the players.",
            },
          ],
          order: 0,
        },
        {
          id: "averagecharacterhitpoints",
          title: "Average Character Hit Points",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Gauging the level of challenge in an encounter often comes down to comparing the amount of damage a monster can deal to the hit points of the characters. Hit points vary widely between classes, but you can use the following formula to estimate an average character's hit points at a given level: (Level × 7) + 3.\n\nBy giving you a rough estimation of how tough characters of a given level are, this formula can help you gauge how dangerous a specific monster will be, as well as judging the potential deadliness of traps, hazards, and other effects that deal damage.",
            },
          ],
          order: 1,
        },
        {
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
        },
        {
          id: "charactercapabilitiesvary",
          title: "Character Capabilities Vary",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "No chart, table, or equation works perfectly to judge encounter balance at any given level, because no such system can take into account the wide range of options that can affect combat. Any individual character's effective power in a fight can go well beyond what's expected for their given level, especially at higher levels. And other factors that can affect a character's power might include any of the following:\n\nSo use the benchmarks for determining whether an encounter might be deadly as a starting point. Then trust that you'll be better able to gauge what your characters can handle in combat the more you see them in action during the game.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Player experience" },
                {
                  item: "Class synergy between different characters in the party",
                },
                { item: "Magic items" },
                { item: "Environmental and situational circumstances" },
                { item: "Feats and multiclassing" },
                { item: "The total number of actions on either side" },
                { item: "How well rested the characters are" },
              ],
            },
          ],
          order: 3,
        },
        {
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
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "1",
                  item: "0.5",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "2",
                  item: "2",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "3",
                  item: "3",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "4",
                  item: "4",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "5",
                  item: "8",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "6",
                  item: "9",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "7",
                  item: "11",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "8",
                  item: "12",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "9",
                  item: "14",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "10",
                  item: "15",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "11",
                  item: "17",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "12",
                  item: "18",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "13",
                  item: "20",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "14",
                  item: "21",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "15",
                  item: "23",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "16",
                  item: "24",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "17",
                  item: "26",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "18",
                  item: "27",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "19",
                  item: "29",
                },
                {
                  lazy_encounter_benchmark_for_potentially_deadly_encounters:
                    "20",
                  item: "30",
                },
              ],
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "totmguidelines1",
      title: "Theater of the Mind Guidelines (Extended)",
      intro:
        'The following guidelines can help Gamemasters run combat in the "theater of the mind," without the need for a gridded battle map or miniatures. This style of combat takes the emphasis away from tactical features such as distance, range, and the specific size of areas of effect. Instead, it focuses on the in-game action, the intent of the characters, and what happens in the story.\n\nThis style of combat works just like any other scene in your game. On each player\'s turn, you describe the current situation, the players describe their intent, and you adjudicate what happens as a result.\n\nTheater-of-the-mind combat requires that the players trust you as the Gamemaster, knowing that you\'ll describe the situation and adjudicate the results of the characters\' actions fairly. As the GM, you\'ll earn this trust by favoring the players whenever possible, and by focusing on sharing an action-packed story.\n\nRunning theater-of-the-mind combat removes agency from the players. It takes away their ability to control every aspect of how their characters move and what they do. As the GM, you can mitigate this by asking each player for their intent each turn, then helping them meet that intent. For example, a player who says "I move close to the orcs" potentially leaves too many possibilities open. So encourage the player to focus their intent more — perhaps along the lines of, "I want to position myself so that at least two orcs are within the reach of my glaive."\n\nWhen playing in the theater of the mind, both you and the players must worry less about the mechanical details of the game. Instead, everyone will focus on the action and the story.',
      subsections: [
        {
          id: "summaryguidelinesforthegm",
          title: "Summary Guidelines for the GM",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Each turn, describe the situation surrounding the characters.",
                },
                {
                  item: "Ask for the players' intent and help them achieve it.",
                },
                { item: "Be generous. Give players the benefit of the doubt." },
                {
                  item: "Use ability checks to let the characters try crazy ideas.",
                },
                {
                  item: "Ask the players to describe interesting physical characteristics of the monsters, and use these to identify monsters during combat.",
                },
                {
                  item: "Bring characters into the story by asking them to describe their killing blows.",
                },
                {
                  item: "When needed, use sketches, abstract maps, or miniatures to show complicated locations and relative positions.",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "summaryguidelinesforplayers",
          title: "Summary Guidelines for Players",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Describe your intent. What you want to accomplish?" },
                { item: "Use the features of the area to your advantage." },
                {
                  item: "Don't worry about specific distances. Just describe what you want to do.",
                },
                {
                  item: "Try awesome ideas based on the details of the location.",
                },
                { item: "Describe your character's actions within the story." },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "movementdistanceandrange",
          title: "Movement, Distance, and Range",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "At the beginning of combat, you describe the situation, features, distances, and arrangements of the creatures in the area. Assuming a moderately sized combat area, any creature can generally move within 5 feet of any other creature, and every creature is within range of every other creature making ranged attacks. You'll make it clear whenever this isn't true, such as when an enemy is farther away or behind a front line of protective allies.\n\nCharacters with fast movement might have opportunities to move places other characters can't.",
            },
          ],
          order: 2,
        },
        {
          id: "positioningopportunityattacksandcover",
          title: "Positioning, Opportunity Attacks, and Cover",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "On each player's turn, they describe how they intend to position themselves. Examples of movement in the theater of the mind might include moving next to an ally, moving next to two enemies, or staying out of reach while attacking with a polearm.\n\nIf a creature is within an enemy's reach, it will likely provoke an opportunity attack if it tries to move away from that enemy. Creatures able to disengage can do so and avoid opportunity attacks.\n\nAs you describe the features of the area, make a note of which ones can provide cover to the characters or their enemies, and how much cover.",
            },
          ],
          order: 3,
        },
        {
          id: "areasofeffect",
          title: "Areas of Effect",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The following guidelines offer a rough baseline for determining the number of targets that fall within an area of effect. The circumstances of a battle can increase or decrease this number. For example, for larger monsters or monsters that are more spread out, an area of effect might target only half the normal number of creatures. For smaller monsters or monsters that are packed close together, an area of effect might include up to double the normal number of targets.\n\nAbilities like the evoker's Sculpt Spells feature can increase the number of affected enemies, usually by one or two. Likewise, an area of effect that targets both the characters and their enemies might affect more total targets — including an effect created by a character or monster willing to put allies in harm's way. If a spellcaster character wishes to place allies within an area of effect, you and the players should negotiate this before the spell is cast.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Tiny Area: 1 or 2 creatures (cloud of daggers)" },
                {
                  item: "Small Area: 2 creatures (burning hands, thunderwave)",
                },
                { item: "Large Area: 4 creatures (cone of cold, fireball)" },
                { item: "Huge Area: Everyone (circle of death, earthquake)" },
                { item: "Short Line: 2 creatures (wall of fire)" },
                {
                  item: "Long Line: 3 creatures (blade barrier, lightning bolt)",
                },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "locationsfeaturesenvironmentandterrain",
          title: "Locations, Features, Environment, and Terrain",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "When first describing the combat encounter, describe notable locations, objects, environmental features, and terrain features. Write these down and keep them in front of the players if it helps them visualize the battlefield. Let the players know that they can interact with these environmental features, through such actions as swinging from magical chandeliers, climbing up obsidian cliffs to advantageous positions, or hiding behind ruined statues. If any feature or effect creates difficult terrain, let the players know how this might affect them, such as requiring that they use the Dash action to get out of the area.",
            },
          ],
          order: 5,
        },
        {
          id: "randomlyselectedtargets",
          title: "Randomly Selected Targets",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Avoid biases — whether perceived or actual — by randomly selecting targets when it isn't clear which character a monster would attack. Rolling randomly for targets in the open can help build trust between you and the players, letting them know that the GM isn't picking on anyone. Monsters aren't idiots, though. If it's clear that a monster would attack a particular character, such as a wizard concentrating on a dangerous spell, the monster will do so. When this happens, just describe why the monster chose that particular character, so the players understand.",
            },
          ],
          order: 6,
        },
        {
          id: "physicaltraitsandidentifyingenemies",
          title: "Physical Traits and Identifying Enemies",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Ask each player to describe the physical traits of a monster their character is attacking. This helps identify the monster, opens up all the players' imaginations to the battle, and helps everyone know which monster is which using in-story descriptions. Write these physical traits down on a 3×5 index card or on a dry-erase flip mat so everyone can see which monsters are in play.",
            },
          ],
          order: 7,
        },
        {
          id: "goingbigwithdescriptions",
          title: "Going Big with Descriptions",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Theater-of-the-mind combat can go stale if you don't continually reinforce the story of what's happening. Go big with your descriptions of the location and the action. Ask players to describe their attacks and killing blows. Between turns, describe the current situation using in-story language. These descriptions are vital to keeping the scene interesting.",
            },
          ],
          order: 8,
        },
      ],
    },
    {
      id: "totm2",
      title: "Theater of the Mind Guidelines (Abbreviated)",
      intro:
        'This section offers abbreviated guidelines for running "theater of the mind" combat — no maps or miniatures, making use only of narrative and your players\' imaginations. Share these guidelines with your players so that everyone has a common understanding of how this style of playing out combat works at the table.',
      subsections: [
        {
          id: "coreprinciples",
          title: "Core Principles",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Round-by-round combat played in the theater-of-the-mind style is built around three core principles:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "The GM describes the situation." },
                { item: "Players describe their characters' intent." },
                {
                  item: "The GM helps the players achieve that intent and adjudicates how the situation unfolds as a result.",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "commonunderstandings",
          title: "Common Understandings",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "A GM running a theater-of-the-mind game should keep the following points in mind:",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Build theater-of-the-mind combat around the following ideals: The GM and the players are working together to share a story of high action and adventure. They are not opponents.",
                },
                {
                  item: "The GM and players do not hide their intentions during combat.",
                },
                {
                  item: "Players and GMs assume that the characters and their enemies all move cautiously, avoiding opportunity attacks whenever possible.",
                },
                {
                  item: "The GM identifies when a character is taking a risk, such as provoking an opportunity attack, before the player chooses the character's action.",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "playeradvice",
          title: "Player Advice",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Players in a theater-of-the-mind game should keep the following points in mind:",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Describe your intent. Tell the GM what you want your character to do in the story that the combat encounter is building. Avoid a back-and-forth series of tactical questions.",
                },
                {
                  item: 'Tell the GM what special features your character has that you want to highlight. If you have crunchy tactical abilities you want to use, describe how you want them to work for the situation. For example: "I want to stay close to the cleric so I can use my Protection Fighting Style, but I\'ll keep 10 feet away from the orcs so I can use my Polearm Mastery feat to hit them on their way in."',
                },
                {
                  item: 'Describe specifically what you want to do. "I want to stay within the paladin\'s aura but still attack the hobgoblin ravager."',
                },
                {
                  item: "Look for fun ways to use the environment described by the GM.",
                },
                {
                  item: "Worry less about the mechanical details of the game and more on the high action and adventure of the story. One good way to do that is to imagine combat as a high-action battle in one of your favorite movies.",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "gmadvice",
          title: "GM Advice",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "A GM running a theater-of-the-mind game should keep the following points in mind:",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Work with the players, not against them. Err in favor of the characters as you help the players achieve their intent.",
                },
                {
                  item: "Each turn, describe the situation surrounding the acting character.",
                },
                {
                  item: "Adjudicate the number of targets in an area attack based on the situation, the assumed positions of the combatants, and the size of the area.",
                },
                {
                  item: "Use evocative in-world narration to describe the characters, the monsters, the action, and the high adventure of the story as it plays out.",
                },
                {
                  item: 'Make bargains and deals with the players. "You can hit three orcs with fireball, or you can hit five orcs if one of your companions is willing to be hit as well."',
                },
                {
                  item: "Describe the distances between combatants in feet to help players recognize what they can and can't do. Default to 25 feet if you don't really know.",
                },
                {
                  item: "Run simpler encounters with useful environmental features, such as flipped tables, cracked stalagmites, cliff edges, bottomless pits, roaring fires, and hanging chandeliers.",
                },
                {
                  item: "Ask the players to identify monsters by describing interesting physical characteristics.",
                },
                {
                  item: "Give the players opportunities to show off their characters' skills and abilities.",
                },
                {
                  item: "Some players can't visualize combat scenes in their head, a condition known as aphantasia. For these players, consider providing a quick sketch or other visual.",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "onetoolofmany",
          title: "One Tool of Many",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Add theater of the mind to your collection of ways to run combat, including abstract maps, zone-based combat (described later in this document), gridded combat, or 3D terrain. Choose the right style of combat for the pace and complexity of the scene. Keep each approach as a tool in your GM's toolbox to help you share exciting tales of action and high adventure.",
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "zonebasedcombat",
      title: "Zone-Based Combat",
      intro:
        "Zone-based combat can help GMs run fast, dynamic, and high-action combat without worrying about all the details of tactical combat played out on a grid. It supports multiple combat styles, including pure narrative theater-of-the-mind combat, quickly drawn abstract sketches, or miniatures used with detailed maps or 3D terrain. Using zone-based combat means you have to worry less about the details of a 5-foot-per-square grid and can focus more on big heroic action. Zone-based combat simply requires that the GM and the players work together with the shared goal of creating fantastic stories of high adventure.",
      subsections: [
        {
          id: "zonerules",
          title: "Zone Rules",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The following guidelines establish the broad strokes of zone-based combat:",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Combat areas are made up of one or more zones, each of which is roughly 25 feet on a side but which can be any size.",
                },
                {
                  item: 'The GM defines zones using evocative descriptions, such as "a crumbling bridge over a bottomless gorge," "a blood-covered altar," or "a holy statue of light."',
                },
                {
                  item: "The GM can write down or define these zones and their descriptions on paper, note cards, or erasable battle maps so the players can visualize the situation. Miniatures or tokens can mark out the positions of characters and monsters in zones.",
                },
                {
                  item: "Players are encouraged to make use of features in a zone, whether by taking cover, climbing to an advantageous position, activating magical locations, and so forth.",
                },
                {
                  item: "Most combat encounters occur in a single zone. Big battles might use two or more zones.",
                },
                {
                  item: "On each of their turns, a character can move within a zone or can move from one zone to another. Characters with extra movement can move up to two zones away.",
                },
                {
                  item: "Assume that all creatures in combat move cautiously, avoiding opportunity attacks when possible. The GM informs the players if a character risks an opportunity attack from their intended activity in the fight.",
                },
                {
                  item: "Attacks with a range of 25 feet or greater can target creatures within a zone or one zone away.",
                },
                {
                  item: "Attacks with a range of 50 feet or greater can also target creatures two or more zones away.",
                },
                {
                  item: "If a character attacks with or is attacked by a melee attack with a 5-foot reach, that character will provoke opportunity attacks if they attempt to move away from their opponent. A character attacked by a melee attack with a 5-foot reach also has disadvantage on ranged attacks.",
                },
                {
                  item: 'Players can make best use of zone-based combat by describing their intent — for example, "I want to attack the orc chief with my glaive but stay out of his reach," or "I want to get between our wizard and the ogre."',
                },
                {
                  item: "The GM then works with the players to help them achieve their intent.",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "areasofeffectinzones",
          title: "Areas of Effect in Zones",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Many spells and features have areas of effect. GMs can use the following guidelines to adjudicate which targets are hit by such effects. These guidelines break out general descriptions of the size of an area of effect, how many creatures are typically affected in that area using zone-based combat, and examples of common spells and class features that use that size:\n\nGMs can adjudicate and adjust these numbers based on the current situation. For example, an area containing a horde of monsters might double the potential number of monsters affected. Whatever the circumstances, though, a GM should always adjudicate in favor of the characters.",
            },
            {
              type: "table",
              order: 1,
              data: [
                {
                  item: "Tiny Area: One or two creatures in the same zone (cloud of daggers)",
                },
                {
                  item: "Small Area: Two or three creatures in the same zone (burning hands, thunderwave)",
                },
                {
                  item: "Large Area: Four to six creatures in the same zone (cone of cold, fireball)",
                },
                {
                  item: "Huge Area: Twelve creatures across two zones (circle of death, Turn Undead)",
                },
                {
                  item: "Short Line: Two or three creatures in the same zone (wall of fire)",
                },
                {
                  item: "Large Line: Two to four creatures across two zones (lightning bolt)",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "handlingedgecases",
          title: "Handling Edge Cases",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Zone-based combat doesn't account for a wide range of features that make use of specific distances. In those cases, it's up to the GM to work with a player's intent to help them make use of those features. In all cases, the GM should ask what the player wants to do, then help them figure out how to do it.",
            },
          ],
          order: 2,
        },
      ],
    },
    {
      id: "monsterdifficultydials",
      title: "Monster Difficulty Dials",
      intro:
        'Balancing combat encounters is notoriously difficult. Different groups of characters can bring very different capabilities to each battle, even at the same level. However, because monsters as they are typically presented are the average of their type, you can adjust the averages to subtly or dramatically change the difficulty of a given monster or group of monsters. By turning these "difficulty dials" for monsters, you can easily shift the tone of combat even in the middle of a battle.',
      subsections: [
        {
          id: "hitpointdial",
          title: '"Hit Point" Dial',
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Hit points given for monsters are the average of their Hit Dice. This means you can adjust hit points within the minimum and maximum of a monster's Hit Dice formula based on the individual story for that particular monster, the current pacing of the battle, or both.\n\nFor example, an average ogre has 59 hit points from 7d10 + 21 Hit Dice. This means a weak ogre might have as few as 28 hit points, while a particularly strong ogre might have 91. This lets you easily set up fights in which minion ogres might have fewer hit points while boss ogres have more. (As an even lazier rule of thumb, you can halve or double a monster's average hit points to give you a weaker or stronger version of that monster.)\n\nYou can turn this dial before a battle begins or even during the battle itself. If a battle drags, reduce the hit points of a monster to get it out of the fight earlier. If a battle feels like it will be over too quickly, increase the monster's hit points to make it hold up longer. Start with average hit points, and then turn the hit point dial one way or the other whenever doing so can make the game more fun.",
            },
          ],
          order: 0,
        },
        {
          id: "numberofmonstersdial",
          title: '"Number of Monsters" Dial',
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The \"number of monsters in a battle\" dial alters combat challenge the most dramatically of all the dials — but because it's so clearly visible to players, this dial is also sometimes difficult to change during a fight.\n\nIf circumstances allow for it, some monsters might flee or automatically fall depending on the events of a fight. Undead might break if their necromancer master is killed, and many intelligent creatures will flee a fight they can't win. Other times, more monsters might enter the fray in a second wave if the first wave isn't standing up to the characters.\n\nWhen developing a combat encounter in which you think you might turn this dial, consider beforehand how monsters might leave the battle or how other monsters might join the fight as reinforcements in a realistic way.",
            },
          ],
          order: 1,
        },
        {
          id: "damagedial",
          title: '"Damage" Dial',
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Increasing the amount of damage a monster deals on each attack increases the monster's threat and can make a dull fight more fun. In the same way, decreasing monster damage can help prevent a fight from becoming overwhelming if the characters are having trouble.\n\nThe static damage value noted in a monster's stat block represents the average of the damage formula for the monster's attack. If you use average damage, you can adjust the damage based on that formula. For example, an ogre deals 13 (2d8 + 4) bludgeoning damage with their greatclub attack, so you can set this damage at anywhere from 6 to 20 and still be within the range of what you might roll.\n\nIf you're a GM who rolls for damage, you can also turn the damage dial up by adding one or more additional damage dice. If you like, you can have an in-game reason for this increase. Perhaps an ogre sets its club on fire to deal an additional 4 (1d8) or 7 (2d6) fire damage. Or a particularly dangerous vampire with an unholy sword might deal an extra 27 (6d8) necrotic damage if you so choose. Adding these kinds of effects to a monster's attack is an excellent way of increasing a monster's threat in a way the players can clearly understand — and it has no upper limit.",
            },
          ],
          order: 2,
        },
        {
          id: "numberofattacksdial",
          title: '"Number of Attacks" Dial',
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Increasing or decreasing the number of attacks a monster makes has a larger effect on its threat than increasing its damage. You can increase a monster's number of attacks if it's badly threatened by the characters, just as you can reduce its attacks if the characters are having an easy time. An angry ogre left alone after its friends have fallen to the heroes might start swinging its club twice per Attack action instead of just once. Single creatures facing an entire party of adventurers often benefit from increasing their number of attacks.",
            },
          ],
          order: 3,
        },
        {
          id: "mixandmatch",
          title: "Mix and Match",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "You can turn any or all of these dials to tune a combat encounter and bring the most excitement to your game. Don't turn the dials just to make every battle harder, though. Sometimes cutting through great swaths of easy monsters is exactly the sort of situation players love.\n\nTurning several dials together can change combat dramatically, helping to keep things feeling fresh. For example, a group of starving ogres might be weakened (lowering the hit point dial) but also frenzied in combat (turning up the attack dial). By adjusting these dials when designing encounters and during your game, you can keep the pacing of combat exciting and fun.",
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "monstertemplates",
      title: "Monster Templates",
      intro:
        "The following monster templates can help you customize existing monsters into new unique variants that can fit a variety of locations and circumstances. With just a few templates in hand, your core monster books can become much more useful.",
      subsections: [
        {
          id: "challengeratingincrease?",
          title: "Challenge Rating Increase?",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The challenge ratings described in these templates are loose guides, so use your best judgment with them. Apply these templates only when you have a good handle on your characters' capabilities, and be prepared to tune your new monsters accordingly.",
            },
          ],
          order: 0,
        },
        {
          id: "elementalmonsters",
          title: "Elemental Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Apply this template to any monster to make an elemental version of that monster. Choose from or roll on the following table to determine the type of elemental template you want to apply:\n\nThen choose one or more of the following traits to customize your monster, making use of the damage type determined by the elemental template:\n\nThe amount of damage and the size of a templated creature's elemental aura is determined by the base creature's challenge rating. The damage noted is the same for both attacks and the creature's aura.\n\nThis elemental template increases a monster's challenge rating by 1 or 2.",
            },
            {
              type: "table",
              order: 1,
              headers: { d8: "d8", elemental_template: "Elemental Template" },
              data: [
                { d8: "1", elemental_template: "Fire" },
                { d8: "2", elemental_template: "Cold" },
                { d8: "3", elemental_template: "Lighting" },
                { d8: "4", elemental_template: "Acid" },
                { d8: "5", elemental_template: "Poison" },
                { d8: "6", elemental_template: "Necrotic" },
                { d8: "7", elemental_template: "Radiant" },
                { d8: "8", elemental_template: "Thunder" },
              ],
            },
            {
              type: "table",
              order: 2,
              data: [
                {
                  item: "Elemental Resistance. The templated creature has resistance against its damage type.",
                },
                {
                  item: "Elemental Damage. When the templated creature scores a hit using a weapon attack, the attack deals extra damage of its damage type.",
                },
                {
                  item: "Elemental Aura. Any creature that starts their turn within an area surrounding the templated creature, or that enters that area for the first time on a turn, takes damage of the templated creature's type.",
                },
                {
                  item: "Elemental Shield. Any creature that touches the templated creature or hits them with a melee attack while within 5 feet of them takes damage of the templated creature's type.",
                },
              ],
            },
            {
              type: "table",
              order: 3,
              headers: { cr: "CR", damage: "Damage", aura_size: "Aura Size" },
              data: [
                { cr: "0-1", damage: "3 (1d6)", aura_size: "5 feet" },
                { cr: "2-5", damage: "7 (2d6)", aura_size: "10 feet" },
                { cr: "6-10", damage: "10 (3d6)", aura_size: "15 feet" },
                { cr: "11-15", damage: "14 (4d6)", aura_size: "20 feet" },
                { cr: "16+", damage: "21 (6d6)", aura_size: "25 feet" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "diremonsters",
          title: "Dire Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Dire monsters are particularly large and dangerous versions of typical monsters, and can be created using the following guidelines:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "The monster's hit points are doubled." },
                { item: "The monster's size increases one category." },
                { item: "The monster gains a +2 bonus to attack rolls." },
                {
                  item: "The monster can use one or more of its standard attacks multiple times on its attack action. Use your best judgment to choose which of the monster's attacks to use for multiple attacks.",
                },
                { item: "The monster's challenge rating increases by 2 or 3." },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "fiendishmonsters",
          title: "Fiendish Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Infernal or abyssal variants of existing monsters are endlessly spawned across the Lower Planes. This template can turn any monster into a fiendish variant:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "The monster's type becomes fiend." },
                {
                  item: "The monster has advantage on saving throws against spells and other magical effects.",
                },
                {
                  item: "The monster has resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
                },
                { item: "The monster has resistance to cold and fire damage." },
                {
                  item: "The monster has immunity to poison damage and the poisoned condition.",
                },
                { item: "The monster's weapon attacks are magical." },
                {
                  item: "The monster has darkvision out to a range of 120 feet.",
                },
                { item: "The monster's challenge rating increases by 1." },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "spell-infusedmonsters",
          title: "Spell-Infused Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Some monsters can innately cast magical spells. Spell-infused monsters typically have a spell attack bonus of 3 + one-half the monster's challenge rating, and a spell save DC of 12 + one-half the monster's challenge rating (rounded down in both cases).\n\nSpell-infused creatures do not require components to cast their spells. They typically use each of their spells once, recovering the ability to do so when they finish a long rest. Roll for or choose from the table to determine which spells a creature can use. Spells that deal high damage can affect a creature's challenge rating.",
            },
            {
              type: "table",
              order: 1,
              headers: { d20: "d20", spell: "Spell" },
              data: [
                { d20: "1", spell: "Burning hands" },
                { d20: "2", spell: "Magic missile" },
                { d20: "3", spell: "Disguise self" },
                { d20: "4", spell: "Fog cloud" },
                { d20: "5", spell: "Shield" },
                { d20: "6", spell: "Inflict wounds" },
                { d20: "7", spell: "Faerie fire" },
                { d20: "8", spell: "Thunderwave" },
                { d20: "9", spell: "Blur" },
                { d20: "10", spell: "Darkness" },
                { d20: "11", spell: "Invisibility" },
                { d20: "12", spell: "Misty step" },
                { d20: "13", spell: "Scorching ray" },
                { d20: "14", spell: "Shatter" },
                { d20: "15", spell: "Spirit guardians" },
                { d20: "16", spell: "Dispel magic" },
                { d20: "17", spell: "Fly" },
                { d20: "18", spell: "Gaseous form" },
                { d20: "19", spell: "Lightning bolt" },
                { d20: "20", spell: "Fireball" },
              ],
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "undeadtemplates",
      title: "Undead Templates",
      intro:
        "Death comes to all things, but not even death can keep a good monster down. You can easily create an undead variant of any monster simply by giving it the undead type and describing its undead appearance, letting the narrative feed the players' impression of fighting undead without requiring any mechanical changes. But for even more realistic undead, you can use any of the following templates to give a monster some of the properties and attributes of a specific type of undead creature.",
      subsections: [
        {
          id: "undeadtemplates",
          title: "Undead Templates",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "All creatures that take on one of these templates gain the following universal changes:\n\nThen apply the traits and actions of any of the following specific templates.",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "The creature's type becomes undead." },
                {
                  item: "The creature has darkvision out to a range of 60 feet.",
                },
                {
                  item: "Any new trait of the creature's that requires a saving throw uses a DC of 12 + one-half the undead creature's challenge rating.",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "skeleton",
          title: "Skeleton",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item: "Vulnerability to bludgeoning damage." },
                {
                  item: "Immunity to poison damage, to exhaustion, and to the poisoned condition.",
                },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "zombie",
          title: "Zombie",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Immunity to poison damage and the poisoned condition.",
                },
                {
                  item: "Undead Fortitude. If damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the creature drops to 1 hit point instead.",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "ghoul",
          title: "Ghoul",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Immunity to poison damage, to exhaustion, and to the charmed and poisoned conditions.",
                },
                {
                  item: "Paralyzing Touch. When this creature hits with a melee attack using a natural weapon, the target must succeed on a Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Elves and undead are immune to this effect.",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "wight",
          title: "Wight",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Resistance to necrotic and poison damage, and to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't silvered.",
                },
                { item: "Immunity to exhaustion and the poisoned condition." },
                {
                  item: "Life Drain. When this creature hits with a melee attack using a natural weapon, the attack deals necrotic damage equal to 1d6 + one-half the creature's challenge rating, and the target must succeed on a Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "wraith",
          title: "Wraith",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Resistance to acid, cold, fire, lightning, and thunder damage, and to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't silvered.",
                },
                {
                  item: "Immunity to necrotic and poison damage, to exhaustion, and to the charmed, grappled, paralyzed, petrified, prone, and restrained conditions.",
                },
                {
                  item: "The creature has the wraith's Incorporeal Movement and Sunlight Sensitivity traits.",
                },
                {
                  item: "The creature gains the following trait: Life Drain. When this creature hits with a melee attack using a natural weapon, the attack deals necrotic damage equal to 1d6 + one-half the creature's challenge rating, and the target must succeed on a Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "vampirespawn",
          title: "Vampire Spawn",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Resistance to necrotic, bludgeoning, piercing, and slashing damage from nonmagical attacks.",
                },
                {
                  item: "The creature has the vampire spawn's Spider Climb, Vampire Weaknesses, and Regeneration traits.",
                },
                {
                  item: "Bite. Melee Weapon Attack: 4 + one-half the creature's CR to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire spawn creature, incapacitated, or restrained. Hit: piercing damage equal to 1d6 + one-half the creature's CR, plus necrotic damage equal to 1d6 per one- half the creature's CR (minimum 1d6). The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the templated creature regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                },
                {
                  item: "The creature can grapple a target instead of dealing damage with any of its attacks. If it makes multiple attacks, it can replace one of those attacks with the Bite action.",
                },
                {
                  item: "If you want your vampire spawn creature to feel even more vampiric, give it the ability to cast the misty step, command, or hold person spells at will as a bonus action.",
                },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "powerfulundeadtemplates",
          title: "Powerful Undead Templates",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "To build variants of creatures modeled after more powerful undead, use the undead creature's stat block and add traits from the base creature. It's easier to apply the traits and actions of a stone giant to a lich or vampire stat block than it is to apply lich or vampire traits to a stone giant stat block.",
            },
          ],
          order: 7,
        },
        {
          id: "abilitymodifications",
          title: "Ability Modifications",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Ability score modifications to undead creatures aren't covered in these templates. For example, skeletons might have reductions to Dexterity and Charisma, and vampire spawn might have boosted Strength, Dexterity, and Constitution scores. Most of the time, you can safely skip such changes, simply improvising adjustments to the baseline abilities of the monster when needed.",
            },
          ],
          order: 8,
        },
      ],
    },
    {
      id: "runninghordes",
      title: "Running Hordes",
      intro:
        "This section helps you more easily run battles in which the characters face large numbers of monsters.\n\nTo accommodate running horde combat, we change the rules for running monsters in two ways: adjusting how we track damage done to monsters in a horde, and how we adjudicate attack rolls and saving throws for the horde. You can use these approaches individually or together when running large numbers of monsters.",
      subsections: [
        {
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
        },
        {
          id: "determinetargets",
          title: "Determine Targets",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The circumstances of the encounter dictate how many members of the horde can attack the characters. Unless the circumstances dictate otherwise, assume the horde evenly spreads its attacks across all characters. If certain characters step ahead of the rest of the party or block choke points that prevent the horde from reaching other characters, you can redirect the horde's attacks to the characters stepping forward.",
            },
          ],
          order: 1,
        },
        {
          id: "adjudicatingattacksandsavingthrows",
          title: "Adjudicating Attacks and Saving Throws",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Whenever rolling individual attacks or saving throws would be a burden, assume that one quarter of attacks or saving throws rolled by the horde succeed. Round up or down depending on the circumstances, such as when determining how many attacks succeed against characters with wildly different ACs.\n\nIf all the creatures in a horde have advantage on an attack or saving throw, increase the number of successful attacks or saving throws to one half. If the horde has disadvantage, reduce the number to one in ten.\n\nIf any member of the horde is affected by an effect that leaves them incapacitated, remove them from play.\n\nIf you prefer to roll dice, roll twice when a group of monsters all make attacks or saving throws. On each success, one quarter of the monster attacks or saving throws succeed. If both rolls fail, no attacks or saving throws succeed.",
            },
          ],
          order: 2,
        },
        {
          id: "adjudicatingareasofeffect",
          title: "Adjudicating Areas of Effect",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Adjudicate the number of creatures caught up in an area of effect based on the circumstances, but leaning toward more creatures rather than fewer. You can use the following as a baseline for the number of tightly packed creatures in a horde that are affected in a given area:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Tiny Area (5-foot radius): Two creatures" },
                { item: "Small Area (10- to 15-foot radius): Four creatures" },
                { item: "Large Area (20-foot radius): Sixteen creatures" },
                {
                  item: "Huge Area (30-foot radius or more): Thirty-two or more creatures",
                },
                { item: "Short Line (60 feet): Six creatures" },
                { item: "Long Line (120 feet): Eight creatures" },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "tipsandtricks",
          title: "Tips and Tricks",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Describe these horde combat rules to the players so everyone understands how they work. Always adjudicate combat to the characters' benefit, and help the players achieve their goals.",
                },
                {
                  item: "Use evocative descriptions to flavor a horde. Worry less about the mechanics and more about the feeling involved in fighting a huge horde of monsters.",
                },
                {
                  item: "Avoid using hordes with monsters of different types in a single battle. Instead, use a single stat block and describe any physical differences between monsters narratively.",
                },
                {
                  item: "Augment a horde with a handful of more powerful monsters when desired. Track the hit points and attacks of these powerful monsters normally.",
                },
                {
                  item: "As hordes diminish to a manageable level, return to tracking individual hit points, attacks, and saving throws normally.",
                },
              ],
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "stresseffects",
      title: "Stress Effects",
      intro:
        'The guidelines in this section replace the madness rules found in other books. The concept of "madness" has long been used to malign and marginalize complex psychological symptoms and the individuals coping with them.\n\nThis new approach works with explicitly supernatural hindrances to break away from those stereotypes.\n\nThese effects represent dire reactions to a character witnessing something so alien and horrific that it has a lasting effect. You can use these descriptions to replace the more general frightened, stunned, or incapacitated conditions as desired.\n\nWhen amplifying a sense of stress or horror in a game, ensure that you have the players\' permission ahead of time and that proper safety tools (referenced earlier in this document) are in place.',
      subsections: [
        {
          id: "usingstresseffects",
          title: "Using Stress Effects",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Some things are beyond the ability of the mortal mind to comprehend. When witnessing alien or horrific entities, locations, and events, even the most powerful heroes might find their ability to process what unfolds around them shut down, forcing them to make a stress check. Such a check might be warranted by any of the following situations:",
            },
            {
              type: "table",
              order: 1,
              data: [
                { item: "Witnessing a ghoul devouring a body" },
                { item: "Beholding a bloody sacrificial altar" },
                { item: "Watching the raising of the dead" },
                { item: "Witnessing a ritual sacrifice" },
                { item: "Hearing the sermon of a dark priest" },
                { item: "Reading words from a forbidden tome" },
                { item: "Reading glyphs describing an elder evil" },
                { item: "Seeing a parasite burst free from its host" },
                { item: "Beholding unholy primordial cave paintings" },
                { item: "Touching an unholy artifact" },
                { item: "Peering through a portal into the Nine Hells" },
                { item: "Staring into a scrying pool showing the Abyss" },
                { item: "Discovering the ruins of a sentient alien vessel" },
                { item: "Watching depraved acts of cannibalism" },
                { item: "Seeing the true form of an abomination" },
                { item: "Falling into the depths of the Astral Plane" },
                { item: "Staring into the tumultuous extents of Limbo" },
                { item: "Standing in the presence of a demon prince" },
                { item: "Beholding an alien city of elder evils" },
                { item: "Witnessing the death of a god" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "stressresults",
          title: "Stress Results",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Whenever a character witnesses a potential stress event, you can ask for a Charisma saving throw with a DC based on the severity of the event, from DC 10 (easy) to DC 20 (hard). On a failed save, the character suffers a roleplaying effect from the Stress Effects list. Make sure you review the effects on the table during session zero to ensure they don't cross any players' lines of comfort.",
            },
          ],
          order: 1,
        },
        {
          id: "1d20stressresults",
          title: "1d20 Stress Results",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item_num: 1,
                  item: "You slip into a mental vision of a restful place.",
                },
                {
                  item_num: 2,
                  item: "You whisper in a tongue no mortal understands.",
                },
                { item_num: 3, item: "Blood flows from your eyes." },
                { item_num: 4, item: "You collapse as you lose all strength." },
                { item_num: 5, item: "A screaming whine fills your hearing." },
                {
                  item_num: 6,
                  item: "Your heart seems to stop in your chest.",
                },
                {
                  item_num: 7,
                  item: "The faces of your friends hideously contort.",
                },
                { item_num: 8, item: "Your heartbeat hammers in your ears." },
                { item_num: 9, item: "You hear strange, discordant music." },
                {
                  item_num: 10,
                  item: "You fall asleep and dream of darkness.",
                },
                {
                  item_num: 11,
                  item: "A terrible memory of your past comes to mind.",
                },
                {
                  item_num: 12,
                  item: "Physical pain and burning wracks your body.",
                },
                {
                  item_num: 13,
                  item: "You find yourself unable to move or speak.",
                },
                {
                  item_num: 14,
                  item: "Unbound shadows seem to crawl toward you.",
                },
                {
                  item_num: 15,
                  item: "You hear the echoing sound of children crying.",
                },
                {
                  item_num: 16,
                  item: "You lose control of your bodily functions.",
                },
                {
                  item_num: 17,
                  item: "Your vision fills with twisted geometric shapes.",
                },
                {
                  item_num: 18,
                  item: "You hear the whispers of an otherworldly being.",
                },
                {
                  item_num: 19,
                  item: "You scream as blood flows from your mouth.",
                },
                {
                  item_num: 20,
                  item: "You feel as though all your bones begin to crack.",
                },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                "You determine how long the effect lasts and can add mechanical hindrances inspired by the effect at your discretion. Alternatively, you can add the following mechanical effect:\n\nOn a failed save, the character becomes stunned for 1 minute. The character can repeat the saving throw at the end of each of their turns and whenever they take damage, ending the effect on themself on a success. If the character's saving throw is successful or if the effect ends for it, the character is immune to this effect for the next 24 hours. A character can also choose to break this effect at the start of their turn by taking 4 (1d8) psychic damage per two character levels. A *lesser restoration* or equivalent effect likewise negates a stress effect.\n\n(You can also apply this mechanism for breaking an effect by taking psychic damage to characters who are frightened, stunned, or incapacitated.)",
            },
          ],
          order: 2,
        },
        {
          id: "long-termeffects",
          title: "Long-Term Effects",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'GMs and players can work together to determine whether stress effects have longer-term ramifications. Any such long-term results should reflect not just the character and the situation, but also the players\' desires.\n\nBe mindful to avoid terms such as "madness" or "crazy" to describe the long-term effects of stressful encounters. Consider instead the otherworldly nature of the situation and effect, and focus on how the character might respond to such a stressful experience.\n\nSpecial thanks to Dr. Megan Connell and Dr. Michael Mallen for their feedback on this section.',
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "coreadventuregenerators",
      title: "Core Adventure Generators",
      intro:
        "The tables in this section can help you generate a core fantasy adventure based on the traditional concept of getting hired by a patron or other NPC to take on a quest in a specific location. Often these adventures take place in small settlements surrounded by ancient ruins and monstrous lairs on the edge of civilization.\n\nUse these tables together to generate and inspire full adventures, or use individual tables to fill in the details of other adventures you create or play. This generator (and specifically, the Dungeon Monsters table and the Treasure table) is set up for characters of 1st to 4th level, but can be easily modified for higher-level adventures.",
      subsections: [
        {
          id: "patronsandnpcs",
          title: "Patrons and NPCs",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use these tables to generate a patron or NPC for your adventure, applying an NPC stat block to create villains, hirelings, rivals, or heralds.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                d20: "d20",
                behavior: "Behavior",
                ancestry: "Ancestry",
              },
              data: [
                { d20: "1", behavior: "Enthusiastic", ancestry: "Human" },
                { d20: "2", behavior: "Flighty", ancestry: "Elf" },
                { d20: "3", behavior: "Shifty", ancestry: "Dwarf" },
                { d20: "4", behavior: "Optimistic", ancestry: "Halfling" },
                { d20: "5", behavior: "Paranoid", ancestry: "Orc" },
                { d20: "6", behavior: "Well spoken", ancestry: "Drow" },
                { d20: "7", behavior: "Superior", ancestry: "Tiefling" },
                { d20: "8", behavior: "Haughty", ancestry: "Dragonborn" },
                { d20: "9", behavior: "Pessimistic", ancestry: "Fey" },
                { d20: "10", behavior: "Suspicious", ancestry: "Goblin" },
                { d20: "11", behavior: "Worried", ancestry: "Construct" },
                { d20: "12", behavior: "Greedy", ancestry: "Celestial" },
                { d20: "13", behavior: "Brave", ancestry: "Ghost" },
                { d20: "14", behavior: "Stern", ancestry: "Wizard's familiar" },
                { d20: "15", behavior: "Sly", ancestry: "Talking animal" },
                { d20: "16", behavior: "Wise", ancestry: "Avian" },
                { d20: "17", behavior: "Reserved", ancestry: "Lizardfolk" },
                { d20: "18", behavior: "Cheery", ancestry: "Catfolk" },
                {
                  d20: "19",
                  behavior: "Opportunistic",
                  ancestry: "Lycanthrope",
                },
                { d20: "20", behavior: "Soft spoken", ancestry: "Artifact" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "quests",
          title: "Quests",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Any quests the characters are asked to fulfill might be distilled down to one of the following starting points.",
            },
          ],
          order: 1,
        },
        {
          id: "1d20quests",
          title: "1d20 Quests",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Find an item" },
                { item_num: 2, item: "Kill a villain" },
                { item_num: 3, item: "Rescue an NPC" },
                { item_num: 4, item: "Uncover a secret" },
                { item_num: 5, item: "Clear out monsters" },
                { item_num: 6, item: "Protect a monument" },
                { item_num: 7, item: "Protect an NPC" },
                { item_num: 8, item: "Steal an item" },
                { item_num: 9, item: "Return an item" },
                { item_num: 10, item: "Close a gate" },
                { item_num: 11, item: "Open a gate" },
                { item_num: 12, item: "Activate a monument" },
                { item_num: 13, item: "Disable an artifact" },
                { item_num: 14, item: "Recover an item" },
                { item_num: 15, item: "Convince an NPC" },
                { item_num: 16, item: "Awaken a monster" },
                { item_num: 17, item: "Put a monster to sleep" },
                { item_num: 18, item: "Bury a secret" },
                { item_num: 19, item: "Discover a monument" },
                { item_num: 20, item: "Dig up an artifact" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "locationsmonumentsanditems",
          title: "Locations, Monuments, and Items",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The location of the quest might also contain specific monuments or items tied to the adventure's goals.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                d20: "d20",
                location: "Location",
                monument: "Monument",
                item: "Item",
              },
              data: [
                {
                  d20: "1",
                  location: "Tower",
                  monument: "Sarcophagus",
                  item: "Coin",
                },
                {
                  d20: "2",
                  location: "Crypts",
                  monument: "Obelisk",
                  item: "Figurine",
                },
                {
                  d20: "3",
                  location: "Keep",
                  monument: "Orb",
                  item: "Gemstone",
                },
                {
                  d20: "4",
                  location: "Cairn",
                  monument: "Bone pile",
                  item: "Amulet",
                },
                {
                  d20: "5",
                  location: "Giant statue",
                  monument: "Skull",
                  item: "Earring",
                },
                {
                  d20: "6",
                  location: "Caves",
                  monument: "Megalith",
                  item: "Bell",
                },
                {
                  d20: "7",
                  location: "Sewers",
                  monument: "Pillars",
                  item: "Bone",
                },
                {
                  d20: "8",
                  location: "Temple",
                  monument: "Throne",
                  item: "Bowl",
                },
                {
                  d20: "9",
                  location: "Mines",
                  monument: "Statues",
                  item: "Candle",
                },
                {
                  d20: "10",
                  location: "Mansion",
                  monument: "Well",
                  item: "Ring",
                },
                {
                  d20: "11",
                  location: "Academy",
                  monument: "Orrery",
                  item: "Circlet",
                },
                {
                  d20: "12",
                  location: "Dungeon",
                  monument: "Effigy",
                  item: "Bracelet",
                },
                {
                  d20: "13",
                  location: "Barrow",
                  monument: "Arcane circle",
                  item: "Dagger",
                },
                {
                  d20: "14",
                  location: "Vault",
                  monument: "Spire",
                  item: "Goblet",
                },
                { d20: "15", location: "Tomb", monument: "Altar", item: "Key" },
                {
                  d20: "16",
                  location: "Warren",
                  monument: "Pit",
                  item: "Lamp",
                },
                {
                  d20: "17",
                  location: "Ship",
                  monument: "Fountain",
                  item: "Brooch",
                },
                {
                  d20: "18",
                  location: "Sanctum",
                  monument: "Archway",
                  item: "Skull",
                },
                { d20: "19", location: "Cove", monument: "Cage", item: "Mask" },
                {
                  d20: "20",
                  location: "Castle",
                  monument: "Brazier",
                  item: "Necklace",
                },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "conditiondescriptionandorigin",
          title: "Condition, Description, and Origin",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Locations, monuments, or items can be flavored by determining their condition, description, and origin.",
            },
            {
              type: "table",
              order: 1,
              headers: {
                d20: "d20",
                condition: "Condition",
                description: "Description",
                origin: "Origin",
              },
              data: [
                {
                  d20: "1",
                  condition: "Smoky",
                  description: "Ruined",
                  origin: "Human",
                },
                {
                  d20: "2",
                  condition: "Acidic",
                  description: "Decrepit",
                  origin: "Elven",
                },
                {
                  d20: "3",
                  condition: "Bloodied",
                  description: "Obsidian",
                  origin: "Dwarven",
                },
                {
                  d20: "4",
                  condition: "Burning",
                  description: "Haunted",
                  origin: "Halfling",
                },
                {
                  d20: "5",
                  condition: "Frozen",
                  description: "Unholy",
                  origin: "Gnomish",
                },
                {
                  d20: "6",
                  condition: "Poisonous",
                  description: "Sunken",
                  origin: "Tiefling",
                },
                {
                  d20: "7",
                  condition: "Necrotic",
                  description: "Forgotten",
                  origin: "Dragonborn",
                },
                {
                  d20: "8",
                  condition: "Thunderous",
                  description: "Macabre",
                  origin: "Orc",
                },
                {
                  d20: "9",
                  condition: "Ringing",
                  description: "Ancient",
                  origin: "Goblinoid",
                },
                {
                  d20: "10",
                  condition: "Lightning",
                  description: "Festering",
                  origin: "Undead",
                },
                {
                  d20: "11",
                  condition: "Radiant",
                  description: "Monstrous",
                  origin: "Celestial",
                },
                {
                  d20: "12",
                  condition: "Shadowed",
                  description: "Golden",
                  origin: "Fey",
                },
                {
                  d20: "13",
                  condition: "Oozing",
                  description: "Spired",
                  origin: "Elemental",
                },
                {
                  d20: "14",
                  condition: "Ethereal",
                  description: "Towering",
                  origin: "Giant",
                },
                {
                  d20: "15",
                  condition: "Whispering",
                  description: "Forsaken",
                  origin: "Fiendish",
                },
                {
                  d20: "16",
                  condition: "Windswept",
                  description: "Gloomy",
                  origin: "Unseelie",
                },
                {
                  d20: "17",
                  condition: "Drenched",
                  description: "Horrific",
                  origin: "Aberrant",
                },
                {
                  d20: "18",
                  condition: "Diseased",
                  description: "Colossal",
                  origin: "Shadow",
                },
                {
                  d20: "19",
                  condition: "Crystalline",
                  description: "Overgrown",
                  origin: "Ethereal",
                },
                {
                  d20: "20",
                  condition: "Silvered",
                  description: "Shattered",
                  origin: "Abyssal",
                },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "chambers",
          title: "Chambers",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use this list when you need to define the purpose of a chamber in a dungeon, keep, or similar site. Reflavor any chamber to suit the theme of the adventure.",
            },
          ],
          order: 5,
        },
        {
          id: "1d20chambers",
          title: "1d20 Chambers",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Armory" },
                { item_num: 2, item: "Prison" },
                { item_num: 3, item: "Throne room" },
                { item_num: 4, item: "Crypt" },
                { item_num: 5, item: "Treasury" },
                { item_num: 6, item: "Barracks" },
                { item_num: 7, item: "Monstrous lair" },
                { item_num: 8, item: "Storeroom" },
                { item_num: 9, item: "Charnel pit" },
                { item_num: 10, item: "Museum" },
                { item_num: 11, item: "Torture chamber" },
                { item_num: 12, item: "Bedchamber" },
                { item_num: 13, item: "Gallery" },
                { item_num: 14, item: "Dining hall" },
                { item_num: 15, item: "Library" },
                { item_num: 16, item: "Pantry" },
                { item_num: 17, item: "Laboratory" },
                { item_num: 18, item: "Cesspit" },
                { item_num: 19, item: "Bone yard" },
                { item_num: 20, item: "Scrying chamber" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "dungeondiscoveries",
          title: "Dungeon Discoveries",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Add useful discoveries such as the following to your adventure, to create upward beats in the characters' story.",
            },
          ],
          order: 7,
        },
        {
          id: "1d20discoveries",
          title: "1d20 Discoveries",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Helpful NPC" },
                { item_num: 2, item: "Holy fountain" },
                { item_num: 3, item: "Inspiring statue" },
                { item_num: 4, item: "Revealing mosaic" },
                { item_num: 5, item: "Radiant shrine" },
                { item_num: 6, item: "Friendly spirit" },
                { item_num: 7, item: "Hidden campsite" },
                { item_num: 8, item: "Edible mushrooms" },
                { item_num: 9, item: "Explorer's pack" },
                { item_num: 10, item: "Spy hole" },
                { item_num: 11, item: "Adventurer's journal" },
                { item_num: 12, item: "Escape tunnel" },
                { item_num: 13, item: "Useful teleporter" },
                { item_num: 14, item: "Enlightening mural" },
                { item_num: 15, item: "Healing spring" },
                { item_num: 16, item: "Wounded enemy" },
                { item_num: 17, item: "Well-stocked armory" },
                { item_num: 18, item: "Friendly creature" },
                { item_num: 19, item: "Useful machinery" },
                { item_num: 20, item: "Historical library" },
              ],
            },
          ],
          order: 8,
        },
        {
          id: "dungeonwalldecorations",
          title: "Dungeon Wall Decorations",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Types of wall decorations that might reveal secrets and clues.",
            },
          ],
          order: 9,
        },
        {
          id: "1d10walldecorations",
          title: "1d10 Wall Decorations",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Relief" },
                { item_num: 2, item: "Frieze" },
                { item_num: 3, item: "Mural" },
                { item_num: 4, item: "Fresco" },
                { item_num: 5, item: "Mosaic" },
                { item_num: 6, item: "Runic carvings" },
                { item_num: 7, item: "Encaustic painting" },
                { item_num: 8, item: "Gilded Engravings" },
                { item_num: 9, item: "Marouflage" },
                { item_num: 10, item: "Sgraffito" },
              ],
            },
          ],
          order: 10,
        },
        {
          id: "dungeonmonsters",
          title: "Dungeon Monsters",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "You can add monsters and other foes to your adventure by consulting the following list. Roll a d8 for easy monsters, roll a d12 to expand the range into hard monsters, or roll a d20 to also include dangerous monsters. If you decide to use a monster as a boss monster, give it double hit points and let it take an extra action each turn.\n\nFor foes such as bandits and cultists, you can also roll for ancestry on the NPC creation lists if those foes having a common origin makes sense for your narrative.",
            },
          ],
          order: 11,
        },
        {
          id: "1d20monsters",
          title: "1d20 Monsters",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Giant rats" },
                { item_num: 2, item: "Bandits" },
                { item_num: 3, item: "Cultists" },
                { item_num: 4, item: "Acolytes" },
                { item_num: 5, item: "Stirges" },
                { item_num: 6, item: "Guards" },
                { item_num: 7, item: "Skeletons" },
                { item_num: 8, item: "Oozes" },
                { item_num: 9, item: "Shadows" },
                { item_num: 10, item: "Spies" },
                { item_num: 11, item: "Ghouls" },
                { item_num: 12, item: "Specters" },
                { item_num: 13, item: "Cult fanatics" },
                { item_num: 14, item: "Gelatinous cubes" },
                { item_num: 15, item: "Ogres" },
                { item_num: 16, item: "Wererats" },
                { item_num: 17, item: "Basilisks" },
                { item_num: 18, item: "Green hags" },
                { item_num: 19, item: "Hell hounds" },
                { item_num: 20, item: "Mummies" },
              ],
            },
          ],
          order: 12,
        },
        {
          id: "trapsandhazards",
          title: "Traps and Hazards",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Add traps as they make sense for the adventure. At 1st through 4th level, traps often have a DC of 13, and deal 7 (2d6) damage for easy traps or 11 (2d10) damage for hard traps.",
            },
          ],
          order: 13,
        },
        {
          id: "1d20trapsandhazards",
          title: "1d20 Traps and Hazards",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Spiked pit" },
                { item_num: 2, item: "Lightning blasts" },
                { item_num: 3, item: "Poisoned darts" },
                { item_num: 4, item: "Swarms of insects" },
                { item_num: 5, item: "Explosive runes" },
                { item_num: 6, item: "Radiant pillars" },
                { item_num: 7, item: "Flame-jet idols" },
                { item_num: 8, item: "Force beams" },
                { item_num: 9, item: "Crippling caltrops" },
                { item_num: 10, item: "Acidic pools" },
                { item_num: 11, item: "Bear traps" },
                { item_num: 12, item: "Ghostly haunting" },
                { item_num: 13, item: "Poisoned gas" },
                { item_num: 14, item: "Magical instability" },
                { item_num: 15, item: "Barbed spears" },
                { item_num: 16, item: "Dense fog" },
                { item_num: 17, item: "Psychic feedback" },
                { item_num: 18, item: "Greasy floor" },
                { item_num: 19, item: "Thick webs" },
                { item_num: 20, item: "Freezing jets" },
              ],
            },
          ],
          order: 14,
        },
        {
          id: "treasure",
          title: "Treasure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "This list lets you add treasure to the adventure as appropriate. Roll a d10 to determine monetary treasure, or a d20 for monetary and magical treasure.",
            },
          ],
          order: 15,
        },
        {
          id: "1d20treasures",
          title: "1d20 Treasures",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Coins" },
                { item_num: 2, item: "Bag of gemstones" },
                { item_num: 3, item: "Platinum jewelry" },
                { item_num: 4, item: "Rune-scribed gem" },
                { item_num: 5, item: "Golden goblet" },
                { item_num: 6, item: "Ancient tome" },
                { item_num: 7, item: "Treasure map" },
                { item_num: 8, item: "Ancient relic" },
                { item_num: 9, item: "Fantastic art" },
                { item_num: 10, item: "Jeweled idol" },
                { item_num: 11, item: "Potion of healing" },
                { item_num: 12, item: "Other potion" },
                { item_num: 13, item: "Scroll or spell scroll" },
                { item_num: 14, item: "Bag of holding" },
                { item_num: 15, item: "Wondrous item" },
                { item_num: 16, item: "Wand or rod" },
                { item_num: 17, item: "Magic light weapon" },
                { item_num: 18, item: "Magic heavy weapon" },
                { item_num: 19, item: "Magic ranged weapon" },
                { item_num: 20, item: "Magic armor" },
              ],
            },
          ],
          order: 16,
        },
        {
          id: "spells",
          title: "Spells",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Some commonly discovered relics might grant a single- use spell, while less common magic items might allow their wielder to cast a spell daily. Use the list of common spells below or choose specialized spells to create unique magic item rewards.",
            },
          ],
          order: 17,
        },
        {
          id: "1d20spells",
          title: "1d20 Spells",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Magic missile" },
                { item_num: 2, item: "Burning hands" },
                { item_num: 3, item: "Shield" },
                { item_num: 4, item: "Cure wounds" },
                { item_num: 5, item: "Guiding bolt" },
                { item_num: 6, item: "Invisibility" },
                { item_num: 7, item: "Scorching ray" },
                { item_num: 8, item: "Shatter" },
                { item_num: 9, item: "Aid" },
                { item_num: 10, item: "Misty step" },
                { item_num: 11, item: "Spiritual weapon" },
                { item_num: 12, item: "Lesser restoration" },
                { item_num: 13, item: "Daylight" },
                { item_num: 14, item: "Mass healing word" },
                { item_num: 15, item: "Revivify" },
                { item_num: 16, item: "Lightning bolt" },
                { item_num: 17, item: "Fireball" },
                { item_num: 18, item: "Dispel magic" },
                { item_num: 19, item: "Haste" },
                { item_num: 20, item: "Fly" },
              ],
            },
          ],
          order: 18,
        },
      ],
    },
    {
      id: "npcgenerator",
      title: "NPC Generator",
      intro:
        "NPCs bring our game worlds to life. You can use the generator in this section to quickly build NPCs to drop into your game, rolling on the tables below to generate baseline characteristics. To really bring the NPC to life, you can then model their personality and roleplaying off characters from your favorite books, TV shows, or movies, switching up gender and other traits to make them feel fresh.",
      subsections: [
        {
          id: "names",
          title: "Names",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Osborne, Halstein, Rycheld, Symond, Sysley, Tansa, Levi, Beneger, Hailey, Jayce, Vesta, Savannah, Avelin, Claudia, Sighard, Timothy, Somerhild, Radolf, Denston, Judithe, Nireus, Sulen, Teukros, Cullive, Arnald, Guinevere, Madison, Stella, Edmund, Goddard, Paul, Gerland, Eupalamos, Sebastian, Anthonette, Lowell, Dauid, Halia, Colton, Bellinda, Roger, Chase, Pulmia, Sadie, Leofwen, Hildegard, Thelexion, Latisha, Raffe, Sydnee, Nicholas, Lausus, Johannes, Derkos, Boyle, Hudson, Meryll, Peter, Godebert, Randwulf, Aegipan, Bryde, Josiah, Sabra, Hilda, Lapithes, Reothine, Jeger, Sybaris, Cared, Clifton, Annabel, Kaylee, Neale, Bayard, Albin, Maronne, Jocelyn, Isemeine, Toril, Aisa, Franny, Turstin, Chulisa, Samantha, Poine, Sanche, Maya, Nicholina, Margry, Drew, Parnell, Taran, Cunovin, Ryan, Caroline, Halisera, Florens, Tantalos, Wynefreede\n\nBrightwhisper, Redspur, Hollyfang, Goosewalker, Goldbane, Ebondazer, Emeraldstorm, Monsterthumb, Goblinchaser, Thornhelm, Lionfall, Swordbuckle, Earthdancer, Graywillow, Cloudlover, Sharpwhisker, Glasscleaver, Macebound, Icebrood, Fireheart, Angelbright, Anvilcloud, Heromaker, Lightblade, Shieldrazor, Whitetail, Spiderhunter, Shadowblood, Doombrissle, Bronzestone, Moongazer, Catfinger, Lawknocker, Rainsoother, Swiftcaller, Mudteeth, Wyrmriver, Dragonknee, Flamestar, Millhand",
            },
          ],
          order: 0,
        },
        {
          id: "ancestry",
          title: "Ancestry",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use the following table to choose a random ancestry for your NPC.",
            },
          ],
          order: 1,
        },
        {
          id: "1d10ancestries",
          title: "1d10 Ancestries",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Human" },
                { item_num: 2, item: "Elf" },
                { item_num: 3, item: "Dwarf" },
                { item_num: 4, item: "Halfling" },
                { item_num: 5, item: "Goblin" },
                { item_num: 6, item: "Kobold" },
                { item_num: 7, item: "Gnome" },
                { item_num: 8, item: "Orc" },
                { item_num: 9, item: "Dragonborn" },
                { item_num: 10, item: "Tiefling" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "worldview",
          title: "Worldview",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "An NPC's worldview can help determine how they initially react to the characters, adjusted by how the characters approach them. Improvise DCs for social interaction ability checks based on that approach, with checks usually ranging between DC 10 (easy) and DC 20 (very hard). A default of DC 12 is usually a good choice.",
            },
          ],
          order: 3,
        },
        {
          id: "1d20worldviews",
          title: "1d20 Worldviews",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Surly" },
                { item_num: 2, item: "Friendly" },
                { item_num: 3, item: "Brash" },
                { item_num: 4, item: "Elitist" },
                { item_num: 5, item: "Suspicious" },
                { item_num: 6, item: "Carefree" },
                { item_num: 7, item: "Loyal" },
                { item_num: 8, item: "Opportunistic" },
                { item_num: 9, item: "Wide-eyed" },
                { item_num: 10, item: "Humorous" },
                { item_num: 11, item: "Cautious" },
                { item_num: 12, item: "Roisterous" },
                { item_num: 13, item: "Optimistic" },
                { item_num: 14, item: "Ignorant" },
                { item_num: 15, item: "Selfless" },
                { item_num: 16, item: "Brazen" },
                { item_num: 17, item: "Loving" },
                { item_num: 18, item: "Ambitious" },
                { item_num: 19, item: "Greedy" },
                { item_num: 20, item: "Outgoing" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "appearanceandmannerisms",
          title: "Appearance and Mannerisms",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "NPCs will often be most easily remembered by the players based on some unique aspect of their appearance or manners.",
            },
          ],
          order: 5,
        },
        {
          id: "1d20appearancesandmannerisms",
          title: "1d20 Appearances and Mannerisms",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Wild hair" },
                { item_num: 2, item: "Scarred cheek" },
                { item_num: 3, item: "Body tattoos" },
                { item_num: 4, item: "Smokes a pipe" },
                { item_num: 5, item: "Golden teeth" },
                { item_num: 6, item: "Walks with a limp" },
                { item_num: 7, item: "Dashing clothes" },
                { item_num: 8, item: "Picks teeth" },
                { item_num: 9, item: "Missing eye" },
                { item_num: 10, item: "Multicolored eyes" },
                { item_num: 11, item: "Feathered earring" },
                { item_num: 12, item: "Missing hand" },
                { item_num: 13, item: "Spits a lot" },
                { item_num: 14, item: "Shifty eyes" },
                { item_num: 15, item: "Intense stare" },
                { item_num: 16, item: "Snorts often" },
                { item_num: 17, item: "Facial tattoos" },
                { item_num: 18, item: "Heavy beard" },
                { item_num: 19, item: "Missing fingers" },
                { item_num: 20, item: "Half-shaved head" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "profession",
          title: "Profession",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Assign a profession to your NPC to add color to their stat block. The commoner is the default stat block for NPCs of this type.",
            },
          ],
          order: 7,
        },
        {
          id: "1d20professions",
          title: "1d20 Professions",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Farmer" },
                { item_num: 2, item: "Blacksmith" },
                { item_num: 3, item: "Clerk" },
                { item_num: 4, item: "Merchant" },
                { item_num: 5, item: "Apothecary" },
                { item_num: 6, item: "Bandit" },
                { item_num: 7, item: "Guide" },
                { item_num: 8, item: "Entertainer" },
                { item_num: 9, item: "Guard" },
                { item_num: 10, item: "Soldier" },
                { item_num: 11, item: "Acolyte" },
                { item_num: 12, item: "Sailor" },
                { item_num: 13, item: "Mercenary" },
                { item_num: 14, item: "Sage" },
                { item_num: 15, item: "Noble" },
                { item_num: 16, item: "Artisan" },
                { item_num: 17, item: "Priest" },
                { item_num: 18, item: "Veteran" },
                { item_num: 19, item: "Knight" },
                { item_num: 20, item: "Mage" },
              ],
            },
          ],
          order: 8,
        },
      ],
    },
    {
      id: "treasuregenerator",
      title: "Treasure Generator",
      intro:
        "Piles of coins, shining gems, and powerful relics hidden away in the depths of the world await adventurers brave enough to seek them. This section offers a simple set of tables and guidelines that let you quickly reward treasure for your fantasy RPG, and which work well alongside the more detailed treasure rules of the game.",
      subsections: [
        {
          id: "goldperlevel",
          title: "Gold Per Level",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Use the following gold parcels to quickly reward adventuring groups based on the characters' average level. Reward four such parcels each level, or add parcels together to create larger rewards.\n\nThis earned wealth can take the form of coins, gemstones, jewelry, and art objects as desired. You can also adjust the numbers slightly to keep hoards from looking too uniform. For example, you might turn two 1,300 gp parcels into 1,145 gp and 1,422 gp.",
            },
            {
              type: "table",
              order: 1,
              headers: { level: "Level", gold_per_parcel: "Gold per Parcel" },
              data: [
                { level: "1st - 4th", gold_per_parcel: "100 gp (3d6 × 10 gp)" },
                {
                  level: "5th - 10th",
                  gold_per_parcel: "1,300 gp (3d8 × 100 gp)",
                },
                {
                  level: "11th - 16th",
                  gold_per_parcel: "7,000 gp (2d6 × 1,000 gp)",
                },
                {
                  level: "17th - 20th",
                  gold_per_parcel: "70,000 gp (2d6 × 10,000 gp)",
                },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "consumabletreasure",
          title: "Consumable Treasure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "As desired, you can augment monetary treasure with consumable magic items from the following table.",
            },
          ],
          order: 1,
        },
        {
          id: "1d12consumabletreasure",
          title: "1d12 Consumable Treasure",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Potion of healing" },
                { item_num: 2, item: "Potion of greater healing" },
                { item_num: 3, item: "Oil of slipperiness" },
                { item_num: 4, item: "Potion of animal friendship" },
                { item_num: 5, item: "Potion of climbing" },
                { item_num: 6, item: "Potion of growth" },
                { item_num: 7, item: "Potion of mind reading" },
                { item_num: 8, item: "Potion of poison" },
                { item_num: 9, item: "Potion of resistance" },
                { item_num: 10, item: "Potion of water breathing" },
                { item_num: 11, item: "Dust of disappearance" },
                { item_num: 12, item: "Dust of dryness" },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Rather than standard consumable items, you can also award powerful single-use magic items generated using the Spells table from the "Core Adventure Generator" included in this document. You can also use the Condition, Description, and Origin table in that section to give an item a unique flavor.',
            },
          ],
          order: 2,
        },
        {
          id: "magicaltreasure",
          title: "Magical Treasure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "Permanent magic items can be included with treasure as desired, with the uncommon items on the following table suitable for characters of all levels. Choose specific weapons and armor that fit the proficiencies and desires of the characters. You can use the Condition, Description, and Origin table from the core adventure generator to give such items additional flavor.",
            },
          ],
          order: 3,
        },
        {
          id: "40magicaltreasures",
          title: "40 Magical Treasures",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Weapon +1" },
                { item_num: 2, item: "Armor +1" },
                { item_num: 3, item: "Ammunition +1" },
                {
                  item_num: 4,
                  item: "Amulet of proof against detection and location",
                },
                { item_num: 5, item: "Bag of holding" },
                { item_num: 6, item: "Bag of tricks" },
                { item_num: 7, item: "Boots of elvenkind" },
                { item_num: 8, item: "Boots of striding and springing" },
                { item_num: 9, item: "Boots of the winterlands" },
                { item_num: 10, item: "Bracers of archery" },
                { item_num: 11, item: "Brooch of shielding" },
                { item_num: 12, item: "Broom of flying" },
                { item_num: 13, item: "Circlet of blasting" },
                { item_num: 14, item: "Cloak of elvenkind" },
                { item_num: 15, item: "Cloak of protection" },
                { item_num: 16, item: "Cloak of the manta ray" },
                { item_num: 17, item: "Eversmoking bottle" },
                { item_num: 18, item: "Eyes of charming" },
                { item_num: 19, item: "Eyes of the eagle" },
                {
                  item_num: 20,
                  item: "Figurine of wondrous power (silver raven)",
                },
                { item_num: 21, item: "Gauntlets of ogre power" },
                { item_num: 22, item: "Gloves of missile snaring" },
                { item_num: 23, item: "Gloves of swimming and climbing" },
                { item_num: 24, item: "Goggles of night" },
                { item_num: 25, item: "Hat of disguise" },
                { item_num: 26, item: "Headband of intellect" },
                { item_num: 27, item: "Helm of comprehending languages" },
                { item_num: 28, item: "Helm of telepathy" },
                { item_num: 29, item: "Immovable rod" },
                { item_num: 30, item: "Javelin of lightning" },
                { item_num: 31, item: "Lantern of revealing" },
                { item_num: 32, item: "Medallion of thoughts" },
                { item_num: 33, item: "Necklace of adaptation" },
                { item_num: 34, item: "Pearl of power" },
                { item_num: 35, item: "Ring of mind shielding" },
                { item_num: 36, item: "Rope of climbing" },
                { item_num: 37, item: "Slippers of spider climbing" },
                { item_num: 38, item: "Stone of good luck" },
                { item_num: 39, item: "Wand of magic missiles" },
                { item_num: 40, item: "Wand of web" },
              ],
            },
          ],
          order: 4,
        },
      ],
    },
    {
      id: "randomtraps",
      title: "Random Traps",
      intro:
        "Use these lists to generate simple or complex traps, incorporating multiple features, plus energy damage or conditions.\n\nTo generate a simple trap, just roll on the Type list and the Trigger table. For a more dangerous trap, add an effect from the Flavor table to put a unique twist on the damage or impose a debilitating condition. For a really devious trap, you can roll on the Flavor table and Type table twice, combining features into deadly combinations such as 'sleep-inducing bolos and thunderous crushing pillars, triggered by an onyx demon's skull.'",
      subsections: [
        {
          id: "1d20flavors",
          title: "1d20 Flavors",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Fiery" },
                { item_num: 2, item: "Freezing" },
                { item_num: 3, item: "Necrotic" },
                { item_num: 4, item: "Poisonous" },
                { item_num: 5, item: "Acidic" },
                { item_num: 6, item: "Thunderous" },
                { item_num: 7, item: "Lightning" },
                { item_num: 8, item: "Forceful" },
                { item_num: 9, item: "Diseased" },
                { item_num: 10, item: "Stunning" },
                { item_num: 11, item: "Blinding" },
                { item_num: 12, item: "Deafening" },
                { item_num: 13, item: "Weakening" },
                { item_num: 14, item: "Draining" },
                { item_num: 15, item: "Sleep-inducing" },
                { item_num: 16, item: "Binding" },
                { item_num: 17, item: "Dominating" },
                { item_num: 18, item: "Psychic" },
                { item_num: 19, item: "Maddening" },
                { item_num: 20, item: "Confusing" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "1d20types",
          title: "1d20 Types",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Bolts" },
                { item_num: 2, item: "Spears" },
                { item_num: 3, item: "Scythes" },
                { item_num: 4, item: "Bolos" },
                { item_num: 5, item: "Spiked chains" },
                { item_num: 6, item: "Pit" },
                { item_num: 7, item: "Rolling ball" },
                { item_num: 8, item: "Crushing pillars" },
                { item_num: 9, item: "Darts" },
                { item_num: 10, item: "Glyphs" },
                { item_num: 11, item: "Swords" },
                { item_num: 12, item: "Axes" },
                { item_num: 13, item: "Tendrils" },
                { item_num: 14, item: "Whips" },
                { item_num: 15, item: "Nets" },
                { item_num: 16, item: "Bear traps" },
                { item_num: 17, item: "Cages" },
                { item_num: 18, item: "Beams" },
                { item_num: 19, item: "Hammers" },
                { item_num: 20, item: "Shurikens" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "1d20triggers",
          title: "1d20 Triggers",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Door" },
                { item_num: 2, item: "Floor plate" },
                { item_num: 3, item: "Tripwire" },
                { item_num: 4, item: "Throne" },
                { item_num: 5, item: "Corpse" },
                { item_num: 6, item: "Chest" },
                { item_num: 7, item: "Old book" },
                { item_num: 8, item: "Child's toy" },
                { item_num: 9, item: "Jeweled skull" },
                { item_num: 10, item: "Beams of light" },
                { item_num: 11, item: "Golden angelic statue" },
                { item_num: 12, item: "Crystal goblet on pedestal" },
                { item_num: 13, item: "Onyx demonic skull" },
                { item_num: 14, item: "Jeweled pillar" },
                { item_num: 15, item: "Steep stair" },
                { item_num: 16, item: "Jeweled crown" },
                { item_num: 17, item: "Gilded sarcophagus" },
                { item_num: 18, item: "Bound prisoner" },
                { item_num: 19, item: "Weapon on an altar" },
                { item_num: 20, item: "Idol on pedestal" },
              ],
            },
          ],
          order: 2,
        },
        {
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
        },
        {
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
        },
      ],
    },
    {
      id: "randommonuments",
      title: "Random Monuments",
      intro:
        "Filling the various chambers and locations in your game with interesting features is always a challenge — and can be even more difficult to improvise. The following four \"Monuments\" lists can help you generate fantastic features with a number of potential effects. You don't need to roll on every table each time you want to generate a feature. Sometimes, just establishing the condition and the type of a feature is enough to give you a starting point. Then you can let the story or even the background of one of the characters guide the feature's additional elements.",
      subsections: [
        {
          id: "1d20origins",
          title: "1d20 Origins",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Draconic" },
                { item_num: 2, item: "Dwarven" },
                { item_num: 3, item: "Elven" },
                { item_num: 4, item: "Primeval" },
                { item_num: 5, item: "Divine" },
                { item_num: 6, item: "Unholy" },
                { item_num: 7, item: "Abyssal" },
                { item_num: 8, item: "Otherworldly" },
                { item_num: 9, item: "Orcish" },
                { item_num: 10, item: "Undead" },
                { item_num: 11, item: "Goblinoid" },
                { item_num: 12, item: "Ghoulish" },
                { item_num: 13, item: "Vampiric" },
                { item_num: 14, item: "Dark elven" },
                { item_num: 15, item: "Astral" },
                { item_num: 16, item: "Ethereal" },
                { item_num: 17, item: "Hellish" },
                { item_num: 18, item: "Demonic" },
                { item_num: 19, item: "Elemental" },
                { item_num: 20, item: "Gnomish" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "1d20conditions",
          title: "1d20 Conditions",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Crumbling" },
                { item_num: 2, item: "Sunken" },
                { item_num: 3, item: "Pristine" },
                { item_num: 4, item: "Excavated" },
                { item_num: 5, item: "Vine-covered" },
                { item_num: 6, item: "Ruined" },
                { item_num: 7, item: "Cracked" },
                { item_num: 8, item: "Shattered" },
                { item_num: 9, item: "Buried" },
                { item_num: 10, item: "Gore-covered" },
                { item_num: 11, item: "Bloody" },
                { item_num: 12, item: "Glyph-marked" },
                { item_num: 13, item: "Rune-scribed" },
                { item_num: 14, item: "Obsidian" },
                { item_num: 15, item: "Metallic" },
                { item_num: 16, item: "Ornate" },
                { item_num: 17, item: "Desecrated" },
                { item_num: 18, item: "Ancient" },
                { item_num: 19, item: "Decorated" },
                { item_num: 20, item: "Floating" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "1d20unusualeffects",
          title: "1d20 Unusual Effects",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Undeath" },
                { item_num: 2, item: "Fire" },
                { item_num: 3, item: "Madness" },
                { item_num: 4, item: "Water" },
                { item_num: 5, item: "Radiance" },
                { item_num: 6, item: "Arcane" },
                { item_num: 7, item: "Poison" },
                { item_num: 8, item: "Acid" },
                { item_num: 9, item: "Disease" },
                { item_num: 10, item: "Psionics" },
                { item_num: 11, item: "Frost" },
                { item_num: 12, item: "Lightning" },
                { item_num: 13, item: "Antimagic" },
                { item_num: 14, item: "Ooze" },
                { item_num: 15, item: "Charming" },
                { item_num: 16, item: "Fear" },
                { item_num: 17, item: "Domination" },
                { item_num: 18, item: "Sleep" },
                { item_num: 19, item: "Thunder" },
                { item_num: 20, item: "Tentacles" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "100monumentstructures",
          title: "100 Monument Structures",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Aerie" },
                { item_num: 2, item: "Altar" },
                { item_num: 3, item: "Aqueduct" },
                { item_num: 4, item: "Arcane circle" },
                { item_num: 5, item: "Archway" },
                { item_num: 6, item: "Aviary" },
                { item_num: 7, item: "Barrow" },
                { item_num: 8, item: "Battlefield" },
                { item_num: 9, item: "Bell" },
                { item_num: 10, item: "Bone pile" },
                { item_num: 11, item: "Boneyard" },
                { item_num: 12, item: "Bonfire" },
                { item_num: 13, item: "Brazier" },
                { item_num: 14, item: "Bridge" },
                { item_num: 15, item: "Cage" },
                { item_num: 16, item: "Cairn" },
                { item_num: 17, item: "Campsite" },
                { item_num: 18, item: "Canal" },
                { item_num: 19, item: "Carcass" },
                { item_num: 20, item: "Carriage" },
                { item_num: 21, item: "Cauldron" },
                { item_num: 22, item: "Cave" },
                { item_num: 23, item: "Cenotaph" },
                { item_num: 24, item: "Cesspit" },
                { item_num: 25, item: "Charnel pit" },
                { item_num: 26, item: "Columns" },
                { item_num: 27, item: "Crater" },
                { item_num: 28, item: "Crossroads" },
                { item_num: 29, item: "Crystal" },
                { item_num: 30, item: "Dome" },
                { item_num: 31, item: "Doorway" },
                { item_num: 32, item: "Earthmote" },
                { item_num: 33, item: "Effigy" },
                { item_num: 34, item: "Fighting pit" },
                { item_num: 35, item: "Firepit" },
                { item_num: 36, item: "Fossil" },
                { item_num: 37, item: "Fountain" },
                { item_num: 38, item: "Gallows" },
                { item_num: 39, item: "Gateway" },
                { item_num: 40, item: "Geode" },
                { item_num: 41, item: "Geyser" },
                { item_num: 42, item: "Graveyard" },
                { item_num: 43, item: "Gravestone" },
                { item_num: 44, item: "Grotto" },
                { item_num: 45, item: "Grove" },
                { item_num: 46, item: "Hollow" },
                { item_num: 47, item: "Huge skull" },
                { item_num: 48, item: "Idol" },
                { item_num: 49, item: "Illusion" },
                { item_num: 50, item: "Keep" },
                { item_num: 51, item: "Lantern" },
                { item_num: 52, item: "Machine" },
                { item_num: 53, item: "Mausoleum" },
                { item_num: 54, item: "Megalith" },
                { item_num: 55, item: "Meteorite" },
                { item_num: 56, item: "Midden" },
                { item_num: 57, item: "Mill" },
                { item_num: 58, item: "Mine" },
                { item_num: 59, item: "Mirror" },
                { item_num: 60, item: "Monolith" },
                { item_num: 61, item: "Monument" },
                { item_num: 62, item: "Mosaic" },
                { item_num: 63, item: "Nest" },
                { item_num: 64, item: "Obelisk" },
                { item_num: 65, item: "Orb" },
                { item_num: 66, item: "Orrery" },
                { item_num: 67, item: "Oubliette" },
                { item_num: 68, item: "Petrified creature" },
                { item_num: 69, item: "Pillar" },
                { item_num: 70, item: "Pit" },
                { item_num: 71, item: "Planar rift" },
                { item_num: 72, item: "Platform" },
                { item_num: 73, item: "Podium" },
                { item_num: 74, item: "Pool" },
                { item_num: 75, item: "Rock" },
                { item_num: 76, item: "Ruin" },
                { item_num: 77, item: "Sacred circle" },
                { item_num: 78, item: "Sarcophagus" },
                { item_num: 79, item: "Shipwreck" },
                { item_num: 80, item: "Shrine" },
                { item_num: 81, item: "Sigil" },
                { item_num: 82, item: "Sinkhole" },
                { item_num: 83, item: "Slab" },
                { item_num: 84, item: "Spell effect" },
                { item_num: 85, item: "Sphere" },
                { item_num: 86, item: "Spire" },
                { item_num: 87, item: "Statue" },
                { item_num: 88, item: "Stone circle" },
                { item_num: 89, item: "Stone tablets" },
                { item_num: 90, item: "Sundial" },
                { item_num: 91, item: "Throne" },
                { item_num: 92, item: "Tomb" },
                { item_num: 93, item: "Totem" },
                { item_num: 94, item: "Tower" },
                { item_num: 95, item: "Trash heap" },
                { item_num: 96, item: "Tree" },
                { item_num: 97, item: "Wall" },
                { item_num: 98, item: "Waymarker" },
                { item_num: 99, item: "Well" },
                { item_num: 100, item: "Windmill" },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "randomchambers",
      title: "Random Chambers",
      intro:
        "These pages contain lists of chambers for fifteen common “dungeons”. Use these chambers to fill out rooms in larger locations or inspire your own ideas. Flavor chambers with further details as needed from other random tables.\n\nThese lists are ordered with typical rooms lower in the list and fantastic or dangerous rooms higher on the list. Roll a smaller die for more typical rooms and a larger die for more fantastic or dangeorus rooms.",
      subsections: [
        {
          id: "beastsden",
          title: "Beasts Den",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Sleeping den" },
                { item_num: 2, item: "Drinking pool" },
                { item_num: 3, item: "Dining chamber" },
                { item_num: 4, item: "Bone pit" },
                { item_num: 5, item: "Nursery" },
                { item_num: 6, item: "Vermin nest" },
                { item_num: 7, item: "Rain tunnels" },
                { item_num: 8, item: "Deep rift" },
                { item_num: 9, item: "Cleaning chamber" },
                { item_num: 10, item: "Treasure heap" },
                { item_num: 11, item: "Secret exit" },
                { item_num: 12, item: "Mudslide" },
                { item_num: 13, item: "Livestock prison" },
                { item_num: 14, item: "Squirming midden" },
                { item_num: 15, item: "Maze for prey" },
                { item_num: 16, item: "Secret tunnels" },
                { item_num: 17, item: "Primeval shrine" },
                { item_num: 18, item: "Trophy chamber" },
                { item_num: 19, item: "Hunter’s perch" },
                { item_num: 20, item: "Ancestral tomb" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "castle",
          title: "Castle",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Dining hall" },
                { item_num: 2, item: "Throne room" },
                { item_num: 3, item: "Kitchens" },
                { item_num: 4, item: "Armory" },
                { item_num: 5, item: "Royal bedrooms" },
                { item_num: 6, item: "Guard barracks" },
                { item_num: 7, item: "Knight barracks" },
                { item_num: 8, item: "Treasury" },
                { item_num: 9, item: "Smithy" },
                { item_num: 10, item: "Training yard" },
                { item_num: 11, item: "Strategy hall" },
                { item_num: 12, item: "Trophy room" },
                { item_num: 13, item: "Religious shrine" },
                { item_num: 14, item: "Prison cells" },
                { item_num: 15, item: "Hall of tapestries" },
                { item_num: 16, item: "Artifact gallery" },
                { item_num: 17, item: "Menagerie" },
                { item_num: 18, item: "Apothecary chamber" },
                { item_num: 19, item: "Torture chamber" },
                { item_num: 20, item: "Oubliette" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "caverns",
          title: "Caverns",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Waterfall" },
                { item_num: 2, item: "Large pool" },
                { item_num: 3, item: "Natural columns" },
                { item_num: 4, item: "Beast’s den" },
                { item_num: 5, item: "Deep shaft" },
                { item_num: 6, item: "Underground rift" },
                { item_num: 7, item: "Bridged chasm" },
                { item_num: 8, item: "Crystal chamber" },
                { item_num: 9, item: "Spiraling steps" },
                { item_num: 10, item: "Mushroom grove" },
                { item_num: 11, item: "Forgotten statue" },
                { item_num: 12, item: "Lava pools" },
                { item_num: 13, item: "Insect nests" },
                { item_num: 14, item: "Stone rings" },
                { item_num: 15, item: "Crumbling sinkhole" },
                { item_num: 16, item: "Abandoned village" },
                { item_num: 17, item: "Acidic stalactites" },
                { item_num: 18, item: "Petrified victims" },
                { item_num: 19, item: "Hall of bones" },
                { item_num: 20, item: "Primeval shrine" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "derelictship",
          title: "Derelict Ship",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Crew quarters" },
                { item_num: 2, item: "Captain quarters" },
                { item_num: 3, item: "Officer quarters" },
                { item_num: 4, item: "Helm" },
                { item_num: 5, item: "Storage hold" },
                { item_num: 6, item: "Officer mess" },
                { item_num: 7, item: "Crew mess" },
                { item_num: 8, item: "Armory" },
                { item_num: 9, item: "Pantry" },
                { item_num: 10, item: "Guest quarters" },
                { item_num: 11, item: "Navigator’s room" },
                { item_num: 12, item: "Galley" },
                { item_num: 13, item: "Shrine" },
                { item_num: 14, item: "Medical bay" },
                { item_num: 15, item: "Cellblock" },
                { item_num: 16, item: "Observation room" },
                { item_num: 17, item: "Bilge" },
                { item_num: 18, item: "Head" },
                { item_num: 19, item: "Captain’s hold" },
                { item_num: 20, item: "Treasure hold" },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "dragonslair",
          title: "Dragon's Lair",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Sleeping chamber" },
                { item_num: 2, item: "Treasure vault" },
                { item_num: 3, item: "Waterfall" },
                { item_num: 4, item: "Audience hall" },
                { item_num: 5, item: "Egg hatchery" },
                { item_num: 6, item: "Elemental pool" },
                { item_num: 7, item: "Private entrance" },
                { item_num: 8, item: "Livestock pen" },
                { item_num: 9, item: "Observation roost" },
                { item_num: 10, item: "Bathing pool" },
                { item_num: 11, item: "Scrying chamber" },
                { item_num: 12, item: "Secret vault" },
                { item_num: 13, item: "Private library" },
                { item_num: 14, item: "Artifact museum" },
                { item_num: 15, item: "Servant quarters" },
                { item_num: 16, item: "Dungeon cells" },
                { item_num: 17, item: "Trapped maze" },
                { item_num: 18, item: "Draconic altar" },
                { item_num: 19, item: "Guardian chamber" },
                { item_num: 20, item: "Trophy hall" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "forgottenvaults",
          title: "Forgotten Vaults",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "False treasury" },
                { item_num: 2, item: "True treasury" },
                { item_num: 3, item: "Living pillars" },
                { item_num: 4, item: "Dead god’s shrine" },
                { item_num: 5, item: "Primordial seal" },
                { item_num: 6, item: "Devil’s pentacle" },
                { item_num: 7, item: "Planar fissure" },
                { item_num: 8, item: "Living artifact" },
                { item_num: 9, item: "Demon’s prison" },
                { item_num: 10, item: "Draconic skeleton" },
                { item_num: 11, item: "Guardian chamber" },
                { item_num: 12, item: "Vampire sarcophagus" },
                { item_num: 13, item: "Antediluvian obelisk" },
                { item_num: 14, item: "Soul vessel vault" },
                { item_num: 15, item: "Artifact vault" },
                { item_num: 16, item: "Annihilation Sphere" },
                { item_num: 17, item: "Lich’s throne" },
                { item_num: 18, item: "Godling cylinder" },
                { item_num: 19, item: "Titan’s cell" },
                { item_num: 20, item: "Angelic armory" },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "manor",
          title: "Manor",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Main foyer" },
                { item_num: 2, item: "Master bedroom" },
                { item_num: 3, item: "Guest bedrooms" },
                { item_num: 4, item: "Kitchen" },
                { item_num: 5, item: "Dining hall" },
                { item_num: 6, item: "Study" },
                { item_num: 7, item: "Library" },
                { item_num: 8, item: "Servant quarters" },
                { item_num: 9, item: "Treasury" },
                { item_num: 10, item: "Pantry" },
                { item_num: 11, item: "Bathing room" },
                { item_num: 12, item: "Guard quarters" },
                { item_num: 13, item: "Servant’s dining room" },
                { item_num: 14, item: "Greenhouse" },
                { item_num: 15, item: "Master closet" },
                { item_num: 16, item: "Art gallery" },
                { item_num: 17, item: "Menagerie" },
                { item_num: 18, item: "Hidden library" },
                { item_num: 19, item: "Family altar" },
                { item_num: 20, item: "Hidden Saferoom" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "mines",
          title: "Mines",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Deep shafts" },
                { item_num: 2, item: "Heavy equipment" },
                { item_num: 3, item: "Narrow tunnels" },
                { item_num: 4, item: "Dining hall" },
                { item_num: 5, item: "Runoff drain" },
                { item_num: 6, item: "Miners’ barracks" },
                { item_num: 7, item: "Foreman quarters" },
                { item_num: 8, item: "Spiral dig" },
                { item_num: 9, item: "Gemstone treasury" },
                { item_num: 10, item: "Collapsed tunnels" },
                { item_num: 11, item: "Cart depot" },
                { item_num: 12, item: "Yawning sinkhole" },
                { item_num: 13, item: "Drilling chamber" },
                { item_num: 14, item: "Lava chamber" },
                { item_num: 15, item: "Buried shrine" },
                { item_num: 16, item: "Mushroom farm" },
                { item_num: 17, item: "Beast warrens" },
                { item_num: 18, item: "Refuse pit" },
                { item_num: 19, item: "Forgotten vault" },
                { item_num: 20, item: "Bestial bloodbath" },
              ],
            },
          ],
          order: 7,
        },
        {
          id: "necropolis",
          title: "Necropolis",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Fetid pool" },
                { item_num: 2, item: "Imperial crypt" },
                { item_num: 3, item: "Charnel pit" },
                { item_num: 4, item: "Embalming room" },
                { item_num: 5, item: "Chamber of urns" },
                { item_num: 6, item: "Gilded burial hall" },
                { item_num: 7, item: "Candlelit shrine" },
                { item_num: 8, item: "Throne of bones" },
                { item_num: 9, item: "Historian’s tomb" },
                { item_num: 10, item: "Everburning firepit" },
                { item_num: 11, item: "Guardian chamber" },
                { item_num: 12, item: "Huge sarcophagus" },
                { item_num: 13, item: "Dragon crypt" },
                { item_num: 14, item: "Tower of sepulchers" },
                { item_num: 15, item: "Flesh laboratory" },
                { item_num: 16, item: "Titan’s grave" },
                { item_num: 17, item: "Entombed ship" },
                { item_num: 18, item: "Oracular sphere" },
                { item_num: 19, item: "Ghostly gateway" },
                { item_num: 20, item: "Cold-iron prison" },
              ],
            },
          ],
          order: 8,
        },
        {
          id: "prison",
          title: "Prison",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Low-security cells" },
                { item_num: 2, item: "High-security cells" },
                { item_num: 3, item: "Sewage drains" },
                { item_num: 4, item: "Kitchens" },
                { item_num: 5, item: "Dining hall" },
                { item_num: 6, item: "Warden’s office" },
                { item_num: 7, item: "Chapel" },
                { item_num: 8, item: "Armory" },
                { item_num: 9, item: "Hospital" },
                { item_num: 10, item: "Storage vault" },
                { item_num: 11, item: "Guard post" },
                { item_num: 12, item: "Guard barracks" },
                { item_num: 13, item: "Isolation cells" },
                { item_num: 14, item: "Torture chamber" },
                { item_num: 15, item: "Sunken cells" },
                { item_num: 16, item: "Beast pens" },
                { item_num: 17, item: "Burial pit" },
                { item_num: 18, item: "Laboratory" },
                { item_num: 19, item: "Cesspit" },
                { item_num: 20, item: "Oubliette" },
              ],
            },
          ],
          order: 9,
        },
        {
          id: "sewers",
          title: "Sewers",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Slimy sluice" },
                { item_num: 2, item: "Swirling detritus" },
                { item_num: 3, item: "Deep drain" },
                { item_num: 4, item: "Roaring drain" },
                { item_num: 5, item: "Echoing cistern" },
                { item_num: 6, item: "Maintenance vault" },
                { item_num: 7, item: "Abandoned hovel" },
                { item_num: 8, item: "Broken machines" },
                { item_num: 9, item: "Pipe network" },
                { item_num: 10, item: "Bone pit" },
                { item_num: 11, item: "Hidden stash" },
                { item_num: 12, item: "Discarded statues" },
                { item_num: 13, item: "Thieves’ den" },
                { item_num: 14, item: "Mushroom grove" },
                { item_num: 15, item: "Corpse pool" },
                { item_num: 16, item: "Beast’s lair" },
                { item_num: 17, item: "Secret shrine" },
                { item_num: 18, item: "Mummified beast" },
                { item_num: 19, item: "Shattered portal" },
                { item_num: 20, item: "Hag’s lair" },
              ],
            },
          ],
          order: 10,
        },
        {
          id: "sunkengrotto",
          title: "Sunken Grotto",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Glowing pool" },
                { item_num: 2, item: "Coral pillars" },
                { item_num: 3, item: "Crystal cave" },
                { item_num: 4, item: "Deep fissure" },
                { item_num: 5, item: "Blackwater pool" },
                { item_num: 6, item: "Seaweed grove" },
                { item_num: 7, item: "Driftwood wreck" },
                { item_num: 8, item: "Shark den" },
                { item_num: 9, item: "Frozen statues" },
                { item_num: 10, item: "Lost treasury" },
                { item_num: 11, item: "Watery archway" },
                { item_num: 12, item: "Ziggurat altar" },
                { item_num: 13, item: "Coral graveyard" },
                { item_num: 14, item: "Hag’s effigy" },
                { item_num: 15, item: "Hydra’s den" },
                { item_num: 16, item: "Egg hatchery" },
                { item_num: 17, item: "Lava tubes" },
                { item_num: 18, item: "Sacrificial ledge" },
                { item_num: 19, item: "Ruined temple" },
                { item_num: 20, item: "Sunken throne" },
              ],
            },
          ],
          order: 11,
        },
        {
          id: "thievesden",
          title: "Thieves' Den",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Throne room" },
                { item_num: 2, item: "Thieves’ quarters" },
                { item_num: 3, item: "Master’s quarters" },
                { item_num: 4, item: "Fighting pit" },
                { item_num: 5, item: "Meeting room" },
                { item_num: 6, item: "Mess hall" },
                { item_num: 7, item: "Armory" },
                { item_num: 8, item: "Guildmaster’s office" },
                { item_num: 9, item: "Practice room" },
                { item_num: 10, item: "Sewer entrance" },
                { item_num: 11, item: "Main treasury" },
                { item_num: 12, item: "Gambling den" },
                { item_num: 13, item: "Seedy tavern" },
                { item_num: 14, item: "Secret treasury" },
                { item_num: 15, item: "Sunken cells" },
                { item_num: 16, item: "Murder hallway" },
                { item_num: 17, item: "Shrine of blood" },
                { item_num: 18, item: "Secret den" },
                { item_num: 19, item: "Piranha pool" },
                { item_num: 20, item: "Underworld pit" },
              ],
            },
          ],
          order: 12,
        },
        {
          id: "unholytemple",
          title: "Unholy Temple",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Vesting rooms" },
                { item_num: 2, item: "Audience chamber" },
                { item_num: 3, item: "Feasting hall" },
                { item_num: 4, item: "Priest dormitory" },
                { item_num: 5, item: "Art gallery" },
                { item_num: 6, item: "Grim fountain" },
                { item_num: 7, item: "Profane shrine" },
                { item_num: 8, item: "Preparation room" },
                { item_num: 9, item: "Artifact museum" },
                { item_num: 10, item: "Blessed armory" },
                { item_num: 11, item: "Torture chamber" },
                { item_num: 12, item: "Summoning circle" },
                { item_num: 13, item: "Sacrificial well" },
                { item_num: 14, item: "Dungeon cells" },
                { item_num: 15, item: "Hidden treasury" },
                { item_num: 16, item: "Isolation chamber" },
                { item_num: 17, item: "Sacrilegious library" },
                { item_num: 18, item: "Private altar" },
                { item_num: 19, item: "Unholy ossuary" },
                { item_num: 20, item: "Reliquary chamber" },
              ],
            },
          ],
          order: 13,
        },
        {
          id: "wizardslair",
          title: "Wizard's Lair",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Audience hall" },
                { item_num: 2, item: "Main library" },
                { item_num: 3, item: "Secret library" },
                { item_num: 4, item: "Wizard’s bedroom" },
                { item_num: 5, item: "Scrying chamber" },
                { item_num: 6, item: "Guardians’ hall" },
                { item_num: 7, item: "Meditation chamber" },
                { item_num: 8, item: "Treasure vault" },
                { item_num: 9, item: "Artifact museum" },
                { item_num: 10, item: "Summoning chamber" },
                { item_num: 11, item: "Mirror prison" },
                { item_num: 12, item: "Planar portal" },
                { item_num: 13, item: "Crystal vault" },
                { item_num: 14, item: "Advisor’s cell" },
                { item_num: 15, item: "Alchemical lab" },
                { item_num: 16, item: "Multiverse orrery" },
                { item_num: 17, item: "Menagerie" },
                { item_num: 18, item: "Flesh laboratory" },
                { item_num: 19, item: "Ooze vaults" },
                { item_num: 20, item: "Lightning chamber" },
              ],
            },
          ],
          order: 14,
        },
      ],
    },
    {
      id: "randomconnectors",
      title: "Random Connectors",
      intro:
        "The following list contains connections between locations in a large underground realm. Roll once or twice to build connections between locations in the underworld.",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Long-abandoned sewers" },
                { item_num: 2, item: "Ancient burial chambers" },
                { item_num: 3, item: "Underground river" },
                { item_num: 4, item: "Tunnels carved by ancient laborers" },
                { item_num: 5, item: "Massive worm-carved passageways" },
                {
                  item_num: 6,
                  item: "Narrow pathway alongside a deep fissure",
                },
                {
                  item_num: 7,
                  item: "Tunnels illuminated with phosphorescent fungi",
                },
                { item_num: 8, item: "Spiraling shaft" },
                { item_num: 9, item: "Abandoned mine tunnels" },
                {
                  item_num: 10,
                  item: "Primeval tunnels adorned with thousands of handprints",
                },
                { item_num: 11, item: "Smooth tunnels bored out with magic" },
                { item_num: 12, item: "Natural tunnel strewn with webs" },
                { item_num: 13, item: "Underwater passage" },
                { item_num: 14, item: "Moss-covered natural tunnel" },
                {
                  item_num: 15,
                  item: "Collapsing sinkhole leading to tunnel network",
                },
                { item_num: 16, item: "Ice tunnel" },
                { item_num: 17, item: "Cooled lava flow" },
                { item_num: 18, item: "Huge bridge over a deep chasm" },
                { item_num: 19, item: "Otherworldly passage" },
                {
                  item_num: 20,
                  item: "Massive platforms crossing a bottomless pit",
                },
              ],
            },
          ],
          order: 0,
        },
      ],
    },
    {
      id: "randomitems",
      title: "Random Items",
      intro:
        "The following lists allow you to generate useful relics and objects, from mundane discoveries to powerful magical artifacts. If you want to come up with an interesting magic weapon, for example, you might roll on the Item Condition, Item Origin, Weapon, and Spell Effect tables. If you just want a weird mundane item, roll on the Item Condition, Item Origin, and Mundane Item tables without adding any effect.\n\nSome strange relics might allow a single use of a powerful magical spell. Roll on the Item Condition, Item Origin, Mundane Item, and Spell Effect table to generate a unique single-use magical relic.\n\nAlso included is a table noting the four types of *healing potions* and how many hit points each potion restores.",
      subsections: [
        {
          id: "1d20weapontypes",
          title: "1d20 Weapon Types",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Dagger" },
                { item_num: 2, item: "Mace" },
                { item_num: 3, item: "Quarterstaff" },
                { item_num: 4, item: "Spear" },
                { item_num: 5, item: "Light crossbow" },
                { item_num: 6, item: "Shortbow" },
                { item_num: 7, item: "Battleaxe" },
                { item_num: 8, item: "Flail" },
                { item_num: 9, item: "Glaive" },
                { item_num: 10, item: "Greataxe" },
                { item_num: 11, item: "Greatsword" },
                { item_num: 12, item: "Longsword" },
                { item_num: 13, item: "Maul" },
                { item_num: 14, item: "Morningstar" },
                { item_num: 15, item: "Rapier" },
                { item_num: 16, item: "Scimitar" },
                { item_num: 17, item: "Shortsword" },
                { item_num: 18, item: "Warhammer" },
                { item_num: 19, item: "Heavy crossbow" },
                { item_num: 20, item: "Longbow" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "1d20itemorigins",
          title: "1d20 Item Origins",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Draconic" },
                { item_num: 2, item: "Dwarven" },
                { item_num: 3, item: "Elven" },
                { item_num: 4, item: "Primeval" },
                { item_num: 5, item: "Divine" },
                { item_num: 6, item: "Unholy" },
                { item_num: 7, item: "Abyssal" },
                { item_num: 8, item: "Otherworldly" },
                { item_num: 9, item: "Orcish" },
                { item_num: 10, item: "Undead" },
                { item_num: 11, item: "Goblinoid" },
                { item_num: 12, item: "Ghoulish" },
                { item_num: 13, item: "Vampiric" },
                { item_num: 14, item: "Dark elven" },
                { item_num: 15, item: "Astral" },
                { item_num: 16, item: "Ethereal" },
                { item_num: 17, item: "Hellish" },
                { item_num: 18, item: "Demonic" },
                { item_num: 19, item: "Elemental" },
                { item_num: 20, item: "Gnomish" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "1d20itemconditions",
          title: "1d20 Item Conditions",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Grimy" },
                { item_num: 2, item: "Chipped" },
                { item_num: 3, item: "Rough" },
                { item_num: 4, item: "Smooth" },
                { item_num: 5, item: "Ancient" },
                { item_num: 6, item: "Crumbling" },
                { item_num: 7, item: "Pristine" },
                { item_num: 8, item: "Cool" },
                { item_num: 9, item: "Ornate" },
                { item_num: 10, item: "Plain" },
                { item_num: 11, item: "Rune-scribed" },
                { item_num: 12, item: "Carved" },
                { item_num: 13, item: "Decorated" },
                { item_num: 14, item: "Delicate" },
                { item_num: 15, item: "Burned" },
                { item_num: 16, item: "Oily" },
                { item_num: 17, item: "Pulsing" },
                { item_num: 18, item: "Glowing" },
                { item_num: 19, item: "Shining" },
                { item_num: 20, item: "Smoldering" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "1d12armortypes",
          title: "1d12 Armor Types",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Leather" },
                { item_num: 2, item: "Studded leather" },
                { item_num: 3, item: "Hide" },
                { item_num: 4, item: "Chain shirt" },
                { item_num: 5, item: "Scale mail" },
                { item_num: 6, item: "Breastplate" },
                { item_num: 7, item: "Half plate" },
                { item_num: 8, item: "Ring mail" },
                { item_num: 9, item: "Chain mail" },
                { item_num: 10, item: "Splint" },
                { item_num: 11, item: "Plate" },
                { item_num: 12, item: "Shield" },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "50mundaneitems",
          title: "50 Mundane Items",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Amulet" },
                { item_num: 2, item: "Arrowhead" },
                { item_num: 3, item: "Bell" },
                { item_num: 4, item: "Bird skull" },
                { item_num: 5, item: "Bone" },
                { item_num: 6, item: "Bowl" },
                { item_num: 7, item: "Box" },
                { item_num: 8, item: "Bracelet" },
                { item_num: 9, item: "Brooch" },
                { item_num: 10, item: "Buckle" },
                { item_num: 11, item: "Candle" },
                { item_num: 12, item: "Coin" },
                { item_num: 13, item: "Crown" },
                { item_num: 14, item: "Cup" },
                { item_num: 15, item: "Dagger" },
                { item_num: 16, item: "Disc" },
                { item_num: 17, item: "Earring" },
                { item_num: 18, item: "Figurine" },
                { item_num: 19, item: "Finger bone" },
                { item_num: 20, item: "Flute" },
                { item_num: 21, item: "Forked rod" },
                { item_num: 22, item: "Gemstone" },
                { item_num: 23, item: "Glove" },
                { item_num: 24, item: "Goblet" },
                { item_num: 25, item: "Hammer" },
                { item_num: 26, item: "Idol" },
                { item_num: 27, item: "Jewelry box" },
                { item_num: 28, item: "Key" },
                { item_num: 29, item: "Lamp" },
                { item_num: 30, item: "Mask" },
                { item_num: 31, item: "Medallion" },
                { item_num: 32, item: "Mirror" },
                { item_num: 33, item: "Necklace" },
                { item_num: 34, item: "Opal" },
                { item_num: 35, item: "Orb" },
                { item_num: 36, item: "Pipe" },
                { item_num: 37, item: "Quill" },
                { item_num: 38, item: "Ring" },
                { item_num: 39, item: "Rod" },
                { item_num: 40, item: "Skull" },
                { item_num: 41, item: "Sphere" },
                { item_num: 42, item: "Spike" },
                { item_num: 43, item: "Statue" },
                { item_num: 44, item: "Stone" },
                { item_num: 45, item: "String of beads" },
                { item_num: 46, item: "Symbol" },
                { item_num: 47, item: "Tiara" },
                { item_num: 48, item: "Tooth" },
                { item_num: 49, item: "Vial" },
                { item_num: 50, item: "Wand" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "50spelleffect",
          title: "50 Spell Effect",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Acid arrow" },
                { item_num: 2, item: "Acid splash" },
                { item_num: 3, item: "Bane" },
                { item_num: 4, item: "Banishment" },
                { item_num: 5, item: "Bestow curse" },
                { item_num: 6, item: "Black tentacles" },
                { item_num: 7, item: "Bless" },
                { item_num: 8, item: "Blight" },
                { item_num: 9, item: "Blindness/ deafness" },
                { item_num: 10, item: "Burning hands" },
                { item_num: 11, item: "Charm person" },
                { item_num: 12, item: "Cloudkill" },
                { item_num: 13, item: "Color spray" },
                { item_num: 14, item: "Comprehend languages" },
                { item_num: 15, item: "Cone of cold" },
                { item_num: 16, item: "Cure wounds" },
                { item_num: 17, item: "Detect evil and good" },
                { item_num: 18, item: "Detect magic" },
                { item_num: 19, item: "Disintegrate" },
                { item_num: 20, item: "Dispel magic" },
                { item_num: 21, item: "Fear" },
                { item_num: 22, item: "Fire shield" },
                { item_num: 23, item: "Firebolt" },
                { item_num: 24, item: "Flame strike" },
                { item_num: 25, item: "Fly" },
                { item_num: 26, item: "Fog cloud" },
                { item_num: 27, item: "Gaseous form" },
                { item_num: 28, item: "Guiding bolt" },
                { item_num: 29, item: "Haste" },
                { item_num: 30, item: "Ice storm" },
                { item_num: 31, item: "Inflict wounds" },
                { item_num: 32, item: "Insect plague" },
                { item_num: 33, item: "Invisibility" },
                { item_num: 34, item: "Jump" },
                { item_num: 35, item: "Light" },
                { item_num: 36, item: "Lightning bolt" },
                { item_num: 37, item: "Misty step" },
                { item_num: 38, item: "Ray of enfeeblement" },
                { item_num: 39, item: "Scorching ray" },
                { item_num: 40, item: "Shatter" },
                { item_num: 41, item: "Shield of faith" },
                { item_num: 42, item: "Shocking grasp" },
                { item_num: 43, item: "Silence" },
                { item_num: 44, item: "Sleep" },
                { item_num: 45, item: "Slow" },
                { item_num: 46, item: "Stinking cloud" },
                { item_num: 47, item: "Stoneskin" },
                { item_num: 48, item: "Thunderwave" },
                { item_num: 49, item: "True strike" },
                { item_num: 50, item: "Web" },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "potionsofhealing",
          title: "Potions of Healing",
          content: [
            {
              type: "table",
              order: 0,
              headers: {
                d20: "d20",
                potion_of: "Potion of",
                rarity: "Rarity",
                hp_regained: "HP Regained",
              },
              data: [
                {
                  d20: "1 - 12",
                  potion_of: "Healing",
                  rarity: "Common",
                  hp_regained: "2d4 + 2",
                },
                {
                  d20: "13 - 16",
                  potion_of: "Greater healing",
                  rarity: "Uncommon",
                  hp_regained: "4d4 + 4",
                },
                {
                  d20: "17 - 19",
                  potion_of: "Superior healing",
                  rarity: "Rare",
                  hp_regained: "8d4 + 8",
                },
                {
                  d20: "20",
                  potion_of: "Supreme healing",
                  rarity: "Very rare",
                  hp_regained: "10d4 + 20",
                },
              ],
            },
          ],
          order: 6,
        },
      ],
    },
    {
      id: "randomtownevents",
      title: "Random Town Events",
      intro:
        'Whenever the characters enter a new town or start a new session there, adding some detail and context to the setting can help bring things to life. These "Town Events" lists help determine what might be going on in a town, how the townsfolk are currently feeling, what the weather is, and what mundane or fantastic event might be taking place.',
      subsections: [
        {
          id: "1d20townsentiments",
          title: "1d20 Town Sentiments",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Happy" },
                { item_num: 2, item: "Elated" },
                { item_num: 3, item: "Uncaring" },
                { item_num: 4, item: "Joyful" },
                { item_num: 5, item: "Optimistic" },
                { item_num: 6, item: "Pessimistic" },
                { item_num: 7, item: "Downtrodden" },
                { item_num: 8, item: "Frightened" },
                { item_num: 9, item: "Horrified" },
                { item_num: 10, item: "Concerned" },
                { item_num: 11, item: "Unconcerned" },
                { item_num: 12, item: "Harried" },
                { item_num: 13, item: "Sleep-deprived" },
                { item_num: 14, item: "Dazed" },
                { item_num: 15, item: "Hyperactive" },
                { item_num: 16, item: "Purposeful" },
                { item_num: 17, item: "Lazy" },
                { item_num: 18, item: "Melancholy" },
                { item_num: 19, item: "Busy" },
                { item_num: 20, item: "Suspicious" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "1d20mundaneevents",
          title: "1d20 Mundane Events",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Wedding" },
                { item_num: 2, item: "Funeral" },
                { item_num: 3, item: "Preparing for war" },
                { item_num: 4, item: "Seasonal celebration" },
                { item_num: 5, item: "Burning of an effigy" },
                { item_num: 6, item: "Death of a noble lord" },
                { item_num: 7, item: "Day of drunkenness" },
                { item_num: 8, item: "Celebration of lovers" },
                { item_num: 9, item: "Great feast" },
                { item_num: 10, item: "Execution" },
                { item_num: 11, item: "Market day" },
                { item_num: 12, item: "Parade of vanquished foes" },
                { item_num: 13, item: "Celebration of the dead" },
                { item_num: 14, item: "Religious holiday" },
                { item_num: 15, item: "Wild boar hat festival" },
                { item_num: 16, item: "Robbery" },
                { item_num: 17, item: "Brawl" },
                { item_num: 18, item: "Visit by the circus" },
                { item_num: 19, item: "Wrangling of rampaging beasts" },
                { item_num: 20, item: "Festival of kites" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "1d20notableweathercondtions",
          title: "1d20 Notable Weather Condtions",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Fog" },
                { item_num: 2, item: "Heavy mist" },
                { item_num: 3, item: "New moon" },
                { item_num: 4, item: "Full moon" },
                { item_num: 5, item: "Hot day" },
                { item_num: 6, item: "Chilly day" },
                { item_num: 7, item: "Light rain" },
                { item_num: 8, item: "Moderate rain" },
                { item_num: 9, item: "Heavy rain" },
                { item_num: 10, item: "Windstorm" },
                { item_num: 11, item: "Hailstorm" },
                { item_num: 12, item: "Ice storm" },
                { item_num: 13, item: "Cloudy day" },
                { item_num: 14, item: "Sunny day" },
                { item_num: 15, item: "Humid day" },
                { item_num: 16, item: "Dry day" },
                { item_num: 17, item: "Windy day" },
                { item_num: 18, item: "Light snowfall" },
                { item_num: 19, item: "Moderate snowfall" },
                { item_num: 20, item: "Snowstorm" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "1d20fantasticevents",
          title: "1d20 Fantastic Events",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item_num: 1,
                  item: "The stars have disappeared from the sky",
                },
                { item_num: 2, item: "An unexpected solar eclipse" },
                { item_num: 3, item: "The blood moon rises" },
                { item_num: 4, item: "Swarms of stinging insects descend" },
                { item_num: 5, item: "Acidic fog rolls in" },
                { item_num: 6, item: "A second sun appears in the sky" },
                { item_num: 7, item: "A storm of arcane energy" },
                { item_num: 8, item: "The arrival of a servant of a god" },
                { item_num: 9, item: "Meteor shower" },
                { item_num: 10, item: "A cyclopean behemoth rises" },
                { item_num: 11, item: "Swarms of mischievous devils" },
                { item_num: 12, item: "Tentacles appear in the sky" },
                { item_num: 13, item: "The dancing dead come to life" },
                { item_num: 14, item: "Volcanic eruption" },
                {
                  item_num: 15,
                  item: "Collapsing sinkhole reveals ancient ruins below",
                },
                { item_num: 16, item: "The sun does not rise" },
                { item_num: 17, item: "A great floating tower appears" },
                { item_num: 18, item: "The lord's castle disappears" },
                {
                  item_num: 19,
                  item: "The border to the fey realm grows thin",
                },
                {
                  item_num: 20,
                  item: "The world of shadow bleeds over into the material realm",
                },
              ],
            },
          ],
          order: 3,
        },
      ],
    },
    {
      id: "randomdungeonmonsters",
      title: "Random Dungeon Monsters",
      intro:
        "The following tables let you randomly select monsters based on \"dungeon level.\" Although these charts are built for old-school dungeon delving, you can use them to generate randomly encountered monsters in just about any setting - a ruin, an old church, caves, catacombs, an old wizard's tower, or some other forgotten lair.\n\nTo use these tables, first decide what dungeon level the characters are on. This might correspond to the level of the characters but it doesn't have to. If 2nd-level characters decide to descend to dungeon level 5, so be it.\n\nOnce you have a dungeon level selected, roll a d20 and look across to see which monster table you should use. For example, if the characters are on dungeon level 4 and you roll a 12, you'll use monster table 3. Then go to the indicated monster table and roll a d20 again, to determine which monster might show up. Using the above example, consulting monster table 3 and rolling a 3 gives a result of 'Ghoul.' Instead of using dungeon levels, you can just jump to whichever monster table feels right for the circumstances. If you know you're looking for a monster with a challenge rating of 4 or 5, just roll on Monster Table 6. You can also use these tables to quickly look up monsters at particular challenge ratings. Even if you absolutely hate random encounters, you can use the tables to generate encounter ideas you might never think of otherwise.\n\nThere are a few ways to choose the number of monsters in an encounter. First, think about what makes sense. Ghouls travel in packs, but a rug of smothering is probably found alone. You might roll dice to determine the number of monsters-for example, 3d6 ghouls. You might also choose to have one monster leading others-a pack of ghouls led by a ghast, for example.\n\nBefore the number of monsters is set, you can gauge whether your intended encounter is deadly or not by using the \"[5e Quick Encounter Building](15-quickencounterbuilding.md)\" section of this document.",
      subsections: [
        {
          id: "default",
          title: "",
          content: [
            {
              type: "table",
              order: 0,
              headers: { item: "", monster_list: "Monster List" },
              data: [
                { item: "10", monster_list: "1" },
                { item: "", monster_list: "1—16" },
                { item: "", monster_list: "1—12" },
                { item: "", monster_list: "1—12" },
                { item: "", monster_list: "1—5" },
                { item: "", monster_list: "1—3" },
                { item: "", monster_list: "1—2" },
                { item: "—", monster_list: "1" },
                { item: "20", monster_list: "1" },
                { item: "20", monster_list: "1" },
                { item: "20", monster_list: "1" },
                { item: "19—20", monster_list: "1" },
                { item: "18—20", monster_list: "1" },
                { item: "17—20", monster_list: "1" },
              ],
            },
          ],
          order: 0,
        },
        {
          id: "monsterlist1",
          title: "Monster List 1 (CR 1/8—1/4)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Bandit" },
                { item_num: 2, item: "Cultist" },
                { item_num: 3, item: "Flying snake" },
                { item_num: 4, item: "Giant crab" },
                { item_num: 5, item: "Giant rat" },
                { item_num: 6, item: "Kobold" },
                { item_num: 7, item: "Poisonous snake" },
                { item_num: 8, item: "Stirge" },
                { item_num: 9, item: "Tribal warrior" },
                { item_num: 10, item: "Axe beak" },
                { item_num: 11, item: "Blink dog" },
                { item_num: 12, item: "Dretch" },
                { item_num: 13, item: "Drow" },
                { item_num: 14, item: "Giant bat" },
                { item_num: 15, item: "Giant frog" },
                { item_num: 16, item: "Giant wolf spider" },
                { item_num: 17, item: "Goblin" },
                { item_num: 18, item: "Skeleton" },
                { item_num: 19, item: "Swarm of bats" },
                { item_num: 20, item: "Swarm of rats" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "monsterlist2",
          title: "Monster List 2 (CR 1/4—1)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Wolf" },
                { item_num: 2, item: "Zombie" },
                { item_num: 3, item: "Cockatrice" },
                { item_num: 4, item: "Darkmantle" },
                { item_num: 5, item: "Gnoll" },
                { item_num: 6, item: "Gray ooze" },
                { item_num: 7, item: "Hobgoblin" },
                { item_num: 8, item: "Lizardfolk" },
                { item_num: 9, item: "Magmin" },
                { item_num: 10, item: "Orc" },
                { item_num: 11, item: "Rust monster" },
                { item_num: 12, item: "Sahuagin" },
                { item_num: 13, item: "Scout" },
                { item_num: 14, item: "Shadow" },
                { item_num: 15, item: "Swarm of insects" },
                { item_num: 16, item: "Thug" },
                { item_num: 17, item: "Worg" },
                { item_num: 18, item: "Animated armor" },
                { item_num: 19, item: "Bugbear" },
                { item_num: 20, item: "Death dog" },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "monsterlist3",
          title: "Monster List 3 (CR 1—2)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Dire wolf" },
                { item_num: 2, item: "Duergar" },
                { item_num: 3, item: "Ghoul" },
                { item_num: 4, item: "Giant spider" },
                { item_num: 5, item: "Giant toad" },
                { item_num: 6, item: "Harpy" },
                { item_num: 7, item: "Imp" },
                { item_num: 8, item: "Specter" },
                { item_num: 9, item: "Spy" },
                { item_num: 10, item: "Ankheg" },
                { item_num: 11, item: "Bandit captain" },
                { item_num: 12, item: "Berserker" },
                { item_num: 13, item: "Black dragon wyrmling" },
                { item_num: 14, item: "Cult fanatic" },
                { item_num: 15, item: "Ettercap" },
                { item_num: 16, item: "Gargoyle" },
                { item_num: 17, item: "Gelatinous cube" },
                { item_num: 18, item: "Ghast" },
                { item_num: 19, item: "Giant constrictor snake" },
                { item_num: 20, item: "Gibbering mouther" },
              ],
            },
          ],
          order: 3,
        },
        {
          id: "monsterlist4",
          title: "Monster List 4 (CR 2—3)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Azer" },
                { item_num: 2, item: "Green dragon wyrmling" },
                { item_num: 3, item: "Grick" },
                { item_num: 4, item: "Griffon" },
                { item_num: 5, item: "Merrow" },
                { item_num: 6, item: "Mimic" },
                { item_num: 7, item: "Minotaur skeleton" },
                { item_num: 8, item: "Ochre jelly" },
                { item_num: 9, item: "Ogre" },
                { item_num: 10, item: "Ogre zombie" },
                { item_num: 11, item: "Priest" },
                { item_num: 12, item: "Rug of smothering" },
                { item_num: 13, item: "Sea hag" },
                { item_num: 14, item: "Swarm of poisonous snakes" },
                { item_num: 15, item: "Wererat" },
                { item_num: 16, item: "White dragon wyrmling" },
                { item_num: 17, item: "Will-o'-wisp" },
                { item_num: 18, item: "Basilisk" },
                { item_num: 19, item: "Bearded devil" },
                { item_num: 20, item: "Blue dragon wyrmling" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "monsterlist5",
          title: "Monster List 5 (CR 3—4)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Doppelganger" },
                { item_num: 2, item: "Giant scorpion" },
                { item_num: 3, item: "Green hag" },
                { item_num: 4, item: "Hell hound" },
                { item_num: 5, item: "Knight" },
                { item_num: 6, item: "Manticore" },
                { item_num: 7, item: "Minotaur" },
                { item_num: 8, item: "Mummy" },
                { item_num: 9, item: "Nightmare" },
                { item_num: 10, item: "Owlbear" },
                { item_num: 11, item: "Phase spider" },
                { item_num: 12, item: "Veteran" },
                { item_num: 13, item: "Werewolf" },
                { item_num: 14, item: "Wight" },
                { item_num: 15, item: "Winter wolf" },
                { item_num: 16, item: "Black pudding" },
                { item_num: 17, item: "Chuul" },
                { item_num: 18, item: "Couatl" },
                { item_num: 19, item: "Ettin" },
                { item_num: 20, item: "Ghost" },
              ],
            },
          ],
          order: 5,
        },
        {
          id: "monsterlist6",
          title: "Monster List 6 (CR 4—5)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Lamia" },
                { item_num: 2, item: "Red dragon wyrmling" },
                { item_num: 3, item: "Succubus/incubus" },
                { item_num: 4, item: "Wereboar" },
                { item_num: 5, item: "Air elemental" },
                { item_num: 6, item: "Barbed devil" },
                { item_num: 7, item: "Bulette" },
                { item_num: 8, item: "Earth elemental" },
                { item_num: 9, item: "Fire elemental" },
                { item_num: 10, item: "Flesh golem" },
                { item_num: 11, item: "Giant crocodile" },
                { item_num: 12, item: "Gladiator" },
                { item_num: 13, item: "Gorgon" },
                { item_num: 14, item: "Half-red dragon veteran" },
                { item_num: 15, item: "Hill giant" },
                { item_num: 16, item: "Night hag" },
                { item_num: 17, item: "Otyugh" },
                { item_num: 18, item: "Roper" },
                { item_num: 19, item: "Shambling mound" },
                { item_num: 20, item: "Troll" },
              ],
            },
          ],
          order: 6,
        },
        {
          id: "monsterlist7",
          title: "Monster List 7 (CR 5—8)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Salamander" },
                { item_num: 2, item: "Vampire spawn" },
                { item_num: 3, item: "Water elemental" },
                { item_num: 4, item: "Wraith" },
                { item_num: 5, item: "Xorn" },
                { item_num: 6, item: "Chimera" },
                { item_num: 7, item: "Drider" },
                { item_num: 8, item: "Invisible stalker" },
                { item_num: 9, item: "Mage" },
                { item_num: 10, item: "Medusa" },
                { item_num: 11, item: "Vrock" },
                { item_num: 12, item: "Wyvern" },
                { item_num: 13, item: "Young white dragon" },
                { item_num: 14, item: "Oni" },
                { item_num: 15, item: "Shield guardian" },
                { item_num: 16, item: "Stone giant" },
                { item_num: 17, item: "Young black dragon" },
                { item_num: 18, item: "Assassin" },
                { item_num: 19, item: "Chain devil" },
                { item_num: 20, item: "Cloaker" },
              ],
            },
          ],
          order: 7,
        },
        {
          id: "monsterlist8",
          title: "Monster List 8 (CR 8—12)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Frost giant" },
                { item_num: 2, item: "Hezrou" },
                { item_num: 3, item: "Hydra" },
                { item_num: 4, item: "Spirit naga" },
                { item_num: 5, item: "Young green dragon" },
                { item_num: 6, item: "Bone devil" },
                { item_num: 7, item: "Clay golem" },
                { item_num: 8, item: "Cloud giant" },
                { item_num: 9, item: "Fire giant" },
                { item_num: 10, item: "Glabrezu" },
                { item_num: 11, item: "Young blue dragon" },
                { item_num: 12, item: "Aboleth" },
                { item_num: 13, item: "Guardian naga" },
                { item_num: 14, item: "Stone golem" },
                { item_num: 15, item: "Young red dragon" },
                { item_num: 16, item: "Behir" },
                { item_num: 17, item: "Ereeti" },
                { item_num: 18, item: "Horned devil" },
                { item_num: 19, item: "Remorhaz" },
                { item_num: 20, item: "Archmage" },
              ],
            },
          ],
          order: 8,
        },
        {
          id: "monsterlist9",
          title: "Monster List 9 (CR 12—16)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Erinyes" },
                { item_num: 2, item: "Adult white dragon" },
                { item_num: 3, item: "Nalfeshnee" },
                { item_num: 4, item: "Rakshasa" },
                { item_num: 5, item: "Storm giant" },
                { item_num: 6, item: "Vampire" },
                { item_num: 7, item: "Adult black dragon" },
                { item_num: 8, item: "Ice devil" },
                { item_num: 9, item: "Adult green dragon" },
                { item_num: 10, item: "Mummy lord" },
                { item_num: 11, item: "Purple worm" },
                { item_num: 12, item: "Adult blue dragon" },
              ],
            },
          ],
          order: 9,
        },
        {
          id: "monsterlist10",
          title: "Monster List 10 (CR 16—24)",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "Iron golem" },
                { item_num: 2, item: "Marilith" },
                { item_num: 3, item: "Adult red dragon" },
                { item_num: 4, item: "Balor" },
                { item_num: 5, item: "Ancient white dragon" },
                { item_num: 6, item: "Pit fiend" },
                { item_num: 7, item: "Anclent black dragon" },
                { item_num: 8, item: "Lich" },
                { item_num: 9, item: "Ancient blue dragon" },
                { item_num: 10, item: "Ancient red dragon" },
              ],
            },
          ],
          order: 10,
        },
      ],
    },
    {
      id: "lazysolo5e",
      title: "Lazy Solo 5e",
      intro:
        "These rules let you play a solo game of 5e using lists in this document. With these guidelines, a single character explores a dungeon to complete quests. Let your imagination take over as you fill in the story and details of the quest, location, and adventure.\n\nThis scenario begins at 1st level, and your character gains a level after each successful quest.",
      subsections: [
        {
          id: "buildingthequest",
          title: "Building the Quest",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'First, build a quest-giving NPC by rolling for behavior and ancestry in the "[Core Adventure Generators](25-coreadventuregenerators.md)" section of this document. Choose a name and any other details from the "[NPC Generator](26-npcgenerator.md)" section.\n\nNext, roll on the Quests in "[Core Adventure Generators](25-coreadventuregenerators.md)". Determine the location by rolling on the Condition, Description, Origin, and Location table.\n\nChoose a map for the location from your favorite online source of maps or any other maps you have on hand. Choose a map that fits the location. Maps with fifteen or more rooms work best for adventures created with these guidelines.\n\nYou can then fill in additional quest details from the other tables in "[Core Adventure Generators](25-coreadventuregenerators.md)". Examples include required keys, monuments, villains, lieutenants, and other quest goals.\n\nChoose a starting room on the map that makes sense.',
            },
          ],
          order: 0,
        },
        {
          id: "exploringthedungeon",
          title: "Exploring the Dungeon",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Each time you enter a chamber, roll to determine what you find there.\n\nEach time your roll comes up 4, 5, 6, or 7, indicated by "QP" below, your quest progresses one step. You might acquire a needed key or face a villain\'s lieutenant. You decide what type of progress you make.\n\nOn your fourth roll of quest progress, you reach the final challenge of the quest. If you succeed, you have completed the quest and gain a new level.',
            },
            {
              type: "table",
              order: 1,
              data: [
                { item_num: 1, item: "Trap or hazard" },
                { item_num: 2, item: "Trap or hazard" },
                { item_num: 3, item: "Monster and harmful monument" },
                { item_num: 4, item: "Monster and harmful monument (QP)" },
                { item_num: 5, item: "Monster and neutral monument (QP)" },
                { item_num: 6, item: "Monster and neutral monument (QP)" },
                { item_num: 7, item: "Monster and helpful monument (QP)" },
                { item_num: 8, item: "Monster and helpful monument" },
                { item_num: 9, item: "Healing font (restore 2d6 hit points)." },
                { item_num: 10, item: "Unguarded treasure" },
              ],
            },
          ],
          order: 1,
        },
        {
          id: "trapsandhazards",
          title: "Traps and Hazards",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Roll for the trap type on the Traps and Hazards table in the "[Core Adventure Generators](25-coreadventuregenerators.md)" section. Then make a DC 12 Wisdom (Perception) check to locate the trap or hazard. Roll the most applicable ability check or saving throw vs DC 12 to avoid the trap or hazard. Failure on either roll results in 1d6 damage per character level of a type appropriate for the trap.',
            },
          ],
          order: 2,
        },
        {
          id: "monsterencounter",
          title: "Monster Encounter",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Roll for a random monster on the Monster table in the "[Random Dungeon Monsters](34-randomdungeonmonsters.md)" section, selecting a dungeon level equal to your character level.\n\nAssume the monster starts 25 feet away from you. Roll for initiative, with the monster using a static initiative score of 10 + the monster\'s Dexterity bonus. Adjudicate combat as you desire, assuming the monster acts as they would given their fiction.',
            },
          ],
          order: 3,
        },
        {
          id: "monuments",
          title: "Monuments",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                'Each monster encounter includes a helpful, neutral, or harmful monument. Generate monuments using the Locations, Monuments, and Items table, and the Condition, Description, and Origin table in the "[Core Adventure Generators](25-coreadventuregenerators.md)" section.\n\nRoll a d6 to determine the effect of the monument.\n\nHelpful monuments provide this benefit to your character. Harmful monuments provide this benefit to monsters. For neutral monuments, your character can roll a DC 12 Intelligence (Arcana or Religion) check. On a success, your character gains the benefit. On a failure, the monster gains the benefit.',
            },
            {
              type: "table",
              order: 1,
              data: [
                { item_num: 1, item: "+1 to AC" },
                { item_num: 2, item: "+1 to attacks and save DCs" },
                { item_num: 3, item: "+1 AC and saving throws" },
                {
                  item_num: 4,
                  item: "+1 temp hit point per character level (minimum 5)",
                },
                { item_num: 5, item: "+1d6 damage per five character levels" },
                { item_num: 6, item: "Advantage on attack rolls" },
              ],
            },
          ],
          order: 4,
        },
        {
          id: "treasure",
          title: "Treasure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "When you defeat a monster or enter a chamber with unguarded treasure, roll on the following list:",
            },
          ],
          order: 5,
        },
        {
          id: "1d8treasures",
          title: "1d8 Treasures",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                { item_num: 1, item: "No treasure" },
                { item_num: 2, item: "No treasure" },
                { item_num: 3, item: "3d12 gp" },
                { item_num: 4, item: "3d12 gp" },
                { item_num: 5, item: "Potion of healing" },
                { item_num: 6, item: "Potion of healing" },
                { item_num: 7, item: "Consumable item" },
                { item_num: 8, item: "Permanent item" },
              ],
            },
            {
              type: "paragraph",
              order: 0,
              markdown:
                'For consumable and permanent items, roll on the tables in the "[Treasure Generator](27-treasuregenerator.md)" section or a random treasure table of your choice. You can replace any consumable magic item with a *potion of healing*. You can replace any permanent magic item with a *+1 weapon* of your choice.',
            },
          ],
          order: 6,
        },
      ],
    },
    {
      id: "villageofwhitesparrow",
      title: "The Village of Whitesparrow",
      intro:
        "The following village description and adventure from *[Sly Flourish's Fantastic Adventures](https://shop.slyflourish.com/products/fantastic-adventures)* are released under the same Creative Commons license as the rest of this document. These sections give RPG publishers a small village setting and starter adventure under an open license and royalty free. Please note that the rest of *Fantastic Adventures* has not been released under this license.\n\nNestled between mountains to the east and west and swampland and forest to the south, the village of Whitesparrow serves as respite for those who travel along the modest trade route running through the surrounding valley. An old keep overlooks this village of five hundred people from an adjacent hill, with banners depicting the settlement’s namesake bird fluttering from its square turrets.\n\nAfter the keep, a great hand carved of black stone is Whitesparrow’s second-most-visible landmark, rising up at the center of the village with its thumb and five fingers splayed out. The area around the hand is a great dig, where previous generations tried and failed to excavate whatever lay beneath it.\n\nAn open-air stone temple, a two-story inn built atop steaming hot springs, and an outfitters’ shop stand among two dozen other buildings that make up the heart of the village, while farmhouses dot the neighboring hillsides, surrounded by broad fields of crops.\n\n**Area Aspects:** Cyclopean hand, old keep, outfitters, open-air temple, hot spring inn",
      subsections: [
        {
          id: "usingwhitesparrowinyourcampaign",
          title: "Using Whitesparrow in Your Campaign",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The village of Whitesparrow serves as the hub for\\\nthe adventures in this book, so as to save on the space required to write a new starting location for each adventure, and to give the characters a well-defined home base. The design of the village is both straightforward and spare, featuring an inn, a tavern, an outfitters, a sheriff, and the village lord. Whitesparrow has thus been designed to fit easily into any fantasy world—but also to be completely replaceable with any settlement of your choice from your own campaign word, another published adventure, or a larger published campaign setting. Use the village as is, modify it to suit your own campaign, or throw it out and replace it completely.\\\nIt’s up to you.",
            },
          ],
          order: 0,
        },
        {
          id: "notablenpcsofwhitesparrow",
          title: "Notable NPCs of Whitesparrow",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "**Sheriff Ruth Willowmane**: Sheriff Ruth Willow-mane is the true protector and unofficial leader of the village. The middle-aged sheriff has served the people of Whitesparrow for twenty years, after serving as a soldier for fifteen years before that. She has a good heart and loves the people of the village, who always look to her when trouble arises. She typically has little patience for adventurers, seeing them as disruptive influences on the normal flow of village life—and fearing the trouble they often bring with them. Still, she understands that the threats represented by the odd events that often transpire around the village require special skills to deal with, and she looks to those with a proven ability to handle themselves to deal with those threats.\n\nThe sheriff has eight guards under her employ and can call upon another twelve conscripted guards when needed.\n\n**Lord Marlin Whitesparrow**: Lord Marlin White-sparrow is the young lord of the village and the lands around it. He resides in the old castle that sits on a hill above the village, an inheritance passed down through his family for generations. Marlin’s father died in his fifties and left his thirty-year old son in charge. Despite his young age, Lord Whitesparrow is a well-respected leader, though he has little patience for the daily drudgery of village life.\n\nMarlin has no wife or children, but the lord has adopted his young nephew Pennin as ward after the boy’s parents died of influenza when he was a baby. Pennin will succeed Marlin if the lord dies. If both die, the Whitesparrow line is broken and Sheriff Ruth Willowmane becomes the new elected leader of the village.\n\n**Amanda Jess**: Owner of the Summerspring Inn and the Evershady Tavern, Amanda Jess is the dominant entrepreneur in Whitesparrow. She has three sons—Kinzlow, Balaham, and Wess—who work at the tavern and inn. Amanda enjoys meeting visitors to Whitesparrow, and she has an eye for people. She has a knack for knowing exactly what questions to ask in order to dig deep into newcomers’ backgrounds, and always seeks a way to find opportunities for business. Some whisper that Amanda was once a spy for a powerful organization before she retired to the quiet life of Whitesparrow.\n\n**Gavun Grayhorn**: A former adventurer, Gavun is the proprietor of Grayhorn Outfitters. He once traveled far and wide across many lands, but fortune always eluded him. When one adventure left him the only survivor of his group, Gavun retired to start his business and serve the many trading caravans passing through the local area—just as those caravans began to turn to safer paths that took them away from Whitesparrow. Such is the luck of Gavun Grayhorn. He runs the shop with his wife Arianne, whose family has dwelled in Whitesparrow for generations.\n\n**Elovyn Sorrowsong**: An elf priest of the Temple of Light, Elovyn found herself out of political favor in her homeland and was sent on a one-hundred-year pilgrimage into the lands of humankind. Though she still resents being sent on the pilgrimage, and the decades she has spent in Whitesparrow as a result, she has come to care very much for the people of the village. She greatly enjoys the empowerment that comes with being Whitesparrow’s only elf in a position of authority. Because of this, she is initially distrustful of other elves who visit the village, afraid they will take away from her mystique.\n\n**Philcock Deadcleft**: The manager of the Summer-spring Inn and a longtime employee of Amanda Jess, Deadcleft is a small, ugly rumormonger who spies on his patrons. Yet for reasons unknown, Amanda has always protected and defended him. Deadcleft wears clothes of noble cut but in poor condition, and always smells terrible.",
            },
          ],
          order: 1,
        },
        {
          id: "notablelocationsofwhitesparrow",
          title: "Notable Locations of Whitesparrow",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "### The Cyclopean Palm\n\n**Area Aspects:** Titanic six-fingered hand rising out of the ground, unknown and indestructible substance, deep excavations, rumored staircase\n\n> *A great hand carved of smooth black stone rises in the center of the village, its palm facing the sky and its thumb and five fingers splayed out. The cyclopean stonework is nearly forty feet high—tall enough that buildings have been constructed around it and a tavern sits underneath the shade of the back of the hand. Deep clefts have been dug in around the hand’s wrist, confirming that it is attached to a forearm descending far beneath the ground.*\n\nThe age of the stone hand jutting out of the ground has never been accurately determined, and its origin remains unknown. Its stone is seemingly impervious to damage, and resembles no other type of local rock. A number of explorers and miners have tried to dig out the rest of this amazing construction over the years. However, most such attempts were abandoned when their crews began to complain of nightmares filled with strange buzzing sounds. Some of the clefts left behind by these excavation efforts still exist, with old rope ladders leading down roughly one hundred feet to the bend at the elbow of the arm.\n\nA rumor continuously floats around Whitesparrow talking of how the hand’s wrist is hollow, and of a staircase carved into it that leads down below the surface. A chamber within the arm is said to be the boundary between two worlds. However, most pass this rumor off as a fantasy, spoken of by drunkards and sketched onto false maps sold for a few silver to travelers awed by the spectacle of the cyclopean palm.\n\n### The Evershady Tavern\n\n**Area Aspects:** Continual shade under the cyclopean palm, indoor and outdoor tables, circular bar around the wrist\n\n> *Underneath the great palm rests the building and outdoor eatery that is the Evershady Tavern. A half-circle bar has been built around the wrist of the upthrust hand, and numerous tables rest beneath the shade of the palm. Ropes and nets filled with foodstuffs hang from the hand’s splayed fingers.*\n\nThe enterprising Amanda Jess built this tavern four decades earlier, and has since turned it into an enduring and profitable business. The tavern serves travelers and workers for miles around, featuring a spiced lamb stew known far and wide as one of the best dishes in the local area. The recipe is kept secret, but some think that the proximity of the tavern’s kitchens to the cyclopean palm plays some part in its potency. The vast cellars below the tavern were dug out by various expeditions seeking the secrets of the cyclopean palm, but which never uncovered anything but bankruptcy and madness.\n\n### The Summerspring Inn\n\n**Area Aspects:** Underground hot springs, creaking and rotting wood, large support beams\n\n> *This large, two-story building seems to sit slightly askew, supported at its corners by heavy beams that keep it from collapsing completely. Whenever the wind blows, the whole building makes a deep creaking sound, like someone trying to get comfortable in a tilting chair.*\n\nThe Summerspring Inn’s most notable feature is the hot springs on which it sits—and which are also the cause of its potential demise. The continual humidity has soaked into the wood of the building, rotting much of it and putting the entire structure on the edge of collapse. Maintaining the inn is now a full-time endeavor, and workers are continually reinforcing beams and adding new supports where the floors have begun to sag.\n\nThe lower rooms of the inn include their own stone hot baths, continually fed by the slightly sulfuric-smelling hot springs. Some of those springs have unexpectedly gone dry over the years, leaving a network of caverns below the inn said to contain untouched gemstone deposits, lost relics, and secret horrors. Amanda Jess owns this inn as well as the Evershady Tavern, but she relegates the inn’s daily management to Philcock Deadcleft.\n\n### Grayhorn Outfitters\n\n**Area Aspects:** Shop and stables, huge horns above door, clutter and mess\n\n> *A pair of huge black horns protrudes out from above the heavy wooden door of this large shop. A horseshoe, a bundle of rope, and a pickaxe are carved into the sign that hangs overhead. One side of the building features a stable with twelve stalls, presently holding four well-worked draft horses and a beautiful white stallion.*\n\nGavun Grayhorn’s shop is a cluttered mess holding all forms of tack and equipment, including both adventuring and exploration gear. Gavun reluctantly brings out arms and armor if asked, though he doesn’t seem very fond of such items. If asked about the horns above the door, he says he found them out in the woods, attached to the skull of some unknown herbivore. In reality, they are the horns of the black dragon that slew Gavun’s companions when he was an adventurer—in response to which he took bloody revenge by feeding the dragon a dead yak concealing six pots of alchemist’s fire. The dragon’s lair still holds the remains of Gavun’s companions and their equipment, all of which he hopes to recover some day—were it not for the monsters that have since taken up residence within the abandoned lair.\n\n### The Temple of Light\n\n**Area Aspects:** Open-air nave, statues of elves with hands raised to the sky, floating orb\n\n> *The central nave of this large circular temple is open to the sky above and adorned by five ancient statues of elf men and women—including a statue depicting the goddess of light—their faces and arms held up to the sky. An orb hangs in midair in the center of the open nave, glowing with scintillating colors. Rings of stone pews face a central fountain beneath the orb, which bubbles with warm water. A small circular house sits nearby, artfully decorated with symbols of the sun.*\n\nOnce an elven site, the temple has stood here for centuries, and was abandoned after the elves left this region to the human settlers who came after them. The main chamber of the temple is open to the sky through a stone entryway, while the stone rooms around it are roofed of clay and slate to protect the temple’s ceremonial items. A collapsed floor in the back of one storeroom of the temple leads into catacombs last explored centuries ago.\n\nThe scintillating orb has been present in the temple for as long as anyone can remember. Four years ago, enterprising thieves tried to steal the orb armed with an exceptionally tall ladder—only to have the lead thief disappear as soon as her fingers touched the orb, never to be seen again.\n\nA nearby home is the residence of the temple’s current priest, Elovyn Sorrowsong.\n\n### Whitesparrow Keep\n\n**Area Aspects:** Stone three-story keep, switchback cobblestone road, enormous stone birdbath\n\n> *A switchback cobblestone road leads up to the court-yard of Whitesparrow Keep, which stands majestically atop a rocky hill above the village. A large, still pool of water sits in the center of the keep’s main courtyard, with a granite statue of a sparrow sitting atop a rock in the pool’s center. Dozens of birds sit on perches around the pool’s edge, drinking from the pool and splashing about. The keep beyond stands three stories tall, with square turrets in the front and a pitched roof in the back.*\n\nNot counting the temple, Whitesparrow keep is the oldest structure in the village, having survived numerous wars and other notable catastrophes. As castles go, it is not terribly large, although numerous subbasements lead deep into the rocky hill upon which the keep is built. Local rumors talk of how most of those subbasements haven’t been explored for hundreds of years.",
            },
          ],
          order: 2,
        },
      ],
    },
    {
      id: "thenightblade",
      title: "The Night Blade",
      intro:
        "Ralavaz the Night Blade, a notorious bandit chieftain, has been released from prison. Rumors mark him as having returned to the hideout from which he and his band once operated—a ruined watchtower where a new group of bandits now preys upon the folk of Whitesparrow and the surrounding vale.\n\nWhen Ralavaz and his younger brother Gardren led the Night Blade bandits, they were well known in the village of Whitesparrow for their dastardly deeds—including a murder for which Ralavaz was never convicted. Gardren and the rest of the Night Blades were killed when Ralavaz was captured and imprisoned. But Sheriff Ruth Willowmane believes that Ralavaz’s return means the Night Blades are back—and that attacks against wagons and travelers around the village will get worse unless the bandit chieftain is stopped for good.",
      subsections: [
        {
          id: "adventuresummary",
          title: "Adventure Summary",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "This adventure begins when the party is attacked by members of the new Night Blades. After the fight, the characters investigate the scene of battle to learn more about the bandits. Sheriff Willowmane then recruits the characters to hunt down the new Night Blades and bring Ralavaz to justice.\n\nIn Whitesparrow, the characters speak to the villagers to learn more of the history of Ralavaz and the Night Blades. They then make their way through a huge expanse of tangleweed to reach the Lonely Torch—the ruined watchtower that once served the Night Blades as a headquarters. But as they explore the ruins of the tower and face off against the new group of bandits dwelling there, the characters discover that Ralavaz has been imprisoned by his brother Gardren, disfigured but still alive. Learning that Ralavaz has changed his ways and is now trying to turn his brother away from a life of evil, the characters must make a choice about who to save, who to kill, and who to bring back to Whitesparrow to face justice.\n\n**Monsters:** Bandits (6), shambling mound, guards (2), stirges (10), thugs (2), swarm of rats, bandit captain",
            },
          ],
          order: 0,
        },
        {
          id: "notablenpcs",
          title: "Notable NPCs",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "**Sheriff Ruth Willowmane:** Sheriff of the village of Whitesparrow, Ruth knows that her younger brother, Dronder Willowmane, was slain by Ralavaz eleven years earlier. But a lack of evidence meant that the bandit chieftain never paid the price for the crime.\n\n**Gardren the Night Lord:** The younger of the brothers who once led the Night Blades, Gardren is thought by most folk to be dead. Ten years ago, the first incarnation of the Night Blades were cornered in a barn near the Lonely Torch watchtower. Angry villagers set the structure ablaze, and only Ralavaz is thought to have made it out alive. Gardren still lives, however, and is secretly leading a new gang of Night Blades when his brother returns.\n\nDisfigured by the fire, Gardren doesn’t lead the gang for treasure or profit. Rather, he wants to see the folk of Whitesparrow destroyed in the name of his dead friends and the injury done to him. Among his many dark hobbies, Gardren has learned how to tame stirges—or at least to prevent them from attacking him. He has a particularly nasty pet stirge he calls Heartspine, who is always with him.\n\n**Ralavaz the Night Blade:** Ralavaz is the elder of the brothers who led the Night Blades ten years ago, and the only known survivor of the fire that wiped the bandits out. Having saved a noble’s son during a prison riot while awaiting execution, Ralavaz had his sentence commuted, and was recently released after ten years instead of paying with his life for his crimes. He has returned to the ruined tower known as the Lonely Torch, where new members of the Night Blade bandits now dwell. Unknown to most people, Ralavaz has repented his old ways and become a follower of the goddess of light. He wishes to ask his brother’s forgiveness, and to turn Gardren away from murder and banditry.",
            },
          ],
          order: 1,
        },
        {
          id: "secretsandclues",
          title: "Secrets and Clues",
          content: [
            {
              type: "table",
              order: 0,
              data: [
                {
                  item: "Ten years ago, Ralavaz, Gardren, and the rest of the Night Blades were trapped in a barn near the Lonely Torch. When angry villagers set the barn ablaze, only Ralavaz made it out, with Gardren and the rest of the trapped Night Blades dying in the fire.",
                },
                {
                  item: "In former days, many young men and women who could not make a living in Whitesparrow fell to banditry under the flag of the Night Blades.",
                },
                {
                  item: "The original Night Blades used the ruined watchtower known as the Lonely Torch for their headquarters. The site is overgrown with an invasive poisonous tangleweed, which covers most of the hills around the tower.",
                },
                {
                  item: "A witness claims to have seen Night Blade bandits pissing on their own boots before making their way up to the Lonely Torch.",
                },
                {
                  item: "Dousing one’s boots with urine protects against the worst effects of the tangleweed and allows creatures to move through it.",
                },
                {
                  item: "When the Night Blades were destroyed, the area around Whitesparrow was relatively free from bandit attacks for many years. Over the past year, a new group of bandits has appeared at the Lonely Torch, slowly building power by recruiting independent bandits to their cause—or slitting their throats.",
                },
                {
                  item: "A masked figure called the Night Lord has recently been revealed as the leader of this new group of bandits, making many see the group as a new incarnation of the Night Blades.",
                },
                {
                  item: "The Night Lord has been seen with some sort of red bird perched on his shoulder.",
                },
                {
                  item: "The Night Lord wears a golden mask, whose edges reveal that the skin of his neck is horribly scarred.",
                },
                {
                  item: "A cloud of bats has been seen flying over the Lonely Torch. Witnesses have reported seeing the bats descend on a large elk that wandered too close to the tangleweed, swarming it and leaving only a bloodless, wrinkled husk behind.",
                },
                {
                  item: "A few weeks ago, a number of villagers saw someone they swear was Ralavaz the Night Blade returning to the Lonely Torch.",
                },
              ],
            },
          ],
          order: 2,
        },
        {
          id: "customizingtheadventure",
          title: "Customizing the Adventure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "You can customize this adventure by replacing either Gardren or Ralavaz with NPCs from your campaign, or from the backgrounds of the characters. Gardren, Ralavaz, or both might have some relationship to one or more of the player characters, either by blood or by having crossed paths in the past. It might even be the case that, before his incarceration, Ralavaz had murdered a character’s family member, companion, or friend.\n\nThe Night Blades can be customized to represent a particular faction of bandits from your own game world. Add details to the tower and the chambers below it to highlight a previous empire or some other layer of the history of your campaign. Customize the initial story hook by switching out the quest giver to an NPC the characters have worked with in the past. Any NPC who has reason to see the Night Blades (or the equivalent bandit group from your own campaign) as a threat could send the characters in to cut them down.",
            },
          ],
          order: 3,
        },
        {
          id: "start",
          title: "Start",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "> *Light rain falls, and a gloomy mist covers the landscape. A large tree has fallen across the road, crushing a wagon under its great weight. More fallen trees lie at the sides of the road.*\n\nSix **bandits** (Artur, Dobarn, Kirci, Dorra, Rhuda and Tasty Pete) lurk at the sides of the road, hiding near the fallen trees and ready to rob passersby. If the characters approach the wagon, one of the bandits shouts out,\n\n> *“Your weapons and belongings! Drop them to the ground, and in the name of the Night Blades, we’ll spare your lives!”*\n\nIf convinced or goaded into speaking, the bandits reveal that they are eager to look good in the eyes of their leader the Night Lord, who waits for their return at the Lonely Torch.\n\nWhen the battle is over, the characters can approach local villagers in Whitesparrow to learn some of the information regarding the Night Blades given in the “Secrets and Clues” section. Eventually, the party is approached by Sheriff Willowmane, who hires the characters to root out the Night Blades and bring their newly returned leader Ralavaz to justice.\n\n### Customizing the Bandits\n\nThis adventure includes battles against a lot of bandits. To keep things fresh, we’ve included a few names for these bandits. Feel free to customize those foes by changing their appearance, gender, or weapons, and to substitute names of your own. Consider tying some of these bandits to NPCs the characters might know or have met. Describe some as being small and fast and others as large and strong. Do what you can to make each bandit unique and interesting.\n\n[![](https://slyflourish.com/images/Night_Blades_30_x_25.jpg)](https://slyflourish.com/images/Night_Blades_30_x_25.jpg)\n\nNight Blade Map by Chris Wilson released under a [CC0 License](https://creativecommons.org/public-domain/cc0/) and available for Commercial Use.",
            },
          ],
          order: 4,
        },
        {
          id: "notablelocations",
          title: "Notable Locations",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "### The Tangles\n\n**Area Aspects:** Poisonous tangleweed, sinkholes, statues of ancient lords\n\n> *A narrow path leads up a rocky slope to the broken stone walls of the Lonely Torch watchtower. A two-foot-thick carpet of glistening green-and-violet weeds and thorny brambles surrounds the stony hill on which the tower sits. Statues of forgotten nobility peer out from the tangled vines.*\n\nTangleweed is an invasive, poisonous plant that can lash out against creatures passing close by. Any creature that moves through the tangleweed without protection must succeed on a DC 13 Constitution saving throw or take 7 (2d6) poison damage and be poisoned for 1 hour. A character with a medical background can spend 10 minutes to aid the victim and attempt a DC 12 Wisdom (Medicine) check. On a success, the afflicted character is no longer poisoned. Covering one’s boots in urine repels the tangleweed and negates the need for a saving throw.\n\nA **shambling mound** (known as Strangleberries by the Night Blades) might be seen wandering through the tangleweed, but this creature is generally not aggressive. Like the tangleweed, it can be repelled by urine.\n\n### Shattered Door\n\n**Area Aspects:** Ironbound wooden door, grinning gargoyle, narrow arrow slits\n\n> *The thin path rising through the tangleweed leads up to an ironbound wooden door at the front of the ruined tower. A stone gargoyle juts out from above the door, its mouth open to reveal that its tongue has been broken off. Arrow slits are cut into the rough stone walls of the tower, angled toward the path where it leads up to the door.*\n\nTwo Night Blade **guards** (Osgood and Pulk) are meant to watch over this door by peering out the arrow slits from inside the tower. However, they are often either too drunk or too engaged in a game of knucklebones to notice anyone who doesn’t make a lot of noise while approaching. The door is strong ironbound oak and is barred from the inside. The magic that once animated the door’s gargoyle guardian has faded, but the residual spark of that magic allows the gargoyle to speak. The gargoyle is lonely for company, and aware of much of the activity undertaken by those inside\\\nthe tower. The bandits have long since ignored the chatty guardian.\n\n### Broken Hall\n\n**Area Aspects:** Collapsed beams, broken floor, headless statue of warrior\n\n> *Large oaken beams have collapsed from where they once supported the vaulted ceiling of this hall. One has smashed through the floor, revealing basement passages below. A large headless statue of a warrior, its greatsword clasped hilt-up in its hands, stands at the far side of the hall. A stone staircase leads up to the higher floors of the tower.*\n\nIn addition to the guards described above, four Night Blade **bandits** (Sanda Sixtoes, Polard the Mule, Julette, and Longtooth) sometimes reside in this hall when preparing for an imminent attack, or when they need to get out of the stagnant air in the basement levels. They avoid the stirges above, which they call “the Night Lord’s children.” While in this hall, the characters might hear commotion from below but they hear nothing but silence from above.\n\n### Shadowed Reaches\n\n**Area Aspects:** Hanging curtains of moss, collapsed walls, painted ceiling\n\n> *Sections of the walls of this upper level of the tower have collapsed from centuries of decay. Much of the stone ceiling has likewise fallen, leaving the tower open to the elements above. An old yet still beautiful fresco painting covers what remains of the ceiling, but much of it is shrouded by curtains of moss.*\n\nTen **stirges** lurk behind the cover of the moss, hoping that living creatures will come close enough to feed their insatiable appetites. The Night Blades know to stay out of this chamber, since only Gardren is safe from attack by these monsters.\n\n### Sunken Cellars\n\n**Area Aspects:** Crumbling stone ceiling, wooden beam supports, ragged bedrolls and hammocks\n\n> *The floor of the tower has collapsed, revealing stairs leading to a series of stone chambers below. Cracked wooden support beams hold up the crumbling stone ceiling of the main chamber, whose walls are lined with hammocks and bedrolls. A stone door, carved with an artful depiction of hooded priests, stands at the opposite end of the hall, while a natural tunnel leads off to the right.*\n\nDepending on the time of day, four Night Blade **bandits** (Terra, Duke, Ashe Dragonknuckle, and Two-Cups) and two **thugs** (Victor and Kingsteeth) might be sleeping here. They are generally not alert unless a significant amount of noise has been made upstairs. The carved doorway leads into the lost shrine, while the natural tunnel leads to the mud pit.\n\n### Mud Pit\n\n**Area Aspects:** Slick mud walls, mud pool floor, drainpipe, knotted rope\n\n> *A narrow walkway leads to the lip of a ten-foot-deep pit filled with mud. An ancient drainpipe roughly two feet in diameter is closed off by steel bars and trickles fetid water into the pool. A knotted rope hangs from an iron hook hammered into the natural stone wall.*\n\nTwo Night Blade **bandits** (Pelpe and Klive Yellowriver) guard this cavern while Ralavaz languishes in the mud, imprisoned and tormented here by his brother Gardren until he comes to his senses and demonstrates a willingness to return to his former life as a bandit and murderer. One of the bandits has a large bag filled with a **swarm of rats**, which he uses to torment Ralavaz. If attacked, the bandit dumps out this bag to add to the chaos.\n\nIf Ralavaz is rescued, he reveals that he returned to the Lonely Torch after finding out that his brother Gardren was alive and leading a new group of Night Blades. Ralavaz had hoped to turn Gardren away from murder and banditry, but his failure to do so saw him incarcerated here.\n\n### Lost Throne\n\n**Area Aspects:** Kneeling armored statues, stone throne on dais, burning stone braziers, wide well leading down into shadow\n\n> *Two hulking statues of faceless armored knights kneel in the corners of the room, facing the center of the chamber and a well there that leads down into the shadowy depths. A stone throne sits upon a raised dais opposite the door.*\n\nGardren, a **bandit captain**, and four Night Blade **bandits** (Avrin, Ragia, Thorn, and Sasha) are usually found in this hall, sorting through recently stolen goods or planning their next attacks. Gardren’s pet stirge Heartspine hides in the corner and attacks any character who attacks its master. This stirge has 10 hit points and a Dexterity (Stealth) modifier of +5.\n\nGardren wields a *+1 shortsword* called *Nightculler*—a silvered weapon with a draconic pommel and a line of black onyx along the fuller of the blade. A character attuned to the sword is able to cast the darkness spell, requiring no components. Once this feature is used, it can’t be used again until the next dawn.",
            },
          ],
          order: 5,
        },
        {
          id: "concludingtheadventure",
          title: "Concluding the Adventure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "This adventure concludes when the characters have removed Gardren and decided what to do with Ralavaz. Still wracked by guilt over his previous life and feeling responsible for the behavior of his brother, Ralavaz is willing to accept whatever punishment the characters or the folk of Whitesparrow seek for him.",
            },
          ],
          order: 6,
        },
        {
          id: "expandingtheadventure",
          title: "Expanding the Adventure",
          content: [
            {
              type: "paragraph",
              order: 0,
              markdown:
                "The tower can have numerous hidden chambers beneath its upper levels, accessed by way of the hole in the throne room and expanding in multiple directions beneath the rocky hill. You can also replace the tower with the “Dark Abbey” location from *Sly Flourish’s Fantastic Locations*, dropping in many additional areas for the characters to explore.\n\nIt’s also possible that the story of Ralavaz and Gardren doesn’t end with this adventure. Depending on how Ralavaz wants to make amends for his past crimes, he might have his own quests that he hopes to have the characters follow.",
            },
          ],
          order: 7,
        },
      ],
    },
  ],
  attribution:
    "This work includes material taken from The Lazy GM's Resource Document by Michael E. Shea of [SlyFlourish.com](https://www.slyflourish.com) and vailable at https://slyflourish.com/lazy_gm_resource_document.html. The Lazy GM's Resource Document is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode.\n\nThis work includes material taken from the System Reference Document 5.1 (\"SRD 5.1\") by Wizards of the Coast LLC and available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode.\n",
};
