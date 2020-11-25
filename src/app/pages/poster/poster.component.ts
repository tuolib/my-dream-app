import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PosterService } from '../../services/poster.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  title = 'my-dream-app';
  loading = true;
  listOfData: [] = [];
  constructor(private router: Router, private poster: PosterService) {}

  ngOnInit(): void {
    this.poster.getPoster().subscribe(
      res => {
        this.loading = false;
        console.log(res);
        if (res.success === 1) {
          console.log(1);
          this.listOfData = res.content;
        } else {
          // this.tips = res.respMsg;
        }
      },
      error => {
        this.loading = false;
        console.error(error);
      }
    );
  }
}
