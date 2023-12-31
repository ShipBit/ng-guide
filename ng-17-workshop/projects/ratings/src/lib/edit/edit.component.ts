import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CollectionService, RatingService } from '@score/api';
import { map, switchMap } from 'rxjs';
import { RatingsService } from '../ratings.service';

@Component({
  selector: 'rate-edit',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export default class EditComponent {
  public collection$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.collectionService.get(params.get('collectionId') ?? '')
    )
  );
  public form$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      if (!id || id === '-') {
        return this.ratingsService.createModel(
          params.get('collectionId') ?? ''
        );
      }
      return this.apiService.get(id);
    }),
    map((item) => {
      return this.ratingsService.formGroup(item);
    })
  );

  constructor(
    private route: ActivatedRoute,
    private apiService: RatingService,
    private ratingsService: RatingsService,
    private collectionService: CollectionService
  ) {}

  save(formGroup: FormGroup) {
    const formValue = formGroup.value;
    if (formValue.id) {
      this.apiService.update(formValue).subscribe();
    } else {
      this.apiService.add(formValue).subscribe();
    }

    formGroup.reset(formValue);
  }
}
