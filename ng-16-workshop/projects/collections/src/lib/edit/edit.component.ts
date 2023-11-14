import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Collection, CollectionService } from '@slides/api';
import { map, of, switchMap } from 'rxjs';
import { EditKpiComponent } from './edit-kpi/edit-kpi.component';

@Component({
  selector: 'col-edit-model',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, EditKpiComponent],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export default class EditModelComponent {
  public form$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      if (!id || id === '-') {
        const empty: Collection = {
          name: '',
        };
        return of(empty);
      }
      return this.apiService.get(id);
    }),
    map((item) => {
      return this.fb.group({
        name: item.name,
        description: item.description,
        id: item.id,
        kpis: this.fb.array((item.kpis ?? []).map((kpi) => this.fb.group(kpi))),
      });
    })
  );

  constructor(
    private fb: FormBuilder,
    private apiService: CollectionService,
    private route: ActivatedRoute
  ) {}

  public async save(formGroup: AbstractControl) {
    const formValue = formGroup.value;
    if (formValue.id) {
      this.apiService.update(formValue).subscribe();
    } else {
      this.apiService.add(formValue).subscribe();
    }

    formGroup.reset(formValue);
  }
}