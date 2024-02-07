import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../../navigation/header/header.component";
import { FooterComponent } from "../../navigation/footer/footer.component";
import { AlertComponent } from "../../utilities/alert/alert.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss',
    imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule, HeaderComponent, FooterComponent, AlertComponent]
})
export class ContactUsComponent {

  email:any = "Info@therdenterprises.com"
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  showSuccessAlert() {
    this.alertType = 'success';
    this.alertMessage = 'The email has been sent!';
    this.showAlert = true;
  }

  showErrorAlert() {
    this.alertType = 'error';
    this.alertMessage = 'Operation failed. Please try again.';
    this.showAlert = true;
  }

  invalidFormError() {
    this.alertType = 'error';
    this.alertMessage = 'Form is invalid.';
    this.showAlert = true;
  }
  
  onSubmit() {
    console.log("hey");
    if (this.form.valid) {
      console.log(this.form.value); // Log form values to console
      this.http.post<any>('https://futureinterio.onrender.com/leads', this.form.value)
        .subscribe(
          response => {
            console.log('Success:', response);
            this.showSuccessAlert();
          },
          error => {
            console.error('Error:', error);
            this.showErrorAlert();
          }
        );
    } else {
      console.log('Form is invalid');
      this.invalidFormError();
    }
  }
}
