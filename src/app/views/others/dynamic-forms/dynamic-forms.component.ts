import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";


@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  styleUrls: ["./dynamic-forms.component.scss"],
})
export class DynamicFormsComponent {
  genders = ["Male", "Female"];
  countries: any = [
    {
      full: "Great Britain",
      short: "GB"
    },
    {
      full: "United States",
      short: "US"
    },
    {
      full: "Canada",
      short: "CA"
    }
  ];
  permissionForm: FormGroup;
  payLoad = "";
  permissions: any;
  master = {
    jilu : {
      field1: true,
      field2: false,
      field3: true,
      field4: true,
      field5: true,
      field6: false,
      field7: true,
      field8: false,
    },
    jan : {
      field1: true,
      field2: true,
      field3: true,
      field4: true,
      field5: true,
      field6: true,
      field7: true,
      field8: true,
    },
    ravi: {
      field1: false,
      field2: false,
      field3: true,
      field4: true,
      field5: true,
      field6: false,
      field7: true,
      field8: false,
    },
    joel: {
      field1: true,
      field2: false,
      field3: false,
      field4: true,
      field5: true,
      field6: true,
      field7: true,
      field8: false,
    },
    default: {
      field1: true,
      field2: false,
      field3: true,
      field4: true,
      field5: true,
      field6: false,
      field7: true,
      field8: false,
    }
  }
  userID: string;

  ngOnInit(): void {
    this.userID = localStorage.getItem("userId");
    if(this.userID === "jilu@gmail.com" ){
      this.permissions = this.master.jilu
    }
    else if(this.userID === "ravi@gmail.com" ){
      this.permissions = this.master.ravi
    }
    else if(this.userID === "joel@gmail.com" ){
      this.permissions = this.master.joel
    }
    else if(this.userID === "jan@gmail.com" ){
      this.permissions = this.master.jan
    }
     
    //  ?this.master.jilu:default
    this.permissionForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl("", Validators.required),
        middleName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
        mobileNum : new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        gender: new FormControl(""),
        address : new FormControl(""),
        country : new FormControl(""),
      }),
    });

   
   
    console.log(this.permissions);
    
  }
  onSubmit() {
    console.log(this.permissionForm);
    this.payLoad = JSON.stringify(this.permissionForm.getRawValue());
  }
}
