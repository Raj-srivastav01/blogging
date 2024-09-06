import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  recentPosts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.recentPosts = this.blogService.getRandomRecentPosts(2); // Fetch 2 recent posts
  }
}
