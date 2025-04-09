import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form!: FormGroup; // using "!" to tell TS it'll be initialized in ngOnInit

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Form submitted:\n' + JSON.stringify(this.form.value, null, 2));
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
