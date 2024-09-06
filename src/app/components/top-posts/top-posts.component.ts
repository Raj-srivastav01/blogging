import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {
  topPost: any;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.topPost = this.blogService.getTopPost(); // Fetch the top post
  }
}
