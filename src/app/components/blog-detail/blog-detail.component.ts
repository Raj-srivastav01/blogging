// src/app/components/blog-detail/blog-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    this.blog = this.getBlogById(blogId);
  }

  getBlogById(id: string | null): any {
    const dummyBlogs = [
      { id: 1, title: 'Delicious Italian Pasta Recipes', author: 'Chef Maria', content: 'Italian pasta dishes are renowned for their rich flavors and variety. From creamy Alfredo to zesty Bolognese, each recipe brings a unique taste of Italy. Learn how to prepare these delectable dishes with fresh ingredients and traditional techniques. Perfect for family dinners or special occasions.', image: 'assets/dummy-image-1.jpeg' },
      { id: 2, title: 'Mastering the Art of Sushi Making', author: 'Sushi Chef Kenji', content: 'Sushi making is both an art and a science. Understanding the balance of flavors and textures is key. Explore the essentials of sushi rice preparation, fresh fish selection, and rolling techniques. This guide will help you create sushi that’s as visually appealing as it is delicious.', image: 'assets/dummy-image-2.jpeg' },
      { id: 3, title: 'Quick and Healthy Breakfast Ideas', author: 'Nutritionist Laura', content: 'Starting your day with a healthy breakfast can boost your energy and productivity. Discover quick and nutritious options like smoothie bowls, overnight oats, and avocado toast. These recipes are designed to provide essential nutrients and keep you full until lunchtime.', image: 'assets/dummy-image-3.jpeg' },
      { id: 4, title: 'Exploring New Technologies in 2024', author: 'Tech Expert Alex', content: '2024 is set to bring groundbreaking advancements in technology. From AI-driven innovations to the next generation of smart devices, explore what’s on the horizon. Stay ahead of the curve with insights into emerging technologies and their potential impact on our daily lives.', image: 'assets/dummy-image-4.jpeg' },
      { id: 5, title: 'Artificial Intelligence: What’s Next?', author: 'AI Researcher Dr. Lee', content: 'Artificial Intelligence continues to evolve at a rapid pace. Explore the latest developments in AI, including advancements in machine learning, natural language processing, and robotics. Discover how these innovations are shaping various industries and what the future holds for AI.', image: 'assets/dummy-image-5.jpeg' },
      { id: 6, title: 'The Evolution of Web Development', author: 'Web Developer John', content: 'Web development has come a long way from static HTML pages to complex web applications. Learn about the evolution of web technologies, including the rise of responsive design, single-page applications, and progressive web apps. Understand how these changes have improved user experiences.', image: 'assets/dummy-image-6.jpeg' },
      { id: 7, title: 'Latest Trends in Mobile Technology', author: 'Tech Journalist Sarah', content: 'Mobile technology is advancing quickly with innovations like foldable screens and 5G connectivity. Discover the latest trends that are transforming the smartphone industry. Learn about new features, enhanced performance, and what to expect in the next generation of mobile devices.', image: 'assets/dummy-image-7.jpeg' },
      { id: 8, title: 'Understanding Cybersecurity Threats', author: 'Cybersecurity Expert Mike', content: 'Cybersecurity threats are becoming more sophisticated, making it crucial to stay informed. Learn about common threats like phishing, malware, and ransomware. This guide provides practical tips for protecting your digital assets and maintaining online security.', image: 'assets/dummy-image-8.jpeg' },
      { id: 9, title: 'Social Media and Its Impact on Society', author: 'Social Media Analyst Emma', content: 'Social media has a profound impact on modern society, influencing communication, relationships, and even politics. Explore the positive and negative effects of social media platforms. Understand how they shape public opinion and affect individual behavior.', image: 'assets/dummy-image-9.jpeg' },
      { id: 10, title: 'The Rise of Remote Work', author: 'Business Consultant David', content: 'Remote work has become a prominent trend in the modern workforce. Explore the benefits and challenges of working from home. Learn how companies are adapting to remote work models and what tools and strategies can help maintain productivity and work-life balance.', image: 'assets/dummy-image-10.jpeg' },
      { id: 11, title: 'Innovations in Cooking Technology', author: 'Tech Chef Rachel', content: 'The kitchen is becoming smarter with innovations like smart ovens and advanced cooking gadgets. Discover how these technologies are changing the way we cook. From automated meal prep to precision cooking, see how tech is enhancing the culinary experience.', image: 'assets/dummy-image-11.jpeg' },
      { id: 12, title: 'Home Gardening Tips for Beginners', author: 'Gardening Expert Lily', content: 'Gardening is a rewarding hobby that can transform your living space. Learn the basics of home gardening, including soil preparation, plant selection, and pest management. This guide provides practical tips for starting your garden and growing your own herbs, vegetables, and flowers.', image: 'assets/dummy-image-12.jpeg' },
      { id: 13, title: 'Exploring Mobile App Development Trends', author: 'App Developer Tom', content: 'Mobile app development is evolving with new trends and technologies. Discover the latest trends in app development, including the use of artificial intelligence, augmented reality, and cross-platform frameworks. Stay updated with innovations that are driving the future of mobile apps.', image: 'assets/dummy-image-13.jpeg' },
      { id: 14, title: 'Smartphone Photography Tips', author: 'Photography Guru Alice', content: 'Smartphone photography has come a long way, allowing for professional-quality photos with just a phone. Learn essential tips for capturing stunning images, including composition techniques, lighting adjustments, and editing tools. Enhance your smartphone photography skills with these expert insights.', image: 'assets/dummy-image-14.jpeg' },
      { id: 15, title: 'Sustainable Living Practices', author: 'Eco Enthusiast Mark', content: 'Sustainable living involves making choices that benefit the environment and reduce waste. Explore practical tips for adopting a more eco-friendly lifestyle, including energy conservation, waste reduction, and sustainable consumption. Learn how small changes can have a big impact.', image: 'assets/dummy-image-15.jpeg' },
      { id: 16, title: 'The Future of Urban Transportation', author: 'Urban Planner Jessica', content: 'Urban transportation is evolving with advancements like electric scooters and autonomous vehicles. Explore the future of urban mobility and how cities are adapting to new transportation technologies. Learn about the benefits and challenges of these innovations for urban planning.', image: 'assets/dummy-image-16.jpeg' },
      { id: 17, title: 'Healthy Eating on a Budget', author: 'Dietitian Grace', content: 'Eating healthy doesn’t have to be expensive. Discover tips for maintaining a nutritious diet while staying within your budget. Learn about affordable ingredients, meal planning strategies, and budget-friendly recipes that support a healthy lifestyle.', image: 'assets/dummy-image-17.jpeg' },
      { id: 18, title: 'Cultural Influences in Modern Art', author: 'Art Historian Kevin', content: 'Modern art is deeply influenced by various cultures and historical contexts. Explore how different cultural elements are incorporated into contemporary art. This guide provides insights into how cultural backgrounds shape artistic expression and influence modern art trends.', image: 'assets/dummy-image-18.jpeg' },
      { id: 19, title: 'Advancements in Wearable Technology', author: 'Tech Reviewer Jenna', content: 'Wearable technology is advancing with innovations like fitness trackers and smartwatches. Discover the latest developments in wearable tech and how these devices are enhancing our daily lives. Learn about features, benefits, and future trends in the wearable technology market.', image: 'assets/dummy-image-19.jpeg' },
      { id: 20, title: 'The Impact of Social Media on Mental Health', author: 'Mental Health Advocate Sam', content: 'Social media can have both positive and negative effects on mental health. Explore how online interactions impact emotional well-being and mental health. Understand the psychological effects of social media usage and discover strategies for managing its impact on mental health.', image: 'assets/dummy-image-20.jpeg' }
    ];

    return dummyBlogs.find(blog => blog.id.toString() === id);
  }
}
