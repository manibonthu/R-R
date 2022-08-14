import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-gratitude',
  templateUrl: './list-gratitude.component.html',
  styleUrls: ['./list-gratitude.component.scss'],
})
export class ListGratitudeComponent implements OnInit {
  gridColumns = 3;
  constructor() {}

  ngOnInit(): void {}
  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  members: { title: string; subtitle: string; content: string; url: string }[] =
    [
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
    ];
}
