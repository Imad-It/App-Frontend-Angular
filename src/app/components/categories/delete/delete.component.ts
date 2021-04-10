import { CatService } from '../../../services/cat.service';
import { Category } from '../../../models/category';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  category: Category = null;

  constructor(private catService: CatService, private router: Router) {
    this.category = <Category>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    //this.category = history.state;
  }

  delete(catId: number) {
    this.catService.deleteCategory(catId).subscribe(() => {
      this.router.navigateByUrl('/categories');
    });
  }

  cancel() {
    this.router.navigateByUrl('/categories');
  }

}

