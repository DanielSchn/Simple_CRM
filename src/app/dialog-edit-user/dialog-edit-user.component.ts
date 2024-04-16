import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  loading = false;
  user: User = new User();
  userId: string = '';
  birthDate: Date = new Date();
  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  saveUser() {
    this.loading = true;
    const docRef = doc(this.firestore, 'users', this.userId);
    const userData = this.user.toJSON();
    delete userData.customUserId;
    updateDoc(docRef, userData)
      .then((result) => {
        console.log('success', result);
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('ERROR', error)
      });
  }
}
