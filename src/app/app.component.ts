import { Component, VERSION } from '@angular/core';
import { UserprofileService } from './userprofile.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserprofileService]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private UserprofileService: UserprofileService) {}
  ngOnInit() {
    this.getDataServer();
  }
  getDataServer() {
    this.UserprofileService.getproducts().subscribe((data) =>
      console.log('data=', data)
    );
  }
}
