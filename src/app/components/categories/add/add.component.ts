
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  categoryFormGroup: FormGroup;

  errorMessage: any;

  constructor(private catService: CatService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.categoryFormGroup = this.fb.group({
      name: ['', Validators.required]
    });
  }

  saveCategory() {
    if (this.categoryFormGroup.value.name.trim() !== '') {
      this.catService.saveCategory(this.categoryFormGroup.value).subscribe(() => {
        this.router.navigateByUrl('/categories');
      }, err => {
        this.errorMessage = err.error.message;
      });
    } else {
      this.errorMessage = "Enter name of Category !"
    }
  }
}

