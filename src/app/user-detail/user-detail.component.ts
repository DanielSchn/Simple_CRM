import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  id: string = '';
  userData: User = new User();
  private firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getSingleUser();
  }

  getSingleUser() {
    const docRef = doc(this.firestore, 'users', this.id);
    return onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        const user = new User(userData);
        user.customUserId = docSnapshot.id;
        this.userData = user;
        console.log(this.userData);
      } else {
        console.error('Not exists');
      }
    }, (error) => {
      console.error('Error', error);
    });


    // this.userService.getSingleDocRef(this.id).then(data => {
    //   this.userData = new User(data);
    //   console.log(this.userData);
    // }).catch(error => {
    //   console.error('Error fetching User', error);
    // });
  }


  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.userData.toJSON());
    dialog.componentInstance.userId = this.id;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.userData.toJSON());
    dialog.componentInstance.userId = this.id;
  }

}
