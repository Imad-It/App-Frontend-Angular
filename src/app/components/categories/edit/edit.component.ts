import { CatService } from '../../../services/cat.service';
import { Category } from '../../../models/category';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categoryFormGroup?: FormGroup;
  category: Category = null;


  constructor(private catService: CatService, private router: Router, private fb: FormBuilder) {
    this.category = <Category>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.categoryFormGroup = this.fb.group({
      id: [this.category?.id],
      name: [this.category.name, Validators.required]
    });
  }

  onUpdate() {
    this.catService.updateCategory(this.categoryFormGroup.value).subscribe(() => {
      this.router.navigateByUrl('/categories');
    });
  }

  cancel() {
    this.router.navigateByUrl('/categories');
  }

}

