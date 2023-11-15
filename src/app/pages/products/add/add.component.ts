import {Component, inject} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Products} from 'src/app/interface/products';
import {ProductsFacade} from 'src/app/state/facades/products.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  private dateNow = new Date();
  private dateLast = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  form: FormGroup = this.fb.group({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
    date_release: new FormControl(this.dateNow),
    date_revision: new FormControl({value: this.dateLast, disabled: true}),
  });

  private readonly productsFacade = inject(ProductsFacade);

  allProducts$: Observable<Products[]> = this.productsFacade.allProducts$;

  constructor(private fb: FormBuilder, private router: Router) {}

  create() {
    const product = this.form.getRawValue();
    this.productsFacade.saveProduct(product);
    this.router.navigateByUrl('/products');
  }
}
