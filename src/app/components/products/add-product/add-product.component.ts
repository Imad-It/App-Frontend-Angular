
import { HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  selectedFiles: any;
  currentFileUpload: any;
  progress: number;
  timestamp: number = 0;
  productFormGroup: FormGroup;

  constructor(private catService: CatService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      photo: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
  }

  saveProduct() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    let product: Product = <Product>this.productFormGroup.value;
    this.catService.saveProduct(this.currentFileUpload, product).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.timestamp = Date.now();
        }
      }, err => {
        alert('Upload failed !' + err);
      }
    )

    this.selectedFiles = undefined;
  }

}

