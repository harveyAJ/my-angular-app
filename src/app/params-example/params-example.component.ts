import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-params-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './params-example.component.html',
  styleUrl: './params-example.component.css'
})
export class ParamsExampleComponent implements OnInit {
  urlParam: string = "";
  anotherUrlParam: string = "";
  params: any[] = []; //What's the difference between "any" and "object"?

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get("urlParam") || "";
    this.anotherUrlParam = this.route.snapshot.paramMap.get("anotherUrlParam") || "";
  
    this.route.queryParams.subscribe(x => this.params = Object.keys(x).map(key => ({ name: key, value: x[key] })));
  }
}