import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  loading = false;
  user: User = new User();
  userId: string = '';
  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}


  saveUser() {}
}
