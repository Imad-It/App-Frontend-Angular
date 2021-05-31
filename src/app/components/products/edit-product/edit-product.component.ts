import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  currentCatId: number;
  productFormGroup?: FormGroup;

  constructor(private catService: CatService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.product = <Product>router.getCurrentNavigation().extras.state;
    this.currentCatId = +route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required],
    });
  }

  onUpdate() {
    this.productFormGroup.value['id'] = this.product.id;
    this.catService.updateProduct(this.currentCatId, this.productFormGroup.value).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
