// src/app/components/blog-list/blog-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogs:{ id: number; title: string; excerpt: string; image: string; }[] = [
    { id: 1, title: 'Delicious Italian Pasta Recipes', excerpt: 'A look at the latest advancements in technology for 2024. Discover emerging trends and how they will impact our daily lives.', image: 'assets/dummy-image-1.jpeg' },
    { id: 2, title: 'Mastering the Art of Sushi Making', excerpt: 'Learn about common cybersecurity threats and how to protect yourself from them. Essential knowledge for staying safe online.', image: 'assets/dummy-image-2.jpeg' },
    { id: 3, title: 'Quick and Healthy Breakfast Ideas', excerpt: 'Enhance your smartphone photography skills with these expert tips. Learn how to take better photos and edit them like a pro.', image: 'assets/dummy-image-3.jpeg' },
    { id: 4, title: 'Exploring New Technologies in 2024', excerpt: 'Explore how different cultures influence modern art. A look at how artists incorporate cultural elements into their work.', image: 'assets/dummy-image-4.jpeg' },
    { id: 5, title: 'Artificial Intelligence: What’s Next?', excerpt: 'Stay updated with the newest trends in mobile technology. From foldable screens to 5G, see what’s shaping the future of smartphones.', image: 'assets/dummy-image-5.jpeg' },
    { id: 6, title: 'The Evolution of Web Development', excerpt: 'Find out how to eat healthy without breaking the bank. Tips and recipes for nutritious meals that are budget-friendly.', image: 'assets/dummy-image-6.jpeg' },
    { id: 7, title: 'Latest Trends in Mobile Technology', excerpt: 'Discover innovations in urban transportation, from electric scooters to autonomous vehicles. Learn how cities are evolving to meet transportation needs.', image: 'assets/dummy-image-7.jpeg' },
    { id: 8, title: 'Understanding Cybersecurity Threats', excerpt: 'Get started with home gardening with these easy-to-follow tips. Learn how to grow your own herbs, vegetables, and flowers.', image: 'assets/dummy-image-8.jpeg' },
    { id: 9, title: 'Social Media and Its Impact on Society', excerpt: 'Explore the latest gadgets and technologies revolutionizing the kitchen. From smart ovens to advanced cooking tools, see what’s new.', image: 'assets/dummy-image-9.jpeg' },
    { id: 10, title: 'The Rise of Remote Work', excerpt: 'A look at the latest advancements in technology for 2024. Discover emerging trends and how they will impact our daily lives.', image: 'assets/dummy-image-10.jpeg' },
    { id: 11, title: 'Innovations in Cooking Technology', excerpt: 'Start your day right with these quick and nutritious breakfast recipes. Ideal for busy mornings and maintaining a healthy diet.', image: 'assets/dummy-image-11.jpeg' },
    { id: 12, title: 'Home Gardening Tips for Beginners', excerpt: 'Dive into the future of Artificial Intelligence and its potential applications. Learn about the innovations driving AI forward.', image: 'assets/dummy-image-12.jpeg' },
    { id: 13, title: 'Exploring Mobile App Development Trends', excerpt: 'Analyze the effects of social media on modern society. Explore both the positive and negative aspects of its widespread use.', image: 'assets/dummy-image-13.jpeg' },
    { id: 14, title: 'Smartphone Photography Tips', excerpt: 'Learn the techniques for making sushi at home, from preparing the rice to rolling the perfect sushi rolls. A must-try for any sushi enthusiast.', image: 'assets/dummy-image-14.jpeg' },
    { id: 15, title: 'Sustainable Living Practices', excerpt: 'Learn about practices that contribute to a more sustainable lifestyle. Explore ways to reduce your carbon footprint and live eco-friendly.', image: 'assets/dummy-image-15.jpeg' },
    { id: 16, title: 'The Future of Urban Transportation', excerpt: 'A look at the latest advancements in technology for 2024. Discover emerging trends and how they will impact our daily lives.', image: 'assets/dummy-image-16.jpeg' },
    { id: 17, title: 'Healthy Eating on a Budget', excerpt: 'Explore how different cultures influence modern art. A look at how artists incorporate cultural elements into their work.', image: 'assets/dummy-image-17.jpeg' },
    { id: 18, title: 'Cultural Influences in Modern Art', excerpt: 'Find out how to eat healthy without breaking the bank. Tips and recipes for nutritious meals that are budget-friendly.', image: 'assets/dummy-image-18.jpeg' },
    { id: 19, title: 'Advancements in Wearable Technology', excerpt: 'Discover innovations in urban transportation, from electric scooters to autonomous vehicles. Learn how cities are evolving to meet transportation needs.', image: 'assets/dummy-image-19.jpeg' },
    { id: 20, title: 'The Impact of Social Media on Mental Health', excerpt: 'Get started with home gardening with these easy-to-follow tips. Learn how to grow your own herbs, vegetables, and flowers.', image: 'assets/dummy-image-20.jpeg' }
  ];

  currentPage = 1;
  blogsPerPage = 5;
  paginatedBlogs: { id: number; title: string; excerpt: string; image: string; }[] = [];
  totalPages = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.blogs.length / this.blogsPerPage);
    this.updatePaginatedBlogs();
  }

  // Function to update blogs per page
  updatePaginatedBlogs(): void {
    const startIndex = (this.currentPage - 1) * this.blogsPerPage;
    const endIndex = startIndex + this.blogsPerPage;
    this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
  }

  // Navigate to previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedBlogs();
    }
  }

  // Navigate to next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedBlogs();
    }
  }
}