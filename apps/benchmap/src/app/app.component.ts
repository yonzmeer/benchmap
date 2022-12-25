import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DEFAULT_TARGETS_CREATOR_OPTIONS,
  TargetsCreatorOptions,
  TargetsService,
} from '@benchmap/targets';

@Component({
  selector: 'bnp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes = ['', 'cesium'];

  targetsCreatorForm = new FormBuilder().group<TargetsCreatorOptions>(
    DEFAULT_TARGETS_CREATOR_OPTIONS,
    { updateOn: 'blur' }
  );

  constructor(private router: Router, private targetsService: TargetsService) {
    this.targetsCreatorForm.valueChanges.subscribe(
      (value) =>
        (this.targetsService.targetsCreatorOptions =
          value as TargetsCreatorOptions)
    );
  }

  click(route: string): void {
    this.router.navigateByUrl(route);
  }
}
