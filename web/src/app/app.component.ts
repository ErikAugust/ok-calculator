import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * @class AppComponent
 * @author Erik August Johnson <erik@erikaugust.com>
 */
export class AppComponent {
  dynamicForm: FormGroup;
  pendingAmount = 0;
  calculated = false;
  summary: Object;

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  /**
   * On initialize create form and add an initial item
   */
  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      expenses: new FormArray([])
    });
    this.e.push(this.formBuilder.group({
      name: ['', Validators.required],
      amount:[0, Validators.required]
    }));
  }

  get f() { return this.dynamicForm.controls; }
  get e() { return this.f.expenses as FormArray; }

  addExpense() {
    this.e.push(this.formBuilder.group({
      name: ['', Validators.required],
      amount:[0, Validators.required]
    }));
  }

  removeExpense(index) {
    const amount = this.e.value[index].amount;
    this.pendingAmount -= parseFloat(amount);
    this.e.removeAt(index);
  }

  /**
   * Recalculates the pending amount on change
   * @param event
   */
  onChangeAmount(event) {
    this.pendingAmount += parseFloat(event.target.value);
  }

  /**
   * Submits form via the API service, passing the form array
   */
  async onSubmit() {
    if (this.e.length > 1 && this.dynamicForm.valid) {
      try {
        this.summary = await this.api.postPayouts(this.e);
        this.calculated = true;
        console.log(this.summary);
      } catch (error) {
        console.log(error);
        // Show alert:
      }
    }
  }
}
