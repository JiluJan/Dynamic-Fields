import { Component, OnInit } from "@angular/core";
import { OthersService } from "../others.service";
// import permissionsJSON from 'assets/permissions.json';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface Permission {
  id: number;
  fieldname: string;
  code: string;
  isActive: boolean;
  isMandatory: boolean;
}
@Component({
  selector: "app-dynamic-fields",
  templateUrl: "./dynamic-fields.component.html",
  styleUrls: ["./dynamic-fields.component.scss"],
})
export class DynamicFieldsComponent implements OnInit {
  permissions: any[];
  dynamicFieldForm: FormGroup;
  Permissions: Permission[] = [];
  isActivepermissions: any;
  payLoad: string;
  genders = ["Male", "Female"];
  countries: any = [
    {
      full: "Great Britain",
      short: "GB",
    },
    {
      full: "United States",
      short: "US",
    },
    {
      full: "Canada",
      short: "CA",
    },
  ];
  active: any;
  isMandatory: any;

  constructor(
    private permissionService: OthersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getData();
    this.dynamicFieldForm = this.formBuilder.group({
      firstname: [""],
      middlename: [""],
      lastname: [""],
      mobileNum: [""],
      address1: [""],
      address2: [""],
      address3: [""],
      gender: [""],
      dateofBirth: [""],
      city: [""],
      state: [""],
      country: [""],
      qualification: [""],
      yearOfPassing: [""],
      designation: [""],
      residenceType: [""],
      countryOfResidence: [""],
      idType: [""],
      expiryDate: [""],
      placeOfBirth: [""],
      nationality: [""],
      occupationType: [""],
      idNumber: [""],
      zipCode: [""],
      emailid: [""],
      alternateMob: [""],
      building: [""],
      street: [""],
      locality: [""],
      cifNumber: [""],
      applicantTotalIncome: [""],
      applicantTotalExpense: [""],
      employmentType: [""],
      employmentCategory: [""],
      employeeNumber: [""],
      officeName: [""],
      employmentStartDate: [""],
      employmentEndDate: [""],
      salary: [""],
      interestIncome: [""],
      bonus: [""],
      cashGifts: [""],
      business: [""],
      pension: [""],
      monthlyIncomeRentals: [""],
      monthlyIncomeOthers: [""],
      monthlyIncomeTotal: [""],
      savingDeposits: [""],
      properties: [""],
      assetTotal: [""],
      fixedDeposits: [""],
    });

  }
  getData() {
    this.permissionService.getJSON().subscribe(
      (datas: any[]) => {
        this.Permissions = datas;
        console.log("this.permissions ", this.Permissions);
        this.isActivepermissions = this.Permissions.filter(
          (isActivetrue) => isActivetrue.isActive === true
        );
        this.isActivepermissions.forEach((element) => {
          if (element.isMandatory) {
            this.dynamicFieldForm.controls[`${element.fieldName}`]?.setValidators([Validators.required]);
            this.dynamicFieldForm.controls[`${element.fieldName}`]?.updateValueAndValidity();
          }
        });
      },
      (error) => console.log(error)
    );
  }

  isActive(id) {
    this.isActivepermissions = this.Permissions.filter(
      (isActivetrue) => isActivetrue.isActive === true
    );
    const isActiveData = this.isActivepermissions.find(
      (item) => item.code == id
    );
    return isActiveData ? isActiveData.isActive : false;
  }
  onSubmit() {
    console.log(this.dynamicFieldForm);
    this.payLoad = JSON.stringify(this.dynamicFieldForm.getRawValue());
  }
}
