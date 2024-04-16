import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../firebase-services/user.service';
import { User } from '../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  id: string = '';
  userData: User = new User();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getSingleUser();
  }

  getSingleUser() {
    this.userService.getSingleDocRef(this.id).then(data => {
      this.userData = new User(data);
      console.log(this.userData);
    }).catch(error => {
      console.error('Error fetching User', error);
    });
  }


  editUser() {
    this.dialog.open(DialogEditUserComponent);
  }

  editAddress() {
    this.dialog.open(DialogEditAddressComponent);
  }

}
