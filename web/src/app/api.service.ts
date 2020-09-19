import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
/**
 * @class ApiService
 * @author Erik August Johnson <erik@erikaugust.com>
 */
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Makes request to POST /payouts
   * @param {FormArray} expensesForm
   */
  public postPayouts(expensesForm: FormArray): Promise<object> {
    // Cast FormArray into plain Array:
    const expenses = [];
    for (let i = 0; i < expensesForm.length; i++) {
      const element = expensesForm.at(i);
      expenses.push(element.value);
    }

    // Make HTTP POST to /payouts endpoint:
    return this.http.post('http://localhost:3000/payouts', { expenses: expenses }).toPromise();
  }
}
