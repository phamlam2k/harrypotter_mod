import { useState } from "react";

const usePopularController = () => {
  // Fetch Data va call api o day
  return [
    {
      title: "A Survey Of Standard Spells, Vol I",
      author: "Alexander Quilmane",
      chapters: 9,
      reads: 195366,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQouFld3F9Zz3Mtt9-pgJQvaUz2UxlOwNMw&s", // Replace with actual image paths
      description: "A comprehensive guide to standard spells for beginners.",
      upvotes: 1056,
    },
    {
      title: "Metamorphosis: Transfiguration For Beginners",
      author: "No Name",
      chapters: 13,
      reads: 185199,
      img: "https://i.pinimg.com/736x/cc/88/8d/cc888dfcf1bf6f290df315bf7e9f2eba.jpg",
      description: "An introductory book to transfiguration for beginners.",
      upvotes: 987,
    },
    {
      title: "Advanced Potion Making",
      author: "Hermione Granger",
      chapters: 8,
      reads: 93109,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdE4b0PJCUavCy2KVpZ1C5YkBv8Xf74RLhTA&s",
      description: "A guide to advanced potion making techniques.",
      upvotes: 876,
    },
    {
      title: "GUION PARA LAS 8 PELÍCULAS DE HARRY POTTER",
      author: "Unknown",
      chapters: 3,
      reads: 80295,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLYFO7FFWMl94kMU1GYFqQ9IBmhOFM2swjA&s",
      description: "The script for the 8 Harry Potter movies.",
      upvotes: 765,
    },
    {
      title: "The Entire Harry Potter Script!",
      author: "Luna Johnson",
      chapters: 6,
      reads: 79312,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1ZTZYHxBMxNBz4RQjR9AQEqfxIYeaSYImLZvUowpCSUrqVXK_jvu9hoWVleq5FwItBw&usqp=CAU",
      description: "The entire script of Harry Potter.",
      upvotes: 654,
    },
    {
      title: "Quintessential Magic: An Introduction To Charms (2nd Edition)",
      author: "Alexander Quilmane",
      chapters: 20,
      reads: 64677,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeG49-qMl1LOl7WEqrdXsKWQYnOzTvTyUCA&s",
      description: "An introduction to charms, second edition.",
      upvotes: 543,
    },
    {
      title: "The Standard Book of Spells - Grade 1",
      author: "Selena",
      chapters: 8,
      reads: 59881,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevzgpkQAK9Le0f-U1cJhEe57QtwDmYtH0nw&s",
      description: "The standard book of spells for first graders.",
      upvotes: 432,
    },
    {
      title: "Fantastic Beasts and Where to Find Them",
      author: "Newt Scamander",
      chapters: 10,
      reads: 120345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNjuIdb1tdVr10vYho_a2EZzheM7azbuNpw&s",
      description: "A detailed guide on magical creatures.",
      upvotes: 2341,
    },
  ];
};

export default usePopularController;
