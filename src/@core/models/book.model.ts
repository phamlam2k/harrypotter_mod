import { Book } from "src/types/book.type";

export const books: Book[] = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    genre: "Fantasy",
    totalChapters: 17,
    chapters: [
      {
        id: "1",
        label: "The Boy Who Lived",
        description:
          "Introduces Harry Potter and the mysterious circumstances of his survival as an infant.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "The Vanishing Glass",
        description:
          "Harry's life with the Dursleys and an incident at the zoo foreshadowing his magical abilities.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "The Letters from No One",
        description:
          "The arrival of letters from Hogwarts, which the Dursleys try to suppress.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "The Keeper of the Keys",
        description:
          "Hagrid arrives to take Harry to Hogwarts and reveals Harry's true identity.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "Diagon Alley",
        description:
          "Harry's first visit to the magical marketplace to buy his school supplies.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "The Journey from Platform Nine and Three-Quarters",
        description:
          "Harry's trip to Hogwarts and his first encounters with future friends and enemies.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "7",
        label: "The Sorting Hat",
        description:
          "The sorting ceremony where Harry is placed in Gryffindor.",
        position: { x: 100, y: 700 },
        pages: [
          { image: "path/to/chapter7/page1.jpg" },
          { image: "path/to/chapter7/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets.jpg",
    description:
      "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.",
    genre: "Fantasy",
    totalChapters: 18,
    chapters: [
      {
        id: "1",
        label: "The Worst Birthday",
        description:
          "Harry's miserable summer at the Dursleys' house and his desire to return to Hogwarts.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "Dobby's Warning",
        description:
          "The appearance of Dobby the house-elf, who warns Harry not to return to Hogwarts.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "The Burrow",
        description:
          "Harry's rescue by Ron and the visit to the Weasley's home, The Burrow.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "At Flourish and Blotts",
        description:
          "A trip to Diagon Alley where they encounter Gilderoy Lockhart and Draco Malfoy.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "The Whomping Willow",
        description:
          "Harry and Ron's adventurous journey to Hogwarts in a flying car.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Gilderoy Lockhart",
        description:
          "Introduction of the new Defense Against the Dark Arts teacher, Gilderoy Lockhart.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg/220px-Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
    description:
      "For most children, summer vacation is something to look forward to. But Harry Potter can't wait for the summer to end. It's been another long, hot summer at the Dursleys, and Harry's seventh birthday is still a distant memory. Not only is he a year older, but he has a new reason to celebrate: He's about to return to Hogwarts School of Witchcraft and Wizardry.",
    genre: "Fantasy",
    totalChapters: 22,
    chapters: [
      {
        id: "1",
        label: "Owl Post",
        description:
          "Harry receives birthday gifts from his friends via owl post.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "Aunt Marge's Big Mistake",
        description:
          "Harry accidentally inflates his Aunt Marge during a heated argument.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "The Knight Bus",
        description:
          "Harry's escape from the Dursleys via the magical Knight Bus.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "The Leaky Cauldron",
        description:
          "Harry's stay at the Leaky Cauldron and his meeting with Cornelius Fudge.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "The Dementor",
        description: "The arrival of Dementors on the Hogwarts Express.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Talons and Tea Leaves",
        description:
          "The first Divination class and Professor Trelawney's prediction.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Mama Val's Quick Remedies",
    author: "Valencia Curtis",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png/220px-Harry_Potter_and_the_Goblet_of_Fire_cover.png",
    description:
      "This book offers a collection of quick remedies and potions to help you in everyday magical situations. Whether it's a headache, a burn, or an encounter with a magical creature gone wrong, Mama Val has the perfect remedy to get you back on your feet.",
    genre: "Health & Wellness",
    totalChapters: 12,
    chapters: [
      {
        id: "1",
        label: "Basic Healing Potions",
        description: "Introduction to simple potions for common ailments.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "Remedies for Burns",
        description:
          "Effective treatments for burns caused by magical creatures.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "Curing Curses",
        description: "Basic steps to counteract common curses.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "Soothing Potions for Stress",
        description: "Potions to help calm the mind and reduce stress.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "Anti-Venom Solutions",
        description:
          "Creating potions to counteract venom from magical creatures.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Herbal Remedies",
        description:
          "Using herbs to treat common magical and non-magical ailments.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Peregrin Tugwood's Guide To Looking Great (and Feeling Fine)",
    author: "Second Edition",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg/220px-Harry_Potter_and_the_Order_of_the_Phoenix.jpg",
    description:
      "This guide provides valuable insights into beauty and wellness in the wizarding world. Peregrin Tugwood shares her expertise on potions, spells, and magical techniques to help you look and feel your best.",
    genre: "Beauty & Wellness",
    totalChapters: 15,
    chapters: [
      {
        id: "1",
        label: "Skin Care Secrets",
        description: "Magical solutions for clear and glowing skin.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "Hair Potions",
        description: "Potions for healthy and vibrant hair.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "Nail Care Charms",
        description: "Charms to strengthen and beautify your nails.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "Elixirs for Vitality",
        description: "Elixirs to boost your energy and overall well-being.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "Fitness and Exercise",
        description: "Magical exercises to keep you fit and healthy.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Relaxation Techniques",
        description: "Techniques to relax your mind and body.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Rapa Nui and Rongorongo: Isolated and Elusive",
    author: "Venita Wessex",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png/220px-Harry_Potter_and_the_Half-Blood_Prince_cover.png",
    description:
      "An in-depth study of the Rapa Nui people and their mysterious Rongorongo script. Venita Wessex explores the history, culture, and secrets of this isolated society.",
    genre: "History",
    totalChapters: 20,
    chapters: [
      {
        id: "1",
        label: "The Origins of Rapa Nui",
        description:
          "Exploring the early history and settlement of Easter Island.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "The Moai Statues",
        description:
          "An analysis of the iconic stone statues and their significance.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "Rongorongo: The Lost Script",
        description:
          "Investigating the mysterious Rongorongo script and its possible meanings.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "Cultural Practices",
        description:
          "A look into the daily life and rituals of the Rapa Nui people.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "European Contact",
        description:
          "The impact of European explorers on the Rapa Nui culture.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Preservation Efforts",
        description:
          "Modern efforts to preserve and understand Rapa Nui heritage.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Rune Dictionary",
    author: "Venita Wessex",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg/220px-Harry_Potter_and_the_Deathly_Hallows.jpg",
    description:
      "A comprehensive dictionary of ancient runes, their meanings, and their uses in magical practices. Venita Wessex provides detailed explanations and examples for each rune.",
    genre: "Reference",
    totalChapters: 30,
    chapters: [
      {
        id: "1",
        label: "The Elder Futhark",
        description:
          "An introduction to the oldest form of the runic alphabets.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "Runes of Protection",
        description: "Runes commonly used for protection spells and charms.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "Runes of Power",
        description: "Runes that enhance personal power and magical abilities.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "Healing Runes",
        description: "Runes used in healing spells and potions.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "Divination Runes",
        description: "Runes used for divination and prophecy.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Runic Inscriptions",
        description:
          "The art of inscribing runes on objects for magical purposes.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
  {
    id: 8,
    title: "The Essential Guide to Hogwarts Portraiture, Ed. II",
    author: "Professor Draekon",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Cursed_Child_new_poster.jpg/220px-Cursed_Child_new_poster.jpg",
    description:
      "An essential guide to the magical portraits found within Hogwarts. Professor Draekon delves into the history and magic behind these enchanted artworks.",
    genre: "Art",
    totalChapters: 25,
    chapters: [
      {
        id: "1",
        label: "The Founders' Portraits",
        description:
          "Detailed descriptions of the portraits of the four Hogwarts founders.",
        position: { x: 100, y: 100 },
        pages: [
          { image: "path/to/chapter1/page1.jpg" },
          { image: "path/to/chapter1/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "2",
        label: "The Headmasters' Gallery",
        description:
          "Portraits of past headmasters and their unique magical qualities.",
        position: { x: 100, y: 200 },
        pages: [
          { image: "path/to/chapter2/page1.jpg" },
          { image: "path/to/chapter2/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "3",
        label: "The Moving Portraits",
        description:
          "The magic behind the moving and talking portraits in Hogwarts.",
        position: { x: 100, y: 300 },
        pages: [
          { image: "path/to/chapter3/page1.jpg" },
          { image: "path/to/chapter3/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "4",
        label: "The Secret Portraits",
        description: "Lesser-known portraits with hidden magical properties.",
        position: { x: 100, y: 400 },
        pages: [
          { image: "path/to/chapter4/page1.jpg" },
          { image: "path/to/chapter4/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "5",
        label: "Portraits and Passwords",
        description:
          "How portraits are used to protect and grant access to different areas.",
        position: { x: 100, y: 500 },
        pages: [
          { image: "path/to/chapter5/page1.jpg" },
          { image: "path/to/chapter5/page2.jpg" },
          // More pages...
        ],
      },
      {
        id: "6",
        label: "Magical Maintenance",
        description: "Maintaining and restoring magical portraits.",
        position: { x: 100, y: 600 },
        pages: [
          { image: "path/to/chapter6/page1.jpg" },
          { image: "path/to/chapter6/page2.jpg" },
          // More pages...
        ],
      },
    ],
  },
];
