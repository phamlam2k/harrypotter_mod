import { useState, useEffect } from 'react';

const useRecentController = () => {

    // Fetch Data va call api o day

    const recentStories = [
      {
        title: "New Adventures in Transfiguration",
        author: "Minerva McGonagall",
        chapters: 15,
        reads: 12345,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7osaepLYuFGMqhX6mGV7WVb7BopJyJraNADM2iMZcXJtNI57JsjDHHRLZI4rqEd9oaAg&usqp=CAU",
        description: "Latest updates on advanced transfiguration techniques.",
        updated: "2024-08-01 12:00:00",
      },
      {
        title: "Potions and Elixirs: A Comprehensive Guide",
        author: "Severus Snape",
        chapters: 20,
        reads: 54321,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37_nyREaPyzXzHrD7qJkP7zZGKBJEFEZK9w&s",
        description: "Newly updated recipes for potent potions and elixirs.",
        updated: "2024-07-30 08:30",
      },
      {
        title: "Defense Against the Dark Arts: Year 5",
        author: "Remus Lupin",
        chapters: 18,
        reads: 65432,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxmoduTwCzUS4FTdeaEQxQuHQ4g4WQpftEQ&s",
        description: "Comprehensive guide to defending against dark creatures.",
        updated: "2024-07-29 14:20",
      },
      {
        title: "Herbology: Healing Plants",
        author: "Pomona Sprout",
        chapters: 12,
        reads: 43210,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJHXJg2pRJ_e-aHPAwDfMYp4feN7DgZCuWSo1TvlPWlMVMruLEfxG20O_cawGboPpjJg&usqp=CAU",
        description: "New insights on healing plants and their uses.",
        updated: "2024-07-28 09:45",
      },
      {
        title: "Charms: Advanced Techniques",
        author: "Filius Flitwick",
        chapters: 22,
        reads: 87654,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSNFfEy7nsW-2PVEIuSAsYebyi_bEQPwdYsMH5olHYHHXSFDKJOIam5rXHW-Qpr8HQ6Y&usqp=CAU",
        description: "Advanced techniques for mastering charms.",
        updated: "2024-07-27 11:15",
      },
      {
        title: "Magical Creatures: New Discoveries",
        author: "Newt Scamander",
        chapters: 10,
        reads: 98765,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ivnnlwynzotO9j1WqcF095sFX1qS516cciqKAStBwSHbrtZpG-MVjxsORdYcrWkWZrI&usqp=CAU",
        description: "New discoveries in the world of magical creatures.",
        updated: "2024-07-26 16:00",
      },
      {
        title: "Alchemy and Its Mysteries",
        author: "Nicolas Flamel",
        chapters: 14,
        reads: 34567,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMboT0rIUnwgxejFLH4jYB0DZMFHXKN3kHqMGtR_cevB4XPp3MNhCaW4ZkCMM6uLVAXo&usqp=CAU",
        description: "Unraveling the mysteries of alchemy.",
        updated: "2024-07-25 18:30",
      },
      {
        title: "Astronomy: Stars and Their Magic",
        author: "Aurora Sinistra",
        chapters: 16,
        reads: 45678,
        img: "https://www.creativefabrica.com/wp-content/uploads/2023/03/02/Harry-Potter-Background-Graphic-63020884-1.png",
        description: "Exploring the magical properties of stars.",
        updated: "2024-07-24 20:00",
      }
    ];



    return recentStories;
};

export default useRecentController;
